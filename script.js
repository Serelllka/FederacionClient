// document.getElementById('sign__in').onclick = function() {
//   var xhr = new XMLHttpRequest()
//   xhr.open('POST', 'http://localhost:8000/auth/sign-in', false)
//   xhr.send('{ "username": "lol3", "password": "lol3" }')
//   if (xhr.status != 200) {
//     alert( xhr.status + ': ' + xhr.statusText );
//   } else {
//     alert( xhr.responseText );
//   }
// }

function signInHandler() {
  swapDiv('sign__in', 'sign__up');
}

function signUpHandler() {
  swapDiv('sign__up', 'sign__in');
}

document.getElementById('sign__in').onclick = signInHandler;

document.getElementById('sign__up').onclick = signUpHandler;

function swapDiv(firstElemId, secondElemId) {
  var firstElemContent = document.getElementById(firstElemId);
  var secondElemContent = document.getElementById(secondElemId);
  firstElemContent.parentNode.insertBefore(firstElemContent, secondElemContent);

  firstElemContent.classList.add('btn');
  firstElemContent.classList.remove('intro__auth__form__item__grey');

  secondElemContent.classList.remove('btn');
  secondElemContent.classList.add('intro__auth__form__item__grey');
}
