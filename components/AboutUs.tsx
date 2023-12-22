import React from 'react'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { url } from 'inspector'

export default function AboutUs()
{
    return (
        <section className='max-container padding-container py-10 w-full mb-20  xl:py-20 flex flex-1 flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2' >
                    <h4 className='text-sm tracking-tight text-blue-500 uppercase font-semibold'>Sobre</h4>
                    <h2 className='md:bold-40 bold-32 font-bold'>Quem somos?</h2>
                </div>
                <Separator className='lg:w-32 w-full border-[1.5px] border-blue-500/70 ' />
                <div className='flex flex-col gap-3 mt-2 max-w-[500px]'>
                    <p className='regular-14 text-gray-600'>
                        AM Retífica de Motores é centro especializado em reparo de motores diesel e atua no mercado como distribuidor autorizado das marcas Perkins, MWM e Mahle.
                    </p>
                    <p className='regular-14 text-gray-600'>
                        Contamos com um estoque de peças e mão de obra treinada para prestar serviços de reparo de componentes, retífica de motores, manutenção preventiva e corretiva de equipamentos instalados em diversas aplicações.
                    </p>
                </div>
            </div>
            <div className='flex flex-1 justify-end'>
                <Image src={"/about.jpg"} width={600} height={600} className='rounded-lg ' alt='image' />
            </div>
        </section>
    )
}
