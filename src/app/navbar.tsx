import Link from "next/link";
import Logo from "./logo.png";
import Image from "next-image-export-optimizer";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <div className="navbar bg-base-200/60 sticky top-0 z-10 backdrop-blur-md">
      <Link
        href={"/"}
        className="opacity-80 focus:hover:opacity-100 transition-opacity"
      >
        <Image src={Logo} alt="nhan bach logo" width={75} height={75} />
      </Link>
      <div className="ml-auto dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-neutral m-1 md:hidden"
        >
          <Menu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-200 rounded-box w-52 md:flex-row md:!relative md:!visible md:!opacity-100 md:w-auto md:shadow-none md:bg-transparent"
        >
          <li>
            <Link href={"/#about-section"}>About Me</Link>
          </li>
          <li>
            <Link href={"/#projects-section"}>Projects</Link>
          </li>
          <li>
            <Link href={"/#skills-section"}>Skills</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
