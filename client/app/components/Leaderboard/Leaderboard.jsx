import { scaleBand, axisBottom, axisLeft, select, scaleLinear } from 'd3';
import { useRef, useEffect } from 'react';

// CREDIT: https://dev.to/rgolawski/simple-bar-chart-with-react-and-d3-443p

export default function Leaderboard({ data }) {
    const margin = { top: 100, right: 0, bottom: 30, left: 0 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const scaleX = scaleBand()
        .domain(data.map(({ id }) => id))
        .range([0, width])
        .paddingInner(0.35);

    const scaleY = scaleLinear()
        .domain([0, Math.max(...data.map(({ points }) => points))])
        .range([height, 0]);

    return (
        <svg
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
        >
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <text
                    x={width / 2}
                    y={0 - margin.top / 2}
                    style={{ fontSize: '24px' }}
                    textAnchor='middle'
                >
                    Leaderboard
                </text>
                <XAxis scale={scaleX} transform={`translate(0, ${height})`} />

                <Bars
                    data={data}
                    height={height}
                    scaleX={scaleX}
                    scaleY={scaleY}
                />
            </g>
        </svg>
    );
}

function XAxis({ scale, transform }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            select(ref.current).call(axisBottom(scale).tickSize(0));
            select(ref.current).style('visibility', 'hidden');
        }
    }, [scale]);

    return <g ref={ref} transform={transform} />;
}

function Bars({ data, height, scaleX, scaleY }) {
    return (
        <>
            {data.map(({ id, name, points }) => {
                const ranColor =
                    '#' + Math.floor(Math.random() * 16777215).toString(16);
                return (
                    <>
                        <text
                            x={scaleX(id) + scaleX.bandwidth() / 2}
                            y={scaleY(points) - 3}
                            textAnchor='middle'
                            fill={ranColor}
                        >
                            {points} points
                        </text>
                        <rect
                            key={`bar-${id}`}
                            x={scaleX(name)}
                            y={scaleY(points)}
                            width={scaleX.bandwidth()}
                            height={height - scaleY(points)}
                            fill={ranColor}
                            ry={10}
                        />
                        <text
                            x={scaleX(id) + scaleX.bandwidth() / 2}
                            y={height + 20}
                            textAnchor='middle'
                            fill={ranColor}
                            style={{ fontSize: '20px' }}
                        >
                            {name}
                        </text>
                    </>
                );
            })}
        </>
    );
}
