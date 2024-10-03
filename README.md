# Electron Hello World Demo

This is a simple "Hello World" application built with Electron, using Yarn for package management.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

Make sure you have [Yarn](https://yarnpkg.com/) and [Node.js](https://nodejs.org/) installed.

To install the necessary dependencies, run the following command in the project root directory:

```bash
yarn install
```

## Running the App

After the dependencies are installed, you can start the Electron application with the following command:

```bash
yarn start
```

This will launch the Electron application, displaying a "Hello World" window.

## Project Structure

The project files are organized as follows:

```bash
├── package.json    # Project configuration, scripts, and dependencies
├── main.js         # Main process for Electron
├── index.html      # HTML file displayed in the app window
└── renderer.js     # JavaScript for the renderer process
```

## Dependencies

- [Electron](https://www.electronjs.org/): A framework for building cross-platform desktop applications with web technologies.
- [Yarn](https://yarnpkg.com/): A fast, reliable, and secure dependency manager.

## License

This project is licensed under the [MIT License](LICENSE).

