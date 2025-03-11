import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faCalculator,
  faDumbbell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const DrawerMenu = ({ onClose, open, isLogin }) => {
  return (
    <Drawer
      title={<p className="font-bold text-[20px]">Danfitness - Lịch tập</p>}
      onClose={onClose}
      open={open}
      footer={
        <a href="https://www.facebook.com/profile.php?id=100090592133117" type="blank" className="flex gap-4 items-center text-blue-500">
          <FontAwesomeIcon icon={faFacebook} />
          <p>Liên Hệ Fanpage</p>
        </a>
      }
      styles={{ body: { padding: 0 } }}
      width={"300px"}
    >
      <div className="flex flex-col">
        <Link
          to="/giao-an"
          className="py-4 px-4 uppercase font-medium cursor-pointer border-b border-b-black/10"
        >
          <div className="flex gap-4 items-center" onClick={() => onClose()}>
            <FontAwesomeIcon icon={faDumbbell} />
            <span>Giáo án</span>
          </div>
        </Link>
        <Link
          to="/tinh-tdee"
          className="py-4 px-4 uppercase font-medium cursor-pointer border-b border-b-black/10"
        >
          <div className="flex gap-4 items-center" onClick={() => onClose()}>
            <FontAwesomeIcon icon={faCalculator} />
            <span>Tính Calo</span>
          </div>
        </Link>

        {isLogin ? (
          <Link
            to="/tai-khoan"
            className="py-4 px-4 uppercase font-medium cursor-pointer border-b border-b-black/10"
          >
            <div className="flex gap-4 items-center" onClick={() => onClose()}>
              <FontAwesomeIcon icon={faUser} />
              <span>Tài khoản</span>
            </div>
          </Link>
        ) : (
          <Link
            to="/dang-nhap"
            className="py-4 px-4 uppercase font-medium cursor-pointer border-b border-b-black/10"
            onClick={() => onClose()}
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
