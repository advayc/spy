# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in the Spy test suite, please report it to us as follows:

### Contact Information
- **Email**: security@example.com
- **Response Time**: We aim to respond within 48 hours
- **Updates**: We'll provide regular updates on our progress

### What to Include
When reporting a vulnerability, please include:
- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact and severity
- Any suggested fixes or mitigations
- Your contact information for follow-up

### Our Process
1. **Acknowledgment**: We'll acknowledge receipt within 48 hours
2. **Investigation**: We'll investigate and validate the report
3. **Fix Development**: We'll develop and test a fix
4. **Disclosure**: We'll coordinate disclosure with you
5. **Release**: We'll release the fix and security advisory

## Security Best Practices

### For Contributors
- Never commit sensitive information (API keys, passwords, etc.)
- Use environment variables for configuration
- Follow the principle of least privilege
- Keep dependencies updated
- Run security scans regularly

### For Users
- Keep your Python environment updated
- Use virtual environments to isolate dependencies
- Verify package integrity when installing
- Monitor for security advisories

## Known Security Considerations

### Data Handling
- Test data is synthetic and safe for development
- No real user data is processed in tests
- Random number generation uses cryptographically secure methods

### Dependencies
- We regularly audit third-party dependencies
- Security vulnerabilities are addressed promptly
- We prefer well-maintained, widely-used packages

### Network Security
- Tests run locally by default
- No external network calls in core functionality
- Integration tests can be configured to use secure connections

## Security Updates

Security updates will be:
- Released as patch versions (e.g., 1.0.1, 1.0.2)
- Documented in release notes
- Announced through GitHub Security Advisories
- Coordinated with the broader community

## Responsible Disclosure

We kindly ask that you:
- Give us reasonable time to fix issues before public disclosure
- Avoid accessing or modifying user data
- Respect the privacy and security of our users
- Work with us in good faith to resolve issues

## Recognition

Security researchers who report valid vulnerabilities will be:
- Acknowledged in our Hall of Fame (if desired)
- Recognized in security advisories
- Considered for bounties (when available)

Thank you for helping keep the Spy test suite secure! 🔒