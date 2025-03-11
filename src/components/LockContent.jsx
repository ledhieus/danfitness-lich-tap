import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const LockContent = () => {
  return (
    <div className="flex flex-col items-center backdrop-blur-md bg-white/10  text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      {/* Icon khóa */}
      <div className="flex justify-center mb-4">
        <FontAwesomeIcon icon={faLock} className="text-6xl text-white/70" />
      </div>

      {/* Nội dung thông báo */}
      <div className="text-center">
        <p className="text-lg font-semibold">Nội dung này không công khai</p>
        <p className="text-gray-300 mt-1">
          Bạn cần phải đăng ký để xem nội dung này
        </p>
        <p className="text-yellow-400 font-bold mt-2">
          Chỉ với <span className="text-xl">149K</span> – giáo án 8 tuần
        </p>

        {/* Nút đăng ký */}
        <Link to={"/dang-ky-giao-an"}>
          <button className="mt-4 bg-white text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition">
            Mở tài khoản
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LockContent;
