/*  
    lrc para hacer el layout mas rapido con el snippet

    Podemos tener obviamente un layout para cada pagina.
*/

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Este Layout es solo para la pagina de About</h1>
      { children }
    </div>
  );
}