![Screenshot](https://github.com/zapcriativo/react-native-media-modal/blob/main/screenshots/rn_media_modal.png?raw=true)

#### React Native Media Modal is a component that facilitates the creation of a pop-up with media content generally used for communications or in-app marketing.

## Installation

```
npm i react-native-media-modal --save
```
### or

```
yarn add react-native-media-modal
```
## Usage

```jsx
import MediaModal from "react-native-media-modal";
```

```jsx
<MediaModal ref={ref => { this.MyModal = ref }} />
```

> For the methods works, you should create the reference
                
## Methods

| Method Name | Description        |
| ----------- | ------------------ |
| open        | Open Medial Modal  |
| close       | Close Medial Modal |

Examples

```jsx
// Open Modal
function ExampleModalOpen = () => { this.MyModal.open()}

// Close Modal
function ExampleModalClose = () => { this.MyModal.close()}

```

## Props

| Prop             | Type     | Description                                              | Default                    |
| ---------------- | -------- | -------------------------------------------------------- | -------------------------- |
| title            | string   | Media Modal Content Title                                | ""                         |
| message          | string   | Media Modal message                                      | ""                         |
| textPositionTop  | boolean  | Use title and message above image                        | false                      |
| showMedia        | boolean  | Display Media Block                                      | true                       |
| mediaImage       | boolean  | Load Image on Media Block or Webview                     | true                       |
| mediaURL         | string   | Url from Image or Video Embebed if you use Webview       | true                       |
| showCancel       | boolean  | Show a Cancel button                                     | true                       |
| showConfirm      | boolean  | Show a Confirm button                                    | true                       |
| textCancel       | string   | Text display on Cancel button                            | ""                         |
| textConfirm      | string   | Text display on Confirm button                           | ""                         |
| backdropClose    | boolean  | Close Media Modal when press on mask                     | false                      |
| useNativeDriver  | boolean  | Allowing native code to perform the animation            | false                      |
| customStyles     | object   | Custom style to AlertPro                                 | {}                         |
| onCancel         | function | Event on Cancel button                                   | null                       |
| onConfirm        | function | Event on Confirm button                                  | null                       |
| onClose          | function | Callback function when modal has closed                  | null                       |
| customComponent  | function | Inject custom component inside of modal                  | null                       |

### Available Custom Style

```jsx
customStyles: {
  BackgroundMask: {...}, // Backdrop mask 
  container: {...}, // Modal container 
  title: {...}, // Content title
  message: {...}, //Message text
  media: {...}, // Media 
  closeButton: {...}, // Close button
  closeButtonIcon: {...}, // Close button Icon
  buttonCancel: {...}, // Cancel Button
  textButtonCancel: {...}, // Cancel Button Text
  buttonConfirm: {...}, // Confirm button
  textButtonConfirm: {...} // Confirm button's Text
}
```

## Example with modal customization 
```jsx
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MediaModal from 'react-native-media-modal';

const modalCustomStyles = {
  BackgroundMask: { backgroundColor: 'rgba(255,101,80, 0.4)' },
  container: { backgroundColor: '#e3e3e3' },
  title: { color: 'orange' },
  media: { width: 300 },
  message: { color: 'green' },
  closeButton: { backgroundColor: '#439431' },
  closeButtonIcon: { color: '#000' },
  buttonCancel: { backgroundColor: '#457d34' },
  buttonConfirm: { backgroundColor: '#542862' },
  textButtonCancel: { color: 'purple' },
  textButtonConfirm: { color: 'pink' },
  customComponent: { backgroundColor: '#dadada' }
}

const CustomComponent = <Text>Hello World!</Text>

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // ACTION ON CLOSE MODAL, CANCEL AND CONFIRM BUTTON TOUCH
  onClose = () => {
    console.log('Modal just closed');
  }

  onCancel = () => {
    console.log('User cancel')
    this.MyModal.close()
  }

  onConfirm = () => {
    console.log('User confirm')
  }

  render() {
    return (
      <View style={{flex: 1,    backgroundColor: '#fff',    alignItems: 'center',    justifyContent: 'center'}}>
        <Button title="Open Modal" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={() => this.MyModal.open()} />
        <MediaModal
          ref={ref => { this.MyModal = ref }}
          title={'Welcome to My App'}
          message={'In this App, we will demonstrate the use of React Native Media Modal'}
          mediaURL={'https://www.url.com/myimage.png'}
          showCancel={true}
          showConfirm={true}
          onClose={this.onClose}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          backdropClose={false}
          customComponent={CustomComponent}
          customStyles={modalCustomStyles}
        />
      </View>
    );
  }
}
```

## Example using functional component
```
import React, { useRef } from 'react'
import { Text, View, Button } from 'react-native'

import MediaModal from 'react-native-media-modal';

const modalCustomStyles = {
    BackgroundMask: { backgroundColor: 'rgba(255,101,80, 0.4)' },
    container: { backgroundColor: '#e3e3e3' },
    title: { color: 'orange' },
    media: { width: 300 },
    message: { color: 'green' },
}

const MediaModalExample = () => {

    const MediaModalRef = useRef();

    return (
        <View>
            <Text>Media Modal Example - Functional Component</Text>
            <Button title="Open Modal" color="#841584" onPress={MediaModalRef.current.open()} />
            <MediaModal
                ref={MediaModalRef}
                title={'Media Modal Functional Components'}
                message={'This is a example using functional components with Media Modal'}
                mediaURL={'https://www.url.com/myimage.png'}
                showCancel={true}
                showConfirm={true}
                backdropClose={false}
                customStyles={modalCustomStyles}
            />
        </View>
    )
}

export default MediaModalExample
```
## Dependencies 
This project use the dependency [React Native Webview](https://github.com/react-native-webview/react-native-webview "React Native Webview")

## Credits 
[Inspired on React Native Alert Pro from NY Samnang](https://github.com/nysamnang/react-native-alert-pro "Inspired on React Native Alert Pro from NY Samnang")

## Author
By [Alan Ribeiro](https://github.com/zapcriativo "Alan Ribeiro")

If you think the project is useful, please contribute with a star!

