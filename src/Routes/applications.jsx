/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import TaskCard from '../Components/cards';
import '../app.css'
import MyPaper from '../Components/mui/paper';
import SearchC from '../Components/mui/searchC';
import { Outlet } from 'react-router-dom';
import tasks from '../json/tasks.json'




function render (obj) {
  console.log(obj)
  let data = obj.map((key) => (
     (
      <div className='tab'>
        {console.log(key)}
            <SearchC className='firstTap' key='high' tasks={<MyPaper text={<TaskCard id={key.ID} client={key.Client} inn={key.INN} title={key.TaskName} desc={key.TaskDesc} button1='Открыть' />} key='Важное'/>}/>
            {/* <SearchC className='firstTap' key='low' tasks={<MyPaper text={<TaskCard id={key.ID} client={key.Client} inn={key.INN} title={key.TaskName} desc={key.TaskDesc} button1='Открыть' />} key='Первый контакт'/>} /> */}
         </div>
    )
  ))
  return data
}



export default function Applications() {
  

    // let data = JSON.parse(tasks)
    // function renderingData() {
    //   tasks.map((key) => (
    //   key.Rank === 'high' ? 
    //     <MyPaper text={<TaskCard id={key.ID} client={key.Client} inn={key.INN} title={key.TaskName} desc={key.TaskDesc} button1='Открыть' />} key='Важное'/>
    //   : 
    //     <MyPaper text={<TaskCard id={key.ID} client={key.Client} inn={key.INN} title={key.TaskName} desc={key.TaskDesc} button1='Открыть' />} key='Первый контакт'/>
    //   ))
      // return (<div className='tab'>
      //     <SearchC className='firstTap' key='high' tasks={<MyPaper text={TaskHigh} key='Важное'/>}/>
      //     <SearchC className='firstTap' key='low' tasks={<MyPaper text={TaskLow} key='Первый контак'/>}/>
      //   </div>)
  // }
  console.log(tasks)
  return (
    <div className="apps">
        
        <div className='tab'>
        {render(tasks)}
        {/* <SearchC className='firstTap' key='high' tasks={<MyPaper text={task1} key='Важное'/>} /> */}
        {/* <SearchC className='firstTap' key='low' tasks={TaskHigh}/>
        
        <SearchC className='secondTap' key='high' tasks={TaskHigh}/> */}
        </div>
        <Outlet/>
        {/* <MyPaper text={TaskData[0]}/>
        <MyPaper text={TaskData[1]}/>
        <MyPaper text={TaskData[2]}/> */}
      {/* <TaskCard client='Андрей Мухоморов' inn='42141232' title='Не работает комп' rank='high' desc='ALOHA DANCE' button1='OK' button2='cancel'/>
      <TaskCard client='Александр Фетиев' inn='51231541' title='Почините кассу' rank='low' desc='ALOHA DANCE' button1='OK' button2='cancel'/>
      <TaskCard client='Александр Фетиев' inn='51231541' title='Почините кассу' rank='low' desc='ALOHA DANCE' button1='OK' button2='cancel'/> */}
    </div>
  );
}
