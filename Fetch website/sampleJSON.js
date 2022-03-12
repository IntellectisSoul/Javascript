// for more detailed explanation : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest(); //XMLHttpRequest is often called XHR
request.open('GET', requestURL);
request.responseType = 'json'; // so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object.
request.send(); //send the request 
//The last bit of this section involves waiting for the response to return from the server, then dealing with it.
request.onload = function() {
    const superHeroes = request.response; //"response" is a property of XHR. 
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }


  function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    header.appendChild(myPara);
  }

  
  function showHeroes(obj) {
    const heroes = obj['members'];
  
    for (let i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = heroes[i].powers;
      for (let j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }