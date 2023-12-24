import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import InfoTextIcon from './ui/infotexticon'
import { Mail, Phone } from 'lucide-react'

export default function ContactForm()
{
    return (
        <div className='padding-container  w-full '>
            <div className='flex flex-col gap-3'>
                <h1 className='lg:bold-40 bold-32'>
                    Entre em <span className='text-blue-500 underline underline-offset-8'>Contato</span>
                </h1>
                <p className='regular-14 tracking-wide text-gray-500'>Envie uma mensagem.</p>
            </div>
            <form className='flex flex-1 flex-col gap-5 max-w-[600px] mt-6'>
                <Input type='text' placeholder='Nome' />
                <Input type='email' placeholder='Email' />
                <Input type='number' placeholder='Celular' />
                <Textarea rows={5} placeholder='Digite sua mensagem' />
                <Button size={"lg"}>Envie sua mensagem</Button>
            </form>
            <div className='mt-10 flex flex-col sm:flex-row gap-3 md:gap-8'>
                <InfoTextIcon icon={<Phone className='size-5 md:size-6' />} title="Telefone" value='(21) 3448-8484' />
                <InfoTextIcon icon={<Mail className='size-5 md:size-6' />} title="Email" value='contato.@amretifica.com.br' />
                <InfoTextIcon icon={<Phone className='size-5 md:size-6' />} title="Telefone" value='(21) 3448-8484' />
            </div>
        </div>
    )
}
