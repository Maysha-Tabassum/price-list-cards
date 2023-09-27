import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {
    const studentsMarks = [
        {
            id: 1,
            name: "Randall Sears",
            math: 80,
            physics: 68,
            chemistry: 3
        },
        {
            id: 2,
            name: "Reid Barr",
            math: 48,
            physics: 62,
            chemistry: 28
        },
        {
            id: 3,
            name: "Dillon Odom",
            math: 23,
            physics: 16,
            chemistry: 5
        },
        {
            id: 4,
            name: "Mclaughlin Moore",
            math: 85,
            physics: 37,
            chemistry: 36
        },
        {
            id: 5,
            name: "Natasha Pate",
            math: 84,
            physics: 41,
            chemistry: 41
        },
        {
            id: 6,
            name: "Thomas Herring",
            math: 87,
            physics: 91,
            chemistry: 28
        },
        {
            id: 7,
            name: "Burns Moss",
            math: 77,
            physics: 14,
            chemistry: 12
        },
        {
            id: 8,
            name: "Winters Carpenter",
            math: 57,
            physics: 79,
            chemistry: 44
        },
        {
            id: 9,
            name: "Tessa Burks",
            math: 17,
            physics: 90,
            chemistry: 54
        },
        {
            id: 10,
            name: "Neva Kirkland",
            math: 76,
            physics: 98,
            chemistry: 49
        }
    ]
    return (
        <ResponsiveContainer>
            <div className='mt-12 items-center'>
                <LineChart
                    width={600}
                    height={300}
                    data={studentsMarks}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="physics" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="math" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="chemistry" stroke="red" />
                </LineChart>

            </div>
        </ResponsiveContainer>
    );
};

export default DashBoard;