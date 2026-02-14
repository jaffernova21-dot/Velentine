import Image from "next/image";

interface NavbarProps {
    onDrawClick: () => void;
    onGalleryClick: () => void;
    isDrawOpen: boolean;
}

export default function Navbar({ onDrawClick, onGalleryClick, isDrawOpen }: NavbarProps) {
    const handleLoveMeClick = () => {
        // Import confetti dynamically
        import('canvas-confetti').then((confetti) => {
            // Crazy confetti explosion with hearts
            const count = 200;
            const defaults = {
                origin: { y: 0.7 },
                shapes: ['circle'],
                colors: ['#FF2D55', '#FFC0CB', '#FF69B4', '#FFB6C1', '#FF1493']
            };

            function fire(particleRatio: number, opts: any) {
                confetti.default({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio),
                    spread: 100,
                    startVelocity: 45,
                    decay: 0.9,
                    scalar: 1.2,
                });
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });

            fire(0.2, {
                spread: 60,
            });

            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        });
    };

    return (
        <nav className="flex items-center justify-between p-4 px-8 relative z-[60]" role="navigation" aria-label="Main navigation">
            <div className="flex items-center gap-4">
                <Image src={'/heart-fill.gif'} alt="Will you be my Valentine" width={45} height={45} />
            </div>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={handleLoveMeClick}
                    aria-label="Love me button"
                    className="rounded-full px-6 py-1 border border-b-[3px] border-black cursor-pointer bg-[#FF2D55] hover:brightness-110 transition-all active:border-b text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                >
                    Love Me
                </button>
                <button
                    type="button"
                    onClick={onGalleryClick}
                    aria-label="View community gallery"
                    className="rounded-full px-6 py-1 border border-b-[3px] border-black cursor-pointer bg-[#FF2D55] hover:brightness-110 transition-all active:border-b text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                >
                    Gallery
                </button>
            </div>
        </nav>
    );
}