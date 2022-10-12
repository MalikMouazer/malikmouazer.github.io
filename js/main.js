/*
Tout ce qui est écrit ici est entre commentaires.
Si votre commentaire tient sur une ligne, vous pouvez utiliser deux barres obliques pour indiquer un commentaire :

Tuto sur : https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics
*/


// Voici un commentaire sur une seule ligne

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

function masmultiply(num1,num2) {
  let result = num1 * num2;
  return result;
}/*
document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});
*/

/*
Le code précedent est identique à celui ici mais en plus court :

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {});

*/

// alert(masmultiply(5,7))

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    // src c'est là ou on met href = "" c'est la source du fichier
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/Firefox_bw.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});



let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');
// déja appelé en principe

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}


myButton.addEventListener('click', function() {
  setUserName();
});
