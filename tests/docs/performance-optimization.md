# Performance Optimization Guide

## Overview

This guide covers performance optimization strategies for spy selection algorithms, focusing on both time and memory efficiency while maintaining fairness.

## Performance Metrics

### Time Complexity
- **Fisher-Yates Shuffle:** O(n) - optimal for random selection
- **Linear Search:** O(n) - acceptable for small player counts
- **Hash-based Selection:** O(1) average case - best for large groups

### Memory Usage
- **In-place Algorithms:** O(1) additional space
- **List-based Storage:** O(n) space for player data
- **Caching Strategies:** O(n) space with O(1) lookup time

### Scalability Factors
- **Player Count:** Performance degradation with large groups
- **Round Frequency:** Memory accumulation over multiple rounds
- **Concurrent Games:** Resource contention in multi-game scenarios

## Optimization Techniques

### Algorithm Selection

#### For Small Groups (2-10 players)
```python
# Fisher-Yates is optimal for small groups
def select_spy_fisher_yates(players):
    """O(n) time, O(1) extra space"""
    n = len(players)
    spy_index = random.randint(0, n-1)

    # Swap spy to end for easy removal
    players[spy_index], players[-1] = players[-1], players[spy_index]
    return players.pop()
```

#### For Large Groups (50+ players)
```python
# Hash-based selection for constant time
def select_spy_hash(players, seed=None):
    """O(1) time, O(n) space for hash table"""
    if seed is not None:
        random.seed(seed)

    spy_hash = hash(str(random.random()))
    spy_index = spy_hash % len(players)
    return players[spy_index]
```

### Memory Optimization

#### Object Pooling
```python
class PlayerPool:
    """Reuse player objects to reduce GC pressure"""
    def __init__(self, max_size=1000):
        self.pool = []
        self.max_size = max_size

    def get_player(self, player_id):
        if self.pool:
            return self.pool.pop()
        return Player(player_id)

    def return_player(self, player):
        if len(self.pool) < self.max_size:
            self.pool.append(player)
```

#### Lazy Evaluation
```python
class LazySpySelector:
    """Compute spy selection only when needed"""
    def __init__(self, players):
        self.players = players
        self._spy = None
        self._computed = False

    @property
    def spy(self):
        if not self._computed:
            self._spy = self._select_spy()
            self._computed = True
        return self._spy

    def _select_spy(self):
        # Expensive computation here
        return random.choice(self.players)
```

### Caching Strategies

#### LRU Cache for Repeated Selections
```python
from functools import lru_cache

@lru_cache(maxsize=128)
def cached_spy_selection(player_tuple, game_seed):
    """Cache spy selections for repeated player configurations"""
    players = list(player_tuple)
    random.seed(game_seed)
    return fisher_yates_shuffle(players)
```

#### Result Memoization
```python
class SpySelectionCache:
    """Cache spy selections with TTL"""
    def __init__(self, ttl_seconds=300):
        self.cache = {}
        self.ttl = ttl_seconds

    def get(self, game_id):
        if game_id in self.cache:
            entry = self.cache[game_id]
            if time.time() - entry['timestamp'] < self.ttl:
                return entry['spy']
            else:
                del self.cache[game_id]
        return None

    def set(self, game_id, spy):
        self.cache[game_id] = {
            'spy': spy,
            'timestamp': time.time()
        }
```

## Benchmarking

### Performance Profiling
```python
import cProfile
import pstats

def profile_spy_selection():
    """Profile spy selection performance"""
    players = [f"Player_{i}" for i in range(100)]

    profiler = cProfile.Profile()
    profiler.enable()

    # Run multiple selections
    for _ in range(1000):
        select_spy_fisher_yates(players.copy())

    profiler.disable()
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative').print_stats(10)
```

### Memory Profiling
```python
from memory_profiler import profile

@profile
def memory_intensive_selection():
    """Profile memory usage of spy selection"""
    large_player_list = [f"Player_{i}" for i in range(10000)]

    # Memory-intensive operation
    spies = []
    for _ in range(100):
        spies.append(select_spy_fisher_yates(large_player_list.copy()))

    return spies
```

## Parallel Processing

### Concurrent Game Support
```python
import concurrent.futures
import threading

class ConcurrentSpySelector:
    """Handle multiple games concurrently"""
    def __init__(self, max_workers=4):
        self.executor = concurrent.futures.ThreadPoolExecutor(max_workers)
        self.lock = threading.Lock()

    def select_spies_batch(self, game_configs):
        """Select spies for multiple games in parallel"""
        futures = [
            self.executor.submit(self._select_for_game, config)
            for config in game_configs
        ]

        return [future.result() for future in concurrent.futures.as_completed(futures)]

    def _select_for_game(self, config):
        with self.lock:
            return select_spy_fisher_yates(config['players'])
```

