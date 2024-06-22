import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { barChartsParamsAtom, curriculumStateAtom } from '@/atoms/atoms'

export default function ChartTable() {
    const barChartsParams = useRecoilValue(barChartsParamsAtom);
    const curriculumState = useRecoilValue(curriculumStateAtom);

    const columns: GridColDef[] = [
        { field: 'label', headerName: '名前', width: 150, editable: true },
        { field: "type1", headerName: curriculumState[0], width: 100, editable: true, type: 'number' },
        { field: 'type2', headerName: curriculumState[1], width: 100, editable: true, type: 'number' },
        { field: 'type3', headerName: curriculumState[2], width: 100, editable: true, type: 'number' },
        { field: 'type4', headerName: curriculumState[3], width: 100, editable: true, type: 'number' },
        { field: 'type5', headerName: curriculumState[4], width: 100, editable: true, type: 'number' },
    ]

    let rowData = new Array
    barChartsParams.series.map((e: any) => {
        const data = e.data.toString().split(',')
        const seriesRow = {
            id: e.id,
            label: e.label,
            type1: data[0],
            type2: data[1],
            type3: data[2],
            type4: data[3],
            type5: data[4],
        }
        rowData.push(seriesRow)
    })

    const handleUpdate = () => {

    }

    return (
        <div style={{ height: 'auto', width: '660px', margin: "auto" }}>

            <DataGrid
                rows={rowData}
                columns={columns}
                hideFooter={true}
                isCellEditable={(params) => true}
                onCellEditStop={handleUpdate}
            />
        </div>
    )
}