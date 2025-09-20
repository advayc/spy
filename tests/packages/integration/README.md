# Spy Game Integration Tests

Integration tests that connect and validate interactions between different Spy game components.

## Features

- End-to-end testing of game flows
- API integration testing
- Cross-component validation
- Database integration tests
- Performance integration tests

## Usage

```python
from spy_integration_tests.game_flow_tester import GameFlowTester

# Test complete game flow
tester = GameFlowTester()
results = tester.test_full_game_flow(
    players=["alice", "bob", "charlie"],
    game_settings={"spy_count": 1, "time_limit": 300}
)

print(f"Game flow test: {'PASSED' if results['success'] else 'FAILED'}")
```

## Test Types

- **Game Flow Tests**: Complete game session testing
- **API Integration**: REST API endpoint testing
- **Database Integration**: Data persistence testing
- **Cross-Platform**: Web/mobile compatibility testing