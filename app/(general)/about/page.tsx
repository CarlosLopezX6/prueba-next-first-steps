import type { Metadata } from "next";

/*
    -mr para snippet de Snippets simple Next.js 13 de metadata
    -Si quieres saber todos los posibles metatags que existen, deberás tiparlo con el tipo especial de Next.
    -con ctrl + barra de espacio ves los intelisense.
*/
export const metadata: Metadata = {
    title: 'About Page',
    description: 'Sobre mí',
    keywords: ['About Page', 'Carlos', 'Información']
};



export default function AboutPage(){
  return (
    <>
        <span className='text-7xl'>About Page</span>
    </>
  )
}
