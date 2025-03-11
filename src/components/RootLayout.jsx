import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { getMe, postLogout } from "../service/user";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/checkLogin";
import ScrollToTop from "../../utils/scrollToTop";

const RootLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
      const fetchApi = async () => {
        try {
          const data = await getMe();
  
          if (data.code === 200) {
            dispatch(login())
          } else if (data.code === 400) {
            alert(
              "Tài khoản đã đăng nhập ở một nơi khác. Vui lòng đăng nhập lại"
            );
  
            await postLogout(); // Gọi API logout để xóa sessionToken
            dispatch(logout()); // Xóa user ở state
            navigate("/dang-nhap"); // Điều hướng về trang login
          }
        } catch (error) {
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        }
      };
      fetchApi();
    }, [navigate, dispatch]);
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <div className="bg-gradient-to-t from-[#0e1213] to-[#252f35] min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
