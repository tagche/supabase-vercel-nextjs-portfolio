import * as React from 'react'
import { DataGrid, GridColDef, GridEditModes } from '@mui/x-data-grid'
import TextField from '@mui/material/TextField'

const columns: GridColDef[] = [
    { field: 'label', headerName: '名前', width: 150 },
    { field: "type1", headerName: '国語', width: 100 },
    { field: 'type2', headerName: '数学', width: 100 },
    { field: 'type3', headerName: '英語', width: 100 },
    { field: 'type4', headerName: '理科', width: 100 },
    { field: 'type5', headerName: '社会', width: 100 },
]
const setInputElem = (val) => {
    return (
        <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue={val}
            size="small"
        />
    )
}

export default function ChartTable(props: any) {
    let splitData = new Array
    props.series.map((e: any) => {
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
        splitData.push(seriesRow)
    })

    // const inputRow = {
    //     label: elem
    // }
    //   splitData.push(inputRow)

    return (
        <div style={{ height: 'auto', width: '660px', margin: "auto" }}>
            <DataGrid
                rows={splitData}
                columns={columns}
                // initialState={{
                //     pagination: {
                //         paginationModel: { page: 0, pageSize: 5 },
                //     },
                // }}
                // pageSizeOptions={[5, 10]}

                hideFooter={true}
                editMode='cell'
            />
        </div>
    )
}