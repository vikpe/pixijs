const BENCHMARK_ITERATIONS = 1000;

class CustomReporter
{
    constructor(globalConfig, reporterOptions, reporterContext)
    {
        this._globalConfig = globalConfig;
        this._options = reporterOptions;
        this._context = reporterContext;
    }

    onRunComplete(testContexts, results)
    {
        console.log('Benchmarks:');
        const performedTestSuits = results.testResults.filter((t) => !t.skipped);
        const performedTestCases = performedTestSuits.map((t) => t.testResults).flat().filter((t) => t.status === 'passed');

        for (let i = 0; i < performedTestCases.length; i++)
        {
            const run = performedTestCases[i];
            const ops = Math.round(BENCHMARK_ITERATIONS * 1000 / run.duration);

            console.log(
                `${run.fullName}: ${BENCHMARK_ITERATIONS} iterations in ${run.duration} ms = ${ops} operations/second`
            );
        }
    }
}

module.exports = CustomReporter;
