# Sempub
*increments semantic version, pushes to git, and publishes to NPM*

## Installation

```bash
npm i sempub -g
```

## Usage


### Initialization

Initialization will walk you through a prompt to define what the command should do each time it is run. If you want to change the settings at any time, just run it again.

```bash
sempub init
```

### publish

```bash
//will prompt for commit message
sempub publish

//will not prompt for commit message
sempub publish --message "commit message"
```

### Release 0.0.25

Append release notes to README.md
