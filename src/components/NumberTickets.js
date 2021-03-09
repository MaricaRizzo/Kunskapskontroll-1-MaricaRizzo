import React from 'react';

const NumberTickets = () => {

    const amountDropDwn = document.getElementById('numberTickets');

    for (let i = 1; i < 11; i++) {
        let opt = document.createElement('option');
        opt.id = i;
        let text = document.createTextNode(i);
        opt.appendChild(text);
        amountDropDwn.appendChild(opt);
    }

    let selectedAmount = amountDropDwn.options[amountDropDwn.selectedIndex].id;

    return (
        <select id='numberTickets'></select>
    )
}

export default NumberTickets;



