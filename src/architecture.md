# Gildsmith Architecture

[[toc]]

## Introduction

Gildsmith is a vast and versatile ecosystem, designed to help you create a robust
e-commerce platform tailored to your specific needs. With its range of tools and
components, understanding the big picture is essential for seamless development
and scaling.

This page will guide you through the key pieces of the Gildsmith ecosystem.

## Gildsmith App

For developers seeking a streamlined solution, the `gildsmith/gildsmith` package
provides everything you need to quickly set up an e-commerce platform. This Laravel
project comes with pre-configured components, offering an all-in-one package to get
your platform up and running.

By default, the `gildsmith/gildsmith` package includes all the major components
mentioned below, carefully configured with Laravel Sail to ensure rapid environmentsetup.

For installation guide, follow [Installation page](/).

## Backend

The headless backend architecture is what sets Gildsmith apart from its competitors.
This architecture is ideal for interdisciplinary teams, allowing backend and frontend
developers to work independently without interfering with each other's progress.

At the core of the backend is the `gildsmith/core-api` package. This fundamental package
transforms your Laravel application into a Gildsmith environment, ensuring standardisation
across the system. While the Core API may not handle front-end visible tasks, it orchestrates
the flow of information, ensuring that all parts of the system work together seamlessly.

For more details on Core API, visit [Backend Development Introduction page](backend).

### Backend Packages

Gildsmith provides a range of backend packages, each encapsulating a specific feature
of the application. This modular approach enables flexibility—packages can be swapped
or updated without disrupting the entire system.

Some key backend packages include:

Product Management: Handles product listings, inventory, and categorisation.
Order Processing: Manages the flow from cart to checkout, including payment gateways.
User Management: Manages roles, permissions, and customer profiles.
Content Management: Provides the structure for managing pages, blogs, and other content.
Search: Integrates search functionality with filtering and faceted navigation.


## Frontend

## Design

## Docs