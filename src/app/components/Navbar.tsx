import Image from "next/image";

interface NavbarProps {
    onDrawClick: () => void;
    isDrawOpen: boolean;
}

export default function Navbar({ onDrawClick, isDrawOpen }: NavbarProps) {
    return (
        <nav className="flex items-center justify-between p-4 px-8 relative z-[60]">
            <Image src={'/heart-fill.gif'} alt="valentines-day" width={45} height={45} />
            <div className="flex gap-2">
                <button
                    onClick={onDrawClick}
                    className="rounded-full px-6 py-1 border border-b-[3px] border-black cursor-pointer bg-[#FF2D55] hover:brightness-110 transition-all active:border-b text-white font-medium w-[90px]"
                >
                    Draw
                </button>
                <button className="rounded-full px-6 py-1 border border-b-[3px] border-black cursor-pointer bg-[#FF2D55] hover:brightness-110 transition-all active:border-b text-white font-medium w-[90px]">
                    Share
                </button>
            </div>
        </nav>
    );
}