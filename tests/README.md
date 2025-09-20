# Spy Selection Fairness Testing

This directory contains comprehensive tests to validate the fairness of the spy selection algorithm used in the React Native spy game.

## Overview

The spy selection algorithm uses the Fisher-Yates shuffle algorithm to randomly select spies from the player pool. This test suite simulates thousands of games to ensure that each player has an approximately equal probability of being selected as a spy.

## Files

- `spy_selection_simulation.py` - Main simulation script
- `requirements.txt` - Python dependencies
- `run_tests.sh` - Bash script to run all tests
- Generated results folders:
  - `scenario_1_fixed_spy/` - Results for single spy games
  - `scenario_2_multiple_spies/` - Results for multiple spy games
  - `scenario_3_random_spies/` - Results for random spy count games

## Running the Tests

### Prerequisites

Make sure you have Python 3.8+ installed, then install dependencies:

```bash
cd tests
pip install -r requirements.txt
```

### Run All Tests

```bash
# Using Python directly
python spy_selection_simulation.py

# Or using the bash script
./run_tests.sh
```

### Quick Test (fewer simulations)

To run a quick test with fewer simulations for faster results:

```python
# Edit spy_selection_simulation.py and change:
games_to_simulate=1000  # instead of 10000
```

## Test Scenarios

### Scenario 1: Fixed Single Spy
- **Players**: 15
- **Spy Count**: 1 (fixed)
- **Games**: 10,000
- **Expected Result**: Each player should be selected as spy ~667 times (1/15 probability)

### Scenario 2: Fixed Multiple Spies  
- **Players**: 15
- **Spy Count**: 3 (fixed)
- **Games**: 10,000
- **Expected Result**: Each player should be selected as spy ~2000 times (3/15 probability)

### Scenario 3: Random Spy Count
- **Players**: 15
- **Spy Count**: Random between 1-4
- **Games**: 10,000
- **Expected Result**: Each player should be selected proportionally to average spy count

## Interpreting Results

### Fairness Score
- **95-100**: Excellent fairness
- **90-94**: Very good fairness
- **80-89**: Good fairness
- **70-79**: Fair (acceptable but could be improved)
- **<70**: Needs improvement

### Key Metrics
- **Coefficient of Variation**: Lower is better (< 5% is excellent)
- **Standard Deviation**: Should be low relative to the mean
- **Min/Max Range**: Should be relatively tight around the expected value

### Visual Outputs
Each test generates:
1. **Bar Chart**: Spy count per player
2. **Histogram**: Distribution of spy counts
3. **Deviation Chart**: How far each player deviates from expected
4. **Probability Chart**: Actual vs expected probabilities
5. **Timeline Matrix**: Spy selections over time
6. **Statistical Summary**: Key metrics and interpretation

## Algorithm Details

The simulation replicates the exact algorithm used in the React Native app:

```typescript
// Fisher-Yates shuffle
const arr = [...players];
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const spyIds = arr.slice(0, finalSpyCount).map(p => p.id);
```

This ensures the test accurately reflects the actual game behavior.

## Expected Outcomes

With a proper random algorithm, we expect:
- Fairness scores above 90%
- Coefficient of variation under 10%
- Each player's spy count within 2 standard deviations of the mean
- No systematic bias toward any particular player

## Troubleshooting

### Dependencies Issues
```bash
# If matplotlib doesn't work on macOS:
pip install --upgrade matplotlib

# If seaborn is missing:
pip install seaborn pandas numpy
```

### Memory Issues
If you encounter memory issues with large simulations:
- Reduce `games_to_simulate` to 1000 or 5000
- The algorithm should still show fairness with fewer simulations

### No Display
If running on a headless server, add this to the top of the Python script:
```python
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend
```

## Contributing

When making changes to the spy selection algorithm in the main app:
1. Update this simulation to match the new algorithm
2. Run all test scenarios
3. Ensure fairness scores remain above 90%
4. Update this documentation if needed