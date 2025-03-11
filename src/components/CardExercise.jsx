import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useModelContext } from "../context/ModelProvider";

const CardExercise = ({ exercises }) => {
  const [oneRepMax, setOneRepMax] = useState(90);
  const handleChange = (e) => {
    setOneRepMax(e.target.value);
  };
  const { setisShowing, setContent } = useModelContext();
  return (
    <div className=" border-b-[1px] border-b-white/30 py-4">
      <div className="flex items-center justify-between text-white/80">
        <div>
          <p className="md:text-[20px] text-[16px] font-bold mb-1 text-white uppercase">
            {exercises.name}
          </p>
          <div className="text-[14px]">
            <p>
              Nhóm cơ: <span>{exercises.target}</span>
            </p>
            <p>
              Dụng cụ: <span>{exercises.equipment}</span>
            </p>
          </div>
        </div>
        <div
          className="flex gap-2 items-center underline cursor-pointer md:text-[16px] text-[14px]"
          onClick={() => {
            setisShowing(true), setContent(<img src={exercises.image} />);
          }}
        >
          <FontAwesomeIcon icon={faEye} />
          <p>Xem chi tiết</p>
        </div>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th></th>
            <th className="text-left">Loại</th>
            <th>Khối lượng</th>
            <th>Reps</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="">
          {exercises.sets.map((item, index) => (
            <tr key={item._id} className="leading-8">
              <td>
                <span className="bg-[#8EA0B8BF] text-white/75 px-2 rounded-full text-[14px] py-0\.5">
                  {index + 1}
                </span>
              </td>
              <td>{item.type === "warm-up" ? "Khởi động" : "Bài chính"}</td>
              <td
                className={`text-center ${item.weight === 0 ? "text-white/30" : ""}`}
              >
                {(item.weight * oneRepMax) / 100} kg{" "}
                <span>{"(" + item.weight + "%)"}</span>
              </td>
              <td
                className={`text-center ${item.reps === 0 ? "text-white/30" : ""}`}
              >
                {item.reps}
              </td>
              <td
                className={`text-center ${item.time === 0 ? "text-white/30" : ""}`}
              >
                {item.time}s
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {exercises.sets[0]?.weight !== 0 && (
        <>
          <div className="bg-white/10 p-2 mt-4 rounded-full">
            <p className="text-sm text-center text-white/80">
              <strong>One Rep Max:</strong>{" "}
              <input
                type="number"
                className="ml-2 bg-transparent border-b border-white/50 text-white/90 w-20 text-center appearance-none"
                value={oneRepMax}
                onChange={handleChange}
              />{" "}
              kg
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardExercise;
