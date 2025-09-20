#!/usr/bin/env python3
"""
Quick Spy Selection Test - 15 Players, 10 Games
==============================================

This is a simplified version of the spy selection test specifically for
testing 15 players over 10 games as requested by the user.
"""

import random
import matplotlib.pyplot as plt
import numpy as np
from collections import defaultdict


def fisher_yates_shuffle(arr):
    """Fisher-Yates shuffle matching the React Native implementation"""
    shuffled = arr.copy()
    for i in range(len(shuffled) - 1, 0, -1):
        j = random.randint(0, i)
        shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
    return shuffled


def simulate_spy_selection(num_players=15, num_games=10, spy_count=1):
    """Simulate spy selection for specified parameters"""
    
    # Create players
    player_names = [
        "Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Henry",
        "Ivy", "Jack", "Kate", "Liam", "Maya", "Noah", "Olivia"
    ]
    
    players = [{"id": str(i), "name": player_names[i]} for i in range(num_players)]
    
    # Track results
    spy_counts = defaultdict(int)
    game_results = []
    
    print(f"🎲 Simulating {num_games} games with {num_players} players")
    print(f"🕵️ Spy count per game: {spy_count}")
    print("-" * 50)
    
    for game_num in range(num_games):
        # Fisher-Yates shuffle
        shuffled_players = fisher_yates_shuffle(players)
        
        # Select first N players as spies
        spies = shuffled_players[:spy_count]
        spy_ids = [spy["id"] for spy in spies]
        spy_names = [spy["name"] for spy in spies]
        
        # Record results
        for spy_id in spy_ids:
            spy_counts[spy_id] += 1
        
        game_results.append({
            "game": game_num + 1,
            "spies": spy_names
        })
        
        print(f"Game {game_num + 1:2d}: Spy = {', '.join(spy_names)}")
    
    return players, spy_counts, game_results


def create_visualization(players, spy_counts, game_results, spy_count):
    """Create a comprehensive visualization of the results"""
    
    # Set up dark theme
    plt.style.use('dark_background')
    
    # Create figure with subplots
    fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(16, 12))
    fig.suptitle(f'Spy Selection Analysis - {len(game_results)} Games with {len(players)} Players', 
                 fontsize=16, fontweight='bold')
    
    # Extract data
    player_names = [p["name"] for p in players]
    spy_count_values = [spy_counts[str(i)] for i in range(len(players))]
    
    # 1. Bar chart of spy selections per player
    bars = ax1.bar(player_names, spy_count_values, color='skyblue', alpha=0.7, edgecolor='navy')
    ax1.set_title('Spy Selections per Player')
    ax1.set_xlabel('Players')
    ax1.set_ylabel('Times Selected as Spy')
    ax1.tick_params(axis='x', rotation=45)
    
    # Add value labels on bars
    for bar in bars:
        height = bar.get_height()
        if height > 0:
            ax1.text(bar.get_x() + bar.get_width()/2., height + 0.05,
                    f'{int(height)}', ha='center', va='bottom', fontweight='bold')
    
    # Expected line
    expected = len(game_results) * spy_count / len(players)
    ax1.axhline(y=expected, color='red', linestyle='--', linewidth=2, 
                label=f'Expected: {expected:.1f}')
    ax1.legend()
    ax1.grid(True, alpha=0.3)
    
    # 2. Game-by-game spy selection matrix
    game_matrix = np.zeros((len(players), len(game_results)))
    for game_idx, game in enumerate(game_results):
        for spy_name in game["spies"]:
            player_idx = next(i for i, p in enumerate(players) if p["name"] == spy_name)
            game_matrix[player_idx, game_idx] = 1
    
    im = ax2.imshow(game_matrix, cmap='Reds', aspect='auto')
    ax2.set_title('Spy Selection Timeline')
    ax2.set_xlabel('Game Number')
    ax2.set_ylabel('Players')
    ax2.set_yticks(range(len(player_names)))
    ax2.set_yticklabels(player_names)
    ax2.set_xticks(range(len(game_results)))
    ax2.set_xticklabels([f"G{i+1}" for i in range(len(game_results))])
    
    # Add colorbar
    plt.colorbar(im, ax=ax2, label='Selected as Spy')
    
    # 3. Distribution histogram
    ax3.hist(spy_count_values, bins=max(1, max(spy_count_values) + 1), 
             alpha=0.7, color='lightgreen', edgecolor='darkgreen')
    ax3.set_title('Distribution of Spy Selection Counts')
    ax3.set_xlabel('Number of Times Selected as Spy')
    ax3.set_ylabel('Number of Players')
    ax3.axvline(x=expected, color='red', linestyle='--', linewidth=2, 
                label=f'Expected: {expected:.1f}')
    ax3.legend()
    ax3.grid(True, alpha=0.3)
    
    # 4. Statistics summary
    ax4.axis('off')
    
    total_selections = sum(spy_count_values)
    mean_selections = np.mean(spy_count_values)
    std_selections = np.std(spy_count_values)
    min_selections = min(spy_count_values)
    max_selections = max(spy_count_values)
    
    stats_text = f"""
    SIMULATION RESULTS
    ═══════════════════════════════
    
    Games Played: {len(game_results)}
    Players: {len(players)}
    Spies per Game: {spy_count}
    Total Spy Selections: {total_selections}
    
    STATISTICS
    ─────────────────────────────────────
    Expected per Player: {expected:.2f}
    Actual Mean: {mean_selections:.2f}
    Standard Deviation: {std_selections:.2f}
    Range: {min_selections} - {max_selections}
    
    FAIRNESS ANALYSIS
    ─────────────────────────────────────
    Perfect fairness would have all players
    selected exactly {expected:.1f} times.
    
    Coefficient of Variation: {(std_selections/mean_selections*100):.1f}%
    
    """
    
    # Add player breakdown
    stats_text += "\nPLAYER BREAKDOWN\n" + "─" * 30 + "\n"
    for i, player in enumerate(players):
        count = spy_count_values[i]
        stats_text += f"{player['name']:>8}: {count} times\n"
    
    ax4.text(0.05, 0.95, stats_text, transform=ax4.transAxes, fontsize=10,
            verticalalignment='top', fontfamily='monospace',
            bbox=dict(boxstyle="round,pad=0.5", facecolor="darkslategray", alpha=0.8))
    
    plt.tight_layout()
    
    # Save the plot
    plt.savefig('tests/spy_selection_quick_test.png', dpi=300, bbox_inches='tight')
    print(f"\n📊 Visualization saved as 'tests/spy_selection_quick_test.png'")
    
    plt.show()


