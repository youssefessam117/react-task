import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { getBarData } from '../../api/api.js';


/**
 * BarChartBox Component
 * @component
 */


export default function BarChartBox() {

   /**
   * State to manage the chart data
   * @type {[Array<Object>, React.Dispatch<React.SetStateAction<Array<Object>>>]}
   * @name chartDataState
   */
  const [chartData, setchartData] = useState([])

   /**
   * Asynchronous function to get the chart data from an API
   * @async
   * @function
   */
  let  getCurrency = async ()=>{
      let  data  = await getBarData();
      setchartData(data);
  }
  useEffect(() => {
    getCurrency()
  }, [])

  return (
    <>
    <div className="text-bg-secondary p-3 p-3">Bar Chart </div>
    {chartData.length > 0 ? <div className='bg-light'> <BarChart
          width={500}
          height={300}
          data={chartData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="EGP" fill="#8884d8" />
          <Bar dataKey="GBP" fill="#82ca9d" />
          <Bar dataKey="EUR" fill="#ffc658" />
        </BarChart></div>:<p>no data available</p>}
    </>
  )
}
