const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';

container.appendChild(blueH3);

const pinkDiv = document.createElement('div');
pinkDiv.style.border = '2px solid black';
pinkDiv.style.backgroundColor = 'pink';

const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.textContent = "ME TOO!";

pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divP);
container.appendChild(pinkDiv);
