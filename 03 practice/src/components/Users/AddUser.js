import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'


const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('')

    const userNameChageHandler = (event) => { setEnteredUserName(event.target.value); }
    const ageChangedHandler = (event) => { setEnteredAge(event.target.value); }

    const errorHandler=()=>{
        setError(null);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { setError({ title: 'Invalid Input', message: ' Please enter a valid name and age' }); return; }
        if (+enteredAge < 1) { setError({ title: 'Invalid Age', message: ' Please enter a valid age (>0)' }); return; }
        setEnteredAge('');
        setEnteredUserName('');
    
        props.onAddUser(enteredUserName, enteredAge);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input value={enteredUserName} onChange={userNameChageHandler} id="username" type="text"></input>

                    <label htmlFor="age">Age (year)</label>
                    <input value={enteredAge} onChange={ageChangedHandler} id="age" type="number"></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>)
};

export default AddUser;