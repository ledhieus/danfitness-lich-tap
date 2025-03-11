import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const isLogin = useSelector((state) => state.checkLogin.isLogin);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#c5c5c5] sticky top-0 z-50">
      <div className="padding-layout text-white">
        <div className="flex justify-between items-center text-[16px] font-bold">
          <Link to={"/"}>
            <p className="md:text-[32px] text-[26px]  py-1 italic">
              Danfitness - Lịch tập
            </p>
          </Link>
          <div className="md:flex items-center gap-4 hidden">
            <Link to={"/giao-an"}>
              <p className="py-1 italic hover:text-white/50 cursor-pointer">
                Giáo án
              </p>
            </Link>
            <Link to={"/tinh-tdee"}>
              <p className="py-1 italic hover:text-white/50 cursor-pointer">
                Tính Calo
              </p>
            </Link>
            {isLogin ? (
              <>
                {" "}
                <Link to={"/tai-khoan"}>
                  <p className="py-1 italic hover:text-white/50 cursor-pointer">
                    Tài Khoản
                  </p>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to={"/dang-nhap"}>
                  <p className="py-1 italic hover:text-white/50 cursor-pointer">
                    Đăng nhập
                  </p>
                </Link>
              </>
            )}

            {/* <FontAwesomeIcon icon={faUser} /> */}
          </div>
          <div
            className="md:hidden block text-[20px]"
            onClick={() => showDrawer()}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <DrawerMenu open={open} onClose={onClose} isLogin={isLogin}/>
    </div>
  );
};

export default Header;
