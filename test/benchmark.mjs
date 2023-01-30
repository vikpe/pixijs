import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { globbySync } from 'globby';

async function main()
{
    // get/run benchmarks
    const paths = globbySync(['packages/**/test/bench.mjs']);
    const promises = [];

    for (let i = 0; i < paths.length; i++)
    {
        promises.push(new Promise((resolve) =>
        {
            const out = execSync(`node ${paths[i]}`).toString().trim().split('\n');

            resolve(out);
        }));
    }

    // merge and sort output
    await Promise.all(promises).then((r) =>
    {
        const resultFilePath = 'benchmark.txt';
        const resultOutput = r.flat(1);

        resultOutput.sort();
        writeFileSync(resultFilePath, resultOutput.join('\n') + '\n');
    });
}

await main();
