import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-11 fixed left-0  bg-gray-200 flex flex-col items-center py-4 space-y-4 mt-20">
      <span className="text-3xl text-blue-600 hover:scale-110 transition">
        <a href="">
          <FaFacebook />
        </a>
      </span>
      <span className="text-3xl text-blue-700 hover:scale-110 transition">
        <a href="www.linkedin.com/in/sonu-kumar-7a3b72264">
          <FaLinkedinIn />
        </a>
      </span>
      <span className="text-3xl text-black hover:scale-110 transition">
        <a style={{ textDecoration: "none" }} href="https://github.com/sonu164">
          <FaGithub />
        </a>
      </span>
    </div>
  );
}

export default Sidebar;
