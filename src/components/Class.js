import React from 'react';

class Class extends React.Component {

    render () {
        return(
            <form id='classForm'>
                <input type='radio' name='class' id='second'></input>
                <label for='second'>2:a klass</label>
                <input type='radio' name='class' id='first'></input>
                <label for='first'>1:a klass</label>
            </form>
        )
    }
}

export default Class;