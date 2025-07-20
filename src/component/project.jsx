import Laptop from "../assets/GlobalShare-06bd6207.png";
import Weather from "../assets/weather.png";
import Crypto from "../assets/Crypto.png";
import News from "../assets/News.png";
import Bazzar from "../assets/BrandLogo.png";

function Project() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-4">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6 max-w-6xl w-full">
          <div className="text-white flex-shrink-0">
            <img
              src={Bazzar}
              alt=""
              className="w-[350px] h-[140px] rounded-2xl border-2 border-black"
            />
          </div>
          <div className="text-white max-w-xl text-justify px-4">
            <span className="text-2xl font-extralight mb-2">Major Project</span>
            <p className="font-extralight leading-relaxed">
              CryptoWeather is a web application that provides real-time
              cryptocurrency prices and weather information. It allows users to
              track the latest prices of various cryptocurrencies while also
              providing current weather conditions for a specified location.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
