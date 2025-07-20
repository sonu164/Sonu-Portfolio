import Sidebar from "../component/sidebar";
import Profileimg from "../assets/Profileimg.jpeg";
import Cv from "../assets/sonuResume.pdf";

function Home() {
  return (
    <div
      id="Home"
      className="flex  text-center justify-between min-h-screen  px-8 bg-black"
    >
      <Sidebar />

      <div className="w-3/4 pl-8 mt-20 flex flex-col items-center">
        <div className="relative w-fit mb-4">
          <div className="absolute inset-0 rounded-lg blur-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 z-0"></div>
          <h1 className="relative z-10 text-4xl font-bold text-white px-6 py-2">
            HEY, I'M Sonu
          </h1>
        </div>
        <p className="text-lg font-extrabold text-gray-700  mb-6 max-w-xl mx-auto">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <a
          href={Cv}
          download="Sonu_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 flex justify-between text-white px-6 py-2 rounded hover:bg-blue-700">
            Download CV
          </button>
        </a>
      </div>
      <div className="w-1/4 mt-5  justify-center items-center">
        <img
          src={Profileimg}
          alt="Sonu"
          className="flex justify-between rounded-full border-2 border-black transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Home;
