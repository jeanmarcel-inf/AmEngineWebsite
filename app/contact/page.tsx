import ContactForm from '@/components/ContactForm'
import Map from '@/components/ui/map'
import React from 'react'

export default function Contact()
{
    return (

        <div className='max-container w-full flex flex-col gap-20 lg:gap-0 md:flex-row py-20 '>

            <ContactForm />
            <Map />
        </div>
    )
}
