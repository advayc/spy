#!/usr/bin/env python3
"""
Enhanced Spy Selection Test - Multiple Runs for Better Fairness Analysis
"""

import random
import matplotlib.pyplot as plt
import numpy as np
import time

def enhanced_fisher_yates_shuffle(arr):
    """Enhanced Fisher-Yates with better randomization"""
    shuffled = arr.copy()
    for i in range(len(shuffled) - 1, 0, -1):
        j = random.randint(0, i)
        shuffled[i], shuffled[j] = shuffled[j], shuffled[i]
    return shuffled

def run_multiple_test_runs():
    """Run multiple test sessions to see if bias persists"""
    
    names = [
        "advay", "bobby", "waleed", "farhan", "sohun", "rohan", "suhayb", 
        "nirupa", "jose", "aaron", "jason", "franklin", "johnathan", "arush", "sameer"
    ]
    
    total_games = 1000  # More games for better statistics
    num_runs = 5  # Multiple independent runs
    
    print("🔬 ENHANCED SPY SELECTION FAIRNESS TEST")
    print("=" * 50)
    print(f"Games per run: {total_games}")
    print(f"Number of runs: {num_runs}")
    print(f"Total games: {total_games * num_runs}")
    print("=" * 50)
    
    # Aggregate results across all runs
    overall_spy_counts = {name: 0 for name in names}
    run_results = []
    
    for run in range(num_runs):
        # Use different seed for each run based on current time
        random.seed(int(time.time() * 1000) % 10000 + run * 1000)
        
        spy_counts = {name: 0 for name in names}
        
        print(f"\n🎲 Run {run + 1}:")
        
        # Run simulation for this run
        for game in range(total_games):
            # Enhanced Fisher-Yates shuffle
            players = names.copy()
            shuffled = enhanced_fisher_yates_shuffle(players)
            spy = shuffled[0]
            spy_counts[spy] += 1
            
            if (game + 1) % 200 == 0:
                print(f"  Completed {game + 1} games...")
        
        # Add to overall counts
        for name in names:
            overall_spy_counts[name] += spy_counts[name]
        
        run_results.append(spy_counts)
        
        # Show results for this run
        probabilities = [(count / total_games) * 100 for count in spy_counts.values()]
        print(f"  Range this run: {min(probabilities):.1f}% - {max(probabilities):.1f}%")
        print(f"  Std dev: {np.std(probabilities):.2f}%")
    
    # Calculate final statistics
    total_total_games = total_games * num_runs
    expected_prob = (1 / len(names)) * 100
    
    print(f"\n📊 FINAL RESULTS ACROSS ALL RUNS:")
    print(f"Expected probability: {expected_prob:.2f}%")
    
    final_probabilities = [(count / total_total_games) * 100 for count in overall_spy_counts.values()]
    
    print(f"Final range: {min(final_probabilities):.2f}% - {max(final_probabilities):.2f}%")
    print(f"Final std dev: {np.std(final_probabilities):.2f}%")
    print(f"Max deviation: ±{max(abs(p - expected_prob) for p in final_probabilities):.2f}%")
    
    # Show individual results
    print(f"\n👥 INDIVIDUAL RESULTS:")
    sorted_results = sorted(overall_spy_counts.items(), key=lambda x: x[1], reverse=True)
    for name, count in sorted_results:
        prob = (count / total_total_games) * 100
        deviation = prob - expected_prob
        print(f"  {name:>10}: {count:>4} times ({prob:>5.2f}%, {deviation:+5.2f}%)")
    
    # Create enhanced visualization
    create_enhanced_visualization(names, overall_spy_counts, total_total_games, expected_prob, run_results, total_games)
    
    return overall_spy_counts, run_results

