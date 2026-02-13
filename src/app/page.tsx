import Image from "next/image";
import { Suspense } from "react";
import HomeClient from "@/app/components/HomeClient";

export default async function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-hidden">

      <div className="absolute inset-0 -z-20">
        <Image
          src="/clouds1.webp"
          alt="Will you be my Valentine"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <Suspense fallback={<div className="fixed inset-0 bg-white z-50 flex items-center justify-center">Loading...</div>}>
        <HomeClient />
      </Suspense>

      {/* Buy Me a Coffee Floating Button */}
      <a
        href="https://buymeacoffee.com/atishaytuli07"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 active:scale-95"
        aria-label="Buy me a coffee"
      >
        <Image
          src="/cup.png"
          alt="Buy Me A Coffee"
          width={60}
          height={60}
          className="shadow-lg rounded-full"
        />
      </a>

    </main>
  );
}
