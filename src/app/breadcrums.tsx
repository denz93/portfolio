"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrums() {
  const pathName = usePathname();
  const paths = pathName.split("/").filter((p) => p.length > 0);
  console.log({ paths });
  return (
    <div className="text-sm breadcrumbs opacity-60 p-4">
      <ul className="items-center content-center">
        <li>
          <Link href={"/"} className="flex items-center gap-1 content-center ">
            <Home size={14} />
            <span className="flex items-center content-center">Home</span>
          </Link>
        </li>
        {paths.map((p, idx) => (
          <li key={p}>
            <Link href={`/${paths.slice(0, idx + 1).join("/")}`}>{p}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
