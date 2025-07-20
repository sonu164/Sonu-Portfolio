import Hacker from "../assets/HackerRank.png";

function Certificate() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400">
        C E R T I F I C A T E
      </h1>
      <div className="flex justify-between items-center w-full max-w-4xl mt-12 px-8">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={Hacker}
            alt="Hackerrank Certificate"
            className="rounded-2xl shadow-2xl border-4 border-green-400 transition-transform duration-500 hover:scale-105 hover:rotate-2"
            style={{ maxWidth: "300px", width: "100%" }}
          />
        </div>
        <div className="flex-1 px-10 text-white text-center font-light">
          <span>
            Explore my achievements and certifications that showcase my
            dedication to learning and growth in the field of programming and
            technology.
            <br />
            <br />
            I am proud to have earned certificates from leading platforms,
            including Hackerrank, for my skills in problem solving and web
            development.
            <br />
          </span>
          <a
            href="https://www.hackerrank.com/certificates/iframe/36bc0dd9293a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <button className="bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
              View Hackerrank Certificate
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
