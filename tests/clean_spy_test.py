#!/usr/bin/env python3
"""
Simple and Clean Spy Selection Test - Light Mode
Shows spy probabilities across 100 games with clean visualization
"""

import random
import matplotlib.pyplot as plt
import numpy as np

def run_clean_spy_test():
    """Run a clean 100-game spy selection test with beautiful visualization"""
    
    # Your friend names
    names = [
        "advay", "bobby", "waleed", "farhan", "sohun", "rohan", "suhayb", 
        "nirupa", "jose", "aaron", "jason", "franklin", "johnathan", "arush", "sameer"
    ]
    
    # Settings
    total_games = 500
    spy_counts = {name: 0 for name in names}
    
    print("🎯 SPY SELECTION PROBABILITY TEST")
    print("=" * 45)
    print(f"Games: {total_games}")
    print(f"Players: {len(names)}")
    print("Algorithm: Fisher-Yates Shuffle")
    print("-" * 45)
    
    # Run simulation
    for game in range(total_games):
        # Fisher-Yates shuffle (exact match to your React Native code)
        players = names.copy()
        for i in range(len(players) - 1, 0, -1):
            j = random.randint(0, i)
            players[i], players[j] = players[j], players[i]
        
        # First player is the spy
        spy = players[0]
        spy_counts[spy] += 1
        
        if (game + 1) % 100 == 0:
            print(f"Completed {game + 1} games...")
    
    # Calculate probabilities
    probabilities = [(count / total_games) * 100 for count in spy_counts.values()]
    expected_prob = (1 / len(names)) * 100
    
    print(f"\n📊 RESULTS:")
    print(f"Expected probability per person: {expected_prob:.1f}%")
    print(f"Actual range: {min(probabilities):.1f}% - {max(probabilities):.1f}%")
    
    # Create clean visualization
    create_clean_visualization(names, spy_counts, total_games, expected_prob)
    
    return spy_counts

def create_clean_visualization(names, spy_counts, total_games, expected_prob):
    """Create a clean, light mode visualization"""
    
    # Set light mode style
    plt.style.use('default')
    plt.rcParams.update({
        'font.size': 11,
        'font.family': 'sans-serif',
        'axes.grid': True,
        'grid.alpha': 0.3,
        'axes.spines.top': False,
        'axes.spines.right': False,
    })
    
    # Calculate data
    counts = list(spy_counts.values())
    probabilities = [(count / total_games) * 100 for count in counts]
    
    # Create figure - smaller and cleaner
    fig, ax = plt.subplots(figsize=(12, 6))
    
    # Clean, consistent color scheme
    colors = ['#4A90E2' if prob < expected_prob else '#50E3C2' if prob > expected_prob else '#7ED321' for prob in probabilities]
    
    # Create bars with cleaner styling
    bars = ax.bar(range(len(names)), probabilities, color=colors, alpha=0.85, 
                  edgecolor='#2C3E50', linewidth=0.8)
    
    # Expected probability line - cleaner color
    ax.axhline(y=expected_prob, color='#E74C3C', linestyle='--', linewidth=2, 
               label=f'Expected: {expected_prob:.1f}%', alpha=0.9)
    
    # Styling
    ax.set_title('Spy Selection Probability Distribution\n500 Games • Fisher-Yates Algorithm', 
                 fontsize=14, fontweight='bold', pad=15, color='#2C3E50')
    ax.set_xlabel('Players', fontsize=11, fontweight='500', color='#2C3E50')
    ax.set_ylabel('Probability of Being Selected (%)', fontsize=11, fontweight='500', color='#2C3E50')
    
    # X-axis
    ax.set_xticks(range(len(names)))
    ax.set_xticklabels(names, rotation=45, ha='right', fontsize=10)
    
    # Y-axis
    ax.set_ylim(0, max(probabilities) * 1.2)
    
    # Add value labels on bars (clean and minimal)
    for i, (bar, prob, count) in enumerate(zip(bars, probabilities, counts)):
        height = bar.get_height()
        # Show percentage for all bars since we have more data now
        ax.text(bar.get_x() + bar.get_width()/2., height + 0.2,
               f'{prob:.1f}%', ha='center', va='bottom', 
               fontweight='500', fontsize=8, color='#2C3E50')
    
    # Legend
    ax.legend(loc='upper right', frameon=True, fancybox=True, shadow=True)
    
    # Grid styling - lighter and cleaner
    ax.grid(True, alpha=0.2, linestyle='-', linewidth=0.4, color='#BDC3C7')
    ax.set_axisbelow(True)
    
    # Clean margins
    plt.tight_layout()
    
    # Save and show
    plt.savefig('/Users/AdvayChandorkar/Downloads/spy/tests/clean_spy_probability.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    
    print(f"\n📈 Clean visualization saved as 'clean_spy_probability.png'")
    plt.show()

def show_summary_stats(spy_counts, total_games):
    """Show clean summary statistics"""
    counts = list(spy_counts.values())
    probabilities = [(count / total_games) * 100 for count in counts]
    expected = (1/len(spy_counts)) * 100
    
    print(f"\n📈 SUMMARY STATISTICS:")
    print(f"   Mean probability: {np.mean(probabilities):.1f}%")
    print(f"   Standard deviation: {np.std(probabilities):.2f}%")
    print(f"   Range: {min(probabilities):.1f}% - {max(probabilities):.1f}%")
    print(f"   Deviation from expected: ±{max(abs(p - expected) for p in probabilities):.1f}%")
    
    # Show top and bottom performers
    sorted_results = sorted(spy_counts.items(), key=lambda x: x[1], reverse=True)
    print(f"\n🔝 Most selected: {sorted_results[0][0]} ({sorted_results[0][1]} times)")
    print(f"🔻 Least selected: {sorted_results[-1][0]} ({sorted_results[-1][1]} times)")

if __name__ == "__main__":
    # Set seed for reproducible results
    random.seed(42)
    
    results = run_clean_spy_test()
    show_summary_stats(results, 500)
    
    print("\n✅ Test complete! Check the clean graph above.")