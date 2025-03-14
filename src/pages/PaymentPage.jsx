import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentPage = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-md mx-auto backdrop-blur-md bg-white/10  shadow-xl rounded-2xl lg:p-6 p-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Đăng ký giáo án</h2>
        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dd7rhfqp8/image/upload/v1741591833/337271034_236251512203873_8496540609470926824_n_lurhou.jpg"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <p className="mt-2 text-lg font-semibold">Danfitness - Lịch tập</p>
        </div>
        <div className="mt-4 md:p-4 p-2 bg-white/10 rounded-lg shadow-md">
          <p className="font-semibold  lg:text-[20px] md:text-[18px] text-16px">
            Giáo án tập luyện 8 tuần -{" "}
            <span className="text-yellow-400 font-bold">Chỉ 100K</span>
          </p>
        </div>
        <p className="mt-4 text-gray-300">
          Liên hệ ngay với Fanpage để biết thêm thông tin chi tiết
        </p>
        <div className="mt-6">
          <a
            href="https://m.me/100504566338813"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 transition"
          >
            <FontAwesomeIcon icon={faComments} />
            Liên hệ ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
