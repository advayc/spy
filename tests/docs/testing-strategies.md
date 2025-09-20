# Testing Strategies

## Overview

Comprehensive testing strategies for the Spy game test suite, covering unit tests, integration tests, performance tests, and statistical validation.

## Testing Pyramid

```
End-to-End Tests (Integration)
    ↕️
API/Contract Tests
    ↕️
Component Tests
    ↕️
Unit Tests (Foundation)
```

## Unit Testing

### Algorithm Testing
```python
import pytest
from spy_tests.fairness.algorithms import FisherYatesTester

class TestFisherYatesTester:
    """Test Fisher-Yates shuffle implementation"""

    def test_uniform_distribution(self):
        """Test that spy selection follows uniform distribution"""
        tester = FisherYatesTester()
        players = [f"Player_{i}" for i in range(8)]

        # Run multiple trials
        results = tester.test_distribution_uniformity(
            players=players,
            num_trials=10000,
            random_seed=42
        )

        # Assert statistical properties
        assert results.fairness_score > 0.95
        assert abs(results.mean_spy_probability - 1/8) < 0.01

    def test_edge_cases(self):
        """Test edge cases for algorithm robustness"""
        tester = FisherYatesTester()

        # Single player
        assert tester.select_spy(["Alice"]) == "Alice"

        # Two players
        players = ["Alice", "Bob"]
        spy = tester.select_spy(players)
        assert spy in players

    @pytest.mark.parametrize("num_players", [3, 5, 7, 10])
    def test_various_player_counts(self, num_players):
        """Test algorithm with different player counts"""
        tester = FisherYatesTester()
        players = [f"Player_{i}" for i in range(num_players)]

        spy = tester.select_spy(players)
        assert spy in players
        assert len(players) == num_players - 1  # Spy removed
```

### Property-Based Testing
```python
from hypothesis import given, strategies as st
import hypothesis.strategies as hst

class TestPropertyBased:
    """Property-based tests for algorithm invariants"""

    @given(st.lists(st.text(min_size=1), min_size=1, max_size=20))
    def test_spy_always_selected(self, players):
        """Property: Spy is always selected from players"""
        tester = FisherYatesTester()
        original_players = players.copy()

        spy = tester.select_spy(players)

        # Spy must be from original players
        assert spy in original_players
        # Spy must be removed from players list
        assert spy not in players
        # Players list must be one shorter
        assert len(players) == len(original_players) - 1

    @given(st.lists(st.text(min_size=1), min_size=2, max_size=20),
           st.integers(min_value=1, max_value=1000))
    def test_fairness_convergence(self, players, num_trials):
        """Property: Fairness improves with more trials"""
        tester = FisherYatesTester()

        results = tester.test_fairness_over_trials(
            players=players,
            num_trials=num_trials
        )

        # More trials should give more stable results
        if num_trials > 100:
            assert results.confidence_interval_width < 0.1
```

## Integration Testing

### End-to-End Game Flow
```python
import pytest
from spy_tests.integration.game_flow import GameFlowTester

class TestGameIntegration:
    """Test complete game workflows"""

    def test_full_game_cycle(self):
        """Test complete game from setup to completion"""
        tester = GameFlowTester()

        # Setup game
        game_config = {
            "players": ["Alice", "Bob", "Charlie", "Diana"],
            "topics": ["Beach", "Mountain", "City"],
            "time_limit": 60
        }

        # Run full game
        result = tester.run_full_game(game_config)

        # Verify game completion
        assert result.game_completed
        assert result.winner in ["Spy", "Players"]
        assert result.duration_seconds > 0
        assert len(result.rounds) > 0

    def test_multi_round_game(self):
        """Test game with multiple rounds"""
        tester = GameFlowTester()

        game_result = tester.run_multi_round_game(
            players=["P1", "P2", "P3", "P4", "P5"],
            num_rounds=3
        )

        # Verify multiple rounds
        assert len(game_result.rounds) == 3

        # Verify spy fairness across rounds
        spy_counts = {}
        for round_result in game_result.rounds:
            spy = round_result.spy
            spy_counts[spy] = spy_counts.get(spy, 0) + 1

        # No player should be spy too frequently
        max_spy_count = max(spy_counts.values())
        assert max_spy_count <= 2  # For 3 rounds with 5 players

    def test_error_handling(self):
        """Test error handling in game flow"""
        tester = GameFlowTester()

        # Test with invalid configuration
        with pytest.raises(ValueError):
            tester.run_game({"players": []})  # Empty players

        with pytest.raises(ValueError):
            tester.run_game({"players": ["Alice"]})  # Single player
```

