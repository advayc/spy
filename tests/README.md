# Spy Game Tests Monorepo

A comprehensive testing suite for the Spy game, organized as a monorepo with multiple specialized packages.

## 📦 Packages

### 🔍 [fairness-tests](./packages/fairness-tests/)
Core algorithms for testing the fairness of spy selection mechanisms.

**Features:**
- Fisher-Yates shuffle implementation testing
- Statistical analysis of spy selection fairness
- Multiple test scenarios (fixed vs random spy counts)
- Comprehensive fairness scoring

```bash
cd packages/fairness-tests
pip install -e .
```

### 📊 [visualization](./packages/visualization/)
Beautiful visualization tools for test results and statistical analysis.

**Features:**
- Clean, professional charts for fairness analysis
- Multiple visualization types (bar charts, histograms, heatmaps)
- Export to multiple formats (PNG, SVG, PDF)
- Customizable themes and colors

```bash
cd packages/visualization
pip install -e .
```

### ⚡ [benchmark](./packages/benchmark/)
Performance benchmarking and profiling tools for algorithms.

**Features:**
- Algorithm performance comparison
- Memory usage profiling
- Execution time analysis
- Statistical performance metrics

```bash
cd packages/benchmark
pip install -e .
```

### 🔗 [integration](./packages/integration/)
Integration tests that connect with the main Spy game application.

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 18+ (for monorepo management)
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/advayc/spy-test.git
cd spy-test
```

2. **Install dependencies:**
```bash
# Install Python dependencies
pip install -r requirements.txt

# Or install all packages
npm run install:all
```

3. **Run tests:**
```bash
# Run all tests
npm run test

# Run specific package tests
npm run test:fairness
npm run test:visualization
npm run test:benchmark
```

## 📋 Available Scripts

```bash
# Testing
npm run test              # Run all tests
npm run test:fairness     # Test fairness algorithms
npm run test:visualization # Test visualization tools
npm run test:benchmark    # Run performance benchmarks
npm run test:all          # Run all tests sequentially

# Development
npm run install:all       # Install all dependencies
npm run clean             # Clean build artifacts
npm run lint              # Lint Python code
npm run format            # Format Python code
```

## 🏗️ Project Structure

```
spy-test/
├── packages/
│   ├── fairness-tests/        # Core fairness testing
│   │   ├── src/
│   │   │   └── spy_fairness_tests/
│   │   ├── tests/
│   │   ├── docs/
│   │   ├── pyproject.toml
│   │   └── README.md
│   ├── visualization/         # Visualization tools
│   │   ├── src/
│   │   │   └── spy_visualization/
│   │   ├── tests/
│   │   ├── docs/
│   │   ├── pyproject.toml
│   │   └── README.md
│   ├── benchmark/             # Performance benchmarking
│   │   ├── src/
│   │   │   └── spy_benchmark/
│   │   ├── tests/
│   │   ├── docs/
│   │   ├── pyproject.toml
│   │   └── README.md
│   └── integration/           # Integration tests
│       ├── src/
│       ├── tests/
│       ├── docs/
│       ├── pyproject.toml
│       └── README.md
├── results/                   # Test output and visualizations
├── requirements.txt           # Python dependencies
├── package.json              # Monorepo configuration
├── pyproject.toml            # Root Python configuration
├── .gitignore               # Git ignore rules
├── .gitattributes          # Git attributes
└── README.md               # This file
```

## 🔬 Usage Examples

### Testing Spy Selection Fairness

```python
from spy_fairness_tests.algorithms import FisherYatesTester, TestConfig

# Configure test
config = TestConfig(
    players=["advay", "bobby", "waleed", "farhan", "sohun"],
    games=10000,
    spy_count=1
)

# Run fairness test
tester = FisherYatesTester(config.players)
results = tester.run_single_test(config)

print(f"Fairness Score: {results.statistics['fairness_score']:.1f}/100")
```

### Creating Visualizations

```python
from spy_visualization.plot_generator import PlotGenerator

