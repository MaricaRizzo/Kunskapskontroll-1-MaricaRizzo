import React from 'react';

class Terms extends React.Component {
    render() {
        return (
            <form>
                <input type='checkbox' id='terms'></input>
                <label for='terms'>Godkänner villkoren</label>
            </form>
        )
    }
}

export default Terms;