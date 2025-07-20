function About() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1
        className="text-4xl font-bold text-transparent bg-clip-text mt-4 bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400
"
      >
        ABOUT ME
      </h1>
      <div className="pl-45 pr-45 text-white text-center font-extralight mt-8 ">
        <span className="font-extralight text-2xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </span>
      </div>
      <div className="flex justify-between mt-10">
        <div className="container-1 w-50%">
          <span className="text-center p-10  font-extralight text-2xl text-white">
            Get to know me!
          </span>
          <p className="text-white text-justify p-5 font-extralight">
            I'm a <span>Frontend Web Developer</span> building the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the{" "}
            <span>Projects</span> section. <br /> <br />I also like sharing
            content related to the stuff that I have learned over the years in{" "}
            <span>Web Development</span> so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my{" "}
            <a href="https://github.com/IbrahimHiarea" target="_blank">
              Github
            </a>{" "}
            where I post useful content related to Web Development and
            Programming. <br /> <br />
            I'm open to <span>Job</span> opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don't hesitate to <span>contact</span>{" "}
            me.
          </p>
        </div>
        <div className="w-px bg-gray-500 mx-4 mt-10"></div>
        <div className="container-2">
          <span className="text-center p-10  font-extralight text-2xl text-white">
            My Skills
          </span>
          <div className="button flex justify-between display-transprant text-white p-10">
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              Html/css/js
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              React/vite
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              MonogoDB
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              {" "}
              NodeJs
            </span>
          </div>
          <div className="button flex justify-between display-transprant text-white">
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              C/Cpp
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              Problem-Solving
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              Python
            </span>
            <span className="m-3 w-auto h-auto p-2 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-2xl border-1 border-white shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              DSA/Cpp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