### API Integration Testing
```python
import requests
from unittest.mock import Mock, patch

class TestAPIIntegration:
    """Test integration with external APIs"""

    @patch('requests.post')
    def test_game_result_submission(self, mock_post):
        """Test submitting game results to external API"""
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"success": True}
        mock_post.return_value = mock_response

        from spy_tests.integration.api_client import GameAPIClient

        client = GameAPIClient()
        result = client.submit_game_result({
            "game_id": "test_123",
            "winner": "Players",
            "duration": 45
        })

        assert result["success"] is True
        mock_post.assert_called_once()

    def test_api_error_handling(self):
        """Test handling of API errors"""
        with patch('requests.post') as mock_post:
            mock_post.side_effect = requests.exceptions.ConnectionError()

            client = GameAPIClient()

            with pytest.raises(ConnectionError):
                client.submit_game_result({"test": "data"})
```

## Performance Testing

### Load Testing
```python
import time
from spy_tests.benchmark.performance_tester import PerformanceTester

class TestPerformance:
    """Performance testing for spy selection algorithms"""

    def test_selection_speed(self):
        """Test spy selection speed under load"""
        tester = PerformanceTester()

        # Test with different player counts
        player_counts = [10, 50, 100, 500]

        for count in player_counts:
            players = [f"Player_{i}" for i in range(count)]

            # Measure selection time
            start_time = time.time()
            for _ in range(1000):
                tester.select_spy_optimized(players.copy())
            end_time = time.time()

            avg_time = (end_time - start_time) / 1000

            # Assert reasonable performance
            if count <= 50:
                assert avg_time < 0.001  # < 1ms for small groups
            elif count <= 100:
                assert avg_time < 0.005  # < 5ms for medium groups

    def test_memory_usage(self):
        """Test memory usage during spy selection"""
        import psutil
        import os

        process = psutil.Process(os.getpid())
        initial_memory = process.memory_info().rss

        # Run memory-intensive operations
        tester = PerformanceTester()
        for _ in range(10000):
            players = [f"Player_{i}" for i in range(20)]
            tester.select_spy_optimized(players)

        final_memory = process.memory_info().rss
        memory_delta = final_memory - initial_memory

        # Assert reasonable memory usage (< 50MB increase)
        assert memory_delta < 50 * 1024 * 1024

    def test_concurrent_performance(self):
        """Test performance under concurrent load"""
        import concurrent.futures

        tester = PerformanceTester()

        def worker(game_id):
            players = [f"Game_{game_id}_Player_{i}" for i in range(8)]
            return tester.select_spy_optimized(players)

        # Test with multiple concurrent games
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            start_time = time.time()
            futures = [executor.submit(worker, i) for i in range(100)]
            results = [future.result() for future in concurrent.futures.as_completed(futures)]
            end_time = time.time()

        total_time = end_time - start_time

        # Assert reasonable concurrent performance
        assert total_time < 5.0  # Complete within 5 seconds
        assert len(results) == 100  # All games completed
```

