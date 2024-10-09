import { Navbar } from "@/components/navbar/Navbar";


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
          <h1>Este es el sublayout de general</h1>
          { children }
      </main>
    </>
  );
}