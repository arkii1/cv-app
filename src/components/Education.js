import React, {useState} from 'react';
import uniqid from 'uniqid';

export default function Education() {
    const [inputList, setInputList] = useState([{
        key: uniqid(),
        title: 'Title',
        organization: 'Microsoft',
        duration: 'March 2019 - Present',
        description: 'Description'
    }])

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddClick = () => {
        if(inputList.length < 5)
            setInputList([...inputList, {
                key: uniqid(),
                title: 'Title',
                organization: 'Microsoft',
                duration: 'March 2019 - Present',
                description: 'Description'
            }]);
    }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }



    return (
        <div className='education row'>
            <h2>Education</h2>
            {inputList.map((element, index) => {
                return (
                    <div key={element.key} className="education-container">
                        <div className="education-left-container">
                            <input maxLength={20} value={element.title} name="title" onChange={e=>handleInputChange(e, index)}></input>
                            <input maxLength={20} value = {element.organization} name="organization" onChange={e=>handleInputChange(e, index)}></input>
                            <input maxLength={20}value={element.duration} name="duration" onChange={e=>handleInputChange(e, index)}></input>
                        </div>
                        <textarea value={element.description} rows={3} name="description" onChange={e=>handleInputChange(e, index)}></textarea>
                        <div className="education-button-container">
                            {inputList.length - 1 === index && inputList.length < 5 ? 
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