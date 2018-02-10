
// require('./main.css');
// require('./main.scss');

// var sub = require('./sub');

// var $ = require('jquery');

// var app = document.createElement('div')
// app.innerHTML = '<h1>Hello World</h1>';
// app.appendChild(sub());
//  document.body.appendChild(app);
// $('body').append('<p>jquery is used </p>')

import './main.css';
import './main.scss';
import sub from './sub';

import moment from 'moment';
//2
// import $ from 'jquery';
// import 'imports?jQuery=jquery!./plugin.js'; //imports-loader
// 2
import './plugin.js';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number)=>{
  $('body').append('<p>promise result is'+ number +'</p>');
  $('body').append('<p>now the moment is'+ moment().format() +'</p>');
  $('p').maroon();
})
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
 document.body.appendChild(app);
