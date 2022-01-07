

<h1  align="center">Welcome to react-connection-notification 👋</h1>
  

<img  alt="Version"  src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
<img  src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
<img  alt="License: MIT"  src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img  alt="License: MIT"  src="http://img.shields.io/npm/v/react-connection-notification.svg?style=flat-square" />


> Notification component to display internet connection status
  
 
## Prerequisites
  
- node >=10
  
## Previews
  
<img src="https://github.com/ickarakurt/react-connection-notification/blob/master/preview.png?raw=true" width="300">
<img src="https://github.com/ickarakurt/react-connection-notification/blob/master/preview2.png?raw=true" width="300">

## Install

[![react-connection-notification](https://nodei.co/npm/react-connection-notification.png)](https://npmjs.org/package/react-connection-notification)
  
## Development
  

```sh

npm install

npm start

```


## Run tests
  

```sh

npm run test

```
  

## Usage

```jsx
import ConnectionNotification from 'react-connection-notification'

<ConnectionNotification/>

```


## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| position | 'top-right' or 'top-left' or 'bottom-right' or 'bottom-left' | bottom-left | position of notification |
| hideDismissButton | Boolean | false | hide dismiss button of notification |
| hideIcon | Boolean | false | hide connection icon |
| onlineText | String | "You are online now" | Online status text |
| offlineText | String | "You are offline now" | Offline status text |
| onlineIcon | String | wifi-icon | Online status icon |
| offlineIcon | String | no-wifi-icon | Offline status icon |
| duration | Number | 2000 | duration of notification. After duration, it will be hided |
| disableDuration | Boolean | false | Disable duration and notification will be visible until user clicks dismiss button |
| style | Object | {} | Custom styles |


## Author

  
👤 **Cem Karakurt**
  

* Website: https://cemkarakurt.com

* Twitter: [@ickarakurt](https://twitter.com/ickarakurt)

* Github: [@ickarakurt](https://github.com/ickarakurt)

* LinkedIn: [@ickarakurt](https://linkedin.com/in/ickarakurt)
  

## Show your support  

Give a ⭐️ if this project helped you!