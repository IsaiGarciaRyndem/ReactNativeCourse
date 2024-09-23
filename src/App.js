import React from 'react';
import './App.css'
import GoalList from './components/GoalList/GoalList';
import NewGoal from  './components/NewGoal/NewGoal';

const App = () => {
  const courseGaols = [
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about course main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'},
  ];

  const addNewGoalHandler = ([newGoal]) => {
    courseGaols.push(newGoal);
    console.log(courseGaols);
  }

  return <div className={'course-goal'}>
    <h2 >Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGaols} />
  </div>
};


export default App;
