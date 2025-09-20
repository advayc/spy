# Spy Game Tests Monorepo Makefile

.PHONY: help install test clean lint format build docs

# Default target
help:
	@echo "Spy Game Tests Monorepo"
	@echo "======================="
	@echo ""
	@echo "Available targets:"
	@echo "  install       Install all dependencies"
	@echo "  test          Run all tests"
	@echo "  test-fairness Run fairness tests only"
	@echo "  test-viz      Run visualization tests only"
	@echo "  test-bench    Run benchmark tests only"
	@echo "  test-int      Run integration tests only"
	@echo "  clean         Clean build artifacts and cache"
	@echo "  lint          Lint Python code"
	@echo "  format        Format Python code"
	@echo "  build         Build all packages"
	@echo "  docs          Generate documentation"
	@echo "  help          Show this help message"

# Installation
install:
	@echo "Installing Python dependencies..."
	pip install -r requirements.txt
	@echo "Installing packages in development mode..."
	for pkg in packages/*/; do \
		if [ -f "$$pkg/pyproject.toml" ]; then \
			echo "Installing $$pkg..."; \
			cd $$pkg && pip install -e . && cd ../..; \
		fi; \
	done

install-dev: install
	pip install -r requirements-dev.txt

# Testing
test:
	@echo "Running all tests..."
	pytest packages/*/tests/ -v --cov=packages --cov-report=html --cov-report=term

test-fairness:
	@echo "Running fairness tests..."
	pytest packages/fairness-tests/tests/ -v

test-viz:
	@echo "Running visualization tests..."
	pytest packages/visualization/tests/ -v

test-bench:
	@echo "Running benchmark tests..."
	pytest packages/benchmark/tests/ -v

test-int:
	@echo "Running integration tests..."
	pytest packages/integration/tests/ -v

# Code quality
lint:
	@echo "Linting Python code..."
	flake8 packages/ --max-line-length=100 --extend-ignore=E203,W503
	@echo "Type checking..."
	mypy packages/

format:
	@echo "Formatting Python code..."
	black packages/ --line-length=100
	isort packages/

# Building
build:
	@echo "Building all packages..."
	for pkg in packages/*/; do \
		if [ -f "$$pkg/pyproject.toml" ]; then \
			echo "Building $$pkg..."; \
			cd $$pkg && python -m build && cd ../..; \
		fi; \
	done

# Cleaning
clean:
	@echo "Cleaning build artifacts and cache..."
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type d -name "*.egg-info" -exec rm -rf {} +
	find . -type d -name ".pytest_cache" -exec rm -rf {} +
	find . -type d -name ".mypy_cache" -exec rm -rf {} +
	find . -type d -name "build" -exec rm -rf {} +
	find . -type d -name "dist" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type f -name "*.pyd" -delete
	find . -type f -name ".coverage" -delete
	find . -type d -name "htmlcov" -exec rm -rf {} +
	find . -type d -name ".tox" -exec rm -rf {} +

clean-results:
	@echo "Cleaning test results..."
	rm -rf results/
	rm -f *.png *.jpg *.svg *.pdf

# Documentation
docs:
	@echo "Generating documentation..."
	# Add documentation generation commands here
	@echo "Documentation generated in docs/"

# Development workflow
dev-setup: clean install-dev
	@echo "Development environment setup complete!"

dev-test: format lint test
	@echo "Development test suite complete!"

# CI/CD simulation
ci: clean install lint test build
	@echo "CI pipeline simulation complete!"

# Quick development commands
quick-test:
	@echo "Running quick test suite..."
	pytest packages/fairness-tests/tests/test_basic.py -v

benchmark:
	@echo "Running performance benchmarks..."
	python -c "from spy_benchmark.profiler import AlgorithmProfiler; print('Benchmarking...')"

# Package management
update-deps:
	@echo "Updating dependencies..."
	pip install --upgrade -r requirements.txt

freeze-deps:
	@echo "Freezing current dependencies..."
	pip freeze > requirements-frozen.txt

# Git helpers
git-status:
	@echo "Git status for all packages:"
	@for pkg in packages/*/; do \
		if [ -d "$$pkg/.git" ]; then \
			echo "\n$$pkg:"; \
			cd $$pkg && git status --short && cd ../..; \
		fi; \
	done

# Docker support (if needed)
docker-build:
	@echo "Building Docker image..."
	docker build -t spy-tests .

docker-run:
	@echo "Running tests in Docker..."
	docker run --rm spy-tests make test

# Utility
count-lines:
	@echo "Code statistics:"
	find packages/ -name "*.py" -exec wc -l {} + | tail -1

# Environment info
info:
	@echo "Environment Information:"
	@echo "Python: $$(python --version)"
	@echo "Pip: $$(pip --version)"
	@echo "Git: $$(git --version)"
	@echo "Make: $$(make --version | head -1)"