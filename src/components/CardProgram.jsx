import { Link } from "react-router-dom";

const CardProgram = ({ program }) => {
  return (
    <Link to={`/chi-tiet/${program.slug}`} className="relative h-[150px] rounded-md transition-transform duration-300 hover:scale-105">
      <img
        src={program.image}
        className="h-full w-full object-cover brightness-50 rounded-md"
      />
      <div className="absolute bottom-[20px] left-0 right-0 w-full px-4 text-gray-50">
        <div className="border-b-[1px] border-b-gray-50 py-1 w-full">
          <p className="uppercase md:text-[20px] text-[16px] py-1 w-full truncate">{program.title}</p>
          <div className="flex items-center justify-between text-gray-300">
            <p className="uppercase text-[12px]">
              {program.sessionsPerWeek} buổi/tuần
            </p>
            {program.level === "beginner" && (
              <p className="text-[12px]">Kinh nghiệm: dưới 1 năm</p>
            )}
            {/* {program.level === "beginner" && (
              <p className="text-[12px]">Kinh nghiệm: dưới 1 năm</p>
            )} */}
          </div>
        </div>
        <div className="flex flex-col w-fit items-center">
          <p className="text-[25px]">{program.durationWeeks}</p>
          <p className="uppercase text-[12px] text-gray-300">Tuần</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProgram;
