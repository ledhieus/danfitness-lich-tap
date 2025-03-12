import { useEffect, useState } from "react";
import { getMe, postLogout, patchChangePassword } from "../service/user";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { getDetailProgramPrivate } from "../service/program";
import CardProgram from "../components/CardProgram";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/checkLogin";
import Loading from "../components/Loading";
const AccountPage = () => {
  const [infoUser, setInfoUser] = useState(null);
  const [programPrivate, setProgramPrivate] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getMe();
      if (data.code === 200) {
        setInfoUser(data.user);
      }
      else{
        navigate("/", { replace: true });
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [navigate]);
  useEffect(() => {
    if (infoUser === null) return;
    const fetchApi = async () => {
      const data = await getDetailProgramPrivate(infoUser.permission);
      if (data) {
        setProgramPrivate(data);
      }
    };
    fetchApi();
  }, [infoUser]);
  const handleSubmit = async (formData) => {
    const res = await patchChangePassword(formData);
    if (res.code === 200) {
      message.success(res.message);
      navigate("/dang-nhap");
    } else {
      message.error(res.message);
    }
  };
  const handleLogout = async () => {
    const res = await postLogout();
    if (res.code === 200) {
      dispatch(logout());
      navigate("/");
      message.success(res.message);
    }
  };
  return (
    <div className="padding-layout pt-10">
      {isLoading ? (
        <Loading />
      ) : (
        infoUser && (
          <div>
            <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl w-full max-w-md m-auto">
              <div className="flex gap-1">
                <p
                  className={`px-2 pb-1 uppercase font-normal text-[16px] cursor-pointer ${activeTab === "info" ? "border-b border-b-white/70" : "text-white/70"}`}
                  onClick={() => setActiveTab("info")}
                >
                  Thông tin
                </p>
                <p
                  className={`px-2 pb-1 uppercase font-normal text-[16px] cursor-pointer ${activeTab === "change-pw" ? "border-b border-b-white/70" : "text-white/70"}`}
                  onClick={() => setActiveTab("change-pw")}
                >
                  Đổi Mật khẩu
                </p>
              </div>
              <div className="p-2 rounded-xl w-full max-w-md">
                {activeTab === "info" ? (
                  <>
                    <div className="">
                      <h2 className="text-xl font-bold">{infoUser.name}</h2>
                      <p className="text-gray-300">{infoUser.email}</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Tạo ngày:{" "}
                        {new Date(infoUser.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Hết hạn:{" "}
                        {new Date(
                          new Date(infoUser.createdAt).setDate(
                            new Date(infoUser.createdAt).getDate() + 120
                          )
                        ).toLocaleDateString()}
                      </p>

                      <Button
                        type="primary"
                        danger
                        className="mt-5 w-fit"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-white">
                      <Form
                        layout="vertical" // Giúp label nằm trên input, tránh bị lệch
                        className="space-y-4" // Thêm khoảng cách giữa các dòng
                        onFinish={handleSubmit}
                      >
                        <Form.Item
                          label={
                            <span className="text-white">Mật khẩu cũ</span>
                          }
                          name="oldPassword"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập mật khẩu cũ",
                            },
                          ]}
                        >
                          <Input.Password className="w-full" />
                        </Form.Item>

                        <Form.Item
                          label={
                            <span className="text-white">Mật khẩu mới</span>
                          }
                          name="newPassword"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập mật khẩu mới",
                            },
                            {
                              min: 8,
                              message: "Mật khẩu phải có ít nhất 8 ký tự!",
                            },
                          ]}
                        >
                          <Input.Password className="w-full" />
                        </Form.Item>

                        <Form.Item
                          label={
                            <span className="text-white">
                              Xác nhận mật khẩu mới
                            </span>
                          }
                          name="confirmPassword"
                          dependencies={["newPassword"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng xác nhận mật khẩu mới",
                            },
                            {
                              min: 8,
                              message: "Mật khẩu phải có ít nhất 8 ký tự!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("newPassword") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error("Mật khẩu không khớp")
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password className="w-full" />
                        </Form.Item>

                        <div className="flex justify-center">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="w-fit"
                          >
                            Cập nhật mật khẩu
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </>
                )}
              </div>
            </div>
            <p className="text-[26px] mt-4 mb-2 text-white/80">Giáo án của bạn</p>
            {programPrivate && (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 lg:gap-5 gap-0">
                <CardProgram program={programPrivate} />
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default AccountPage;
