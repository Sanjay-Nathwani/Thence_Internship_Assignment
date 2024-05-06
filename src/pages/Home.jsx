import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Home = () => {

  
  return (
    <div className="p-4 w-full">
      <Navbar />
      <section className="mt-14 overflow-hidden">
        <div className="flex flex-col items-center">
          <p className="font-customFont text-3xl text-[#2da950]">
            Success stories
          </p>
          <h1 className="text-5xl font-semibold w-[35rem] text-center">
            Every success journey we&apos;ve encountered.
          </h1>
        </div>
        <div className="flex justify-between mt-24 relative">
          <img src="/hero.svg" alt="hero image" className="" />
          <div className="mt-12 mx-auto">
            <p className="w-80 font-semibold text-4xl">
              Enhance fortune 50 company&apos;s insights teams research
              capabilities
            </p>
            <ul className="flex mt-10 gap-3">
              <li className="w-3 h-3 rounded-full bg-[#2DA950]" />
              <li className="w-3 h-3 rounded-full bg-[#E4E3E3] hover:bg-[#CAD0CB]" />
              <li className="w-3 h-3 rounded-full bg-[#E4E3E3] hover:bg-[#CAD0CB]" />
              <li />
            </ul>
            <button className="mt-32 text-lg flex items-center justify-center px-8 py-3 rounded-full border text-white bg-[#1c1c1c] hover:bg-[#4e4e4e] transition-all duration-300">
              Explore More →
            </button>
          </div>
          <div className="grid grid-cols-3 absolute -z-10 -right-20 -top-16">
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
            <div className="w-40 h-40 border border-gray-200 rounded-lg" />
          </div>
        </div>
      </section>
      <section className="mt-20 p-3">
        <div className="flex gap-20 bg-[#E8EEE7] rounded-2xl items-center p-10 justify-between">
          <div className="">
            <div className="p-14">
              <p className="text-[#9E9D9D] font-customFont text-2xl">What&apos;s on your mind</p>
              <h2 className="text-[#1C1C1C] font-semibold text-5xl">Ask Questions</h2>
            </div>
            <img src="/arrow.svg" alt="arrow image" />
          </div>
          <div className="px-20">
            <img src="/faq.svg" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home