document.getElementById('myElement').onclick = function() {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8000/auth/sign-in', false)
    xhr.send('{ "username": "lol3", "password": "lol3" }')
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
      } else {
        alert( xhr.responseText );
      }
}
