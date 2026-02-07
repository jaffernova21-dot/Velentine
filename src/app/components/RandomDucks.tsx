import Image from "next/image";

const DECORATIONS = [
    // Bottom Left
    { src: "/duck1.webp", bottom: "2%", left: "2%", scale: 1.4, rotate: "0deg", },
    // Bottom Right
    { src: "/duck2.webp", bottom: "2%", right: "0%", scale: 1.25, rotate: "0deg" },
    // Top Left
    // Start after 1s
    { src: "/duck5.webp", top: "15%", left: "5%", scale: 0.9, rotate: "-7deg", hiddenOnMobile: true, waddle: true, delay: "1s" },
    // Top Right
    { src: "/duck4.webp", top: "15%", right: "5%", scale: 1.1, rotate: "7deg", hiddenOnMobile: true, waddle: true, delay: "0s" },

    { src: "/duck3.webp", bottom: "35%", left: "5%", scale: 1.0, rotate: "12deg" },
    // Start after 2s
    { src: "/duck7.webp", bottom: "34%", right: "4%", scale: 0.85, waddle: true, delay: "2s" },
    // Start after 0.5s
    { src: "/duck6.webp", bottom: "10%", left: "45%", scale: 1.15, rotate: "12deg", hiddenOnMobile: true, waddle: true, delay: "0.5s" },
    { src: "/duck8.webp", bottom: "1%", right: "22%", scale: 0.85, hiddenOnMobile: true },
    // Start after 1.5s
    { src: "/duck9.webp", bottom: "1%", left: "25%", scale: 1.0, hiddenOnMobile: true, waddle: true, delay: "1.5s" },

    // Tiny Icons
    { src: "/comment.svg", bottom: "18%", left: "15%", scale: 0.5, },
    { src: "/comment.svg", top: "25%", right: "15%", scale: 0.5, hiddenOnMobile: true },
    { src: "/ily.webp", top: "28%", left: "12%", scale: 0.2, rotate: "20deg" },
    { src: "/ily.webp", bottom: "15%", right: "20%", scale: 0.2 },
    { src: "/ily.webp", bottom: "0%", right: "40%", scale: 0.15 },
];

export default function RandomDucks() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {DECORATIONS.map((item, index) => (
                <div
                    key={index}
                    className={`absolute select-none pointer-events-none transition-all duration-500 ease-in-out ${item.hiddenOnMobile ? 'hidden md:block' : 'block'}`}
                    style={{
                        top: item.top,
                        left: item.left,
                        bottom: item.bottom,
                        right: item.right,
                        rotate: item.rotate,
                        transform: `scale(${item.scale})`,
                        ...(item.delay ? { animationDelay: item.delay } : {}),
                    }}
                >
                    <Image
                        src={item.src}
                        alt={`decoration-${index}`}
                        width={100}
                        height={100}
                        draggable={false}
                        className={`opacity-90 hover:opacity-100 ${item.waddle ? 'animate-waddle' : ''}`}
                    />
                </div>
            ))}
        </div>
    );
}