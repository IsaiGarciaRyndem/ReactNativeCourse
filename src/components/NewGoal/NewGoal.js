import React from 'react';
import './NewGoal.css'

const NewGoal = (props) => {
    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new Goal'
        }
        console.log(newGoal)
        props.onAddGoal(newGoal);
    }
    return (
        <form className={'new-goal'} onSubmit={addGoalHandler}>
            <input type={'text'}/>
            <button type={"submit"}>Add goal</button>
        </form>
    );
}
export default NewGoal;
