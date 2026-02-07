import Image from "next/image";
import RandomDucks from "@/app/components/RandomDucks";
import HomeClient from "@/app/components/HomeClient";

export default async function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-hidden">
      <h1 className="sr-only">Will you be my valentine ?</h1>
      <div className="absolute inset-0 -z-20">
        <Image
          src="/clouds1.webp"
          alt="cloud background"
          fill
          priority
          className="object-cover object-center"
          quality={80}
        />
      </div>

      <HomeClient />
      <RandomDucks />
      <div className="flex flex-col items-center justify-center relative z-10 px-4 text-center">
        <h1
          className="text-5xl md:text-8xl text-[#FF2D55] mb-8 leading-tighter max-w-5xl mx-auto tracking-wide uppercase mt-10 md:mt-0"
          style={{
            fontFamily: '"Chewy", cursive',
            textShadow: '4px 4px 0px #000000',
            WebkitTextStroke: '2px black'
          }}
        >
          Will you be my <br /> Valentine ?
        </h1>
      </div>
    </main>
  );
}
