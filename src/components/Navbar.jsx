import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <section className="flex gap-5 title text-xl text-gray-400">
        <div className="py-2 px-2 cursor-pointer">Posts</div>
        <div className="text-slate-800 border-b-2 border-slate-800 py-2 px-2 cursor-pointer">
          Users
        </div>
      </section>
      <div className="hover:cursor-pointer">
        <IconContext.Provider value={{ className: "text-xl" }}>
          <IoSettingsOutline />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
