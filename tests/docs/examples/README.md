# Basic Usage Examples

This directory contains practical examples of using the Spy Test Suite packages.

## Quick Start Example

```python
#!/usr/bin/env python3
"""
Basic example of using the Spy Test Suite to evaluate fairness
"""

from spy_tests.fairness import FairnessAnalyzer
from spy_tests.visualization import PlotGenerator

def main():
    # Initialize analyzer
    analyzer = FairnessAnalyzer()

    # Define players
    players = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

    # Test Fisher-Yates algorithm
    print("Testing Fisher-Yates shuffle fairness...")
    results = analyzer.test_algorithm(
        algorithm="fisher_yates",
        players=players,
        num_rounds=10000,
        random_seed=42
    )

    print(f"Fairness Score: {results.fairness_score:.4f}")
    print(f"Confidence Interval: {results.confidence_interval}")
    print(f"Expected Probability: {1/len(players):.4f}")

    # Create visualization
    plotter = PlotGenerator()
    fig = plotter.create_fairness_summary_plot(results)
    fig.savefig("fairness_results.png", dpi=300, bbox_inches='tight')

    print("Results saved to fairness_results.png")

if __name__ == "__main__":
    main()
```

## Advanced Fairness Testing

```python
#!/usr/bin/env python3
"""
Advanced fairness testing with multiple algorithms and statistical validation
"""

import numpy as np
from spy_tests.fairness import FairnessAnalyzer, StatisticalTester
from spy_tests.visualization import PlotGenerator

def compare_algorithms():
    """Compare multiple spy selection algorithms"""

    analyzer = FairnessAnalyzer()
    stat_tester = StatisticalTester()
    plotter = PlotGenerator()

    players = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"]
    algorithms = ["fisher_yates", "lfg_random", "system_random"]
    num_rounds = 50000

    results = {}

    print("Comparing spy selection algorithms...")
    print("=" * 50)

    for algorithm in algorithms:
        print(f"\nTesting {algorithm}...")

        # Run fairness analysis
        result = analyzer.test_algorithm(
            algorithm=algorithm,
            players=players,
            num_rounds=num_rounds,
            random_seed=42
        )

        # Run statistical tests
        stat_result = stat_tester.run_comprehensive_tests(
            spy_counts=result.spy_counts,
            expected_count=num_rounds / len(players)
        )

        results[algorithm] = {
            'fairness': result,
            'statistics': stat_result
        }

        print(f"  Fairness Score: {result.fairness_score:.4f}")
        print(f"  Chi-Square P-value: {stat_result.chi_square_p_value:.4f}")
        print(f"  KS Test P-value: {stat_result.ks_test_p_value:.4f}")

    # Create comparison plot
    plotter.create_algorithm_comparison_plot(results)
    print("\nComparison plot saved to algorithm_comparison.png")

    return results

def analyze_fairness_convergence():
    """Analyze how fairness score converges with more test rounds"""

    analyzer = FairnessAnalyzer()
    players = ["A", "B", "C", "D", "E", "F"]

    round_counts = [100, 500, 1000, 5000, 10000, 50000]
    fairness_scores = []

    print("\nAnalyzing fairness convergence...")
    print("=" * 40)

    for rounds in round_counts:
        result = analyzer.test_algorithm(
            algorithm="fisher_yates",
            players=players,
            num_rounds=rounds,
            random_seed=42
        )

        fairness_scores.append(result.fairness_score)
        print(f"Rounds: {rounds:6d} | Fairness: {result.fairness_score:.4f}")

    # Plot convergence
    plotter = PlotGenerator()
    plotter.create_convergence_plot(round_counts, fairness_scores)
    print("Convergence plot saved to fairness_convergence.png")

if __name__ == "__main__":
    # Run algorithm comparison
    results = compare_algorithms()

    # Analyze convergence
    analyze_fairness_convergence()

    print("\nAll examples completed successfully!")
```

## Performance Benchmarking

