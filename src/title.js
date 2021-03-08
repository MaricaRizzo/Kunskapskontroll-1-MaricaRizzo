const titles = [
    'Mr.',
    'Mrs.',
    'Miss'
];

const titleDropDwn = document.getElementById('');

for (let i = 0; i < titles.length; i++) {
    let opt = document.createElement('option');
    opt.id = titles[i];
    let text = document.createTextNode(titles[i]);
    opt.appendChild(text);
    titleDropDwn.appendChild(opt);
}

let selectedTitle = titleDropDwn.options[titleDropDwn.selectedIndex].id;






const amountDropDwn = document.getElementById('');

for (let i = 1; i < 11; i++) {
    let opt = document.createElement('option');
    opt.id = i;
    let text = document.createTextNode(i);
    opt.appendChild(text);
    amountDropDwn.appendChild(opt);
}

let selectedAmount = amountDropDwn.options[amountDropDwn.selectedIndex].id;