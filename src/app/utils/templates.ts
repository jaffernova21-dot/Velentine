import { Stroke } from "./encode";

const RED = "rgba(255, 45, 85, 0.25)";

export interface Template {
    id: string;
    name: string;
    icon: string;
    strokes: Stroke[];
}

// Helper to create simple strokes
const createPath = (points: number[][]): Stroke => ({
    color: RED,
    path: points.map(([x, y]) => ({ x, y }))
});

// NEW: 1. I Love You Text
const generateILoveYouText = (): Stroke[] => {
    return [
        // I
        createPath([[40, 80], [40, 140]]),
        createPath([[30, 80], [50, 80]]),
        createPath([[30, 140], [50, 140]]),
        
        // L
        createPath([[70, 80], [70, 140], [100, 140]]),
        
        // O
        createPath([[110, 80], [130, 80], [140, 90], [140, 130], [130, 140], [110, 140], [100, 130], [100, 90], [110, 80]]),
        
        // V
        createPath([[150, 80], [165, 140], [180, 80]]),
        
        // E
        createPath([[190, 80], [230, 80]]),
        createPath([[190, 80], [190, 140]]),
        createPath([[190, 110], [220, 110]]),
        createPath([[190, 140], [230, 140]]),
        
        // Y
        createPath([[50, 170], [70, 190], [70, 230]]),
        createPath([[90, 170], [70, 190]]),
        
        // O
        createPath([[100, 170], [120, 170], [130, 180], [130, 220], [120, 230], [100, 230], [90, 220], [90, 180], [100, 170]]),
        
        // U
        createPath([[140, 170], [140, 220], [150, 230], [160, 230], [170, 220], [170, 170]]),
        
        // Small hearts around (3-4 hearts)
        createPath([[20, 100], [17, 97], [20, 94], [23, 97], [26, 94], [29, 97], [26, 100], [23, 103], [20, 100]]),
        createPath([[240, 110], [237, 107], [240, 104], [243, 107], [246, 104], [249, 107], [246, 110], [243, 113], [240, 110]]),
        createPath([[30, 200], [27, 197], [30, 194], [33, 197], [36, 194], [39, 197], [36, 200], [33, 203], [30, 200]]),
        createPath([[180, 200], [177, 197], [180, 194], [183, 197], [186, 194], [189, 197], [186, 200], [183, 203], [180, 200]])
    ];
};

// NEW: 3. Perfect Hug (Two figures hugging)
const generateHug = (): Stroke[] => {
    return [
        // Left person - head
        createPath([[95, 95], [105, 88], [115, 95], [115, 105], [105, 112], [95, 105], [95, 95]]),
        createPath([[105, 112], [105, 160]]),
        createPath([[105, 160], [100, 185]]),
        createPath([[105, 160], [110, 185]]),
        createPath([[105, 125], [85, 130], [75, 145], [85, 155], [105, 150]]),
        createPath([[105, 125], [125, 120], [145, 115]]),
        
        // Right person - head
        createPath([[185, 95], [195, 88], [205, 95], [205, 105], [195, 112], [185, 105], [185, 95]]),
        createPath([[195, 112], [195, 160]]),
        createPath([[195, 160], [190, 185]]),
        createPath([[195, 160], [200, 185]]),
        createPath([[195, 125], [215, 130], [225, 145], [215, 155], [195, 150]]),
        createPath([[195, 125], [175, 120], [155, 115]]),
        
        // Connection
        createPath([[105, 140], [195, 140]]),
        
        // Hearts above
        createPath([[140, 70], [135, 65], [140, 60], [145, 65], [150, 60], [155, 65], [150, 70], [145, 75], [140, 70]]),
        createPath([[160, 75], [157, 72], [160, 69], [163, 72], [166, 69], [169, 72], [166, 75], [163, 78], [160, 75]]),
        createPath([[120, 75], [117, 72], [120, 69], [123, 72], [126, 69], [129, 72], [126, 75], [123, 78], [120, 75]])
    ];
};

