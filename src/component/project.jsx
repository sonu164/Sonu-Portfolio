import Laptop from "../assets/GlobalShare-06bd6207.png";
import Weather from "../assets/weather.png";
import Crypto from "../assets/Crypto.png";
import News from "../assets/News.png";
import Bazzar from "../assets/BrandLogo.png";
import HireHunt from "../assets/HireHunt.png";

function Project() {
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center py-10 px-4">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 mb-4">
          <h2>P R O J E C T S</h2>
        </div>

        <div className="text-center text-2xl text-white font-extralight max-w-2xl mb-6">
          <span>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </span>
        </div>

        <div className="w-full overflow-x-auto pb-4 mt-10 scrollbar-hidden ">
          <div className="flex space-x-4 w-max px-4">
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img src={Laptop} alt="Project" className="w-[150px] h-[150px]" />
              <span>TODO APP </span>
            </div>
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img src={Laptop} alt="Project" className="w-[150px] h-[150px]" />
              <span>CALCULATER </span>
            </div>
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img
                src={Weather}
                alt="Project"
                className="w-[150px] h-[150px]"
              />
              <span> WEATHER DETECTION </span>
            </div>
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img src={Crypto} alt="Project" className="w-[150px] h-[150px]" />
              <span> CRYPTO-UPDATE </span>
            </div>
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img src={News} alt="Project" className="w-[150px] h-[150px]" />
              <span> NATIONAL NEWS </span>
            </div>
            <div className="min-w-[275px] h-[220px] rounded-2xl border-2 border-white bg-gray-800 flex flex-col items-center justify-center text-white">
              <img src={News} alt="Project" className="w-[150px] h-[150px]" />
              <span> NATIONAL NEWS </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center p-15 mt-25 gap-6 max-w-6xl w-full">
          <div className="text-white flex-shrink-0">
            <img
              src={HireHunt}
              alt=""
              className="w-[350px] h-[240px] rounded-full border-2 border-gray-400 shadow-xl bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 transition-transform duration-500 hover:scale-105 hover:rotate-2"
            />
          </div>

          <div className="text-white max-w-xl text-justify px-4">
            <span className="text-2xl font-extralight mb-2">Minor Project</span>
            <p className="font-extralight leading-relaxed">
              We have developed a **minor project titled "HireHunt"**, a dynamic
              job search platform that allows users to search and stay updated
              with the latest job opportunities. Built using **React** and
              **Vite** for a fast and efficient frontend, the app is styled with
              **Tailwind CSS** for a sleek and responsive design. On the
              backend, we utilized **Node.js** and **Firebase**, enabling
              real-time database interactions and secure data handling.
              "HireHunt" offers a seamless experience for job seekers, making it
              easier than ever to explore, filter, and apply for jobs—all in one
              tech-powered platform.
            </p>
            <button className="font-semibold  bg-gradient-to-b text-xl text-white transition-all duration-300 hover:from-green-400 hover:to-lime-500 hover:scale-105 px-4 py-2 rounded-lg mt-4">
              <a
                style={{ textDecoration: "none" }}
                className="no-underline"
                href="https://github.com/sonu164/HireHunt"
              >
                Check it out
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
