var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
//xhr.responseType = 'json';

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:3000/js/proverbs.json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "67638480-5a7f-5ff2-821f-ca3a98a18388");
xhr.setRequestHeader("responseType", "json");

xhr.send(data);


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
