import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registration")
  }

  return (
    <div className="flex px-6 py-3 justify-between border border-black-100 rounded-full">
      <img src="/logo.svg" alt="logo" />
      <div className="flex gap-3">
        <button className="text-sm flex items-center justify-center border border-[#eaeaea] px-6 rounded-full hover:bg-[#f1f1f1] transition-all duration-300" onClick={handleClick}>
          Get Projects
        </button>
        <button className="text-sm flex items-center justify-center px-6 rounded-full border text-white bg-[#1c1c1c] hover:bg-[#4e4e4e] transition-all duration-300">Onboard Talent</button>
      </div>
    </div>
  );
}

export default Navbar