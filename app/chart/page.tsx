"use client"

import * as React from 'react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { barChartsParamsAtom, curriculumStateAtom } from '@/atoms/atoms'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart'
import Navi from "../components/navi"
import BgMotion from '../components/bgMotion'
import OpeningAnim from '../top/openingAnim'
import ChartTable from './table'

const colors = ['#FF97C3', '#A5EBDC', '#CDC2FF']
const colorsLite = ['#A5EBDC', '#B6FFF7', '#D2DF41']//'#67D2BB',

export default function ElementHighlights() {
    const [chartType, setChartType] = useState('bar')
    const barChartsParams = useRecoilValue(barChartsParamsAtom);
    const curriculumState = useRecoilValue(curriculumStateAtom);

    const handleChartType = (event: any, newChartType: string) => {
        if (newChartType !== null) {
            setChartType(newChartType)
        }
    }

    const btnGroupStyle = {
        position: "absolute",
        top: "2vw",
        right: "2vw",
        zIndex: 10
    } as const

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <Navi />
            <BgMotion></BgMotion>
            <OpeningAnim></OpeningAnim>
            <section className='quizBox'>
                <div className="whiteBox">
                    <h2>Charts & Tabels Example</h2>
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
                                size="small"
                                aria-label="chart type"
                                style={btnGroupStyle}
                            >
                                {['bar', 'line'].map((type) => (
                                    <ToggleButton key={type} value={type} aria-label="left aligned" style={{ width: '120px' }}>
                                        {type == "line" ? "線グラフ" : "棒グラフ"}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>

                            {chartType === 'line' && (
                                <LineChart
                                    {...barChartsParams}
                                    yAxis={[{
                                        label: 'Stock chart ($USD)',
                                    }]}
                                    xAxis={[{
                                        data: curriculumState,
                                        scaleType: 'point',
                                    }]}
                                    series={barChartsParams.series.map((series, i) => ({
                                        ...series,
                                        area: (i == 2 ? true : false),
                                        color: colors[i],
                                    }))}
                                    skipAnimation={false}
                                    grid={{ vertical: true, horizontal: true }}
                                    
                                    sx={{
                                        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
                                          strokeWidth: 2,
                                          transition: 'none',
                                          transform: 'none'
                                        },
                                        '.MuiLineElement-series-open': {
                                          strokeDasharray: '10 4',
                                          strokeWidth: 2.5,
                                        },
                                        '.MuiLineElement-series-high': {
                                          strokeDasharray: '10 4',
                                          strokeWidth: 2.5,
                                        },
                                      }}
                                />
                            )} 

                            {chartType === 'bar' && (
                                <BarChart
                                    {...barChartsParams}
                                    xAxis={[{
                                        data: curriculumState,
                                        scaleType: 'band',
                                    }]}
                                    series={barChartsParams.series.map((series, i) => ({
                                        ...series,
                                        color: colorsLite[i],
                                    }))}
                                    grid={{ vertical: false, horizontal: true }}
                                />
                            )}

                            <ChartTable></ChartTable>
                        </Box>
                    </Stack>
                </div>
            </section>
        </main>
    )
}
