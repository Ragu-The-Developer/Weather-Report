import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'IOC',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Suzlon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Adani Green Energy',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Reliance',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Hindustan Unilever',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'ITC',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jio',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <div className='graph'>
      <ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={300}
          height={250}
          data={data}
          margin={{
            top: 95,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="black" stroke="yellow" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      
    );
  }
}
