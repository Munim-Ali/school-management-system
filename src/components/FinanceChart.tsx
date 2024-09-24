"use client";

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    income: 4000,
    expense: 2400,
    
  },
  {
    name: 'Feburary',
    income: 3000,
    expense: 1398,
    
  },
  {
    name: 'March',
    income: 2000,
    expense: 9800,
    
  },
  {
    name: 'April',
    income: 2780,
    expense: 3908,
    
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
    
  },
  {
    name: 'June',
    income: 2390,
    expense: 3800,
    
  },
  {
    name: 'July',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'August',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'September',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'October',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'November',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'December',
    income: 3490,
    expense: 4300,
    
  },
];

type Props = {};

const FinanceChart = (props: Props) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <div className="w-full h-[90%]">
      <ResponsiveContainer >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={5}/>
          <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
