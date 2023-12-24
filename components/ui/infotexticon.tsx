import { Phone } from 'lucide-react'
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'

type InfoTextIconProps = {
    icon: React.ReactNode,
    title: string,
    value: string
}

export default function InfoTextIcon({ icon, title, value }: InfoTextIconProps)
{
    return (
        <div className='flex flex-row gap-3 border items-center  p-3 rounded-md'>
            <div>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h4 className='font-medium text-sm'>{title}</h4>
                <h4 className='text-blue-500 text-[12px]'>{value}</h4>
            </div>
        </div>
    )
}
