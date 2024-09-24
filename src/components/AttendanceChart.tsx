"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    present: 40,
    absent: 24,
  },
  {
    name: "Tuesday",
    present: 30,
    absent: 13,
  },
  {
    name: "Wednesday",
    present: 20,
    absent: 40,
  },
  {
    name: "Thursday",
    present: 60,
    absent: 27,
  },
  {
    name: "Friday",
    present: 70,
    absent: 50,
  },
];

type Props = {};

const AttendanceChart = (props: Props) => {
  return (
    <>
      <div className="bg-white rounded-xl w-full h-full p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Attendance</h1>
          <Image src="/moreDark.png" width={20} height={20} alt="more" />
        </div>

        <div className="relative w-full h-[90%]">
          <ResponsiveContainer>
            <BarChart width={500} height={300} data={data} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
              <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
              <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
              <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
              <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
              <Bar
                dataKey="present"
                fill="#FAE27C"
                activeBar={<Rectangle fill="#FAE27C" stroke="#FAE27C" />}
                legendType="circle"
                radius={[10,10,0,0]}
              />
              <Bar
                dataKey="absent"
                fill="#C3EBFA"
                activeBar={<Rectangle fill="#C3EBFA" stroke="#C3EBFA" />}
                legendType="circle"
                radius={[10,10,0,0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AttendanceChart;
