const FirstName = (props) => {

    return (
            <input type='text' id='fname' className='name' onChange={props.updateFname} ></input>
        )
        
};

export default FirstName;