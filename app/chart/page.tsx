"use client"

import * as React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { curriculumStateAtom, barChartsParamsSelector } from '@/atoms/atoms'
import Box from '@mui/material/Box'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart'
import Navi from "../components/navi"
import BgMotion from '../components/bgMotion'
import OpeningAnim from '../top/openingAnim'
import ChartTable from './table'

const colors = ['#FF97C3', '#A5EBDC', '#CDC2FF']
const colorsLite = ['#A5EBDC', '#B6FFF7', '#D2DF41']//'#67D2BB',

export default function ElementHighlights() {
    const [barChartsParams, setBarChartsParams] = useRecoilState(barChartsParamsSelector)
    const curriculumState = useRecoilValue(curriculumStateAtom)

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <Navi />
            <BgMotion></BgMotion>
            <OpeningAnim></OpeningAnim>
            <section className='quizBox'>
                <div className="whiteBox">
                    <h2>Charts & Tabels Example</h2>
                    <div style={{}}>
                        <ChartTable></ChartTable>
                        <Box sx={{ flexGrow: 2, width: '40vw', minWidth: '700px', display: 'inline-block', verticalAlign: 'top' }}>
                            <BarChart
                                {...barChartsParams}
                                xAxis={[{
                                    data: curriculumState,
                                    scaleType: 'band',
                                }]}
                                series={barChartsParams.series.map((series: object, i: number) => ({
                                    ...series,
                                    color: colorsLite[i],
                                }))}
                                grid={{ vertical: false, horizontal: true }}
                            />

                            <p style={{ marginTop: '30px'}}>マウスオーバーで線グラフが表示されます</p>
                            <LineChart
                                {...barChartsParams}
                                yAxis={[{
                                    label: '成績',
                                }]}
                                xAxis={[{
                                    data: curriculumState,
                                    scaleType: 'point',
                                    label: '教科',
                                }]}
                                series={barChartsParams.series.map((series: object, i: number) => ({
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
                        </Box>
                    </div>
                </div>
            </section>
        </main>
    )
}
