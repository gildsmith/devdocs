# Installation

## About Gildsmith

We built Gildsmith out of frustration with the complexity of existing ecommerce
platforms. Our goal was to create a simpler, more intuitive solution that
prioritizes both the developer's experience and the platform's scalability.

### Core Principles

**Developer-Centric**: We put the developer experience front and center. Clean,
well-tested code, coupled with CI/CD pipelines and Docker support, ensure
a smooth development journey from day one.

**Elegantly Simple**: Our tech stack is deliberately streamlined, leveraging both
relational and non-relational databases, cache, queues, and websockets. Laravel
orchestrates this ensemble seamlessly, allowing you to concentrate on crafting
your store, not battling infrastructure complexities.

**Built to Grow**: Scalability is woven into Gildsmith's fabric. It's deployment-ready
out of the box, but it's also engineered to evolve in step with your business. The
modular architecture empowers you to independently deploy, maintain, and scale
individual components, affording you unparalleled adaptability.

## Creating a Project

Before you begin, make sure your local machine has PHP and Composer installed.
You'll also need Docker and Docker Compose to use our custom Laravel Sail for
Gildsmith. If you're using Windows, we strongly recommend
[WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install).

Once you have everything installed, create a new project using Composer:

```shell
composer create-project gildsmith/gildsmith example-app
```

// TODO: To be continued