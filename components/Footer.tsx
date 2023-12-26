/* eslint-disable react/jsx-key */
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

export default function Footer()
{
    return (
        <footer className="flex border-t py-10">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <h2 className="text-xl font-medium">
                            <span className="font-extrabold text-blue-500">AM</span> Engine
                        </h2>
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((columns) => (
                            <FooterColumn key={columns.title} title={columns.title}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-500">
                                    {columns.links.map((link, index) => (
                                        <Link href={link.href} key={index} className='max-w-[300px] hover:text-slate-700'>
                                            {link.label}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <div
                                        key={link.label}
                                        className="flex gap-2 md:flex-col lg:flex-row"
                                    >
                                        <p className="regular-14 text-gray-500 whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-slate-600">
                                            {link.value}
                                        </p>
                                    </div>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-500">
                                    {SOCIALS.links.map((link) => (
                                        <Button variant={"outline"} size={"icon"}>
                                            <Link href={link.value} key={link.value}>
                                                <Image src={link.image} alt="logo" width={24} height={24} />
                                            </Link>
                                        </Button>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <Separator />
                <p className="regular-14 w-full text-center text-gray-500">2023 AM Engine | Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) =>
{
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}