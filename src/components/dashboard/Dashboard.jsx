import React, {  useState } from 'react'
import BarChartBox from './../BarChartBox/BarChartBox.jsx';
import LineChartBox from './../LineChartBox/LineChartBox.jsx';


/**
 * Dashboard Component
 * @component
 */

export default function Dashboard() {
  /**
   * State to manage the mode of the dashboard
   * @typedef {'view' | 'edit'} Mode
   * @type {[Mode, React.Dispatch<React.SetStateAction<Mode>>]}
   * @name modeState
   */
  const [mode, setmode] = useState('view')
   /**
   * State to manage which chart to delete
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   * @name deleteChartState
   */
  const [deleteChart, setdeleteChart] = useState(0)
 

  /**
   * Function to delete the bar chart
   * @function
   */
 const deleteBarChart = ()=>{
  setdeleteChart(1)
 }

   /**
   * Function to delete the line chart
   * @function
   */
 const deleteLineChart = ()=>{
  setdeleteChart(2)
 }

  return (
    <>
  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Dashboard</span>
  </div>
  </nav>
  {
    deleteChart !==0 && mode === 'edit' ?<span className='p-3 rounded addButton'>
    <i onClick={()=>setdeleteChart(0)} className="fa-solid fa-plus fs-3"></i>
    </span>:''
  }
    <div className="container">
      <div className="row">
      <div>
     <div className='my-3 text-center'> 
     <button onClick={()=>setmode('view')} className='btn btn-success mx-2'>
      View Mode
      </button>
      <button onClick={()=>setmode('edit')} className='btn btn-warning'>
      edit Mode
      </button>
     </div>
    </div>
    {deleteChart === 0 || deleteChart === 2 ?<div className={`col-md-6 barChart mt-3 ${mode === 'edit' && deleteChart === 0 ?'edit-style':''}`}>
    <span onClick={deleteBarChart} className={`bar-chart-icon ${mode === 'edit' && deleteChart === 0 ? 'bar-edit':''}`}><i className={`fa-solid fa-trash `}></i></span>
    <BarChartBox/>
    </div>:''}
    {deleteChart === 0 || deleteChart === 1 ? <div className={`col-md-6 barChart mt-3 ${mode === 'edit' && deleteChart === 0 ?'edit-style':''}`}>
    <span onClick={deleteLineChart} className={`bar-chart-icon ${mode === 'edit' && deleteChart === 0 ? 'bar-edit':''}`}><i className={`fa-solid fa-trash `}></i></span>
    <LineChartBox/>
    </div>:''}
      </div>
    </div>
    </>
  )
}


