# Visualization Guide

## Overview

Creating effective visualizations for Spy game test results, performance metrics, and fairness analysis using the visualization package.

## Chart Types and Use Cases

### Distribution Histograms
```python
from spy_tests.visualization.plot_generator import PlotGenerator
import matplotlib.pyplot as plt

# Create histogram of spy selection frequencies
plotter = PlotGenerator()

# Sample data: spy counts per player over 1000 rounds
spy_counts = {
    'Alice': 145,
    'Bob': 132,
    'Charlie': 138,
    'Diana': 142,
    'Eve': 128,
    'Frank': 135,
    'Grace': 130
}

fig, ax = plotter.create_distribution_histogram(
    data=spy_counts,
    title="Spy Selection Distribution (1000 Rounds)",
    xlabel="Players",
    ylabel="Times Selected as Spy",
    color='skyblue'
)

# Add fairness reference line
expected_count = sum(spy_counts.values()) / len(spy_counts)
ax.axhline(y=expected_count, color='red', linestyle='--',
           label=f'Expected ({expected_count:.1f})')
ax.legend()

plt.tight_layout()
plt.savefig('spy_distribution.png', dpi=300, bbox_inches='tight')
plt.show()
```

### Fairness Score Trends
```python
# Plot fairness scores over multiple test runs
fairness_scores = [0.85, 0.89, 0.91, 0.94, 0.96, 0.97, 0.975, 0.972]
test_iterations = list(range(1000, 9000, 1000))

fig, ax = plotter.create_line_plot(
    x=test_iterations,
    y=fairness_scores,
    title="Fairness Score Convergence",
    xlabel="Number of Test Iterations",
    ylabel="Fairness Score",
    marker='o',
    color='green'
)

# Add target line
ax.axhline(y=0.95, color='red', linestyle='--', alpha=0.7,
           label='Target Fairness (95%)')
ax.legend()
ax.grid(True, alpha=0.3)

plt.savefig('fairness_convergence.png', dpi=300)
plt.show()
```

### Performance Comparison Charts
```python
# Compare algorithm performance
algorithms = ['Fisher-Yates', 'LCG Random', 'System Random', 'Hash-based']
execution_times = [0.023, 0.045, 0.031, 0.018]  # milliseconds
fairness_scores = [0.977, 0.452, 0.893, 0.934]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Performance comparison
bars1 = ax1.bar(algorithms, execution_times, color='lightcoral', alpha=0.7)
ax1.set_title('Execution Time Comparison')
ax1.set_ylabel('Time (milliseconds)')
ax1.tick_params(axis='x', rotation=45)

# Add value labels on bars
for bar, time in zip(bars1, execution_times):
    ax1.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.001,
             f'{time:.3f}', ha='center', va='bottom')

# Fairness comparison
bars2 = ax2.bar(algorithms, fairness_scores, color='lightgreen', alpha=0.7)
ax2.set_title('Fairness Score Comparison')
ax2.set_ylabel('Fairness Score')
ax2.tick_params(axis='x', rotation=45)
ax2.axhline(y=0.95, color='red', linestyle='--', alpha=0.7,
            label='Excellent Fairness')
ax2.legend()

# Add value labels on bars
for bar, score in zip(bars2, fairness_scores):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.01,
             f'{score:.3f}', ha='center', va='bottom')

plt.tight_layout()
plt.savefig('algorithm_comparison.png', dpi=300, bbox_inches='tight')
plt.show()
```

## Advanced Visualizations

### Heatmap of Player Interactions
```python
import numpy as np
import seaborn as sns

# Create player interaction matrix
players = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']
# Rows: spy, Columns: accused
interaction_matrix = np.array([
    [0, 15, 8, 12, 5],   # Alice as spy
    [10, 0, 18, 7, 9],   # Bob as spy
    [6, 14, 0, 11, 13],  # Charlie as spy
    [9, 8, 16, 0, 7],    # Diana as spy
    [11, 12, 9, 15, 0]   # Eve as spy
])

plt.figure(figsize=(8, 6))
sns.heatmap(
    interaction_matrix,
    annot=True,
    fmt='d',
    xticklabels=players,
    yticklabels=players,
    cmap='YlOrRd',
    cbar_kws={'label': 'Accusation Count'}
)

plt.title('Player Accusation Patterns\n(Rows: Spy, Columns: Accused)')
plt.xlabel('Accused Player')
plt.ylabel('Spy Player')
plt.tight_layout()
plt.savefig('player_interactions.png', dpi=300)
plt.show()
```

