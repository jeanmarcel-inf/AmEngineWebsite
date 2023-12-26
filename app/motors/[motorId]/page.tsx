import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ProductProps } from '@/types/types'
import { formatBRL } from '@/utils/helpers'
import Image from 'next/image'
import React from 'react'
import { MapMotorsCard } from '../page'
import { products } from '@/_data'
import Link from 'next/link'

export default function Motor({ searchParams }: {
    searchParams: ProductProps
})
{
    return (
        <>
            <div className='max-container items-center grid lg:grid-cols-2 py-10 gap-10 lg:gap-20'>
                <div className='padding-container  flex lg:w-full max-w-[700px]'>
                    <Image src={searchParams.imagePath} width={600} height={500} alt='imagem do produto' className='w-full rounded-xl shadow-lg' />
                </div>
                <div className='padding-container lg:max-w-[500px]'>
                    <Badge className='bg-blue-500'>Disponibilidade Imediata</Badge>
                    <div className='pt-3'>
                        <h1 className='font-semibold text-lg sm:text-2xl md:text-3xl'>{searchParams.name}</h1>
                        <p className='text-gray-500 text-sm pt-2'>
                            Fabricante: <span className='font-semibold '>{searchParams.manufacturer}</span>
                        </p>
                        <h2 className='font-semibold text-xl mt-3 '>{formatBRL(searchParams.price)}</h2>
                        <Button asChild size={"lg"} className='my-5  w-full'>
                            <Link href={"/contact"}>Solicitar Orçamento</Link>
                        </Button>
                        <p className='medium-14 mt-3 '>Ficha técnica: </p>
                        <Separator className='my-3 border border-blue-500' />

                        <ul className='text-sm p-3 px-5 list-disc'>
                            {products.map((product, index) => (
                                <li key={index}>{product.description[index]}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Produtos Relacionados */}
            <div className='max-container flex flex-col gap-10 padding-container my-20'>
                <h4 className='text-2xl font-semibold'>Produtos Relacionados</h4>
                <div className='grid sm:grid-cols-2 justify-center md:grid-cols-3 xl:grid-cols-4 w-full gap-10'>
                    {MapMotorsCard.slice(0, 4)}
                </div>
            </div>
        </>
    )
}
