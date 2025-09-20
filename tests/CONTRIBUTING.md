# Contributing to Spy Test Suite

Thank you for your interest in contributing to the Spy game test suite! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites
- Python 3.9+
- Node.js 16+
- Git

### Quick Start
```bash
# Clone the repository
git clone https://github.com/advayc/spy-test.git
cd spy-test

# Install dependencies
make install

# Run tests
make test

# Run linting
make lint

# Format code
make format
```

## Project Structure

```
spy-test/
├── packages/
│   ├── fairness-tests/     # Core fairness testing algorithms
│   ├── visualization/      # Plot generation and visualization tools
│   ├── benchmark/          # Performance benchmarking infrastructure
│   └── integration/        # Integration testing framework
├── .github/
│   └── workflows/          # CI/CD pipelines
├── docs/                   # Documentation
├── scripts/                # Utility scripts
└── requirements-dev.txt    # Development dependencies
```

## Development Workflow

### 1. Choose an Issue
- Check the [Issues](https://github.com/advayc/spy-test/issues) page for open tasks
- Comment on the issue to indicate you're working on it
- Create a new branch for your work

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 3. Make Changes
- Follow the coding standards (see below)
- Write tests for new functionality
- Update documentation as needed
- Ensure all tests pass locally

### 4. Commit Changes
```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new fairness test for edge cases

- Add test for minimum player count
- Add test for maximum player count
- Update documentation with new test cases"
```

### 5. Push and Create Pull Request
```bash
# Push your branch
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

## Coding Standards

### Python Code Style
- Follow PEP 8 style guidelines
- Use type hints for function parameters and return values
- Write docstrings for all public functions and classes
- Maximum line length: 88 characters (Black formatter default)

### Commit Messages
Use conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Testing
- Write unit tests for all new functionality
- Aim for >90% code coverage
- Run tests before committing: `make test`
- Add integration tests for cross-package functionality

## Package-Specific Guidelines

### fairness-tests
- Focus on statistical accuracy and performance
- Include comprehensive test cases for edge cases
- Document mathematical assumptions and limitations

### visualization
- Ensure plots are publication-quality
- Support multiple output formats (PNG, SVG, PDF)
- Include colorblind-friendly color schemes

### benchmark
- Profile both time and memory usage
- Include baseline comparisons
- Document hardware requirements for benchmarks

### integration
- Test end-to-end workflows
- Mock external dependencies when possible
- Include performance regression tests

## Pull Request Process

### Before Submitting
- [ ] All tests pass locally
- [ ] Code is properly formatted (`make format`)
- [ ] Linting passes (`make lint`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventional format
- [ ] Branch is up to date with main

### PR Description
Include:
- Clear description of changes
- Motivation for the changes
- Any breaking changes
- Screenshots for UI changes (if applicable)
- Test results

### Review Process
- At least one maintainer must approve
- All CI checks must pass
- Address review feedback promptly
- Squash commits if requested

## Getting Help

- **Documentation**: Check the `docs/` directory
- **Issues**: Search existing issues or create new ones
- **Discussions**: Use GitHub Discussions for questions
- **Code Examples**: Look at existing tests and implementations

## Recognition

Contributors will be recognized in:
- Repository contributors list
- Release notes
- Project documentation

Thank you for contributing to the Spy test suite! 🎯