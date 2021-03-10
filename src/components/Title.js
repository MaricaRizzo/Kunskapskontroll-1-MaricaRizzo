const Titles = (props) => {
        
    return (
        
        <select id='title' onChange={props.updateTitle}>
            <option value='Mr.'>Mr.</option>
            <option value='Mrs.'>Mrs.</option>
            <option value='Miss'>Miss</option>
        </select>
    )
        
    
};


export default Titles;

