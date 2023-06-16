import React, {  useState } from 'react'
import BarChartBox from './../BarChartBox/BarChartBox.jsx';
import LineChartBox from './../LineChartBox/LineChartBox.jsx';


export default function Dashboard() {
  const [mode, setmode] = useState('view')
  const [arrLength, setarrLength] = useState(0)
 
  return (
    <>
 <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Dashboard</span>
  </div>
</nav>

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
    <div className={`col-md-6 barChart ${mode === 'edit' && arrLength === 0 ?'edit-style':''}`}>
    <span className={`bar-chart-icon ${mode === 'edit' && arrLength === 0 ? 'bar-edit':''}`}><i class={`fa-solid fa-trash `}></i></span>
    <BarChartBox/>
    </div>
    <div className="col-md-6">
    <i class="fa-solid fa-trash"></i>
    <LineChartBox/>
    </div>
      </div>
    </div>
    </>
  )
}
