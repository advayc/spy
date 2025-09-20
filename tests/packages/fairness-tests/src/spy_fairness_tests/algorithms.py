"""
Core algorithms for testing spy selection fairness
"""

import random
from typing import List, Dict, Any
from dataclasses import dataclass
import numpy as np


@dataclass
class TestConfig:
    """Configuration for fairness tests"""
    players: List[str]
    games: int = 10000
    spy_count: int = 1
    use_random_spy_count: bool = False
    min_spies: int = 1
    max_spies: int = 6


@dataclass
class TestResults:
    """Results from fairness tests"""
    config: TestConfig
    spy_counts: Dict[str, int]
    total_games: int
    statistics: Dict[str, float]


class FisherYatesTester:
    """
    Tests the Fisher-Yates shuffle algorithm for fairness
    """

    def __init__(self, players: List[str]):
        self.players = players.copy()

    def _fisher_yates_shuffle(self, arr: List[str]) -> List[str]:
        """Fisher-Yates shuffle implementation"""
        shuffled = arr.copy()
        for i in range(len(shuffled) - 1, 0, -1):
            j = random.randint(0, i)
            shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
        return shuffled

    def _select_spies(self, spy_count: int) -> List[str]:
        """Select spies using Fisher-Yates shuffle"""
        shuffled = self._fisher_yates_shuffle(self.players)
        return shuffled[:spy_count]

    def run_single_test(self, config: TestConfig) -> TestResults:
        """Run a single fairness test"""
        spy_counts = {player: 0 for player in self.players}

        for _ in range(config.games):
            spies = self._select_spies(config.spy_count)
            for spy in spies:
                spy_counts[spy] += 1

        # Calculate statistics
        counts = list(spy_counts.values())
        expected_count = config.games / len(self.players)
        mean_count = np.mean(counts)
        std_count = np.std(counts)
        min_count = min(counts)
        max_count = max(counts)

        coefficient_of_variation = (std_count / mean_count) * 100 if mean_count > 0 else 0
        fairness_score = 100 - min(coefficient_of_variation, 100)

        statistics = {
            'expected_count': expected_count,
            'mean_count': mean_count,
            'std_count': std_count,
            'min_count': min_count,
            'max_count': max_count,
            'coefficient_of_variation': coefficient_of_variation,
            'fairness_score': fairness_score
        }

        return TestResults(
            config=config,
            spy_counts=spy_counts,
            total_games=config.games,
            statistics=statistics
        )

    def run_multiple_tests(self, configs: List[TestConfig]) -> List[TestResults]:
        """Run multiple test configurations"""
        results = []
        for config in configs:
            print(f"Running test: {config.games} games, {len(config.players)} players")
            result = self.run_single_test(config)
            results.append(result)
            print(".1f")
        return results


class FairnessAnalyzer:
    """
    Analyzes fairness test results
    """

    def __init__(self, results: TestResults):
        self.results = results

    def get_fairness_score(self) -> float:
        """Get overall fairness score (0-100)"""
        return self.results.statistics['fairness_score']

    def get_coefficient_of_variation(self) -> float:
        """Get coefficient of variation"""
        return self.results.statistics['coefficient_of_variation']

    def get_statistics_summary(self) -> Dict[str, Any]:
        """Get comprehensive statistics summary"""
        return {
            'fairness_score': self.get_fairness_score(),
            'coefficient_of_variation': self.get_coefficient_of_variation(),
            'expected_count': self.results.statistics['expected_count'],
            'actual_range': f"{self.results.statistics['min_count']}-{self.results.statistics['max_count']}",
            'standard_deviation': self.results.statistics['std_count'],
            'total_games': self.results.total_games,
            'players_count': len(self.results.config.players)
        }

    def generate_report(self) -> str:
        """Generate detailed analysis report"""
        stats = self.get_statistics_summary()

        report = f"""
SPY SELECTION FAIRNESS ANALYSIS REPORT
======================================

Test Configuration:
- Players: {stats['players_count']}
- Games: {stats['total_games']:,}
- Spy Count: {self.results.config.spy_count}

Fairness Metrics:
- Fairness Score: {stats['fairness_score']:.1f}/100
- Coefficient of Variation: {stats['coefficient_of_variation']:.2f}%
- Expected Count per Player: {stats['expected_count']:.2f}
- Actual Range: {stats['actual_range']}
- Standard Deviation: {stats['standard_deviation']:.2f}

Player Breakdown:
"""
        sorted_players = sorted(
            self.results.spy_counts.items(),
            key=lambda x: x[1],
            reverse=True
        )

        for player, count in sorted_players:
            probability = (count / self.results.total_games) * 100
            deviation = count - stats['expected_count']
            report += f"- {player}: {count} times ({probability:.2f}%, {deviation:+.1f})\n"

        return report