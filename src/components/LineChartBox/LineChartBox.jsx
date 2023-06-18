import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { getData } from '../../api/api.js';


/**
 * A React component that displays a line chart using Recharts library.
 *
 * @component
 */
export default function LineChartBox() {

   /**
   * State that manages the line chart data.
   *
   * @type {[Array<Object>, React.Dispatch<React.SetStateAction<Array<Object>>>]}
   * @name lineDataState
   */
  const [lineData, setlineData] = useState([])

    /**
   * Fetches the line chart data from an API asynchronously and updates the state.
   * 
   * @async
   * @function
   * @name getCurrency
   */
  let  getCurrency = async ()=>{
      let  data  = await getData();
      setlineData(data);
      console.log(data);
  }
  useEffect(() => {
    getCurrency()
  }, [])
  
  return (
    <>
    {/* Chart title */}
    <div className="text-bg-secondary p-3">Line Chart </div>
    {/* Line chart */}
    {lineData.length > 0 ? 
        <div className='bg-light'>
          <LineChart
          width={500}
          height={300}
          data={lineData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
        </LineChart>
        </div>
      :<p>no data available </p>}
    </>
  )
}
