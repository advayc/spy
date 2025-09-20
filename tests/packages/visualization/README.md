# Spy Game Visualization Tools

Generate beautiful visualizations for Spy game test results and statistical analysis.

## Features

- Clean, professional charts for fairness analysis
- Multiple visualization types (bar charts, histograms, heatmaps)
- Export to multiple formats (PNG, SVG, PDF)
- Customizable themes and colors

## Usage

```python
from spy_visualization.plot_generator import PlotGenerator
from spy_fairness_tests.algorithms import TestResults

# Generate fairness visualization
generator = PlotGenerator()
results = TestResults(...)  # Your test results

generator.create_fairness_plot(results, "fairness_analysis.png")
generator.create_distribution_plot(results, "distribution.png")
```

## Supported Plot Types

- **Fairness Analysis**: Bar chart showing spy selection probabilities
- **Distribution Histogram**: Statistical distribution of results
- **Heatmap**: Correlation analysis between players
- **Timeline**: Spy selection patterns over time
- **Comparison**: Side-by-side comparison of different algorithms