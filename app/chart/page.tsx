"use client"

import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import BgMotion from '../components/bgMotion'
import OpeningAnim from '../top/openingAnim'

const colors = ['#FF97C3', '#A5EBDC', '#CDC2FF']
const barChartsParams = {
    series: [
        { data: [3, 4, 1, 6, 5], label: 'A' },
        { data: [4, 3, 1, 5, 8], label: 'B' },
        { data: [4, 2, 5, 4, 1], label: 'C' },
    ],
    height: 400,
}

const dates = [
    new Date(2021, 1, 26),
    new Date(2021, 1, 27),
    new Date(2021, 1, 28),
    new Date(2021, 1, 29),
    new Date(2021, 2, 1),
    new Date(2021, 2, 2),
    new Date(2021, 2, 3),
    new Date(2021, 2, 4),
    new Date(2021, 2, 5),
    new Date(2021, 2, 8),
    new Date(2021, 2, 9),
    new Date(2021, 2, 10),
    new Date(2021, 2, 11),
    new Date(2021, 2, 12),
    new Date(2021, 2, 16),
    new Date(2021, 2, 17),
    new Date(2021, 2, 18),
    new Date(2021, 2, 19),
    new Date(2021, 2, 22),
    new Date(2021, 2, 23),
]

const openPrice = [
    35.14,
    32.97,
    39.54,
    36.61,
    35.33,
    34.1,
    32.39,
    32.58,
    32.61,
    37.22,
    36.9,
    38.15,
    35.79,
    33.36,
    30.02,
    27.99,
    24.99,
    27.02,
    29.96,
    25.96
]
const highPrice = [
    36.87,
    45,
    42,
    38.01,
    35.62,
    34.2,
    32.95,
    33.18,
    35.2,
    39.22,
    38.26,
    38.24,
    35.98,
    33.65,
    30.44,
    29.73,
    26.31,
    29.96,
    30.19,
    27.46
]
const lowPrice = [
    30.32,
    32.25,
    33.1,
    36,
    32.58,
    36.5,
    31.38,
    31.05,
    31.75,
    40,
    43.13,
    46,
    46.61,
    38.34,
    36.3,
    27,
    24.5,
    26.9,
    27.54,
    28
]

const lineChartsParams = {
    series: [
        {
            label: 'Price A',
            data: openPrice,
            showMark: false,
        },
        {
            label: 'Price B',
            data: highPrice,
            showMark: false,
        },
        {
            label: 'Price C',
            data: lowPrice,
            showMark: false,
        },

    ],
    height: 400,
}

const dateFormatter = (date: Date) => (date.getMonth() + 1).toString() + "/" + date.getDate().toString()

export default function ElementHighlights() {
    const [chartType, setChartType] = React.useState('line')

    const handleChartType = (event: any, newChartType: string) => {
        if (newChartType !== null) {
            setChartType(newChartType)
        }
    }

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <BgMotion></BgMotion>
            <OpeningAnim></OpeningAnim>
            <section className='quizBox'>
                <div className="finishBox">
                    <Stack
                        direction={{ xs: 'column', xl: 'row' }}
                        spacing={1}
                        sx={{ width: '100%' }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <ToggleButtonGroup
                                value={chartType}
                                exclusive
                                onChange={handleChartType}
                                aria-label="chart type"
                                // fullWidth
                            >
                                {['line', 'bar'].map((type) => (
                                    <ToggleButton key={type} value={type} aria-label="left aligned" style={{width: '120px'}}>
                                        {type}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>

                            {chartType === 'line' && (
                                <LineChart
                                    {...lineChartsParams}
                                    xAxis={[{
                                        data: dates,
                                        scaleType: 'time',
                                        valueFormatter: dateFormatter
                                    }]}
                                    series={lineChartsParams.series.map((series, i) => ({
                                        ...series,
                                        area: (i == 2 ? true : false),
                                        color: colors[i],
                                    }

                                    ))}
                                />
                            )}
                            {chartType === 'bar' && (
                                <BarChart
                                    {...barChartsParams}
                                    series={barChartsParams.series.map((series, i) => ({
                                        ...series,
                                        color: colors[i],
                                    }))}
                                />
                            )}
                        </Box>
                    </Stack>
                </div>
            </section>
        </main>
    )
}
