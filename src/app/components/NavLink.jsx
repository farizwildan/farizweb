import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB8BE] sm:text-xl rounded md:p-0 hover:text-violet-500 hover:border-b-2 hover:border-violet-500 transition-all"
    >
      {title}
    </Link>
  );
};

export default NavLink;
