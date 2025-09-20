"""
Plot generation tools for Spy game test results
"""

import matplotlib.pyplot as plt
import seaborn as sns
from typing import Dict, List, Optional
import numpy as np
from pathlib import Path


class PlotGenerator:
    """
    Generates various plots for Spy game test analysis
    """

    def __init__(self, theme: str = "clean"):
        self.theme = theme
        self._setup_style()

    def _setup_style(self):
        """Setup matplotlib style based on theme"""
        if self.theme == "clean":
            plt.style.use('default')
            plt.rcParams.update({
                'font.size': 11,
                'font.family': 'sans-serif',
                'axes.grid': True,
                'grid.alpha': 0.3,
                'axes.spines.top': False,
                'axes.spines.right': False,
            })
        elif self.theme == "dark":
            plt.style.use('dark_background')
            plt.rcParams.update({
                'font.size': 11,
                'font.family': 'sans-serif',
                'axes.grid': True,
                'grid.alpha': 0.3,
            })

    def create_fairness_plot(self,
                           spy_counts: Dict[str, int],
                           total_games: int,
                           expected_prob: float,
                           title: str = "Spy Selection Fairness Analysis",
                           save_path: Optional[str] = None) -> plt.Figure:
        """
        Create a fairness analysis bar plot

        Args:
            spy_counts: Dictionary of player names to spy selection counts
            total_games: Total number of games played
            expected_prob: Expected probability per player
            title: Plot title
            save_path: Path to save the plot (optional)

        Returns:
            matplotlib Figure object
        """

        fig, ax = plt.subplots(figsize=(14, 8))

        players = list(spy_counts.keys())
        counts = list(spy_counts.values())
        probabilities = [(count / total_games) * 100 for count in counts]

        # Color based on deviation from expected
        colors = []
        for prob in probabilities:
            if abs(prob - expected_prob) < 1:
                colors.append('#27AE60')  # Green - very close
            elif abs(prob - expected_prob) < 2:
                colors.append('#F39C12')  # Orange - moderate deviation
            else:
                colors.append('#E74C3C')  # Red - significant deviation

        bars = ax.bar(range(len(players)), probabilities, color=colors, alpha=0.8,
                     edgecolor='#34495E', linewidth=0.8)

        # Expected probability line
        ax.axhline(y=expected_prob, color='#E74C3C', linestyle='--', linewidth=2,
                  label=f'Expected: {expected_prob:.2f}%', alpha=0.9)

        # Styling
        ax.set_title(title, fontsize=16, fontweight='bold', pad=20, color='#2C3E50')
        ax.set_xlabel('Players', fontsize=13, fontweight='500')
        ax.set_ylabel('Spy Selection Probability (%)', fontsize=13, fontweight='500')
        ax.set_xticks(range(len(players)))
        ax.set_xticklabels(players, rotation=45, ha='right', fontsize=10)
        ax.legend(loc='upper right', frameon=True, fancybox=True, shadow=True)
        ax.grid(True, alpha=0.3, linestyle='-', linewidth=0.5, color='#BDC3C7')
        ax.set_axisbelow(True)

        # Add value labels
        for i, (bar, prob) in enumerate(zip(bars, probabilities)):
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height + 0.1,
                   f'{prob:.1f}%', ha='center', va='bottom',
                   fontweight='600', fontsize=9, color='#2C3E50')

        plt.tight_layout()

        if save_path:
            plt.savefig(save_path, dpi=300, bbox_inches='tight', facecolor='white')

        return fig

    def create_distribution_plot(self,
                               spy_counts: Dict[str, int],
                               title: str = "Spy Count Distribution",
                               save_path: Optional[str] = None) -> plt.Figure:
        """
        Create a histogram showing the distribution of spy counts
        """

        fig, ax = plt.subplots(figsize=(10, 6))

        counts = list(spy_counts.values())

        # Create histogram
        n, bins, patches = ax.hist(counts, bins=15, alpha=0.7, color='#3498DB',
                                 edgecolor='#2980B9', linewidth=1)

        # Add mean line
        mean_count = np.mean(counts)
        ax.axvline(x=mean_count, color='#E74C3C', linestyle='-', linewidth=2,
                  label=f'Mean: {mean_count:.1f}')

        # Styling
        ax.set_title(title, fontsize=14, fontweight='bold', pad=15)
        ax.set_xlabel('Spy Selection Count', fontsize=12)
        ax.set_ylabel('Number of Players', fontsize=12)
        ax.legend()
        ax.grid(True, alpha=0.3)

        plt.tight_layout()

        if save_path:
            plt.savefig(save_path, dpi=300, bbox_inches='tight', facecolor='white')

        return fig

    def create_comparison_plot(self,
                             results_list: List[Dict],
                             labels: List[str],
                             title: str = "Algorithm Comparison",
                             save_path: Optional[str] = None) -> plt.Figure:
        """
        Create a comparison plot for multiple test results
        """

        fig, ax = plt.subplots(figsize=(12, 8))

        # Prepare data
        all_players = list(results_list[0].keys())
        x = np.arange(len(all_players))
        width = 0.8 / len(results_list)

        for i, (results, label) in enumerate(zip(results_list, labels)):
            counts = [results[player] for player in all_players]
            ax.bar(x + i * width, counts, width, label=label, alpha=0.8)

        # Styling
        ax.set_title(title, fontsize=14, fontweight='bold', pad=15)
        ax.set_xlabel('Players', fontsize=12)
        ax.set_ylabel('Spy Selection Count', fontsize=12)
        ax.set_xticks(x + width * (len(results_list) - 1) / 2)
        ax.set_xticklabels(all_players, rotation=45, ha='right')
        ax.legend()
        ax.grid(True, alpha=0.3)

        plt.tight_layout()

        if save_path:
            plt.savefig(save_path, dpi=300, bbox_inches='tight', facecolor='white')

        return fig

    def create_timeline_plot(self,
                           game_history: List[List[str]],
                           players: List[str],
                           title: str = "Spy Selection Timeline",
                           save_path: Optional[str] = None,
                           max_games: int = 100) -> plt.Figure:
        """
        Create a timeline showing spy selections over games
        """

        fig, ax = plt.subplots(figsize=(15, 8))

        # Limit to max_games for readability
        history = game_history[:max_games]

        # Create spy matrix
        spy_matrix = np.zeros((len(players), len(history)))
        for game_idx, spies in enumerate(history):
            for spy in spies:
                if spy in players:
                    player_idx = players.index(spy)
                    spy_matrix[player_idx, game_idx] = 1

        # Create heatmap
        im = ax.imshow(spy_matrix, cmap='Reds', aspect='auto', interpolation='nearest')

        # Styling
        ax.set_title(title, fontsize=14, fontweight='bold', pad=15)
        ax.set_xlabel('Game Number', fontsize=12)
        ax.set_ylabel('Player', fontsize=12)
        ax.set_yticks(range(len(players)))
        ax.set_yticklabels(players)

        # Add colorbar
        cbar = plt.colorbar(im, ax=ax)
        cbar.set_label('Selected as Spy')

        plt.tight_layout()

        if save_path:
            plt.savefig(save_path, dpi=300, bbox_inches='tight', facecolor='white')

        return fig