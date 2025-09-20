# Spy Game Benchmark Tools

Performance benchmarking and profiling tools for Spy game algorithms.

## Features

- Algorithm performance comparison
- Memory usage profiling
- Execution time analysis
- Statistical performance metrics
- Comparative benchmarking

## Usage

```python
from spy_benchmark.profiler import AlgorithmProfiler
from spy_fairness_tests.algorithms import FisherYatesTester

# Profile your algorithm performance
profiler = AlgorithmProfiler()
tester = FisherYatesTester(players=["alice", "bob", "charlie"])

# Run performance benchmark
results = profiler.benchmark_algorithm(
    algorithm=lambda: tester.run_single_test(tester.config),
    iterations=100
)

print(f"Average execution time: {results['avg_time']:.4f}s")
print(f"Memory usage: {results['memory_mb']:.2f} MB")
```

## Benchmark Types

- **Execution Time**: Measure algorithm speed
- **Memory Usage**: Track memory consumption
- **Scalability**: Test performance with different player counts
- **Statistical Analysis**: Comprehensive performance metrics