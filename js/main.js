
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1&skip=540");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader("postman-token", "c2a8ef06-1ab0-919f-1f22-70dcbb5e0846");

xhr.send(data);
