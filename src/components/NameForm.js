import React from 'react';

class NameForm extends React.Component {

    render () {

        return (
            <form className='NameForm'>
            <label>Förnamn
            <input type='text'></input>
            </label>
            <label>Efternamn
            <input type='text'></input>
            </label>
        </form>
        )
        
    }
};

export default NameForm;
