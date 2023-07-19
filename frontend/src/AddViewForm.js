import React, {useState} from 'react';

const AddViewFrom = (props) => {

    const [newName, setNewName] = useState('');
    const [newCountry, setNewCountry] = useState('');
    const [newChartType, setNewCType] = useState('');
    const [newIndicator, setNewIndicator] = useState('');
    const [newSDate, setNewSDate] = useState('');
    const [newEDate, setNewEDate] = useState('');

    const addViews = async (newName, newCountry, newChartType, newIndicator, newSDate, newEDate) => {
        await fetch('insert', {
            method: 'POST',
            body: JSON.stringify({
                name: newName,
                country: newCountry,
                chart_type: newChartType,
                indicator: newIndicator,
                start_date: newSDate,
                end_date: newEDate
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                props.vList((nq => [data, ...nq]));
                setNewName('');
                setNewCountry('');
                setNewCType('');
                setNewIndicator('');
                setNewSDate('');
                setNewEDate('');


            })
    }
    const changedNameHandler = (event) => {
        setNewName(event.target.value);
    }

    const changedCountryHandler = (event) => {
        setNewCountry(event.target.value);
    }

    const changedCTypeHandler = (event) => {
        setNewCType(event.target.value);
    }

    const changedIndicatorHandler = (event) => {
        setNewIndicator(event.target.value);
    }

    const changedSDateHandler = (event) => {
        setNewSDate(event.target.value);
    }

    const changedEDateHandler = (event) => {
        setNewEDate(event.target.value);
    }
    


    const submitHandler = () => {
        // event.preventDefault();
        addViews(newName, newCountry, newChartType, newIndicator, newSDate, newEDate);

    }

    return (
        <form onSubmit={submitHandler}>
            <p>Name: </p>
            <input type='text' value={newName} onChange={changedNameHandler}/>
            <p>Country: </p>
            <input type='text' value={newCountry} onChange={changedCountryHandler}/>
            <p>Chart Type: </p>
            <input type='text' value={newChartType} onChange={changedCTypeHandler}/>
            <p>Indicator </p>
            <input type='text' value={newIndicator} onChange={changedIndicatorHandler}/>
            <p>Start Date </p>
            <input type='text' value={newSDate} onChange={changedSDateHandler}/>
            <p>End Date: </p>
            <input type='text' value={newEDate} onChange={changedEDateHandler}/>
            <button>SAVE THE CHART AS A VIEW</button>
        </form>


    );
}

export default AddViewFrom;