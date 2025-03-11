import { Button, Input, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Calculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    gender: "male",
    age: "",
    height: "",
    weight: "",
    activity: "1.2",
    goal: "maintain",
    targetWeight: "",
    speed: "normal",
  });
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const calculateTDEE = () => {
    setIsLoading(true);
    const { gender, age, height, weight, activity, goal, targetWeight, speed } =
      formData;
    if (!age || !height || !weight) return;

    const BMR =
      gender === "male"
        ? 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
        : 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;

    const TDEE = BMR * parseFloat(activity);

    let calorieIntake = TDEE;
    let daysToGoal = 0;

    if (goal === "gain" && targetWeight) {
      const weightDiff = targetWeight - weight;
      const calorieSurplus =
        speed === "slow" ? 250 : speed === "normal" ? 500 : 750;
      calorieIntake += calorieSurplus;
      daysToGoal = Math.round((weightDiff * 7700) / calorieSurplus);
    }

    if (goal === "lose" && targetWeight) {
      const weightDiff = weight - targetWeight;
      const calorieDeficit =
        speed === "slow" ? 250 : speed === "normal" ? 500 : 750;
      calorieIntake -= calorieDeficit;
      daysToGoal = Math.round((weightDiff * 7700) / calorieDeficit);
    }

    setResult({ BMR, TDEE, calorieIntake, daysToGoal });
    setIsLoading(false);
  };
  return (
    <div className="padding-layout py-8">
      <div className="max-w-lg mx-auto p-6 shadow-lg rounded-2xl bg-[#313B3C]/50 text-white">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-bold ">Tính TDEE</p>
          <Link
            to={
              "https://www.wheystore.vn/news/tdee-la-gi-1197?srsltid=AfmBOoomowFmB25z7dTmOWcHhVnVg9Wj16luuzdJ2m77OgGltHfeJbg-"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[13px] underline text-white/60">TDEE là gì?</p>
          </Link>
        </div>
        <div className="grid gap-2">
          <div>
            <label className="text-white">Giới tính</label>
            <Select
              className="w-full"
              value={formData.gender}
              onChange={(value) => handleChange("gender", value)}
            >
              <Select.Option value="male">Nam</Select.Option>
              <Select.Option value="female">Nữ</Select.Option>
            </Select>
          </div>
          <div>
            <label className="text-white">Tuổi</label>
            <Input
              name="age"
              type="number"
              placeholder="Tuổi"
              onChange={(e) => handleChange("age", e.target.value)}
            />
          </div>
          <div>
            <label className="text-white">Chiều cao (cm)</label>
            <Input
              name="height"
              type="number"
              placeholder="Chiều cao (cm)"
              onChange={(e) => handleChange("height", e.target.value)}
            />
          </div>
          <div>
            <label className="text-white">Cân nặng (kg)</label>
            <Input
              name="weight"
              type="number"
              placeholder="Cân nặng (kg)"
              onChange={(e) => handleChange("weight", e.target.value)}
            />
          </div>
          <div>
            <label className="text-white">Cường độ tập luyện</label>
            <Select
              className="w-full"
              value={formData.activity}
              onChange={(value) => handleChange("activity", value)}
            >
              <Select.Option value="1.2">Ít vận động</Select.Option>
              <Select.Option value="1.375">Nhẹ (1-3 buổi/tuần)</Select.Option>
              <Select.Option value="1.55">Vừa (3-5 buổi/tuần)</Select.Option>
              <Select.Option value="1.725">Nặng (6-7 buổi/tuần)</Select.Option>
              <Select.Option value="1.9">Rất nặng (VĐV)</Select.Option>
            </Select>
          </div>
          <div>
            <label className="text-white">Mục tiêu</label>
            <Select
              className="w-full"
              value={formData.goal}
              onChange={(value) => handleChange("goal", value)}
            >
              <Select.Option value="maintain">Duy trì cân nặng</Select.Option>
              <Select.Option value="gain">Tăng cân</Select.Option>
              <Select.Option value="lose">Giảm cân</Select.Option>
            </Select>
          </div>
          {(formData.goal === "lose" || formData.goal === "gain") && (
            <>
              <label className="text-white">Cân nặng mục tiêu</label>
              <Input
                name="targetWeight"
                type="number"
                placeholder="Cân nặng mục tiêu"
                onChange={(e) => handleChange("targetWeight", e.target.value)}
              />
              <label className="text-white">Tốc độ</label>
              <Select
                className="w-full"
                value={formData.speed}
                onChange={(value) => handleChange("speed", value)}
              >
                <Select.Option value="slow">Chậm</Select.Option>
                <Select.Option value="normal">Bình thường</Select.Option>
                <Select.Option value="fast">Nhanh</Select.Option>
              </Select>
            </>
          )}
          <button
            className="w-full mt-2 bg-[#3D5A80] text-white/70 py-2 rounded-md"
            onClick={calculateTDEE}
            disabled={isLoading}
          >
            {isLoading ? "Đang tính..." : "Tính toán"}
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          result && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-black">
              <p>
                <strong>BMR:</strong> {result.BMR.toFixed(2)} kcal
              </p>
              <p>
                <strong>TDEE:</strong> {result.TDEE.toFixed(2)} kcal
              </p>
              <p>
                <strong>Calo mục tiêu:</strong>{" "}
                {result.calorieIntake.toFixed(2)} kcal/ngày
              </p>
              {result.daysToGoal > 0 && (
                <p>
                  <strong>Thời gian đạt mục tiêu:</strong> {result.daysToGoal}{" "}
                  ngày
                </p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
