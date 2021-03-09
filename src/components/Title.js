import React from 'react';

const Titles = () => {

        const titles = [
                        'Mr.',
                        'Mrs.',
                        'Miss'
                    ];

        const generateTitles = () => {

            const titleDropDwn = document.getElementById('title');

            for (let i = 0; i < titles.length; i++) {
            let opt = document.createElement('option');
            opt.id = titles[i];
            let text = document.createTextNode(titles[i]);
            opt.appendChild(text);
            titleDropDwn.appendChild(opt);
            }
        
            let selectedTitle = titleDropDwn.options[titleDropDwn.selectedIndex].id;

        }

       

    return (
        <select id='title' onClick = {generateTitles} ></select>
    )
        
    
};



export default Titles;

