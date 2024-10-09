import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'


/*
    Todo es server components en Next a menos que tu le especifiques que se ejecutará del lado del cliente con
    use client. Por defecto todos los componentes son server components, todo es creado del lado del servidor.
    es como si todos por defecto tuvieran use server.

    la consola de abajo se ve en la terminal y no en el navegador porque por defecto, la navbar 
    es un server component. El console.log se ejecutara siempre que se recargue el navegador.

    Tambien los server components pueden ser asincronos de esta forma:

    export const Navbar = async() => {

    Al pasar el mouse por los links de next, next hace un prefetch del server component que va a visitar,
    OJO esta funcionalidad en Next 14 se habilita solo en producción:
    https://nextjs.org/docs/app/api-reference/components/link#prefetch

*/

const navItems = [
    { path: '/about', text: "About" },
    { path: '/pricing', text: "Pricing" },
    { path: '/contact', text: "Contact" },
]



export const Navbar = () => {

    console.log("Hola que tal")

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link href={'/'} className='flex items-center'>
                <HomeIcon className='mr-2'/>
                <span>Home</span>
            </Link>

            <div className='flex flex-1'></div>

            {
                navItems.map( n => (
                    <ActiveLink key={ n.path } path={ n.path } text={ n.text }/>
                ) )
            }
            
        </nav>
    )
}
