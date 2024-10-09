import type { Metadata } from "next";

/*
    -mr para snippet de Snippets simple Next.js 13 de metadata
    -Si quieres saber todos los posibles metatags que existen, deberás tiparlo con el tipo especial de Next.
    -con ctrl + barra de espacio ves los intelisense.
*/
export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicio',
};



export default function PricingPage(){
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    )
}