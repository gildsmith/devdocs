# Introduction

## Quick Start

Gildsmith's frontend operates independently from the backend, communicating via
REST API. It comes pre-configured with Vite and all the essential packages
pre-installed, streamlining your development process.

By default, the frontend isn't compiled, and npm packages serve as raw sources.
If you prefer not to start backend dockers, you can use npm run commands directly.
However, for a consistent development environment across your team, we recommend
compiling via Docker.

Before proceeding, make sure you understand how to start Sail Docker [here (TODO)].

```shell
# Start Vite development server
./vendor/bin/sail npm run dev

# Compile build
./vendor/bin/sail npm run build
```

### Terminology

Throughout our documentation and codebase, we refer to frontend applications as
_web applications_ or simply _web apps_. All frontend packages are also suffixed with
`-web` for easy identification on Github. This convention distinguishes these apps
as websites, setting them apart from any potential future mobile applications.

### Technology Stack

Our default packages are built entirely in Vue 3.4. Familiarity with Vue is
necessary to work with the frontend. Laravel Blade is used solely for loading
the built web application.

If you're new to Vue, don't worry! Our apps are designed for simplicity and
require only a basic understanding. We provide detailed guides on how to
extend and develop apps on the corresponding pages.

## Registering Web Applications

TODO