# React Native Biolerplate
---
One Paragraph of project description goes here

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