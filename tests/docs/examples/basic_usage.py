#!/usr/bin/env python3
"""
Simple example demonstrating basic usage of the Spy Test Suite
"""

from spy_tests.fairness import FairnessAnalyzer
from spy_tests.visualization import PlotGenerator
import matplotlib.pyplot as plt

def main():
    """Demonstrate basic fairness testing and visualization"""

    print("Spy Test Suite - Basic Example")
    print("=" * 35)

    # Initialize components
    analyzer = FairnessAnalyzer()
    plotter = PlotGenerator()

    # Define test players
    players = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

    print(f"Testing with {len(players)} players...")
    print(f"Players: {', '.join(players)}")

    # Test Fisher-Yates algorithm
    print("\nRunning fairness analysis...")
    results = analyzer.test_algorithm(
        algorithm="fisher_yates",
        players=players,
        num_rounds=5000,
        random_seed=42
    )

    # Display results
    print("\nResults:")
    print(f"  Fairness Score: {results.fairness_score:.4f}")
    print(f"  Expected Probability: {1/len(players):.4f}")
    print(f"  Total Rounds Tested: {sum(results.spy_counts.values())}")

    print("\nSpy Selection Counts:")
    for player, count in sorted(results.spy_counts.items(), key=lambda x: x[1], reverse=True):
        percentage = (count / sum(results.spy_counts.values())) * 100
        print(f"  {player}: {count:3d} selections ({percentage:4.1f}%)")

    # Create and save visualization
    print("\nGenerating visualization...")
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

    # Bar chart of spy counts
    players_list = list(results.spy_counts.keys())
    counts_list = list(results.spy_counts.values())

    bars = ax1.bar(players_list, counts_list, color='skyblue', alpha=0.8)
    ax1.set_title('Spy Selection Distribution')
    ax1.set_xlabel('Players')
    ax1.set_ylabel('Times Selected as Spy')
    ax1.tick_params(axis='x', rotation=45)

    # Add expected line
    expected = sum(counts_list) / len(players_list)
    ax1.axhline(y=expected, color='red', linestyle='--', alpha=0.7,
                label=f'Expected ({expected:.1f})')
    ax1.legend()

    # Fairness score gauge
    ax2.pie([results.fairness_score, 1-results.fairness_score],
            labels=['Fair', 'Unfair'],
            colors=['lightgreen', 'lightcoral'],
            autopct='%1.1f%%',
            startangle=90)
    ax2.set_title(f'Fairness Score: {results.fairness_score:.4f}')

    plt.tight_layout()
    plt.savefig('basic_example_results.png', dpi=300, bbox_inches='tight')
    print("Visualization saved as 'basic_example_results.png'")

    # Determine rating
    if results.fairness_score >= 0.97:
        rating = "Excellent"
        color = "green"
    elif results.fairness_score >= 0.95:
        rating = "Very Good"
        color = "blue"
    elif results.fairness_score >= 0.90:
        rating = "Good"
        color = "orange"
    else:
        rating = "Needs Improvement"
        color = "red"

    print(f"\nFairness Rating: {rating}")
    print("Analysis complete!")

if __name__ == "__main__":
    main()