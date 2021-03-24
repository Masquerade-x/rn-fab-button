# rn-fab-button

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/rn-fab-button.svg?style=flat-square)](https://www.npmjs.com/package/rn-fab-button)

#### A React Native Fab Button Component built using react-native animations providing the user ability to add buttons and customize them accordingly.

## Prerequisites

Kindly install @react-native-vector-icons before you start using this component.

## Table of content

- [Installation](#installation)

  - ` yarn add rn-fab-button`
  - ` npm i rn-fab-button`

- [Usage](#typo3-setup)
- [Props](#page-setup)
- [Credits](#credits)

## Usage

```javascript
import Icon from "react-native-vector-icons/FontAwesome";

<FloatingButton
  noOfButtons={2}
  icons={["example", "example"]}
  size={20}
  toggleBtnSize={20}
  width={40}
  height={40}
  onPress={() => console.log("running")}
  buttonBgColor={"green"}
  toggleButtonStyle={{ backgroundColor: "#8B008B" }}
  iconColor="white"
/>;
```

## Props

### Required

| Prop                    | Description                                                                                                          | Type     | Default                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------- |
| **`noOfButtons`**       | No of buttons to be displayed                                                                                        | Number   | **Required**                             |
| **`icons`**             | Takes an array of name of icons to renders into the buttons. Receives an object with array `{['example','example']}` | Arryay   | **Required**                             |
| **`width`**             | Width in pixels for the fab buttons, **same for all of them**                                                        | Number   | **Required for background of the icons** |
| **`height`**            | height in pixels for the fab buttons                                                                                 | Number   | **Required for background of the icons** |
| **`toggleBtnSize`**     | Size of the toggle button                                                                                            | Number   | **Required **                            |
| **`buttonBgColor`**     | background color of the buttons                                                                                      | String   | **Optional**                             |
| **`toggleButtonStyle`** | styling for the toggle buttons                                                                                       | String   | **Optional**                             |
| **`iconColor`**         | color of the fab button icons                                                                                        | String   | **Required**                             |
| **`size`**              | size of the fab buttons                                                                                              | Number   | **Requried**                             |
| **`onPress`**           | callback when the fab button is pressed                                                                              | function | **Optional**                             |

### Credits

Written by [Rachit Sharma](https://www.linkedin.com/in/rachit-sharma-8ba31b175/) ([masquerade-x](https://github.com/Masquerade-x))
