import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardSession from "../components/CardSession";
import {
  faAngleLeft,
  faGlobe,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getDetailProgram } from "../service/program";
import { getSessionById } from "../service/session";
import { useNavigate, useParams } from "react-router-dom";

const DetailProgram = () => {
  const navigate = useNavigate()
  const [session, setSession] = useState([]);
  const [sessionOriginal, setSessionOriginal] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const [infoProgram, setInfoProgram] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getDetailProgram(`/${slug}`);
      if (data) {
        setInfoProgram(data);
        const weekArray = Array.from(
          { length: data.durationWeeks },
          (_, index) => `Tuần ${index + 1}`
        );
        setWeeks(weekArray);
      }
    };
    fetchApi();
  }, [slug]);
  useEffect(() => {
    if (infoProgram === null) return;
    const fetchApi = async () => {
      const data = await getSessionById(`/${infoProgram._id}`);
      if (data.code === 200) {
        setSession(data.data);
        setSessionOriginal(data.data);
      }
    };
    fetchApi();
    
  }, [infoProgram]);
  const handleFilter = (event)=> {
    const value = event.target.value
    const filteredData = sessionOriginal.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setSession(filteredData)
  }
  return (
    <div className="padding-layout text-white/90 text-[18px]">
      <div className="mx-4 py-8">
        <div className="flex gap-2 items-center mb-5 cursor-pointer" onClick={()=> navigate(-1)}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Trở lại</p>
        </div>
        {infoProgram && (
          <p className="font-bold text-[25px] py-4">{infoProgram.title}</p>
        )}
        <div className="grid grid-cols-2 gap-4 text-[#acc2ef]">
          <div className="text-center bg-[#3D5A80] rounded-md py-1">
            {infoProgram && infoProgram.level === "beginner" && (
              <p className="font-bold md:text-[20px] text-[16px]">Dưới 1 năm</p>
            )}
            <p className="text-[14px]">Trình độ</p>
          </div>
          <div className="bg-[#3D5A80] text-center py-1 rounded-md">
            {infoProgram && infoProgram.type === "public" ? (
              <>
                <div className="flex items-center  rounded-md justify-center font-bold md:text-[20px] text-[16px] gap-2">
                  <FontAwesomeIcon icon={faGlobe} />
                  <p>Công Khai</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center  rounded-md justify-center font-bold md:text-[20px] text-[16px] gap-2">
                  <FontAwesomeIcon icon={faLock} />
                  <p>Giới hạn</p>
                </div>
              </>
            )}
            <p className="text-[14px]">Chế độ</p>
          </div>
        </div>
        <select className="bg-[#313B3C]/50 w-full text-center py-2 font-bold text-[16px] text-white/50 border border-[#acc2ef]/50 rounded-lg mt-4"
          onChange={handleFilter}
        >
          <option>Lọc</option>
          {weeks.map((week, index) => (
            <option key={index} value={week}>
              {week}
            </option>
          ))}
        </select>
        <div className="flex flex-col space-y-5 mt-4">
          {session.length > 0 &&
            session.map((item) => (
              <CardSession key={item._id} session={item}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProgram;