// NEW: 4. Cute Couple Together
// 👫 COUPLE GAZING - Two people looking lovingly at each other
const generateCoupleGazing = (): Stroke[] => {
    return [
        // Left person - facing right
        // Head
        createPath([[95, 120], [105, 115], [115, 120], [115, 130], [105, 135], [95, 130], [95, 120]]),
        
        // Hair (flowing)
        createPath([[97, 118], [95, 113], [97, 108], [100, 113], [98, 118]]),
        
        // Eye (looking right at partner)
        createPath([[107, 125], [109, 125]]),
        
        // Smile (soft)
        createPath([[103, 129], [105, 130], [107, 129]]),
        
        // Rosy cheek (blushing)
        createPath([[98, 127], [100, 127]]),
        
        // Body
        createPath([[105, 135], [105, 165]]),
        
        // Sitting position
        createPath([[105, 165], [90, 180], [120, 180], [105, 165]]),
        
        // Arms (one reaching toward partner)
        createPath([[105, 145], [125, 150]]),
        createPath([[105, 155], [95, 160]]),
        
        // Right person - facing left
        // Head
        createPath([[205, 120], [215, 115], [225, 120], [225, 130], [215, 135], [205, 130], [205, 120]]),
        
        // Hair (short/neat)
        createPath([[207, 118], [210, 113], [213, 118]]),
        createPath([[217, 118], [220, 113], [223, 118]]),
        
        // Eye (looking left at partner)
        createPath([[211, 125], [213, 125]]),
        
        // Smile (soft)
        createPath([[213, 129], [215, 130], [217, 129]]),
        
        // Rosy cheek (blushing)
        createPath([[220, 127], [222, 127]]),
        
        // Body
        createPath([[215, 135], [215, 165]]),
        
        // Sitting position
        createPath([[215, 165], [200, 180], [230, 180], [215, 165]]),
        
        // Arms (one reaching toward partner)
        createPath([[215, 145], [195, 150]]),
        createPath([[215, 155], [225, 160]]),
        
        // Their hands almost touching (anticipation!)
        createPath([[125, 150], [160, 150]]),
        createPath([[195, 150], [160, 150]]),
        
        // Heart forming between them (at hand connection point)
        createPath([[160, 145], [155, 140], [160, 135], [165, 140], [170, 135], [175, 140], [170, 145], [165, 150], [160, 145]]),
        
        // Hearts floating around
        createPath([[70, 125], [65, 120], [70, 115], [75, 120], [80, 115], [85, 120], [80, 125], [75, 130], [70, 125]]),
        createPath([[250, 125], [245, 120], [250, 115], [255, 120], [260, 115], [265, 120], [260, 125], [255, 130], [250, 125]]),
        
        // Heart above them
        createPath([[160, 95], [145, 80], [160, 65], [175, 80], [190, 65], [205, 80], [190, 95], [175, 110], [160, 95]]),
        
        // Sparkles (chemistry!)
        createPath([[135, 140], [138, 143], [141, 140], [138, 137], [135, 140]]),
        createPath([[185, 140], [188, 143], [191, 140], [188, 137], [185, 140]]),
        createPath([[160, 125], [163, 128], [166, 125], [163, 122], [160, 125]]),
        
        // Small hearts near their feet
        createPath([[95, 195], [90, 190], [95, 185], [100, 190], [95, 195]]),
        createPath([[225, 195], [220, 190], [225, 185], [230, 190], [225, 195]])
    ];
};

