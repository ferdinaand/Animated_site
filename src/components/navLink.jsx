"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


// the NavLink accepts the Link prop, we use this to:
// 1. check if the Link prop is the same as the pathName
// 2. if it's true, we add a background to the navbar link to indicate that it's selected
const NavLink = ({ link }) => {
    const pathName = usePathname()
    console.log(pathName);
    return (
        <Link className={`rounded p-2 text-white ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    )
}

export default NavLink