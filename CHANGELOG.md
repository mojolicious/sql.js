
# Changelog

This package strictly follows [Semantic Versioning](https://semver.org).

## v1.2.5 (2026-05-08)

### Security

  * Fixed a SQL injection vulnerability in `escapeLiteral` and `escapeIdentifier` where non-string inputs (such as
    arrays) bypassed escaping. Inputs are now coerced to strings before escaping. Reported by sakura (se0r12).

## v1.2.0 (2022-08-10)

### Features

  * Added `escapeLiteral` and `escapeIdentifier` utility functions.

## v1.1.0 (2022-08-10)

### Features

  * Added support for `?` placeholders.

## v1.0.0 (2022-08-09)

First major release.
