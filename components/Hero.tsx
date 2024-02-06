import React from 'react'
import { Button } from './ui/button'
import { CircleUserRound, Phone } from 'lucide-react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import Link from 'next/link'

export default function Hero()
{
    return (
        <section className='max-container flex flex-col  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row flexBetween '>
            <div className='flex flex-1 flex-col xl:w-1/2'>
                <h1 className='bold-52 lg:bold-88'>AM Engine</h1>
                <p className='regular-16 mt-6 text-gray-500 xl:max-w-[520px]'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <div className='flex flex-col w-full gap-3 mt-10 sm:flex-row'>
                    <Button asChild size={"lg"} className='rounded-full lg:rounded-lg text-lg bg-blue-500'>
                        <Link href={"/motors"}>Nossos Produtos</Link>
                    </Button>
                    <Button asChild size={"lg"} variant={"outline"} className='rounded-full lg:rounded-lg  text-md hover:bg-primary/80 hover:text-primary-foreground hover:shadow-2xl'>
                        <Link href={"/contact"} className='flex gap-1 items-center'>
                            <CircleUserRound className='text-blue-500 mr-2 h-5 w-5'></CircleUserRound>
                            <p>Contato</p>
                        </Link>

                    </Button>
                </div>
            </div>
            <div className='flex flex-1 flex-col xl:w-1/2'>
                <Image src={"/hero-image.svg"} width={400} height={400} alt='hero image' />
            </div>

        </section>
    )
}
