import {
  faComments,
  faDumbbell,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="relative backdrop-blur-lg bg-white/10 md:p-6 p-2 rounded-xl border border-white/20 text-white/80 shadow-xl">
      {/* Nút đóng */}
      <button
        className="absolute top-2 right-2 text-white/60 hover:text-white transition text-lg"
        onClick={() => setIsVisible(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="text-center">
        <div className="flex items-center justify-center gap-3 md:text-[20px] text-[16px] font-extrabold uppercase text-white">
          <p className="">Giáo án cá nhân</p>
          <span className="text-white">-</span>
          <p className="text-yellow-400">200k / 9 tuần</p>
        </div>
        <p className="mt-1 text-white/80 md:text-[16px] text-[14px]">
          Điều bạn nhận được khi đăng ký:
        </p>
      </div>
      <ul className="mt-2 space-y-2 text-white/70 md:text-[16px] text-[13px]">
        <li className="flex items-start gap-3">
          <span className="text-[#5d7bae]">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>{" "}
          Lịch tập được thiết kế riêng cho mỗi cá nhân
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#5d7bae]">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>{" "}
          Thực đơn 1 tuần theo dựa trên mục tiêu
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#5d7bae]">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>{" "}
          Tạo nên một hướng đi cụ thể giúp bạn nhanh đạt được kết quả
        </li>
      </ul>
      <div className="mt-2 md:mt-4">
        <a
          href="https://m.me/100504566338813"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 md:text-[16px] text-[14px] text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 transition"
        >
          <FontAwesomeIcon icon={faComments} />
          Inbox Fanpage để đăng ký
        </a>
      </div>
    </div>
  );
};

export default Banner;
