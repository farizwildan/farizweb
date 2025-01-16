"use client";
import { HiHome, HiUser, HiRectangleGroup, HiEnvelope } from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  { name: "work", path: "#project", icon: <HiRectangleGroup /> },
  { name: "contact", path: "#contact", icon: <HiEnvelope /> },
];

//next link
import Link from "next/link";

//nextRouter
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="fixed flex flex-col items-center xl:justify-center gap-y-4 h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between mx-auto px-4 py-2 bg-[#121212] bg-opacity-70">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-300 font-semibold"
        >
          Fariz
        </Link>
      </div>
      {/* {inner} */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[40px] xl:h-max py-7 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "hover:text-accent"
              } relative flex items-center group hover:text-purple-500 transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* {tooltip} */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
                {/* {triangle} */}
                <div className="absolute border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 right-12 top-1.5 "></div>
              </div>
              {/* {icon} */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
