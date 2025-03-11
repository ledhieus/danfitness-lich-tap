import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Kiểm tra xem đã bấm Start chưa

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (t) => {
    const minutes = Math.floor(t / 600); // 1 phút = 600 lần (mỗi lần 100ms)
    const seconds = Math.floor((t % 600) / 10); // Lấy số giây
    const tenths = t % 10; // Lấy phần tích tắc (1/10 giây)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${tenths}`;
  };
  return (
    <div className="sticky top-14 grid grid-cols-3 md:text-[18px] text-[15px] font-bold md:gap-4 gap-2 md:py-4 py-2">
      {/* Nút Đặt lại */}
      <div
        className="bg-[#3d5a80] text-center py-4 uppercase rounded-lg cursor-pointer"
        onClick={() => {
          setTime(0);
          setIsRunning(false);
          setHasStarted(false);
        }}
      >
        Đặt lại
      </div>

      {/* Nút Start hoặc Thời gian */}
      <div
        className="bg-[#3d5a80] text-center py-4 uppercase rounded-lg cursor-pointer"
        onClick={() => {
          setIsRunning(true);
          setHasStarted(true);
        }}
      >
        {hasStarted ? formatTime(time) : "Start"}
      </div>

      {/* Nút Dừng / Tiếp tục */}
      <div
        className="bg-[#3d5a80] text-center py-4 uppercase rounded-lg cursor-pointer"
        onClick={() => setIsRunning((prev) => !prev)}
      >
        {isRunning ? "Dừng" : hasStarted ? "Tiếp tục" : "Dừng"}
      </div>
    </div>
  );
};

export default Time;
