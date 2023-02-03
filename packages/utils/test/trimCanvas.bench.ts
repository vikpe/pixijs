import { benchmarkSuite } from 'jest-bench';
import { trimCanvas } from '@pixi/utils';

benchmarkSuite('trimCanvas', {
    'non-empty canvas': () =>
    {
        const canvas = document.createElement('canvas');

        canvas.width = 100;
        canvas.height = 50;

        const context = canvas.getContext('2d');

        if (context === null) fail('Failed to get canvas 2D context');

        context.fillStyle = '#ff0000';
        context.fillRect(10, 20, 10, 5);
        context.fillStyle = '#00ff00';
        context.fillRect(15, 25, 10, 5);

        trimCanvas(canvas);
    },
});
