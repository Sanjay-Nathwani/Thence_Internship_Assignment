import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {

  const [time,setTime] = useState(7);

  const navigate = useNavigate();

  useEffect(()=>{
    const timer = setTimeout(() => {
      if(time > 0){
        setTime(time-1);
      }
      else{
        navigate("/");
      }
    },1000);

    return () => clearTimeout(timer);
  },[time,navigate]);

  return (
    <div className="flex flex-col p-4 w-screen h-screen justify-between">
      <div className="px-6 py-3">
        <img src="/logo.svg" />
      </div>
      <div className="flex flex-col items-center">
        <img src="/success.svg" alt="success image" />
        <p className="font-customFont mt-10 text-center text-3xl text-[#2DA950]">
          Successfully Submitted
        </p>
        <h2 className="font-semibold text-5xl mt-4">Congratulations</h2>
        <p className="text-center text-lg mt-8 text-[#727272] w-[28rem]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="text-center p-12 text-[#727272] text-lg">
        Redirecting you to Homepage in <span className="font-bold text-black">{time} seconds</span>
      </div>
    </div>
  );
}

export default Success