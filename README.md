# reactForums

## What is reactForums?

reactForums is a free, open source forum solution for enterprise-level businesses, skilled developers, and enthusiastic hobbyists.
The meat and bones of reactForums is the ready-to-install multi-platform forum software, which allows for forum administrators and their users to engage with their board in the browser, on mobile devices (Android and iOS), and even as a native desktop app.
The heart and power of reactForums is in our forum abstraction layer, which allows the core to be installed anywhere JavaScript can run.
This means that it can also be plugged into existing projects as an npm package and even as a WordPress plugin.

### Ready-made Multi-platform Forum Software

For those who want to get working with a new forum immediately there are a few options each with their own installation instructions: a browser app, a mobile app, and a desktop app.
These are designed to work together with the mobile and desktop apps assuming the browser app is already installed.
To see a list of features, check out our documentation.

#### Browser

The foundation of the ready-made apps, the browser is the first instance of reactForums you should install.
The browser app is bundled with the REST API that allows the mobile and desktop apps to consume the same data.
Installation instructions for the browser app are found in our documentation.

#### Mobile

The mobile app allows forum administrators to offer a mobile-ready experience of their board, providing they've already installed the browser instance.
Installation instructions for the mobile app are found in our documentation.

#### Desktop

The native desktop app is an Electron wrapper around the browser app and it allows forum administrators to offer a downloadable experience of their board.
Installation instructions for the desktop app are found in our documentation.

### Forum Abstraction To Import Into Existing Projects

The ready-made apps work by consuming a common `@reactforums/core` package which functions as an abstraction layer with all the business logic.
This core package is available to experienced developers and teams who wish to use reactForums according to their particular needs.
The npm package itself can be installed into any React project.
Additionally, there is also a WordPress plugin which can add an instance of reactForums to any existing WordPress website.

#### npm Package

The arc reactor that powers our project is this nifty npm package: `@reactforums/core`.
This can be added to any React project and provides all the services needed to craft a unique instance of reactForums.

To install run:

```bash
npm install @reactforums/core
```

#### WordPress Plugin

The WordPress plugin adds a ready-made browser instance of reactForums to any existing WordPress site.
On installation it will add all the needed database tables, create a WordPress friendly administrative dashboard and moderation panel, and seed those tables with default data.

The link to download the WordPress plugin can be found on our website.
To install the plugin, simply navigate to the Plugin page of your WordPress dashboard and click Add New Plugin to upload your .zip file.

### CLI To Run Your Own Unique Instance: create-reactforums-app

Lastly, we have the command line interface for those who want to create an instance of reactForums from a starter template for exactly their use case.
This is an advanced option for talented developers who don't already have an existing React project to plug in the reactForums core.
With this CLI, you can spin up a repo of reactForums apps, core business logic and services, and ui elements by answering a series of questions to build exactly what you need and nothing more.
