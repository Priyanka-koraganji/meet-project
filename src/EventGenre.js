import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);
    const COLORS = ['#3BB372', '#DAFBE6', '#74E7B8', '#2EB5D0', '#2C6BAA'];
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const getData = () => {
        const data = genres.map(genre => {
            const value = events.filter((event) =>
                event.summary.split(" ").includes(genre)
            ).length;
            return { name: genre, value };
        })
        return data;
    }
    useEffect(() => {
        setData(() => getData());
        // eslint-disable-next-line
    }, [events]);
    return (
        <ResponsiveContainer height={400} width={'100%'}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#6ccdca"
                    dataKey="value"
                    label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                    }
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;