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

// var baseUrl = axios.create({
//   baseURL: 'http://localhost:8000'
// });

// baseUrl.request({
//   method: "POST",
//   url: "/auth/sign-in",
//   headers: {
//     Accept: "text/plain",
//   },
//   data: {
//     username: 'lol4',
//     password: 'lol4'
//   }
// }).catch(error => {
//     throw error;
// }).then(result => {
//     if (result.status === 200) {
//       alert(result.data)
//       return result.data;
//     }
// })

const config = {
  timetick: 100,
  baseUrl: 'http://localhost:8000'
}

function swapHandlers(item, method, firstHandler, secondHandler)
{
  item.removeEventListener(method, firstHandler);
  item.addEventListener(method, secondHandler);
}

function signInSwapHandler() {
  var signIn = document.getElementById('sign__in');
  var signUp = document.getElementById('sign__up');
  swapHandlers(signIn, 'click', signInSwapHandler, signInSendHandler);
  swapHandlers(signUp, 'click', signUpSendHandler, signUpSwapHandler);

  swapDiv(signIn, signUp);
  document.getElementById('email').style.display = "none";
}

function signUpSwapHandler() {
  var signUp = document.getElementById('sign__up');
  var signIn = document.getElementById('sign__in');
  swapHandlers(signUp, 'click', signUpSwapHandler, signUpSendHandler);
  swapHandlers(signIn, 'click', signInSendHandler, signInSwapHandler);
  
  swapDiv(signUp, signIn);
  document.getElementById('email').style.display = "inline-block";
}

function signInSendHandler() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var client = new UserClient(config.baseUrl)
  client.login(username, password)
}

function signUpSendHandler() {
  alert('signUpSendHandler')
}

window.onload = function() {
  document.getElementById('sign__up').addEventListener('click', signUpSwapHandler);
  document.getElementById('sign__in').addEventListener('click', signInSendHandler);
  document.getElementById('email').style.display = "none";
}

function swapDiv(firstElemContent, secondElemContent) {
  // FadeOut(firstElemContent, 1000);
  // FadeOut(secondElemContent, 1000);

  firstElemContent.parentNode.insertBefore(firstElemContent, secondElemContent);

  firstElemContent.classList.add('btn');
  firstElemContent.classList.remove('intro__auth__form__item__grey');

  secondElemContent.classList.remove('btn');
  secondElemContent.classList.add('intro__auth__form__item__grey');

  // FadeIn(firstElemContent, 1000);
  // FadeIn(secondElemContent, 1000);
}

// TODO
function FadeOut(item, time) {
  var itemStyle = item.style
  itemStyle.opacity = "1.0"
  delta = itemStyle.opacity / (time / config.timetick)
  FadeOutIteration(itemStyle, itemStyle.opacity, delta)
  setTimeout(() => {itemStyle.opacity = 0}, time);
}

function FadeIn(item, time) {
  var itemStyle = item.style
  itemStyle.opacity = "0.0"
  delta = 1 / (time / config.timetick)
  FadeInIteration(itemStyle, itemStyle.opacity, delta)
  setTimeout(() => {itemStyle.opacity = 1}, time);
}

function FadeOutIteration(style, currOpacity, delta) {
  console.log(currOpacity)
  if (currOpacity > 0.05) {
    style.opacity = currOpacity;
    setTimeout(() => {FadeOutIteration(style, currOpacity - delta, delta)}, config.timetick);
  }
}

function FadeInIteration(style, currOpacity, delta) {
  if (currOpacity < 1) {
    style.opacity = currOpacity;
    let newOpacity = parseFloat(currOpacity) + parseFloat(delta)
    setTimeout(() => {FadeInIteration(style, parseFloat(newOpacity), delta)}, config.timetick);
  }
}