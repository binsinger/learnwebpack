
import './main.scss';

$(document).ready(function(){
  let app = document.createElement('div');
  app.innerHTML = "<h1> hello mobile world</h1>";
  document.body.appendChild(app);
  $('h1').maroon();
})
