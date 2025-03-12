import { useEffect, useState } from "react";
import CardProgram from "../components/CardProgram";
import { getProgram } from "../service/program";
import PrivateCard from "../components/PrivateCard";
import Loading from "../components/Loading";

const HomePage = () => {
  const [programPublic, setProgramPublic] = useState([]);
  const [activeLocationA, setActiveLocationA] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getProgram(`?location=${activeLocationA}`);
      if (data.code === 200) {
        const programPubic = data.data.filter((item) => item.type === "public");
        setProgramPublic(programPubic);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [activeLocationA]);
  return (
    <div className="padding-layout text-white text-[18px] font-medium">
      <div className="lg:py-10 md:py-6 py-4">
        <p className="md:text-[26px] text-[22px] md:mb-4 mb-2">
          Lịch tập tham khảo
        </p>
        <div className="flex mb-2 gap-2">
          <p
            className={`px-2 pb-1 uppercase font-normal text-[20px] cursor-pointer ${activeLocationA === "home" ? "border-b border-b-white/70" : " text-white/70"}`}
            onClick={() => setActiveLocationA("home")}
          >
            Tại nhà
          </p>
          <p
            className={`px-2 pb-1 uppercase font-normal text-[20px] cursor-pointer ${activeLocationA === "gym" ? "border-b border-b-white/70" : " text-white/70"}`}
            onClick={() => setActiveLocationA("gym")}
          >
            Gym
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 lg:gap-5 grid-cols-1 gap-4">
          {isLoading ? (
            <Loading />
          ) : programPublic.length > 0 ? (
            programPublic.map((item) => (
              <CardProgram key={item._id} program={item} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              Không có chương trình nào.
            </p>
          )}
        </div>
      </div>
      <PrivateCard />
    </div>
  );
};

export default HomePage;
