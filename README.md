# Sempub

## Introduction

*increments semantic version, pushes to git, and publishes to NPM*

I DON'T RECOMMEND USING THIS YET! PLEASE WAIT FOR VERSION 1.0.0 !!!🚨⚠️🔥⚡🚨⚠️🔥⚡🚨⚠️🔥⚡

If you are trying to get this working, you will most likely need to npm init and have your git remote set up already.

## Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Release Notes](#release-notes)
* [Roadmap](#roadmap)

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

### Publish

```bash
# will prompt for commit message
sempub publish

# will not prompt for commit message
sempub publish --message "commit message"
```

## Roadmap

- [ ] Streamline init
  - [ ] git init
  - [ ] npm init
- [ ] Testing
  - [ ] More Testing
  - [ ] Mocha
- [ ] Distribution
  - [ ] Flexible adapting CI/CD chain
  - [ ] Git push to multiple urls
  - [ ] Use alternate package manager
- [ ] Style
  - [ ] Linting
- [ ] Complexity
  - [ ] Code Complexity
  - [ ] UML Diagrams
- [ ] Hints
  - [x] CLI markdown prompts
  - [ ] Make hints cli flag switchable
  - [ ] Make hints for every prompt
  - [ ] Toggle hints in init config

## Release Notes

### Release 0.1.27

* fix emoji shortcodes not working 😀

### Release 0.1.26

* * added commit hint :grinnning:
* * fixed release notes not creating list

### Release 0.1.25

* added CLI markdown prompt

### Release 0.1.24

* added roadmap
* improved readme structure

### Release 0.1.22

* fix release notes spacing bug

### Release 0.1.19

* simplify initialization logic using inquirer's confirm type

### Release 0.1.11

* fix unnecessary $ operator being interpreted as literal

### Release 0.1.10

* modify git commit message prompt to use editor, for multiline commits
* fix release notes adding too many spacings

### Release 0.1.7

* clean README
