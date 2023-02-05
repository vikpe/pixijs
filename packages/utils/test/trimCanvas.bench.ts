import { benchmarkSuite } from 'jest-bench';
import { trimCanvas } from '@pixi/utils';

// setup
const canvas = document.createElement('canvas');

canvas.width = 500;
canvas.height = 500;

const context = canvas.getContext('2d');

if (context === null) fail('Failed to get canvas 2D context');

context.fillStyle = '#ff0000';
context.fillRect(10, 20, 10, 5);
context.fillStyle = '#00ff00';
context.fillRect(15, 25, 10, 5);

// benchmarks
benchmarkSuite('trimCanvas', {
    'non-empty canvas': () =>
    {
        trimCanvas(canvas);
    },
});
