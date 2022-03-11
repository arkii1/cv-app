import React, { useState } from 'react';
import uniqid from 'uniqid';

export default function Header(props) {
    const [inputList, setInputList] = useState([{skill: 'Communication', key: uniqid()}]);
    
    const handleInputChange= (e, index) => {
        const value = e.target.value;
        const list = [...inputList];
        list[index].skill = value;
        setInputList(list);
    }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        if(inputList.length < 28)
            setInputList([...inputList, {skill: 'New Skill', key: uniqid()}]);
        else alert('You can have at maximum 28 skill entries!');
    }

    return (
        <div className='skills row'>
            <h2>Skills</h2>
            {inputList.map((element, index) => {
                return(
                    <div key={element.key} className="skill-container"> 
                        <input maxLength={18} value={element.skill} placeholder="Enter Skill"
                         onChange={e => handleInputChange(e, index)}></input>
                        <div className="skill-button-container">
                            {inputList.length - 1 === index ? 
                            <button className="add" onClick={handleAddClick}>Add</button> :
                             null}
                            {inputList.length !== 1 ? 
                            <button className="remove" onClick={() => handleRemoveClick(index)}>Remove</button> : 
                            null}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}