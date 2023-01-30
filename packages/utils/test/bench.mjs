import Benchmark from 'benchmark';
import * as jsdom from 'jsdom';
import * as utils from '@pixi/utils';

const suite = new Benchmark.Suite();
const { document } = (new jsdom.JSDOM()).window;

suite
    .add('utils.trimCanvas', () =>
    {
        const canvas = document.createElement('canvas');

        canvas.width = 100;
        canvas.height = 50;

        const context = canvas.getContext('2d');

        context.fillStyle = '#ff0000';
        context.fillRect(10, 20, 10, 5);
        context.fillStyle = '#00ff00';
        context.fillRect(15, 25, 10, 5);

        utils.trimCanvas(canvas);
    })
    .add('utils.bar', () =>
    {
        'bar';
    })
    .on('cycle', (event) =>
    {
        /* eslint-disable-next-line no-console */
        console.log(String(event.target));
    })
    .run({ async: true });
