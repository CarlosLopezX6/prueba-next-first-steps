'use client';        //Esta parte del codigo es dinamica por lo que se ejecutara del lado del cliente

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname();  //Hook de Next que te da el path.

    return (
        <Link 
            className={`${ style.link } ${ (pathName === path) && style.active_link }`} 
            href={ path }>
            { text }
        </Link>
    )
}
