"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const nav_items = [
    { label: "Home", link: "/" },
    { label: "Companion", link: "/companions" },
    {label: "My Journey", link: "/my-journey" },

]

const NavItems = () => {

    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-4">
            {nav_items.map(({label, link}) => (
                <Link href={link}
                      key={label}
                      className={cn(pathname === link && 'text-primary font-semibold')}>
                    {label}
                </Link>
            ))}

        </nav>
    )
}

export default NavItems;