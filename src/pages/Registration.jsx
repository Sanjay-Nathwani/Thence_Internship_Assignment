import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setNameError("");
    setEmailError("");

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center px-6 py-3">
        <img src="/logo.svg" alt="logo" />
        <span
          className="w-10 h-10 text-xl rounded-full border border-gray-300 cursor-pointer flex items-center justify-center hover:bg-[#cacaca]"
          onClick={handleClick}
        >
          X
        </span>
      </div>

      <div className="flex flex-col items-center mt-12 gap-10">
        <div className="flex flex-col items-center gap-2">
          <p className="font-customFont text-[#2DA950] text-2xl">
            Registration Form
          </p>
          <h1 className="font-semibold w-[28rem] text-5xl text-center">
            Start your success Journey here!
          </h1>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            className="bg-[#efefef] px-5 py-3 w-[20rem] rounded-full"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <p className="text-red-500 flex items-center gap-2 ml-3">
              <img src="/invalid.svg" className="w-3 h-3 inline-block" />{" "}
              {nameError}
            </p>
          )}
          <input
            type="text"
            value={email}
            className="bg-[#efefef] px-5 py-3 w-[20rem] rounded-full"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 flex items-center gap-2 ml-3">
              <img src="/invalid.svg" className="w-3 h-3 inline-block" />{" "}
              {emailError}
            </p>
          )}
          <button
            type="submit"
            className="bg-[#C9C9C9] px-5 py-3 w-[20rem] rounded-full mt-8 hover:bg-black transition-all duration-200 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