// NEW: 5. Cute Panda with I Love You Sign - IMPROVED
// 🐼 PANDA LOVE - Cute panda with BIG CLEAR "I ❤ U" sign
const generatePandaLove = (): Stroke[] => {
    return [
        // Panda head (smaller, to make room for bigger sign)
        createPath([[150, 100], [168, 95], [182, 105], [187, 120], [182, 135], [168, 145], [150, 150], [132, 145], [118, 135], [113, 120], [118, 105], [132, 95], [150, 100]]),
        
        // Left ear (round black ear)
        createPath([[126, 85], [131, 80], [136, 85], [136, 95], [131, 100], [126, 95], [126, 85]]),
        
        // Right ear (round black ear)
        createPath([[164, 85], [169, 80], [174, 85], [174, 95], [169, 100], [164, 95], [164, 85]]),
        
        // Left eye patch (black circle around eye)
        createPath([[132, 115], [138, 110], [144, 115], [144, 125], [138, 130], [132, 125], [132, 115]]),
        
        // Right eye patch (black circle around eye)
        createPath([[156, 115], [162, 110], [168, 115], [168, 125], [162, 130], [156, 125], [156, 115]]),
        
        // Left eye (white dot inside patch)
        createPath([[137, 120], [139, 120]]),
        createPath([[137, 118], [138, 118]]), // shine
        
        // Right eye (white dot inside patch)
        createPath([[161, 120], [163, 120]]),
        createPath([[161, 118], [162, 118]]), // shine
        
        // Nose (cute triangle)
        createPath([[147, 132], [150, 129], [153, 132], [150, 135], [147, 132]]),
        
        // Adorable smile
        createPath([[143, 138], [150, 141], [157, 138]]),
        
        // Rosy blushing cheeks
        createPath([[120, 125], [125, 125]]),
        createPath([[175, 125], [180, 125]]),
        
        // Panda paws at top of sign
        createPath([[118, 150], [113, 145], [118, 155]]),
        createPath([[182, 150], [187, 145], [182, 155]]),
        
        // === BIG SIGN (MUCH LARGER!) ===
        createPath([[100, 155], [200, 155], [200, 230], [100, 230], [100, 155]]),
        
        // "I" - BIGGER and CLEARER
        createPath([[120, 175], [120, 210]]),
        createPath([[115, 175], [125, 175]]),
        createPath([[115, 210], [125, 210]]),
        
        // "❤" HEART - MUCH BIGGER and MORE VISIBLE
        createPath([[150, 192], [140, 182], [150, 172], [160, 182], [170, 172], [180, 182], [170, 192], [160, 202], [150, 212], [140, 202], [150, 192]]),
        
        // Heart center line (makes it clearer)
        createPath([[150, 172], [150, 212]]),
        
        // "U" - BIGGER and CLEARER
        createPath([[185, 175], [185, 200], [190, 210], [195, 200], [195, 175]]),
        
        // Small hearts floating around panda
        createPath([[80, 95], [75, 90], [80, 85], [85, 90], [90, 85], [95, 90], [90, 95], [85, 100], [80, 95]]),
        createPath([[220, 95], [215, 90], [220, 85], [225, 90], [230, 85], [235, 90], [230, 95], [225, 100], [220, 95]]),
        
        // Hearts at bottom
        createPath([[85, 240], [80, 235], [85, 230], [90, 235], [95, 230], [100, 235], [95, 240], [90, 245], [85, 240]]),
        createPath([[215, 240], [210, 235], [215, 230], [220, 235], [225, 230], [230, 235], [225, 240], [220, 245], [215, 240]]),
        
        // Sparkles (panda's love is magical)
        createPath([[95, 120], [98, 123], [101, 120], [98, 117], [95, 120]]),
        createPath([[199, 120], [202, 123], [205, 120], [202, 117], [199, 120]]),
        
        // Extra sparkles around the heart on sign
        createPath([[130, 180], [133, 183], [136, 180], [133, 177], [130, 180]]),
        createPath([[170, 200], [173, 203], [176, 200], [173, 197], [170, 200]])
    ];
};

