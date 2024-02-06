import React from 'react'
import { products } from '@/_data'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { formatBRL } from '@/utils/helpers'

export const MapMotorsCard = products.map((product) => (
    <Card key={product.id}>
        <Image className='rounded-t-xl w-full' width={200} height={200} src={product.imagePath} alt='motor' />
        <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{formatBRL(product.price)}</CardDescription>
        </CardHeader>
        <CardFooter>
            <Button asChild variant={"primary"} size={"lg"} className='w-full'>
                <Link href={{
                    pathname: `/motors/${product.id}`, query: {
                        imagePath: product.imagePath,
                        name: product.name,
                        manufacturer: product.manufacturer,
                        price: product.price
                    }
                }}>Ver Detalhes</Link>
            </Button>
        </CardFooter>
    </Card>
))

export default function Motors({ searchParams }: {
    searchParams: {
        name: string,
    }
})
{
    return (
        <div className='max-container padding-container py-10 flex flex-col'>
            <h1 className='bold-40'>Motores {searchParams.name}</h1>
            <Separator className='w-40 border-2 border-blue-500' />
            <div className='grid sm:grid-cols-2 my-12 justify-center md:grid-cols-3 xl:grid-cols-4 w-full gap-10'>
                {products.map((product) => (
                    product.manufacturer == searchParams.name ? <Card key={product.id}>
                        <Image className='rounded-t-xl w-full' width={200} height={200} src={product.imagePath} alt='motor' />
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{formatBRL(product.price)}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild variant={"primary"} size={"lg"} className='w-full'>
                                <Link href={{
                                    pathname: `/motors/${product.id}`, query: {
                                        imagePath: product.imagePath,
                                        name: product.name,
                                        manufacturer: product.manufacturer,
                                        price: product.price
                                    }
                                }}>Ver Detalhes</Link>
                            </Button>
                        </CardFooter>
                    </Card> : null
                ))}
            </div>
        </div>
    )
}
