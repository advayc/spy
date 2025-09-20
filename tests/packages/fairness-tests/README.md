# Spy Game Fairness Tests

Core algorithms for testing the fairness of spy selection in the Spy game.

## Features

- Fisher-Yates shuffle implementation testing
- Statistical analysis of spy selection fairness
- Multiple test scenarios (fixed vs random spy counts)
- Comprehensive fairness scoring

## Usage

```python
from spy_fairness_tests.algorithms import FisherYatesTester
from spy_fairness_tests.analysis import FairnessAnalyzer

# Test your spy selection algorithm
tester = FisherYatesTester(players=["alice", "bob", "charlie"])
results = tester.run_tests(games=10000)

analyzer = FairnessAnalyzer(results)
score = analyzer.get_fairness_score()
print(f"Fairness Score: {score}/100")
```

## API

### FisherYatesTester

- `run_tests(games: int)` - Run fairness tests
- `get_statistics()` - Get detailed statistics

### FairnessAnalyzer

- `get_fairness_score()` - Calculate fairness score (0-100)
- `get_coefficient_of_variation()` - Get statistical variation
- `generate_report()` - Generate detailed analysis report