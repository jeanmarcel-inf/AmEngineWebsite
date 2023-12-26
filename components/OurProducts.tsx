import { BRANDS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function OurProducts()
{
    return (
        /** Caso remover o background de section, experimentar altera a cord do titulo para algo mais 
         * claro.
         */

        <section className='whitespace-nowrap max-container w-full flex flex-col pt-10 mb-20'>
            <h2 className='flex justify-center text-lg font-medium opacity-60 text-center'>Confira nossos produtos por marca!</h2>
            <div className='w-full flexCenter padding-container flex-col md:flex-row  md:flexBetween lg:gap-0 gap-10 lg:mt-10 mt-16 '>
                {BRANDS.map((item) => (
                    <Button asChild key={item.title} variant={"hoverOutline"} className='p-10  hover:opacity-100 transition hover:translate-y-1 hover:bg-transparent '>
                        <Link href={"/motors"} key={item.title}>
                            <Image src={item.image} width={150} height={150} alt='brand image' />
                        </Link>
                    </Button>
                ))}
            </div>

        </section>
    )
}
