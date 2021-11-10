# React Components
React component which provides an example components with styles, and described properties. Also possible to place own components or styles within components

### Install
`npm install https://github.com/michalzagrodzki/React-Components.git --save`

or

`yarn add https://github.com/michalzagrodzki/React-Components.git`

### Use

##### ES6
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from "react-components";

ReactDOM.render(
  <div>
    <Card title="A title", body="A body", style={{margin: "10px"}}>
      <p>my own paragraph</p>
    </Card>
  </div>,
  document.getElementById('app')
);
```
##### ES5
```javascript
var Card = require('react-components');
```

### API
The components takes a list of following props 'title', 'body', 'image', 'style',
* Title - accepts string and numbers
* Body - accepts string and numbers
* Image - accept urls
* Style - accept objects with style key-values