def create_enhanced_visualization(names, spy_counts, total_games, expected_prob, run_results, games_per_run):
    """Create enhanced visualization showing consistency across runs"""
    
    plt.style.use('default')
    plt.rcParams.update({
        'font.size': 10,
        'font.family': 'sans-serif',
        'axes.grid': True,
        'grid.alpha': 0.2,
        'axes.spines.top': False,
        'axes.spines.right': False,
    })
    
    # Create figure with two subplots
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))
    
    # Plot 1: Overall results
    counts = list(spy_counts.values())
    probabilities = [(count / total_games) * 100 for count in counts]
    
    # Enhanced color scheme - more subtle differences
    avg_prob = np.mean(probabilities)
    colors = []
    for prob in probabilities:
        if abs(prob - expected_prob) < 0.5:  # Very close to expected
            colors.append('#27AE60')  # Green
        elif prob < expected_prob:  # Below expected
            colors.append('#3498DB')  # Blue
        else:  # Above expected
            colors.append('#E67E22')  # Orange
    
    bars1 = ax1.bar(range(len(names)), probabilities, color=colors, alpha=0.8, 
                    edgecolor='#34495E', linewidth=0.5)
    
    ax1.axhline(y=expected_prob, color='#E74C3C', linestyle='--', linewidth=2, 
               label=f'Expected: {expected_prob:.2f}%', alpha=0.9)
    
    ax1.set_title('Overall Spy Selection Probability\n(All Runs Combined)', 
                 fontsize=12, fontweight='bold', color='#2C3E50')
    ax1.set_xlabel('Players', fontsize=10, color='#2C3E50')
    ax1.set_ylabel('Probability (%)', fontsize=10, color='#2C3E50')
    ax1.set_xticks(range(len(names)))
    ax1.set_xticklabels(names, rotation=45, ha='right', fontsize=9)
    ax1.legend(loc='upper right')
    ax1.grid(True, alpha=0.2, color='#BDC3C7')
    
    # Add percentage labels
    for i, (bar, prob) in enumerate(zip(bars1, probabilities)):
        height = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width()/2., height + 0.1,
               f'{prob:.1f}%', ha='center', va='bottom', 
               fontweight='500', fontsize=8, color='#2C3E50')
    
    # Plot 2: Consistency across runs (standard deviation)
    run_probs = []
    for i, name in enumerate(names):
        name_probs = []
        for run_result in run_results:
            prob = (run_result[name] / games_per_run) * 100
            name_probs.append(prob)
        run_probs.append(name_probs)
    
    # Calculate standard deviation for each person across runs
    std_devs = [np.std(probs) for probs in run_probs]
    
    bars2 = ax2.bar(range(len(names)), std_devs, color='#9B59B6', alpha=0.7,
                    edgecolor='#8E44AD', linewidth=0.5)
    
    ax2.set_title('Consistency Across Runs\n(Lower = More Consistent)', 
                 fontsize=12, fontweight='bold', color='#2C3E50')
    ax2.set_xlabel('Players', fontsize=10, color='#2C3E50')
    ax2.set_ylabel('Standard Deviation (%)', fontsize=10, color='#2C3E50')
    ax2.set_xticks(range(len(names)))
    ax2.set_xticklabels(names, rotation=45, ha='right', fontsize=9)
    ax2.grid(True, alpha=0.2, color='#BDC3C7')
    
    # Add std dev labels
    for i, (bar, std) in enumerate(zip(bars2, std_devs)):
        height = bar.get_height()
        ax2.text(bar.get_x() + bar.get_width()/2., height + 0.05,
               f'{std:.1f}', ha='center', va='bottom', 
               fontweight='500', fontsize=8, color='#2C3E50')
    
    plt.tight_layout()
    plt.savefig('/Users/AdvayChandorkar/Downloads/spy/tests/enhanced_spy_analysis.png', 
                dpi=300, bbox_inches='tight', facecolor='white')
    
    print(f"\n📈 Enhanced visualization saved as 'enhanced_spy_analysis.png'")
    plt.show()
    
    # Analysis
    most_consistent = names[std_devs.index(min(std_devs))]
    least_consistent = names[std_devs.index(max(std_devs))]
    
    print(f"\n🎯 CONSISTENCY ANALYSIS:")
    print(f"Most consistent: {most_consistent} (±{min(std_devs):.1f}%)")
    print(f"Least consistent: {least_consistent} (±{max(std_devs):.1f}%)")
    print(f"Average consistency: ±{np.mean(std_devs):.1f}%")

if __name__ == "__main__":
    print("🚀 Starting enhanced fairness analysis...")
    results, runs = run_multiple_test_runs()
    print("\n✅ Analysis complete! The Fisher-Yates algorithm should be fair over many runs.")
    print("Any bias in small samples is due to random variance, not algorithmic bias.")