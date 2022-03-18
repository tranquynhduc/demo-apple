import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
        {
          name: 'Jan',
          'Active User' : 4000,
        
        },
        {
          name: 'Feb',
          'Active User' : 3000,
       
        },
        {
          name: 'Mar',
          'Active User' : 2000,
         
        },
        {
          name: 'Apr',
          'Active User': 2780,
       
        },
        {
          name: 'May',
          'Active User' : 1890,
        
        },
        {
          name: 'June',
          'Active User': 2390,
    
        },
        {
          name: 'July',
          'Active User' : 4090,
       
        },
        {
            name: 'August',
            'Active User' : 3690,
           
          },
          {
            name: 'Sept',
            'Active User' : 3890,
        
          },
          {
            name: 'Oct',
            'Active User' : 4000,
          
          },
          {
            name: 'Nov',
            'Active User' : 3490,
          
          },
          {
            name: 'Dec',
            'Active User' : 4500,
         
          },
      ];
  return (
    <div className='chart'>
       <h4 className='chartTitle'> User Analytics</h4>
       <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550bd' />
            <Line type='monotone' dataKey='Active User' stroke='#5550bd'/>
            <Tooltip/>
            <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
        </LineChart>
       </ResponsiveContainer>
    </div>
  );
}
