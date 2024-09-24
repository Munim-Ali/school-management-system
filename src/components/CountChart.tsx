"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#FFF",
  },
  {
    name: "Girls",
    count: 36,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 64,
    fill: "#C3EBFA",
  },
];

const CountChart = (props: Props) => {
  return (
    <>
      <div className="bg-white rounded-xl w-full h-full p-4">
        {/* title */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Students</h1>
          <Image src="/moreDark.png" width={20} height={20} alt="more" />
        </div>
        {/* chart */}
        <div className="relative w-full h-[75%]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar
                // minAngle={15}
                // label={{ position: "insideStart", fill: "#fff" }}
                background
                // clockWise
                dataKey="count"
              />
              {/* <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                // wrapperStyle={style}
              /> */}
            </RadialBarChart>
          </ResponsiveContainer>
          <Image
            src="/maleFemale.png"
            width={50}
            height={50}
            alt="male-female"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* items */}
        <div className=" flex items-center justify-center gap-16">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="w-5 h-5 bg-sky rounded-full"></div>
            <h1 className="font-bold ">1,234</h1>
            <h2 className="text-xs text-gray-300">Boys (55%)</h2>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="w-5 h-5 bg-yellowMain rounded-full"></div>
            <h1 className="font-bold ">1,234</h1>
            <h2 className="text-xs text-gray-300">girls (45%)</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountChart;
