import { useEffect, useState } from "react";
import { getProgram } from "../service/program";
import CardProgram from "./CardProgram";
import Loading from "./Loading";

const PrivateCard = () => {
  const [program, setProgram] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeLocation, setActiveLocation] = useState("home");
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getProgram(`?type=private&location=${activeLocation}`);
      if (data.code === 200) {
        setProgram(data.data);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [activeLocation]);
  return (
    <div>
      <div className="lg:py-10 md:py-6 py-4">
        <p className="md:text-[26px] text-[22px] md:mb-4 mb-2">Giáo án</p>
        <div className="flex mb-2 gap-2">
          <p
            className={`px-2 pb-1 uppercase font-normal text-[20px] cursor-pointer ${activeLocation === "home" ? "border-b border-b-white/70" : " text-white/70"}`}
            onClick={() => setActiveLocation("home")}
          >
            Tại nhà
          </p>
          <p
            className={`px-2 pb-1 uppercase font-normal text-[20px] cursor-pointer ${activeLocation === "gym" ? "border-b border-b-white/70" : " text-white/70"}`}
            onClick={() => setActiveLocation("gym")}
          >
            Gym
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 lg:gap-5 grid-cols-1 gap-0">
          {isLoading ? (
            <Loading />
          ) : program.length > 0 ? (
            program.map((item) => <CardProgram key={item._id} program={item} />)
          ) : (
            <p>Chưa có dữ liệu</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateCard;
