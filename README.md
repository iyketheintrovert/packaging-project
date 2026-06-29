# Application Packaging Project

## Overview

This project demonstrates dependency management, packaging,
versioning, and security auditing using Node.js.

## Dependencies

- Express
- Dotenv

## Installation

npm install

## Running Application

Development:

NODE_ENV=development npm start

Staging:

NODE_ENV=staging npm start

## Build

npm run build

## Packaging (Using PowerShell)

powershell Compress-Archive -Path build -DestinationPath app-package.zip -Force

## Versioning Strategy

Semantic Versioning (MAJOR.MINOR.PATCH):

- PATCH: Bug fixes
- MINOR: New features
- MAJOR: Breaking changes

Current Version: 1.0.0

## Security Audit

Commands:

npm audit
npm audit fix

Result:
No critical vulnerabilities detected.

## Artifact Simulation

npm pack
npm install ./app-packaging-project-1.0.0.tgz