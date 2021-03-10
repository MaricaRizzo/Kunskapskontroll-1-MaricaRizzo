const LastName = (props) => {

    return (
            <input type='text' id='lname' className='name' onChange={props.updateLname} ></input>
        )
        
};

export default LastName;