// NEW: 6. Cute Teddy Bear with Heart - IMPROVED with "I LOVE YOU" on top
const generateTeddyBear = (): Stroke[] => {
    return [
        // Head (big, round, and cute)
        createPath([[150, 105], [170, 100], [185, 110], [190, 125], [185, 140], [170, 150], [150, 155], [130, 150], [115, 140], [110, 125], [115, 110], [130, 100], [150, 105]]),
        
        // Left ear (round)
        createPath([[122, 90], [127, 85], [132, 90], [132, 100], [127, 105], [122, 100], [122, 90]]),
        
        // Right ear (round)
        createPath([[168, 90], [173, 85], [178, 90], [178, 100], [173, 105], [168, 100], [168, 90]]),
        
        // Left eye (button eye)
        createPath([[135, 120], [138, 120]]),
        createPath([[136, 118], [137, 118]]), // shine
        
        // Right eye (button eye)
        createPath([[162, 120], [165, 120]]),
        createPath([[163, 118], [164, 118]]), // shine
        
        // Cute little nose (triangle)
        createPath([[148, 130], [150, 128], [152, 130], [150, 132], [148, 130]]),
        
        // Happy smile
        createPath([[150, 132], [145, 136], [150, 138], [155, 136], [150, 132]]),
        
        // Snout/muzzle area (lighter color patch)
        createPath([[140, 128], [150, 126], [160, 128], [160, 138], [150, 140], [140, 138], [140, 128]]),
        
        // Body (round and huggable)
        createPath([[130, 155], [120, 165], [115, 185], [120, 205], [140, 215], [160, 215], [180, 205], [185, 185], [180, 165], [170, 155]]),
        
        // Left arm (reaching out to hold heart)
        createPath([[130, 160], [110, 175], [105, 190]]),
        createPath([[105, 188], [107, 190], [109, 188]]), // paw pad
        
        // Right arm (reaching out to hold heart)
        createPath([[170, 160], [190, 175], [195, 190]]),
        createPath([[193, 188], [195, 190], [197, 188]]), // paw pad
        
        // Left leg/foot
        createPath([[135, 205], [130, 218], [130, 228], [138, 232], [146, 228]]),
        createPath([[134, 225], [136, 227], [138, 225]]), // paw pad
        
        // Right leg/foot
        createPath([[165, 205], [170, 218], [170, 228], [162, 232], [154, 228]]),
        createPath([[162, 225], [164, 227], [166, 225]]), // paw pad
        
        // BIG HEART in center (the teddy is offering his heart)
        createPath([[150, 170], [135, 155], [150, 140], [165, 155], [180, 140], [195, 155], [180, 170], [165, 185], [150, 200], [135, 185], [150, 170]]),
        
        // Heart details (to make it pop)
        createPath([[145, 165], [155, 165]]),
        createPath([[150, 160], [150, 175]]),
        
        // Small hearts around teddy (love radiating)
        createPath([[95, 125], [90, 120], [95, 115], [100, 120], [95, 125]]),
        createPath([[205, 125], [200, 120], [205, 115], [210, 120], [205, 125]]),
        
        // Sparkles
        createPath([[85, 180], [88, 183], [91, 180], [88, 177], [85, 180]]),
        createPath([[209, 180], [212, 183], [215, 180], [212, 177], [209, 180]])
    ];
};

// 7. Perfect Heart (Mathematical)
const generateHeart = (): Stroke[] => {
    const cx = 150, cy = 150, scale = 5;
    const points: { x: number, y: number }[] = [];
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        points.push({ x: cx + x * scale, y: cy + y * scale });
    }
    return [{ color: RED, path: points }];
};

// 8. I <3 U
const generateILoveU = (): Stroke[] => {
    return [
        createPath([[60, 100], [60, 200]]),
        createPath([[40, 100], [80, 100]]),
        createPath([[40, 200], [80, 200]]),
        createPath([[150, 130], [130, 110], [110, 130], [150, 180]]),
        createPath([[150, 130], [170, 110], [190, 130], [150, 180]]),
        createPath([[220, 100], [220, 170], [240, 200], [260, 170], [260, 100]])
    ];
};

// 9. Rose
const generateRose = (): Stroke[] => {
    return [
        createPath([[150, 150], [145, 140], [155, 135], [160, 145], [150, 155], [140, 145], [140, 130], [155, 120]]),
        createPath([[140, 145], [130, 150], [135, 165], [150, 160]]),
        createPath([[160, 145], [170, 150], [165, 165], [150, 160]]),
        createPath([[150, 160], [150, 220]]),
        createPath([[150, 190], [170, 180], [160, 195], [150, 190]])
    ];
};

// 10. Love Text
const generateLoveText = (): Stroke[] => {
    return [
        createPath([[50, 100], [50, 180], [90, 180]]),
        createPath([[100, 160], [100, 180], [120, 180], [120, 160], [100, 160]]),
        createPath([[130, 160], [140, 180], [150, 160]]),
        createPath([[160, 170], [180, 170], [180, 160], [160, 160], [160, 180], [180, 180]])
    ];
};

// 11. Envelope
const generateLoveLetter = (): Stroke[] => {
    return [
        // Envelope rectangle (main body)
        createPath([[80, 110], [220, 110], [220, 200], [80, 200], [80, 110]]),
        
        // Envelope flap (triangle at top)
        createPath([[80, 110], [150, 165], [220, 110]]),
        
        // Heart wax seal on flap (big and romantic)
        createPath([[150, 135], [140, 125], [150, 115], [160, 125], [170, 115], [180, 125], [170, 135], [160, 145], [150, 135]]),
        
        // Seal details (to make it look like wax)
        createPath([[145, 130], [155, 130]]),
        createPath([[150, 125], [150, 135]]),
        
        // Decorative hearts floating around
        createPath([[55, 100], [50, 95], [55, 90], [60, 95], [65, 90], [70, 95], [65, 100], [60, 105], [55, 100]]),
        createPath([[245, 100], [240, 95], [245, 90], [250, 95], [255, 90], [260, 95], [255, 100], [250, 105], [245, 100]]),
        
        // Small hearts at bottom corners
        createPath([[60, 210], [55, 205], [60, 200], [65, 205], [60, 210]]),
        createPath([[240, 210], [235, 205], [240, 200], [245, 205], [240, 210]]),
        
        // Sparkles around the seal
        createPath([[130, 120], [133, 123], [136, 120], [133, 117], [130, 120]]),
        createPath([[184, 120], [187, 123], [190, 120], [187, 117], [184, 120]]),
        
        // Letter edge peaking out (to show there's something inside)
        createPath([[100, 185], [200, 185]]),
        createPath([[110, 175], [190, 175]])
    ];
};

