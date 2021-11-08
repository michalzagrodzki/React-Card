# React Card
React component which provides a card with styles, title, body and image. Also possible to place own components or styles within component

### Install
`npm install --save react-card`

### Use

##### ES6
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-card';

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
var Rectangle = require('react-card');
```

### API
The components takes a list of following props 'title', 'body', 'image', 'style',
* Title - accepts string and numbers
* Body - accepts string and numbers
* Image - accept urls
* Style - accept objects with style key-values