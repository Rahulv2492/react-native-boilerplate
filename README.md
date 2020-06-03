# React Native Biolerplate
---
This is [React Native](https://reactnative.dev/ "React Native") boilerplate for kickstart  mobile application development.Using that you can save time to create and set project architecture from scratch.

## Content
--

- [React Native](https://reactnative.dev/ "React Native") Version 0.62
- [Redux](https://redux.js.org/ "Redux")
- [React Navigation](https://reactnavigation.org/ "React Navigation") V5
- [Redux Saga](https://redux-saga.js.org/ "Redux Saga")
- [Axios](https://github.com/axios/axios "Axios")
- [styled-components](https://styled-components.com/ "styled-components")
- [Jest](https://jestjs.io/ "Jest")
- [react-native-testing-library](https://github.com/callstack/react-native-testing-library "react-native-testing-library")

## Getting Started
---
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites
---

1. Install React Native Cli

2. Make sure you have also installed [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).We need that      for pod files for ios.

### Intial Setup
---
1. Install Node moudels :

    ```sh
    $ npm install
    ```

2. Go to '/ios' folder from your terminal and run :

    ```sh
    $ pod install
    ```

3. From your project root directory run :

    ```sh
    $ react-native run-ios --simulator="<Simulator_name>"
    ```  

### Automatically generate your js files
---

1. Genarate Screen

    ```sh
    $ npm run generate screen

    $ What is your screen name? <screen_name>
    ```

1. Genarate component

    ```sh
    $ npm run generate component

    $ What is your component  name? <component_name>
    ```

##### Note : We are using [Plop](https://plopjs.com/ "Plop") to automatically generate js files.You can customize as per use.