# Generate fairness plot
generator = PlotGenerator(theme="clean")
generator.create_fairness_plot(
    spy_counts={"advay": 650, "bobby": 680, "waleed": 670},
    total_games=2000,
    expected_prob=6.67,
    save_path="fairness_analysis.png"
)
```

### Performance Benchmarking

```python
from spy_benchmark.profiler import AlgorithmProfiler

# Benchmark algorithm performance
profiler = AlgorithmProfiler()
results = profiler.benchmark_algorithm(
    algorithm=my_spy_selection_function,
    iterations=100
)

print(f"Average time: {results['avg_time']:.4f}s")
print(f"Memory usage: {results['memory_mb']:.2f} MB")
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Follow PEP 8 for Python code
- Use type hints for all function parameters and return values
- Write comprehensive docstrings
- Keep functions focused and single-purpose

### Testing
- Write unit tests for all new functionality
- Aim for >90% code coverage
- Use descriptive test names
- Test edge cases and error conditions

### Documentation
- Update README files when adding new features
- Include code examples in docstrings
- Document API changes and breaking changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🔗 Links

- [Main Spy Game Repository](https://github.com/advayc/spy)
- [Issues](https://github.com/advayc/spy-test/issues)
- [Discussions](https://github.com/advayc/spy-test/discussions)

## 🙏 Acknowledgments

- Built for testing the Spy game's fairness algorithms
- Uses Fisher-Yates shuffle for optimal randomization
- Inspired by statistical analysis best practices

### Scenario 1: Fixed Single Spy
- **Players**: 15
- **Spy Count**: 1 (fixed)
- **Games**: 10,000
- **Expected Result**: Each player should be selected as spy ~667 times (1/15 probability)

### Scenario 2: Fixed Multiple Spies  
- **Players**: 15
- **Spy Count**: 3 (fixed)
- **Games**: 10,000
- **Expected Result**: Each player should be selected as spy ~2000 times (3/15 probability)

### Scenario 3: Random Spy Count
- **Players**: 15
- **Spy Count**: Random between 1-4
- **Games**: 10,000
- **Expected Result**: Each player should be selected proportionally to average spy count

## Interpreting Results

### Fairness Score
- **95-100**: Excellent fairness
- **90-94**: Very good fairness
- **80-89**: Good fairness
- **70-79**: Fair (acceptable but could be improved)
- **<70**: Needs improvement

### Key Metrics
- **Coefficient of Variation**: Lower is better (< 5% is excellent)
- **Standard Deviation**: Should be low relative to the mean
- **Min/Max Range**: Should be relatively tight around the expected value

### Visual Outputs
Each test generates:
1. **Bar Chart**: Spy count per player
2. **Histogram**: Distribution of spy counts
3. **Deviation Chart**: How far each player deviates from expected
4. **Probability Chart**: Actual vs expected probabilities
5. **Timeline Matrix**: Spy selections over time
6. **Statistical Summary**: Key metrics and interpretation

## Algorithm Details

The simulation replicates the exact algorithm used in the React Native app:

```typescript
// Fisher-Yates shuffle
const arr = [...players];
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const spyIds = arr.slice(0, finalSpyCount).map(p => p.id);
```

This ensures the test accurately reflects the actual game behavior.

## Expected Outcomes

With a proper random algorithm, we expect:
- Fairness scores above 90%
- Coefficient of variation under 10%
- Each player's spy count within 2 standard deviations of the mean
- No systematic bias toward any particular player

## Troubleshooting

### Dependencies Issues
```bash
# If matplotlib doesn't work on macOS:
pip install --upgrade matplotlib

# If seaborn is missing:
pip install seaborn pandas numpy
```

### Memory Issues
If you encounter memory issues with large simulations:
- Reduce `games_to_simulate` to 1000 or 5000
- The algorithm should still show fairness with fewer simulations

### No Display
If running on a headless server, add this to the top of the Python script:
```python
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend
```

## Contributing

When making changes to the spy selection algorithm in the main app:
1. Update this simulation to match the new algorithm
2. Run all test scenarios
3. Ensure fairness scores remain above 90%
4. Update this documentation if needed