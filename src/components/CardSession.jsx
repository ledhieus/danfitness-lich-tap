import { Link } from "react-router-dom";

const CardSession = ({ session}) => {
  return (
    <Link
      to={`/chi-tiet/buoi-tap/${session._id}`}
      className="bg-[#313B3C]/50 rounded-xl md:px-5 px-2 py-2 transition-transform duration-300 hover:scale-105"
    >
      <div className="border-b-[1px] border-b-white/25 py-2">
        <p className="text-[20px] font-bold">{session.name}</p>
        <p className="text-[13px] font-medium">
          <span className="text-white/50">Nhóm cơ tác động - </span>
          {session.target}
        </p>
      </div>
      <div className="flex justify-between items-center md:px-6 px-1 py-4 text-white/75">
        <div className="text-center">
          <p className="font-bold md:text-[22px] text-[18px]">{session.exercises}</p>
          <p className="md:text-[14px] text-[13px] uppercase font-bold">Bài tập</p>
        </div>
        <div className="text-center">
          <p className="font-bold md:text-[22px] text-[18px]">{session.time}</p>
          <p className="md:text-[14px] text-[13px] uppercase font-bold">Phút</p>
        </div>
        <div className="text-center">
          <p className="font-bold md:text-[22px] text-[18px]">0 kg</p>
          <p className="md:text-[14px] text-[13px] uppercase font-bold">Tổng trọng lượng</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSession;