```python
#!/usr/bin/env python3
"""
Performance benchmarking example
"""

import time
from spy_tests.benchmark import PerformanceProfiler
from spy_tests.visualization import PlotGenerator

def benchmark_algorithms():
    """Benchmark different spy selection algorithms"""

    profiler = PerformanceProfiler()
    plotter = PlotGenerator()

    algorithms = ["fisher_yates", "lfg_random", "system_random", "hash_based"]
    player_counts = [8, 16, 32, 64, 128]

    print("Benchmarking spy selection algorithms...")
    print("=" * 50)

    results = {}

    for algorithm in algorithms:
        print(f"\nBenchmarking {algorithm}...")
        algorithm_results = {}

        for num_players in player_counts:
            players = [f"Player_{i}" for i in range(num_players)]

            # Benchmark execution time
            start_time = time.time()
            for _ in range(10000):
                profiler.select_spy(algorithm, players.copy())
            end_time = time.time()

            avg_time = (end_time - start_time) / 10000 * 1000  # Convert to ms
            algorithm_results[num_players] = avg_time
            print(f"  {num_players:3d} players: {avg_time:.4f} ms")

        results[algorithm] = algorithm_results

    # Create performance plot
    plotter.create_performance_plot(results, player_counts)
    print("\nPerformance plot saved to algorithm_performance.png")

    return results

def memory_profiling():
    """Profile memory usage of spy selection"""

    profiler = PerformanceProfiler()

    print("\nProfiling memory usage...")
    print("=" * 30)

    players = [f"Player_{i}" for i in range(100)]

    # Profile memory usage
    memory_stats = profiler.profile_memory_usage(
        algorithm="fisher_yates",
        players=players,
        num_iterations=50000
    )

    print(f"Peak Memory Usage: {memory_stats.peak_memory_mb:.2f} MB")
    print(f"Memory Efficiency: {memory_stats.memory_efficiency:.2f}")
    print(f"Average Memory per Selection: {memory_stats.avg_memory_per_selection_kb:.2f} KB")

    # Create memory profile plot
    plotter = PlotGenerator()
    plotter.create_memory_profile_plot(memory_stats)
    print("Memory profile saved to memory_usage.png")

if __name__ == "__main__":
    # Run benchmarks
    perf_results = benchmark_algorithms()

    # Profile memory
    memory_profiling()

    print("\nBenchmarking completed!")
```

## Integration Testing

```python
#!/usr/bin/env python3
"""
Integration testing example for end-to-end game flow
"""

from spy_tests.integration import GameFlowTester
from spy_tests.visualization import PlotGenerator

def test_complete_game_flow():
    """Test a complete game from start to finish"""

    tester = GameFlowTester()
    plotter = PlotGenerator()

    # Game configuration
    game_config = {
        "players": ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"],
        "topics": ["Beach", "Mountain", "City", "Forest", "Desert"],
        "time_limit_seconds": 300,
        "num_rounds": 3
    }

    print("Testing complete game flow...")
    print("=" * 35)

    # Run complete game
    game_result = tester.run_complete_game(game_config)

    print("Game Results:")
    print(f"  Total Rounds: {len(game_result.rounds)}")
    print(f"  Game Duration: {game_result.total_duration_seconds:.1f} seconds")
    print(f"  Final Winner: {game_result.final_winner}")
    print(f"  Spy Success Rate: {game_result.spy_success_rate:.2%}")

    # Analyze fairness across rounds
    fairness_stats = tester.analyze_fairness_across_rounds(game_result)

    print("
Fairness Analysis:")
    print(f"  Overall Fairness: {fairness_stats.overall_fairness:.4f}")
    print(f"  Spy Distribution Uniformity: {fairness_stats.spy_distribution_uniformity:.4f}")
    print(f"  Round Independence: {fairness_stats.round_independence:.4f}")

    # Create game summary visualization
    plotter.create_game_summary_plot(game_result)
    print("\nGame summary saved to game_summary.png")

    return game_result, fairness_stats

def test_multi_player_scenarios():
    """Test various player count scenarios"""

    tester = GameFlowTester()

    player_scenarios = [
        {"count": 4, "description": "Small group"},
        {"count": 8, "description": "Standard group"},
        {"count": 12, "description": "Large group"},
        {"count": 20, "description": "Very large group"}
    ]

    print("\nTesting different player counts...")
    print("=" * 40)

    results = {}

    for scenario in player_scenarios:
        players = [f"Player_{i+1}" for i in range(scenario["count"])]

        game_config = {
            "players": players,
            "topics": ["Topic_A", "Topic_B", "Topic_C"],
            "time_limit_seconds": 180,
            "num_rounds": 2
        }

        print(f"\nTesting {scenario['description']} ({scenario['count']} players)...")

        game_result = tester.run_complete_game(game_config)

        fairness_stats = tester.analyze_fairness_across_rounds(game_result)

        results[scenario["count"]] = {
            "game_result": game_result,
            "fairness_stats": fairness_stats
        }

        print(f"  Fairness Score: {fairness_stats.overall_fairness:.4f}")
        print(f"  Game Duration: {game_result.total_duration_seconds:.1f}s")

    # Create comparative analysis
    plotter = PlotGenerator()
    plotter.create_multi_scenario_plot(results)
    print("\nMulti-scenario analysis saved to scenario_comparison.png")

    return results

if __name__ == "__main__":
    # Test complete game flow
    game_result, fairness_stats = test_complete_game_flow()

    # Test different player scenarios
    scenario_results = test_multi_player_scenarios()

    print("\nAll integration tests completed!")
```

## Custom Algorithm Implementation

