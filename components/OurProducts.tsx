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

        <section className='whitespace-nowrap w-full flex flex-col pt-10 mb-20'>
            <h2 className='flex justify-center text-lg font-medium opacity-60 text-center'>Confira nossos produtos por marca!</h2>
            <div className='flex w-full flex-col max-container md:flex-row flexCenter md:justify-around lg:gap-0 gap-10 lg:mt-10 mt-16 '>
                {BRANDS.map((item) => (
                    <Button asChild key={item.title} variant={"outline"} className='p-10 opacity-50 hover:opacity-100 transition hover:translate-y-1 hover:bg-transparent hover:border-blue-400'>
                        <Link href={"/motors"} key={item.title}>
                            <Image src={item.image} width={150} height={150} alt='brand image' />
                        </Link>
                    </Button>
                ))}
            </div>

        </section>
    )
}
