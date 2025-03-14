import { useEffect, useState } from "react";
import CardExercise from "../components/CardExercise";
import Time from "../components/Time";
import { getDetailSession } from "../service/session";
import { useNavigate, useParams } from "react-router-dom";
import { getExcercise } from "../service/excercise";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LockContent from "../components/LockContent";
import Banner from "../components/Banner";
const DetailSession = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [infoSession, setInfoSession] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [isLockPage, setIsLockPage] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getDetailSession(`/${id}`);
      if (data) {
        setInfoSession(data);
      }else {
        navigate("/404", { replace: true });
        return;
      }
    };
    fetchApi();
  }, [id, navigate]);
  useEffect(() => {
    if (infoSession === null) return;
    const fetchApi = async () => {
      const data = await getExcercise(`${infoSession._id}`);
      if (data.code === 200) {
        setExercises(data.data);
      } else {
        setIsLockPage(true)
      }
    };
    fetchApi();
  }, [infoSession]);
  return (
    <div className="padding-layout text-white">
      <div className="pt-4">
        <Banner />
      </div>
      <div className="py-4">
        <div
          className="flex gap-2 items-center lg:mb-5 mb-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Trở lại</p>
        </div>
        <p className="text-[24px] font-medium">
          {infoSession !== null && infoSession.name}
        </p>
        <Time />
        <div>
          {isLockPage ? <><LockContent/></> : exercises === null ? (<>Đang Tải...</>) : (exercises.map((item) => (
              <CardExercise key={item._id} exercises={item} />
            )))}
        </div>
      </div>
    </div>
  );
};

export default DetailSession;
