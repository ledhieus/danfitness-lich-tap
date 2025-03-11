import { Form, Input, message } from "antd";
import { postLogin } from "../service/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/checkLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (formData) => {
    const res = await postLogin(formData);
    if (res.code === 200) {
      dispatch(login());
      navigate("/");
      message.success(res.message);
    } else {
      message.error(res.message);
    }
  };
  return (
    <div className="padding-layout">
      <div className="flex items-center justify-center">
        <div className="h-screen flex items-center justify-center">
          <div className="backdrop-blur-md bg-white/10 p-5 rounded-lg border border-white/20 w-[300px]">
            <p className="text-white/90 uppercase font-medium text-[22px] text-center mb-4">
              Đăng nhập
            </p>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-3"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="w-full !bg-white/10 text-white p-2 rounded-md border !border-white/10 focus:outline-none !focus:border-white/30 transition-colors text-sm"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự!" },
                ]}
              >
                <Input.Password
                  placeholder="Mật khẩu"
                  className="w-full !bg-white/10 text-white p-2 rounded-md border !border-white/10 focus:outline-none !focus:border-white/30 transition-colors text-sm"
                />
              </Form.Item>
              <div className="text-right">
                <p className="text-[12px] underline text-white/70 hover:text-white/90 cursor-pointer">
                  Quên mật khẩu?
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black p-2 rounded-md hover:bg-white/90 transition-colors text-sm font-medium"
              >
                Đăng nhập
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
