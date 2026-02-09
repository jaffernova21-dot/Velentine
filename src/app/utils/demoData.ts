import { Stroke } from './encode';

const RED = "rgba(255, 45, 85, 0.25)";

// Helper to create valid stroke paths
const createStroke = (pathPoints: number[][]): Stroke => {
    return {
        color: RED,
        path: pathPoints.map(([x, y]) => ({ x, y }))
    };
};

export const DEMO_CARDS = [
    {
        id: 'demo-1',
        sender: 'Romeo',
        receiver: 'Juliet',
        created_at: new Date().toISOString(),
        drawing: [
            // Heart shape attempt
            createStroke([[100, 100], [90, 90], [80, 85], [75, 100], [100, 130]]),
            createStroke([[100, 100], [110, 90], [120, 85], [125, 100], [100, 130]])
        ]
    },
    {
        id: 'demo-2',
        sender: 'Adam',
        receiver: 'Eve',
        created_at: new Date().toISOString(),
        drawing: [
            // Flower stem
            createStroke([[100, 150], [100, 100]]),
            // It gets repetitive to hand-code complex shapes, 
            // but we'll add some simple lines that look like "something"
            createStroke([[100, 100], [90, 90], [80, 100], [90, 110], [100, 100]]),
            createStroke([[100, 100], [110, 90], [120, 100], [110, 110], [100, 100]])
        ]
    },
    {
        id: 'demo-3',
        sender: 'Cupid',
        receiver: 'Everyone',
        created_at: new Date().toISOString(),
        drawing: [
            // Arrow
            createStroke([[50, 150], [150, 50]]),
            createStroke([[150, 50], [140, 50], [150, 60]]),
            createStroke([[50, 150], [60, 150], [50, 140]])
        ]
    },
    {
        id: 'demo-4',
        sender: 'Rose',
        receiver: 'Jack',
        created_at: new Date().toISOString(),
        drawing: [
            // Simple boat/wave?
            createStroke([[50, 100], [70, 120], [130, 120], [150, 100]]),
            createStroke([[50, 100], [150, 100]])
        ]
    },
    {
        id: 'demo-5',
        sender: 'Mr. Darcy',
        receiver: 'Elizabeth',
        created_at: new Date().toISOString(),
        drawing: [
            // Letter/Envelope
            createStroke([[50, 80], [150, 80], [150, 140], [50, 140], [50, 80]]),
            createStroke([[50, 80], [100, 110], [150, 80]])
        ]
    }
];
