"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Navbar()
{
    return (
        <nav className='flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/">
                <h2 className="text-xl font-medium">
                    <span className="font-extrabold text-blue-500">AM</span> Engine
                </h2>
            </Link>
            <ul className="hidden h-full gap-2 lg:gap-5 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Button variant="ghost" className="rounded-full" asChild key={link.key} >
                        <Link
                            href={{
                                pathname: link.href,
                                query: {
                                    name: link.key
                                }
                            }}
                            className="text-sm font-medium hover:font-semibold tracking-tight"
                            key={link.key}>
                            {link.label}
                        </Link>

                    </Button>
                ))}
            </ul>

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-6  w-6" />
                    </SheetTrigger>
                    <SheetContent side={"right"} className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <Button variant="ghost" asChild key={link.key} >
                                    <Link
                                        href={link.href}
                                        className="text-sm font-normal tracking-tight"
                                        key={link.key}>{link.label}</Link>
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

        </nav>
    )
}
