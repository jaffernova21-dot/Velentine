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

// NEW: 2. Kiss (Two cute hearts hugging/kissing)
const generateKissEmoji = (): Stroke[] => {
    return [
        // Left heart (bigger, tilted) - IMPROVED
        createPath([[100, 130], [90, 120], [100, 110], [110, 120], [120, 110], [130, 120], [120, 130], [110, 140], [100, 150], [90, 140], [100, 130]]),
        
        // Left heart - bigger eyes
        createPath([[98, 125], [102, 125]]),
        createPath([[108, 125], [112, 125]]),
        
        // Left heart - rosy cheeks (bigger)
        createPath([[93, 132], [97, 132]]),
        createPath([[113, 132], [117, 132]]),
        
        // Left heart - bigger smile
        createPath([[100, 135], [105, 138], [110, 135]]),
        
        // Right heart (smaller, tilted other way) - IMPROVED
        createPath([[170, 140], [160, 130], [170, 120], [180, 130], [190, 120], [200, 130], [190, 140], [180, 150], [170, 160], [160, 150], [170, 140]]),
        
        // Right heart - closed happy eyes (curved)
        createPath([[168, 135], [172, 133], [176, 135]]),
        createPath([[178, 135], [182, 133], [186, 135]]),
        
        // Right heart - rosy cheeks
        createPath([[163, 142], [167, 142]]),
        createPath([[188, 142], [192, 142]]),
        
        // Right heart - smile
        createPath([[170, 142], [177, 145], [184, 142]]),
        
        // More flowers around (bigger and clearer)
        createPath([[150, 75], [145, 70], [150, 65], [155, 70], [150, 75]]),
        createPath([[145, 70], [140, 70]]),
        createPath([[155, 70], [160, 70]]),
        createPath([[150, 75], [150, 80]]),
        
        createPath([[75, 95], [70, 90], [75, 85], [80, 90], [75, 95]]),
        createPath([[70, 90], [65, 90]]),
        createPath([[80, 90], [85, 90]]),
        
        createPath([[225, 95], [220, 90], [225, 85], [230, 90], [225, 95]]),
        createPath([[220, 90], [215, 90]]),
        createPath([[230, 90], [235, 90]]),
        
        // Small hearts floating
        createPath([[60, 130], [57, 127], [60, 124], [63, 127], [60, 130]]),
        createPath([[240, 140], [237, 137], [240, 134], [243, 137], [240, 140]])
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
const generateCouple = (): Stroke[] => {
    return [
        // Girl - head
        createPath([[100, 110], [110, 105], [120, 110], [120, 120], [110, 125], [100, 120], [100, 110]]),
        createPath([[95, 112], [90, 120], [88, 135], [90, 150]]),
        createPath([[100, 108], [95, 115], [93, 130], [95, 145]]),
        createPath([[120, 108], [125, 115], [127, 130]]),
        createPath([[100, 108], [105, 103], [110, 101], [115, 103], [120, 108]]),
        createPath([[105, 115], [107, 115]]),
        createPath([[113, 115], [115, 115]]),
        createPath([[107, 120], [110, 121], [113, 120]]),
        createPath([[110, 125], [110, 145]]),
        createPath([[110, 145], [95, 170], [125, 170], [110, 145]]),
        
        // Boy - head
        createPath([[180, 110], [190, 105], [200, 110], [200, 120], [190, 125], [180, 120], [180, 110]]),
        createPath([[180, 108], [185, 103], [190, 101], [195, 103], [200, 108]]),
        createPath([[185, 115], [187, 115]]),
        createPath([[193, 115], [195, 115]]),
        createPath([[187, 120], [190, 121], [193, 120]]),
        createPath([[190, 125], [190, 155]]),
        createPath([[190, 155], [185, 175]]),
        createPath([[190, 155], [195, 175]]),
        
        // Holding hands
        createPath([[125, 145], [180, 145]]),
        
        // Hearts
        createPath([[135, 85], [130, 80], [135, 75], [140, 80], [145, 75], [150, 80], [145, 85], [140, 90], [135, 85]]),
        createPath([[155, 80], [152, 77], [155, 74], [158, 77], [161, 74], [164, 77], [161, 80], [158, 83], [155, 80]]),
        createPath([[170, 85], [165, 80], [170, 75], [175, 80], [180, 75], [185, 80], [180, 85], [175, 90], [170, 85]])
    ];
};

// NEW: 5. Cute Panda with I Love You Sign - IMPROVED
const generatePandaILoveYou = (): Stroke[] => {
    return [
        // Panda head (bigger, rounder)
        createPath([[150, 115], [170, 110], [185, 120], [192, 135], [192, 150], [185, 165], [170, 175], [150, 180], [130, 175], [115, 165], [108, 150], [108, 135], [115, 120], [130, 110], [150, 115]]),
        
        // Left ear (bigger)
        createPath([[122, 100], [128, 95], [134, 100], [134, 110], [128, 115], [122, 110], [122, 100]]),
        
        // Right ear (bigger)
        createPath([[166, 100], [172, 95], [178, 100], [178, 110], [172, 115], [166, 110], [166, 100]]),
        
        // Left eye (bigger, cuter)
        createPath([[132, 135], [138, 130], [144, 135], [144, 145], [138, 150], [132, 145], [132, 135]]),
        createPath([[136, 138], [138, 138]]), // pupil
        createPath([[136, 142], [138, 142]]), // shine
        
        // Right eye (bigger, cuter)
        createPath([[156, 135], [162, 130], [168, 135], [168, 145], [162, 150], [156, 145], [156, 135]]),
        createPath([[160, 138], [162, 138]]), // pupil
        createPath([[160, 142], [162, 142]]), // shine
        
        // Nose (bigger)
        createPath([[146, 152], [150, 150], [154, 152], [154, 156], [150, 158], [146, 156], [146, 152]]),
        
        // Mouth (bigger smile)
        createPath([[142, 160], [150, 163], [158, 160]]),
        
        // Rosy cheeks
        createPath([[120, 148], [124, 148]]),
        createPath([[176, 148], [180, 148]]),
        
        // Panda paws
        createPath([[108, 165], [115, 175], [120, 185]]),
        createPath([[192, 165], [185, 175], [180, 185]]),
        
        // Sign/card
        createPath([[120, 185], [180, 185], [180, 235], [120, 235], [120, 185]]),
        
        // "I" on sign
        createPath([[135, 200], [135, 220]]),
        
        // Heart on sign (bigger)
        createPath([[150, 200], [145, 195], [150, 190], [155, 195], [160, 190], [165, 195], [160, 200], [155, 205], [150, 210], [145, 205], [150, 200]]),
        
        // "U" on sign
        createPath([[170, 200], [170, 215], [175, 220], [180, 215], [180, 200]]),
        
        // Small hearts floating (3-4 hearts)
        createPath([[90, 105], [87, 102], [90, 99], [93, 102], [96, 99], [99, 102], [96, 105], [93, 108], [90, 105]]),
        createPath([[210, 105], [207, 102], [210, 99], [213, 102], [216, 99], [219, 102], [216, 105], [213, 108], [210, 105]]),
        createPath([[100, 180], [97, 177], [100, 174], [103, 177], [100, 180]]),
        createPath([[200, 180], [197, 177], [200, 174], [203, 177], [200, 180]])
    ];
};

// NEW: 6. Cute Teddy Bear with Heart - IMPROVED with "I LOVE YOU" on top
const generateTeddyBear = (): Stroke[] => {
    return [
        // "I LOVE YOU" text on top
        createPath([[120, 50], [120, 65]]), // I
        createPath([[135, 50], [145, 50], [145, 65], [135, 65]]), // L
        createPath([[155, 50], [165, 50], [165, 65], [155, 65], [155, 50]]), // O
        createPath([[175, 50], [180, 65], [185, 50]]), // V
        createPath([[195, 50], [205, 50]]), // E top
        createPath([[195, 50], [195, 65]]), // E vertical
        createPath([[195, 57], [203, 57]]), // E middle
        createPath([[195, 65], [205, 65]]), // E bottom
        
        // Head (bigger, rounder)
        createPath([[150, 95], [172, 90], [188, 100], [195, 115], [195, 130], [188, 145], [172, 155], [150, 160], [128, 155], [112, 145], [105, 130], [105, 115], [112, 100], [128, 90], [150, 95]]),
        
        // Left ear (bigger)
        createPath([[118, 80], [124, 75], [130, 80], [130, 92], [124, 97], [118, 92], [118, 80]]),
        
        // Right ear (bigger)
        createPath([[170, 80], [176, 75], [182, 80], [182, 92], [176, 97], [170, 92], [170, 80]]),
        
        // Left eye (bigger)
        createPath([[133, 115], [137, 115]]),
        createPath([[133, 112], [137, 112]]), // eyebrow
        
        // Right eye (bigger)
        createPath([[163, 115], [167, 115]]),
        createPath([[163, 112], [167, 112]]), // eyebrow
        
        // Snout/muzzle (bigger oval)
        createPath([[138, 125], [150, 122], [162, 125], [162, 138], [150, 141], [138, 138], [138, 125]]),
        
        // Nose (bigger)
        createPath([[146, 127], [150, 125], [154, 127], [154, 131], [150, 133], [146, 131], [146, 127]]),
        
        // Mouth (bigger smile)
        createPath([[150, 133], [143, 137], [150, 140], [157, 137], [150, 133]]),
        
        // Body (bigger, rounder)
        createPath([[128, 160], [115, 172], [108, 192], [115, 212], [140, 225], [160, 225], [185, 212], [192, 192], [185, 172], [172, 160]]),
        
        // Left arm
        createPath([[128, 165], [105, 178], [98, 195], [105, 210]]),
        
        // Right arm
        createPath([[172, 165], [195, 178], [202, 195], [195, 210]]),
        
        // Left leg/foot
        createPath([[130, 212], [123, 225], [123, 238], [135, 243], [147, 238], [147, 225]]),
        
        // Right leg/foot
        createPath([[170, 212], [177, 225], [177, 238], [165, 243], [153, 238], [153, 225]]),
        
        // Big heart in center (bigger)
        createPath([[150, 175], [132, 163], [150, 151], [168, 163], [186, 151], [204, 163], [186, 175], [168, 187], [150, 199], [132, 187], [150, 175]]),
        
        // Heart detail
        createPath([[150, 151], [150, 199]])
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
const generateEnvelope = (): Stroke[] => {
    return [
        createPath([[80, 100], [220, 100], [220, 200], [80, 200], [80, 100]]),
        createPath([[80, 100], [150, 160], [220, 100]])
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
    { id: 'couple', name: 'Couple', icon: '👫', strokes: generateCouple() },
    { id: 'panda', name: 'Panda Love', icon: '🐼', strokes: generatePandaILoveYou() },
    { id: 'teddy', name: 'Teddy Bear', icon: '🧸', strokes: generateTeddyBear() },
    { id: 'heart', name: 'Perfect Heart', icon: '❤️', strokes: generateHeart() },
    { id: 'rose', name: 'Rose', icon: '�', strokes: generateRose() },
    { id: 'tulip', name: 'Tulip', icon: '🌷', strokes: generateTulip() },
    { id: 'lips', name: 'Lips', icon: '💋', strokes: generateLips() },
    { id: 'love', name: 'Love', icon: '✍️', strokes: generateLoveText() },
    { id: 'ily', name: 'I <3 U', icon: '🤟', strokes: generateILoveU() },
    { id: 'infinity', name: 'Forever', icon: '♾️', strokes: generateInfinityHeart() },
    { id: 'arrow', name: 'Cupid', icon: '🏹', strokes: generateCupidArrow() },
    { id: 'ring', name: 'Marry Me', icon: '💍', strokes: generateRing() },
    { id: 'envelope', name: 'Envelope', icon: '💌', strokes: generateEnvelope() }
];