### Scatter Plot with Confidence Ellipses
```python
from matplotlib.patches import Ellipse
import matplotlib.transforms as transforms

# Performance vs Fairness scatter plot
algorithms_data = {
    'Fisher-Yates': {'time': 0.023, 'fairness': 0.977, 'size': 1000},
    'LCG Random': {'time': 0.045, 'fairness': 0.452, 'size': 800},
    'System Random': {'time': 0.031, 'fairness': 0.893, 'size': 900},
    'Hash-based': {'time': 0.018, 'fairness': 0.934, 'size': 950}
}

fig, ax = plt.subplots(figsize=(10, 6))

# Plot points
for alg, data in algorithms_data.items():
    ax.scatter(data['time'], data['fairness'],
               s=data['size'], alpha=0.7, label=alg)

# Add confidence ellipse for high-performing algorithms
high_perf_algorithms = ['Fisher-Yates', 'Hash-based']
high_perf_points = np.array([[algorithms_data[alg]['time'],
                             algorithms_data[alg]['fairness']]
                            for alg in high_perf_algorithms])

if len(high_perf_points) > 1:
    # Calculate ellipse parameters
    center = np.mean(high_perf_points, axis=0)
    cov = np.cov(high_perf_points.T)

    # Plot confidence ellipse
    pearson = cov[0, 1] / np.sqrt(cov[0, 0] * cov[1, 1])
    ell_radius_x = np.sqrt(1 + pearson)
    ell_radius_y = np.sqrt(1 - pearson)

    ellipse = Ellipse((0, 0), width=ell_radius_x * 2, height=ell_radius_y * 2,
                     facecolor='lightblue', alpha=0.3)
    scale_x = np.sqrt(cov[0, 0]) * 2
    scale_y = np.sqrt(cov[1, 1]) * 2

    transf = transforms.Affine2D() \
        .rotate_deg(45 if cov[0, 1] > 0 else -45) \
        .scale(scale_x, scale_y) \
        .translate(center[0], center[1])

    ellipse.set_transform(transf + ax.transData)
    ax.add_patch(ellipse)

ax.set_xlabel('Execution Time (ms)')
ax.set_ylabel('Fairness Score')
ax.set_title('Algorithm Performance vs Fairness\n(Bubble size = Test Sample Size)')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('performance_fairness_scatter.png', dpi=300)
plt.show()
```

### Time Series Analysis
```python
# Fairness evolution over time
import pandas as pd

# Simulate time series data
dates = pd.date_range('2024-01-01', periods=30, freq='D')
fairness_scores = np.random.normal(0.97, 0.02, 30)
fairness_scores = np.clip(fairness_scores, 0.85, 1.0)  # Keep realistic range

# Add trend
trend = np.linspace(0.96, 0.98, 30)
fairness_scores = fairness_scores * 0.3 + trend * 0.7

# Create rolling statistics
df = pd.DataFrame({
    'date': dates,
    'fairness': fairness_scores
})
df['rolling_mean'] = df['fairness'].rolling(window=7).mean()
df['rolling_std'] = df['fairness'].rolling(window=7).std()

fig, ax = plt.subplots(figsize=(12, 6))

# Plot raw data
ax.plot(df['date'], df['fairness'], 'o-', alpha=0.7, label='Daily Score',
        markersize=4, linewidth=1)

# Plot rolling statistics
ax.plot(df['date'], df['rolling_mean'], 'r-', linewidth=2,
        label='7-day Rolling Mean')
ax.fill_between(df['date'],
                df['rolling_mean'] - df['rolling_std'],
                df['rolling_mean'] + df['rolling_std'],
                alpha=0.2, color='red', label='±1 Std Dev')

# Add reference lines
ax.axhline(y=0.95, color='green', linestyle='--', alpha=0.7,
           label='Target (95%)')
ax.axhline(y=0.97, color='orange', linestyle='--', alpha=0.7,
           label='Excellent (97%)')

ax.set_xlabel('Date')
ax.set_ylabel('Fairness Score')
ax.set_title('Fairness Score Evolution Over Time')
ax.legend()
ax.grid(True, alpha=0.3)

# Format x-axis dates
import matplotlib.dates as mdates
ax.xaxis.set_major_formatter(mdates.DateFormatter('%m/%d'))
ax.xaxis.set_major_locator(mdates.DayLocator(interval=5))

plt.tight_layout()
plt.savefig('fairness_timeseries.png', dpi=300)
plt.show()
```