```python
#!/usr/bin/env python3
"""
Example of implementing and testing a custom spy selection algorithm
"""

import random
from typing import List
from spy_tests.fairness import FairnessAnalyzer, AlgorithmTester
from spy_tests.visualization import PlotGenerator

class CustomSpySelector:
    """Custom spy selection algorithm example"""

    def __init__(self, seed: int = None):
        self.random = random.Random(seed)

    def select_spy_weighted(self, players: List[str]) -> str:
        """
        Weighted random selection favoring less recent spies

        This algorithm maintains a history of recent spy selections
        and reduces the probability of recently selected players.
        """
        if not hasattr(self, 'history'):
            self.history = {}

        # Initialize history for new players
        for player in players:
            if player not in self.history:
                self.history[player] = 0

        # Calculate weights (inverse of recent selections)
        weights = []
        for player in players:
            # Weight = 1 / (recent_selections + 1)
            weight = 1.0 / (self.history[player] + 1)
            weights.append(weight)

        # Normalize weights to probabilities
        total_weight = sum(weights)
        probabilities = [w / total_weight for w in weights]

        # Select spy based on weights
        rand_val = self.random.random()
        cumulative_prob = 0.0

        for i, prob in enumerate(probabilities):
            cumulative_prob += prob
            if rand_val <= cumulative_prob:
                selected_player = players[i]
                break

        # Update history
        self.history[selected_player] += 1

        # Decay history occasionally to prevent long-term bias
        if self.random.random() < 0.1:  # 10% chance
            for player in self.history:
                self.history[player] = max(0, self.history[player] - 1)

        return selected_player

def test_custom_algorithm():
    """Test the custom weighted spy selection algorithm"""

    # Initialize components
    custom_selector = CustomSpySelector(seed=42)
    analyzer = FairnessAnalyzer()
    plotter = PlotGenerator()

    players = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

    print("Testing Custom Weighted Spy Selection...")
    print("=" * 45)

    # Test fairness over multiple rounds
    num_rounds = 10000
    spy_counts = {player: 0 for player in players}

    for round_num in range(num_rounds):
        spy = custom_selector.select_spy_weighted(players.copy())
        spy_counts[spy] += 1

        # Print progress
        if (round_num + 1) % 2000 == 0:
            print(f"Completed {round_num + 1}/{num_rounds} rounds...")

    # Calculate fairness metrics
    total_selections = sum(spy_counts.values())
    expected_per_player = total_selections / len(players)

    fairness_score = 1 - (max(spy_counts.values()) - min(spy_counts.values())) / expected_per_player

    print("
Results:")
    print(f"  Total Rounds: {num_rounds}")
    print(f"  Fairness Score: {fairness_score:.4f}")
    print(f"  Expected per Player: {expected_per_player:.1f}")

    print("
Spy Selection Counts:")
    for player, count in sorted(spy_counts.items(), key=lambda x: x[1], reverse=True):
        percentage = (count / total_selections) * 100
        print(f"  {player}: {count:4d} ({percentage:5.1f}%)")

    # Create visualization
    plotter.create_custom_algorithm_plot(spy_counts, expected_per_player)
    print("\nVisualization saved to custom_algorithm_results.png")

    return spy_counts, fairness_score

def compare_with_standard_algorithms():
    """Compare custom algorithm with standard implementations"""

    analyzer = FairnessAnalyzer()
    players = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

    algorithms_to_test = [
        ("fisher_yates", "Fisher-Yates Shuffle"),
        ("custom_weighted", "Custom Weighted"),
        ("system_random", "System Random")
    ]

    print("\nComparing Algorithms...")
    print("=" * 25)

    results = {}

    for alg_name, display_name in algorithms_to_test:
        print(f"\nTesting {display_name}...")

        if alg_name == "custom_weighted":
            # Use custom implementation
            selector = CustomSpySelector(seed=42)
            spy_counts = {player: 0 for player in players}

            for _ in range(10000):
                spy = selector.select_spy_weighted(players.copy())
                spy_counts[spy] += 1

            # Calculate fairness manually for custom algorithm
            total_selections = sum(spy_counts.values())
            expected_per_player = total_selections / len(players)
            fairness_score = 1 - (max(spy_counts.values()) - min(spy_counts.values())) / expected_per_player

            results[alg_name] = {
                'fairness_score': fairness_score,
                'spy_counts': spy_counts,
                'display_name': display_name
            }
        else:
            # Use built-in analyzer
            result = analyzer.test_algorithm(
                algorithm=alg_name,
                players=players,
                num_rounds=10000,
                random_seed=42
            )

            results[alg_name] = {
                'fairness_score': result.fairness_score,
                'spy_counts': result.spy_counts,
                'display_name': display_name
            }

        print(f"  Fairness Score: {results[alg_name]['fairness_score']:.4f}")

    # Create comparison visualization
    plotter = PlotGenerator()
    plotter.create_algorithm_comparison_plot(results)
    print("\nComparison saved to algorithm_comparison_custom.png")

    return results

if __name__ == "__main__":
    # Test custom algorithm
    spy_counts, fairness_score = test_custom_algorithm()

    # Compare with standard algorithms
    comparison_results = compare_with_standard_algorithms()

    print("\nCustom algorithm testing completed!")
```

These examples demonstrate the key features and usage patterns of the Spy Test Suite packages. Each example can be run independently and includes visualization output.