import Benchmark from 'benchmark';

const suite = new Benchmark.Suite();

suite
    .add('ticker.foo', () =>
    {
        'foo';
    })
    .on('cycle', (event) =>
    {
        /* eslint-disable-next-line no-console */
        console.log(String(event.target));
    })
    .run({ async: true });