## Best Practices

### Color Schemes
```python
# Define consistent color palettes
COLORS = {
    'primary': '#2E86AB',
    'secondary': '#A23B72',
    'accent': '#F18F01',
    'success': '#4CAF50',
    'warning': '#FF9800',
    'error': '#F44336',
    'neutral': '#9E9E9E'
}

# Colorblind-friendly palette
COLORBLIND_PALETTE = [
    '#1F77B4',  # Blue
    '#FF7F0E',  # Orange
    '#2CA02C',  # Green
    '#D62728',  # Red
    '#9467BD',  # Purple
    '#8C564B',  # Brown
    '#E377C2',  # Pink
    '#7F7F7F'   # Gray
]
```

### Layout and Typography
```python
# Consistent plot styling
plt.rcParams.update({
    'font.size': 12,
    'font.family': 'sans-serif',
    'font.sans-serif': ['Arial', 'Helvetica', 'DejaVu Sans'],
    'axes.labelsize': 14,
    'axes.titlesize': 16,
    'xtick.labelsize': 12,
    'ytick.labelsize': 12,
    'legend.fontsize': 12,
    'figure.titlesize': 18
})

# Function to apply consistent styling
def apply_plot_style(ax, title=None, xlabel=None, ylabel=None):
    """Apply consistent styling to matplotlib axes"""
    if title:
        ax.set_title(title, pad=20, fontweight='bold')
    if xlabel:
        ax.set_xlabel(xlabel, labelpad=10)
    if ylabel:
        ax.set_ylabel(ylabel, labelpad=10)

    ax.grid(True, alpha=0.3, linestyle='--')
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    return ax
```

### Export and Formats
```python
# High-quality export settings
EXPORT_SETTINGS = {
    'dpi': 300,
    'bbox_inches': 'tight',
    'facecolor': 'white',
    'edgecolor': 'none',
    'transparent': False
}

# Export function with multiple formats
def export_plot(fig, filename, formats=['png', 'svg', 'pdf']):
    """Export plot in multiple formats"""
    base_name = filename.rsplit('.', 1)[0]

    for fmt in formats:
        output_file = f"{base_name}.{fmt}"
        fig.savefig(output_file, **EXPORT_SETTINGS, format=fmt)
        print(f"Exported: {output_file}")

# Usage
export_plot(fig, 'fairness_analysis', ['png', 'svg'])
```

### Interactive Visualizations
```python
# Create interactive plots with plotly
import plotly.graph_objects as go
import plotly.express as px

def create_interactive_fairness_plot(algorithms_data):
    """Create interactive scatter plot"""
    df = pd.DataFrame([
        {
            'algorithm': alg,
            'time': data['time'],
            'fairness': data['fairness'],
            'sample_size': data['size']
        }
        for alg, data in algorithms_data.items()
    ])

    fig = px.scatter(
        df,
        x='time',
        y='fairness',
        size='sample_size',
        text='algorithm',
        title='Interactive Algorithm Comparison',
        labels={
            'time': 'Execution Time (ms)',
            'fairness': 'Fairness Score',
            'sample_size': 'Sample Size'
        }
    )

    fig.update_traces(textposition='top center')
    fig.update_layout(showlegend=False)

    return fig

# Export as HTML
interactive_fig = create_interactive_fairness_plot(algorithms_data)
interactive_fig.write_html('interactive_comparison.html')
```

## Visualization Checklist

- [ ] **Clarity**: Is the message immediately clear?
- [ ] **Accuracy**: Do the data representations match the actual values?
- [ ] **Consistency**: Are colors, fonts, and styles consistent?
- [ ] **Accessibility**: Is the visualization colorblind-friendly?
- [ ] **Context**: Are axes labeled and units specified?
- [ ] **Simplicity**: Is unnecessary clutter removed?
- [ ] **Reproducibility**: Can the visualization be recreated?
- [ ] **Documentation**: Is the code well-commented?

This guide provides a comprehensive foundation for creating effective, professional visualizations for Spy game testing and analysis.