### Async/Await Support
```python
import asyncio

async def async_spy_selection(players):
    """Async spy selection for non-blocking operations"""
    # Simulate I/O bound operation (e.g., database lookup)
    await asyncio.sleep(0.01)

    loop = asyncio.get_event_loop()
    spy = await loop.run_in_executor(None, select_spy_fisher_yates, players)
    return spy

async def handle_multiple_games(games):
    """Handle multiple games asynchronously"""
    tasks = [async_spy_selection(game['players']) for game in games]
    results = await asyncio.gather(*tasks)
    return results
```

## Hardware Acceleration

### NumPy Optimization
```python
import numpy as np

def numpy_spy_selection(players_array):
    """Vectorized spy selection using NumPy"""
    # Convert to numpy array for vectorized operations
    indices = np.arange(len(players_array))

    # Vectorized random selection
    spy_index = np.random.choice(indices)
    return players_array[spy_index]
```

### GPU Acceleration (for large-scale simulations)
```python
# Using CuPy for GPU acceleration
try:
    import cupy as cp

    def gpu_spy_selection(players_gpu):
        """GPU-accelerated spy selection for massive simulations"""
        indices = cp.arange(len(players_gpu))
        spy_index = cp.random.choice(indices)
        return players_gpu[spy_index]

except ImportError:
    # Fallback to CPU implementation
    gpu_spy_selection = numpy_spy_selection
```

## Monitoring and Alerting

### Performance Monitoring
```python
class PerformanceMonitor:
    """Monitor spy selection performance in production"""
    def __init__(self):
        self.metrics = {
            'selection_time': [],
            'memory_usage': [],
            'fairness_score': []
        }

    def record_selection(self, duration, memory_delta, fairness):
        """Record performance metrics"""
        self.metrics['selection_time'].append(duration)
        self.metrics['memory_usage'].append(memory_delta)
        self.metrics['fairness_score'].append(fairness)

        # Alert on performance degradation
        if duration > self.threshold:
            self.alert_slow_performance(duration)

    def get_stats(self):
        """Get performance statistics"""
        return {
            'avg_time': np.mean(self.metrics['selection_time']),
            'max_memory': np.max(self.metrics['memory_usage']),
            'fairness_trend': np.polyfit(range(len(self.metrics['fairness_score'])),
                                        self.metrics['fairness_score'], 1)[0]
        }
```

## Best Practices

### Code Optimization
1. **Profile First:** Use profiling tools before optimizing
2. **Benchmark Alternatives:** Compare multiple approaches
3. **Consider Trade-offs:** Balance performance with code readability
4. **Test Optimizations:** Ensure optimizations don't break functionality

### System Design
1. **Scalability Planning:** Design for expected load
2. **Resource Limits:** Set appropriate memory and time limits
3. **Graceful Degradation:** Handle high-load scenarios
4. **Monitoring Integration:** Include performance monitoring from day one

### Maintenance
1. **Regular Profiling:** Monitor performance over time
2. **Update Dependencies:** Keep libraries and frameworks updated
3. **Code Reviews:** Include performance considerations in reviews
4. **Documentation:** Document performance characteristics and limitations

## Troubleshooting

### Common Performance Issues

**Slow Selection Times:**
- Check algorithm complexity
- Profile for bottlenecks
- Consider caching strategies
- Evaluate hardware limitations

**High Memory Usage:**
- Monitor object creation
- Implement object pooling
- Use streaming for large datasets
- Check for memory leaks

**Inconsistent Performance:**
- Identify resource contention
- Check for GC pauses
- Monitor system resources
- Implement load balancing

### Debug Tools
```python
# Performance debugging utilities
def debug_performance(func):
    """Decorator for performance debugging"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_memory = psutil.Process().memory_info().rss

        result = func(*args, **kwargs)

        end_time = time.time()
        end_memory = psutil.Process().memory_info().rss

        print(f"Function: {func.__name__}")
        print(f"Time: {end_time - start_time:.4f}s")
        print(f"Memory: {(end_memory - start_memory) / 1024 / 1024:.2f}MB")

        return result
    return wrapper
```

This guide provides a comprehensive approach to optimizing spy selection algorithms while maintaining fairness and reliability.