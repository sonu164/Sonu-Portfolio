import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-11 fixed left-0  bg-gray-200 flex flex-col items-center py-4 space-y-4 mt-20">
      <span className="text-3xl text-blue-600 hover:scale-110 transition">
        <a href=""></a>
        <FaFacebook />
      </span>
      <span className="text-3xl text-blue-700 hover:scale-110 transition">
        <FaLinkedinIn />
      </span>
      <span className="text-3xl text-black hover:scale-110 transition">
        <FaGithub />
      </span>
    </div>
  );
}

export default Sidebar;