// 12. Tulip
const generateTulip = (): Stroke[] => {
    return [
        createPath([[130, 120], [130, 150], [170, 150], [170, 120]]),
        createPath([[130, 120], [140, 140], [150, 120]]),
        createPath([[150, 120], [160, 140], [170, 120]]),
        createPath([[150, 150], [150, 220]]),
        createPath([[150, 200], [130, 180], [150, 190]]),
        createPath([[150, 190], [170, 170], [150, 180]])
    ];
};

// 13. Lips
const generateLips = (): Stroke[] => {
    return [
        createPath([[80, 150], [120, 130], [150, 140], [180, 130], [220, 150]]),
        createPath([[80, 150], [150, 160], [220, 150]]),
        createPath([[90, 150], [150, 180], [210, 150]])
    ];
};

// 14. Infinity Heart
const generateInfinityHeart = (): Stroke[] => {
    const points: { x: number, y: number }[] = [];
    for (let t = 0; t <= Math.PI * 2; t += 0.1) {
        const x = 150 + 60 * Math.sin(t);
        const y = 150 + 30 * Math.sin(2 * t);
        points.push({ x, y });
    }
    return [
        { color: RED, path: points },
        createPath([[150, 140], [140, 130], [150, 160], [160, 130], [150, 140]])
    ];
};

// 15. Cupid's Arrow
const generateCupidArrow = (): Stroke[] => {
    return [
        createPath([[120, 120], [100, 100], [120, 80], [150, 110], [180, 80], [200, 100], [180, 120], [150, 150], [120, 120]]),
        createPath([[50, 180], [250, 50]]),
        createPath([[240, 50], [250, 50], [250, 60]]),
        createPath([[50, 180], [60, 190]]),
        createPath([[50, 180], [40, 170]])
    ];
};

// 16. Ring
const generateRing = (): Stroke[] => {
    return [
        createPath([[110, 160], [110, 200], [190, 200], [190, 160], [110, 160]]),
        createPath([[150, 160], [130, 140], [150, 120], [170, 140], [150, 160]]),
        createPath([[130, 140], [170, 140]])
    ];
};

export const TEMPLATES: Template[] = [
    { id: 'iloveyou', name: 'I Love You', icon: '💕', strokes: generateILoveYouText() },
    { id: 'hug', name: 'Hug', icon: '🤗', strokes: generateHug() },
    { id: 'couple', name: 'Couple', icon: '👫', strokes: generateCoupleGazing() },
    { id: 'panda', name: 'Panda Love', icon: '🐼', strokes: generatePandaLove() },
    { id: 'teddy', name: 'Teddy Bear', icon: '🧸', strokes: generateTeddyBear() },
    { id: 'heart', name: 'Perfect Heart', icon: '❤️', strokes: generateHeart() },
    { id: 'rose', name: 'Rose', icon: '🌹', strokes: generateRose() },
    { id: 'tulip', name: 'Tulip', icon: '🌷', strokes: generateTulip() },
    { id: 'lips', name: 'Lips', icon: '💋', strokes: generateLips() },
    { id: 'love', name: 'Love', icon: '✍️', strokes: generateLoveText() },
    { id: 'ily', name: 'I <3 U', icon: '🤟', strokes: generateILoveU() },
    { id: 'infinity', name: 'Forever', icon: '♾️', strokes: generateInfinityHeart() },
    { id: 'arrow', name: 'Cupid', icon: '🏹', strokes: generateCupidArrow() },
    { id: 'ring', name: 'Marry Me', icon: '💍', strokes: generateRing() },
    { id: 'envelope', name: 'Envelope', icon: '💌', strokes: generateLoveLetter() }
];