def main():
    """Run the quick spy selection test"""
    print("🎮 SPY SELECTION FAIRNESS - QUICK TEST")
    print("=" * 50)
    
    # Set random seed for reproducible results
    random.seed(42)
    
    # Run simulation with user's requested parameters
    players, spy_counts, game_results = simulate_spy_selection(
        num_players=15, 
        num_games=10, 
        spy_count=1
    )
    
    # Create visualization
    create_visualization(players, spy_counts, game_results, spy_count=1)
    
    # Print summary
    print("\n" + "=" * 50)
    print("📊 SUMMARY")
    print("=" * 50)
    
    total_games = len(game_results)
    expected_per_player = total_games / len(players)
    
    print(f"\nExpected spy selections per player: {expected_per_player:.2f}")
    print(f"Actual results:")
    
    for i, player in enumerate(players):
        count = spy_counts[str(i)]
        percentage = (count / total_games) * 100
        deviation = count - expected_per_player
        print(f"  {player['name']:>8}: {count:2d} times ({percentage:5.1f}%) [deviation: {deviation:+.1f}]")
    
    # Calculate fairness metrics
    actual_counts = [spy_counts[str(i)] for i in range(len(players))]
    std_dev = np.std(actual_counts)
    mean_count = np.mean(actual_counts)
    cv = (std_dev / mean_count) * 100 if mean_count > 0 else 0
    
    print(f"\n📈 Fairness Metrics:")
    print(f"  Standard Deviation: {std_dev:.2f}")
    print(f"  Coefficient of Variation: {cv:.1f}%")
    
    if cv < 30:
        print("  ✅ Result: Good fairness for this small sample")
    elif cv < 50:
        print("  ⚠️  Result: Moderate fairness (expected with small sample)")
    else:
        print("  ❌ Result: Poor fairness - may indicate algorithm issue")
    
    print(f"\n💡 Note: With only {total_games} games, some variation is expected.")
    print("   For more reliable results, run the full simulation with 1000+ games.")


if __name__ == "__main__":
    main()