### Stress Testing
```python
class TestStress:
    """Stress testing for extreme conditions"""

    def test_large_player_counts(self):
        """Test with very large player counts"""
        tester = PerformanceTester()

        # Test with 1000+ players
        large_group = [f"Player_{i}" for i in range(1500)]

        start_time = time.time()
        spy = tester.select_spy_optimized(large_group)
        end_time = time.time()

        # Should complete reasonably fast
        assert end_time - start_time < 0.1  # < 100ms
        assert spy in large_group

    def test_high_frequency_selection(self):
        """Test rapid successive spy selections"""
        tester = PerformanceTester()
        players = [f"Player_{i}" for i in range(10)]

        start_time = time.time()
        spies = []
        for _ in range(100000):  # 100k selections
            spies.append(tester.select_spy_optimized(players.copy()))
        end_time = time.time()

        total_time = end_time - start_time

        # Assert high throughput
        assert total_time < 10.0  # Complete within 10 seconds
        assert len(spies) == 100000

        # Verify fairness in high-frequency scenario
        from collections import Counter
        spy_counts = Counter(spies)
        most_common_count = spy_counts.most_common(1)[0][1]

        # No player should be spy excessively more than others
        assert most_common_count < 15000  # < 15% of selections
```

## Statistical Testing

### Distribution Testing
```python
import numpy as np
from scipy import stats

class TestStatisticalProperties:
    """Test statistical properties of spy selection"""

    def test_uniform_distribution_chi_square(self):
        """Test uniformity using chi-square test"""
        tester = FisherYatesTester()
        players = [f"Player_{i}" for i in range(6)]

        # Collect spy selections
        spy_counts = {player: 0 for player in players}
        num_trials = 6000

        for _ in range(num_trials):
            spy = tester.select_spy(players.copy())
            spy_counts[spy] += 1

        # Chi-square test for uniformity
        observed = list(spy_counts.values())
        expected = [num_trials / len(players)] * len(players)

        chi_square_stat, p_value = stats.chisquare(observed, expected)

        # Assert uniform distribution (p > 0.05)
        assert p_value > 0.05
        assert chi_square_stat < stats.chi2.ppf(0.95, len(players) - 1)

    def test_independence_ks_test(self):
        """Test independence using Kolmogorov-Smirnov test"""
        tester = FisherYatesTester()

        # Generate sequence of spy selections
        players = ["A", "B", "C", "D"]
        selections = []

        for _ in range(1000):
            spy = tester.select_spy(players.copy())
            selections.append(players.index(spy))

        # Test if selections follow uniform distribution
        # Normalize to [0,1] for KS test
        normalized = np.array(selections) / (len(players) - 1)

        statistic, p_value = stats.kstest(normalized, 'uniform')

        # Assert follows uniform distribution
        assert p_value > 0.05
        assert statistic < 0.1

    def test_randomness_dieharder_suite(self):
        """Test randomness using dieharder test suite"""
        from spy_tests.fairness.randomness_tester import RandomnessTester

        tester = RandomnessTester()

        # Generate large sequence of random numbers
        sequence = tester.generate_random_sequence(length=100000)

        # Run dieharder tests
        results = tester.run_dieharder_tests(sequence)

        # Assert passes basic randomness tests
        assert results.passes_birthday_test
        assert results.passes_opso_test
        assert results.passes_oqso_test
        assert results.overall_score > 0.8
```

## Test Organization and Execution

### Test Configuration
```python
# pytest.ini
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts =
    --strict-markers
    --disable-warnings
    --tb=short
    -v
markers =
    slow: marks tests as slow (deselect with '-m "not slow"')
    integration: marks tests as integration tests
    performance: marks tests as performance tests
    statistical: marks tests as statistical tests
```

### Test Execution Strategies
```bash
# Run all tests
make test

# Run specific test categories
make test-unit
make test-integration
make test-performance

# Run with coverage
make test-coverage

# Run slow tests only
pytest -m slow

# Run tests in parallel
pytest -n auto
```

### Continuous Integration
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.9, "3.10", "3.11"]

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v4
      with:
        python-version: ${{ matrix.python-version }}

    - name: Install dependencies
      run: make install

    - name: Run tests
      run: make test

    - name: Run performance tests
      run: make test-performance

    - name: Upload coverage
      uses: codecov/codecov-action@v3
```

This comprehensive testing strategy ensures the reliability, performance, and statistical correctness of the Spy game test suite.