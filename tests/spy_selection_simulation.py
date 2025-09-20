#!/usr/bin/env python3
"""
Spy Selection Fairness Simulation
==================================

This script simulates the spy selection algorithm used in the React Native spy game
to test the fairness of player selection over multiple games.

The algorithm being tested:
1. Fisher-Yates shuffle of all players
2. Select first N players as spies (where N is the spy count)
3. Track how often each player becomes a spy

Expected result: Each player should have approximately equal probability of being selected as a spy.
"""

import random
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from dataclasses import dataclass
from typing import List, Dict, Tuple
import pandas as pd
from collections import defaultdict
import json
from pathlib import Path


@dataclass
class Player:
    """Represents a player in the game"""
    id: str
    name: str


@dataclass
class GameSettings:
    """Game configuration settings"""
    min_spies: int = 1
    max_spies: int = 6
    players_count: int = 15
    games_to_simulate: int = 10000
    spy_count: int = 1  # Fixed spy count for deterministic testing
    use_random_spy_count: bool = False


class SpySelectionSimulator:
    """Simulates the spy selection algorithm from the React Native game"""
    
    def __init__(self, settings: GameSettings):
        self.settings = settings
        self.players = self._create_players()
        self.results = defaultdict(int)  # Track spy count per player
        self.game_history = []  # Track each game's spy selections
        
    def _create_players(self) -> List[Player]:
        """Create test players with your friend names"""
        names = [
            "advay", "bobby", "waleed", "farhan", "sohun", "rohan", "suhayb", 
            "nirupa", "jose", "aaron", "jason", "franklin", "johnathan", "arush", "sameer"
        ]
        return [Player(id=str(i), name=names[i]) for i in range(self.settings.players_count)]
    
    def _fisher_yates_shuffle(self, arr: List[Player]) -> List[Player]:
        """
        Fisher-Yates shuffle algorithm implementation
        This matches the algorithm used in the React Native game store
        """
        shuffled = arr.copy()
        for i in range(len(shuffled) - 1, 0, -1):
            j = random.randint(0, i)  # randint is inclusive on both ends
            shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
        return shuffled
    
    def _determine_spy_count(self) -> int:
        """Determine number of spies for this game"""
        if self.settings.use_random_spy_count:
            # Simulate the random spy count logic from the game
            dynamic_max = min(self.settings.max_spies, len(self.players))
            dynamic_min = max(0, min(self.settings.min_spies, dynamic_max))
            span = dynamic_max - dynamic_min + 1
            return dynamic_min + random.randint(0, span - 1)
        else:
            return self.settings.spy_count
    
    def simulate_single_game(self) -> Tuple[List[str], int]:
        """
        Simulate a single game's spy selection
        Returns: (spy_player_ids, spy_count)
        """
        # Determine number of spies
        spy_count = self._determine_spy_count()
        
        # Fisher-Yates shuffle (matching the game's algorithm)
        shuffled_players = self._fisher_yates_shuffle(self.players)
        
        # Select first N players as spies
        spy_players = shuffled_players[:spy_count]
        spy_ids = [player.id for player in spy_players]
        
        return spy_ids, spy_count
    
    def run_simulation(self) -> Dict:
        """Run the full simulation and collect results"""
        print(f"Starting simulation: {self.settings.games_to_simulate} games with {len(self.players)} players")
        print(f"Spy count: {'Random' if self.settings.use_random_spy_count else self.settings.spy_count}")
        print("-" * 60)
        
        # Reset results
        self.results = defaultdict(int)
        self.game_history = []
        
        for game_num in range(self.settings.games_to_simulate):
            spy_ids, spy_count = self.simulate_single_game()
            
            # Record results
            for spy_id in spy_ids:
                self.results[spy_id] += 1
            
            # Store game history for detailed analysis
            self.game_history.append({
                'game': game_num + 1,
                'spy_ids': spy_ids,
                'spy_count': spy_count,
                'spy_names': [self.players[int(spy_id)].name for spy_id in spy_ids]
            })
            
            # Progress indicator
            if (game_num + 1) % 1000 == 0:
                print(f"Completed {game_num + 1} games...")
        
        return self._analyze_results()
    
    def _analyze_results(self) -> Dict:
        """Analyze simulation results for fairness"""
        total_games = len(self.game_history)
        total_spy_selections = sum(self.results.values())
        
        # Calculate statistics
        spy_counts_per_player = [self.results[str(i)] for i in range(len(self.players))]
        mean_spy_count = np.mean(spy_counts_per_player)
        std_spy_count = np.std(spy_counts_per_player)
        min_spy_count = min(spy_counts_per_player)
        max_spy_count = max(spy_counts_per_player)
        
        # Expected probability (theoretical)
        if self.settings.use_random_spy_count:
            # Calculate expected spy count based on random range
            dynamic_max = min(self.settings.max_spies, len(self.players))
            dynamic_min = max(0, min(self.settings.min_spies, dynamic_max))
            expected_avg_spies = (dynamic_max + dynamic_min) / 2
        else:
            expected_avg_spies = self.settings.spy_count
        
        expected_spy_probability = expected_avg_spies / len(self.players)
        expected_spy_count_per_player = expected_spy_probability * total_games
        
        # Calculate fairness metrics
        variance_from_expected = np.var([count - expected_spy_count_per_player for count in spy_counts_per_player])
        coefficient_of_variation = (std_spy_count / mean_spy_count) * 100 if mean_spy_count > 0 else 0
        
        analysis = {
            'total_games': total_games,
            'total_spy_selections': total_spy_selections,
            'expected_spy_count_per_player': expected_spy_count_per_player,
            'actual_spy_counts': spy_counts_per_player,
            'mean_spy_count': mean_spy_count,
            'std_spy_count': std_spy_count,
            'min_spy_count': min_spy_count,
            'max_spy_count': max_spy_count,
            'variance_from_expected': variance_from_expected,
            'coefficient_of_variation': coefficient_of_variation,
            'fairness_score': 100 - min(coefficient_of_variation, 100),  # 100 = perfectly fair
            'expected_spy_probability': expected_spy_probability
        }
        
        return analysis
    
    def generate_visualizations(self, analysis: Dict, save_path: str = None):
        """Generate comprehensive visualizations of the simulation results"""
        if save_path:
            save_path = Path(save_path)
            save_path.mkdir(exist_ok=True)
        
        # Set up the plotting style
        plt.style.use('dark_background')
        sns.set_palette("husl")
        
        # Create a comprehensive figure with multiple subplots
        fig = plt.figure(figsize=(20, 16))
        fig.suptitle('Spy Selection Fairness Analysis', fontsize=20, fontweight='bold')
        
        # 1. Spy Count Distribution Bar Chart
        ax1 = plt.subplot(2, 3, 1)
        player_names = [player.name for player in self.players]
        spy_counts = analysis['actual_spy_counts']
        expected_count = analysis['expected_spy_count_per_player']
        
        bars = ax1.bar(range(len(player_names)), spy_counts, alpha=0.7, color='skyblue', edgecolor='navy')
        ax1.axhline(y=expected_count, color='red', linestyle='--', linewidth=2, label=f'Expected: {expected_count:.1f}')
        ax1.set_xlabel('Players')
        ax1.set_ylabel('Times Selected as Spy')
        ax1.set_title('Spy Selection Count per Player')
        ax1.set_xticks(range(len(player_names)))
        ax1.set_xticklabels(player_names, rotation=45, ha='right')
        ax1.legend()
        ax1.grid(True, alpha=0.3)
        
        # Add value labels on bars
        for i, bar in enumerate(bars):
            height = bar.get_height()
            ax1.text(bar.get_x() + bar.get_width()/2., height + 0.5,
                    f'{int(height)}', ha='center', va='bottom', fontsize=8)
        
        # 2. Distribution Histogram
        ax2 = plt.subplot(2, 3, 2)
        ax2.hist(spy_counts, bins=20, alpha=0.7, color='lightgreen', edgecolor='darkgreen')
        ax2.axvline(x=expected_count, color='red', linestyle='--', linewidth=2, label=f'Expected: {expected_count:.1f}')
        ax2.axvline(x=analysis['mean_spy_count'], color='orange', linestyle='-', linewidth=2, label=f'Actual Mean: {analysis["mean_spy_count"]:.1f}')
        ax2.set_xlabel('Spy Count')
        ax2.set_ylabel('Number of Players')
        ax2.set_title('Distribution of Spy Counts')
        ax2.legend()
        ax2.grid(True, alpha=0.3)
        
        # 3. Deviation from Expected
        ax3 = plt.subplot(2, 3, 3)
        deviations = [count - expected_count for count in spy_counts]
        colors = ['red' if dev < 0 else 'green' for dev in deviations]
        bars3 = ax3.bar(range(len(player_names)), deviations, color=colors, alpha=0.7)
        ax3.axhline(y=0, color='white', linestyle='-', linewidth=1)
        ax3.set_xlabel('Players')
        ax3.set_ylabel('Deviation from Expected')
        ax3.set_title('Deviation from Expected Spy Count')
        ax3.set_xticks(range(len(player_names)))
        ax3.set_xticklabels(player_names, rotation=45, ha='right')
        ax3.grid(True, alpha=0.3)
        
        # 4. Spy Selection Probability
        ax4 = plt.subplot(2, 3, 4)
        probabilities = [count / analysis['total_games'] for count in spy_counts]
        expected_prob = analysis['expected_spy_probability']
        
        ax4.bar(range(len(player_names)), probabilities, alpha=0.7, color='purple')
        ax4.axhline(y=expected_prob, color='red', linestyle='--', linewidth=2, label=f'Expected: {expected_prob:.3f}')
        ax4.set_xlabel('Players')
        ax4.set_ylabel('Probability of Being Spy')
        ax4.set_title('Spy Selection Probability per Player')
        ax4.set_xticks(range(len(player_names)))
        ax4.set_xticklabels(player_names, rotation=45, ha='right')
        ax4.legend()
        ax4.grid(True, alpha=0.3)
        
        # 5. Statistical Summary Box
        ax5 = plt.subplot(2, 3, 5)
        ax5.axis('off')
        
        summary_text = f"""
        STATISTICAL SUMMARY
        ═══════════════════════════════════
        
        Total Games Simulated: {analysis['total_games']:,}
        Total Players: {len(self.players)}
        Spy Count Mode: {'Random' if self.settings.use_random_spy_count else 'Fixed'}
        
        FAIRNESS METRICS
        ─────────────────────────────────────────
        Expected Spy Count/Player: {expected_count:.2f}
        Actual Mean: {analysis['mean_spy_count']:.2f}
        Standard Deviation: {analysis['std_spy_count']:.2f}
        Min Spy Count: {analysis['min_spy_count']}
        Max Spy Count: {analysis['max_spy_count']}
        
        Coefficient of Variation: {analysis['coefficient_of_variation']:.2f}%
        Fairness Score: {analysis['fairness_score']:.1f}/100
        
        INTERPRETATION
        ─────────────────────────────────────────
        Fairness Score > 95: Excellent
        Fairness Score > 90: Very Good  
        Fairness Score > 80: Good
        Fairness Score > 70: Fair
        Fairness Score ≤ 70: Needs Improvement
        """
        
        ax5.text(0.05, 0.95, summary_text, transform=ax5.transAxes, fontsize=11,
                verticalalignment='top', fontfamily='monospace',
                bbox=dict(boxstyle="round,pad=0.5", facecolor="darkslategray", alpha=0.8))
        
        # 6. Game History Timeline (sample)
        ax6 = plt.subplot(2, 3, 6)
        
        # Show spy selections for first 100 games as an example
        sample_games = min(100, len(self.game_history))
        game_numbers = list(range(1, sample_games + 1))
        
        # Create a matrix showing which players were spies in each game
        spy_matrix = np.zeros((len(self.players), sample_games))
        for i, game in enumerate(self.game_history[:sample_games]):
            for spy_id in game['spy_ids']:
                spy_matrix[int(spy_id), i] = 1
        
        im = ax6.imshow(spy_matrix, cmap='Reds', aspect='auto', interpolation='nearest')
        ax6.set_xlabel('Game Number (First 100 Games)')
        ax6.set_ylabel('Player Index')
        ax6.set_title('Spy Selection Timeline')
        ax6.set_yticks(range(len(player_names)))
        ax6.set_yticklabels(player_names)
        
        # Add colorbar
        plt.colorbar(im, ax=ax6, label='Selected as Spy')
        
        plt.tight_layout()
        
        if save_path:
            plt.savefig(save_path / 'spy_selection_analysis.png', dpi=300, bbox_inches='tight')
            print(f"Visualization saved to {save_path / 'spy_selection_analysis.png'}")
        
        plt.show()
    
    def export_detailed_results(self, analysis: Dict, filepath: str = None):
        """Export detailed results to JSON and CSV files"""
        if not filepath:
            filepath = Path("tests")
        else:
            filepath = Path(filepath)
        
        filepath.mkdir(exist_ok=True)
        
        # Export summary statistics
        summary = {
            'simulation_settings': {
                'players_count': self.settings.players_count,
                'games_simulated': self.settings.games_to_simulate,
                'spy_count_mode': 'random' if self.settings.use_random_spy_count else 'fixed',
                'spy_count': self.settings.spy_count,
                'min_spies': self.settings.min_spies,
                'max_spies': self.settings.max_spies
            },
            'results': analysis,
            'player_results': [
                {
                    'player_id': str(i),
                    'player_name': self.players[i].name,
                    'spy_count': analysis['actual_spy_counts'][i],
                    'spy_probability': analysis['actual_spy_counts'][i] / analysis['total_games'],
                    'deviation_from_expected': analysis['actual_spy_counts'][i] - analysis['expected_spy_count_per_player']
                }
                for i in range(len(self.players))
            ]
        }
        
        # Save JSON summary
        with open(filepath / 'simulation_results.json', 'w') as f:
            json.dump(summary, f, indent=2)
        
        # Save CSV with player details
        df = pd.DataFrame(summary['player_results'])
        df.to_csv(filepath / 'player_spy_counts.csv', index=False)
        
        # Save game history (first 1000 games for readability)
        game_history_sample = self.game_history[:1000]
        df_games = pd.DataFrame(game_history_sample)
        df_games.to_csv(filepath / 'game_history_sample.csv', index=False)
        
        print(f"Detailed results exported to {filepath}")
        return summary
    
    def print_results_summary(self, analysis: Dict):
        """Print a formatted summary of the simulation results"""
        print("\n" + "═" * 80)
        print("SPY SELECTION FAIRNESS SIMULATION RESULTS")
        print("═" * 80)
        
        print(f"\n📊 SIMULATION PARAMETERS:")
        print(f"   • Total Games: {analysis['total_games']:,}")
        print(f"   • Players: {len(self.players)}")
        print(f"   • Spy Count: {'Random' if self.settings.use_random_spy_count else self.settings.spy_count}")
        
        print(f"\n📈 STATISTICAL SUMMARY:")
        print(f"   • Expected Spy Count per Player: {analysis['expected_spy_count_per_player']:.2f}")
        print(f"   • Actual Mean Spy Count: {analysis['mean_spy_count']:.2f}")
        print(f"   • Standard Deviation: {analysis['std_spy_count']:.2f}")
        print(f"   • Range: {analysis['min_spy_count']} - {analysis['max_spy_count']}")
        
        print(f"\n🎯 FAIRNESS ANALYSIS:")
        print(f"   • Coefficient of Variation: {analysis['coefficient_of_variation']:.2f}%")
        print(f"   • Fairness Score: {analysis['fairness_score']:.1f}/100")
        
        fairness_rating = "Excellent" if analysis['fairness_score'] > 95 else \
                         "Very Good" if analysis['fairness_score'] > 90 else \
                         "Good" if analysis['fairness_score'] > 80 else \
                         "Fair" if analysis['fairness_score'] > 70 else "Needs Improvement"
        
        print(f"   • Rating: {fairness_rating}")
        
        print(f"\n👥 PLAYER BREAKDOWN:")
        for i, player in enumerate(self.players):
            spy_count = analysis['actual_spy_counts'][i]
            probability = spy_count / analysis['total_games']
            deviation = spy_count - analysis['expected_spy_count_per_player']
            print(f"   • {player.name:>10}: {spy_count:>4} times ({probability:.3f} probability, {deviation:+.1f} deviation)")
        
        print("\n" + "═" * 80)


def run_comprehensive_test():
    """Run multiple test scenarios to validate the algorithm"""
    
    print("🎲 COMPREHENSIVE SPY SELECTION FAIRNESS TEST")
    print("=" * 80)
    
    # Test Scenario 1: Fixed spy count (most common case)
    print("\n🔸 TEST 1: Fixed Single Spy (Most Common)")
    settings1 = GameSettings(
        players_count=15,
        games_to_simulate=10000,
        spy_count=1,
        use_random_spy_count=False
    )
    
    simulator1 = SpySelectionSimulator(settings1)
    analysis1 = simulator1.run_simulation()
    simulator1.print_results_summary(analysis1)
    simulator1.generate_visualizations(analysis1, "tests/scenario_1_fixed_spy")
    simulator1.export_detailed_results(analysis1, "tests/scenario_1_fixed_spy")
    
    # Test Scenario 2: Multiple fixed spies
    print("\n🔸 TEST 2: Fixed Multiple Spies")
    settings2 = GameSettings(
        players_count=15,
        games_to_simulate=10000,
        spy_count=3,
        use_random_spy_count=False
    )
    
    simulator2 = SpySelectionSimulator(settings2)
    analysis2 = simulator2.run_simulation()
    simulator2.print_results_summary(analysis2)
    simulator2.generate_visualizations(analysis2, "tests/scenario_2_multiple_spies")
    simulator2.export_detailed_results(analysis2, "tests/scenario_2_multiple_spies")
    
    # Test Scenario 3: Random spy count
    print("\n🔸 TEST 3: Random Spy Count")
    settings3 = GameSettings(
        players_count=15,
        games_to_simulate=10000,
        min_spies=1,
        max_spies=4,
        use_random_spy_count=True
    )
    
    simulator3 = SpySelectionSimulator(settings3)
    analysis3 = simulator3.run_simulation()
    simulator3.print_results_summary(analysis3)
    simulator3.generate_visualizations(analysis3, "tests/scenario_3_random_spies")
    simulator3.export_detailed_results(analysis3, "tests/scenario_3_random_spies")
    
    print("\n✅ ALL TESTS COMPLETED!")
    print("Check the 'tests/' directory for detailed results and visualizations.")


if __name__ == "__main__":
    # Ensure reproducible results for testing
    random.seed(42)
    np.random.seed(42)
    
    # Run the comprehensive test
    run_comprehensive_test()