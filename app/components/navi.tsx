import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

export default function Navi() {
    return (
        <ToggleButtonGroup
            exclusive
            // onChange={handleChartType}
            aria-label="chart type"
        >
            <ToggleButton key="top" value="Top" aria-label="left aligned" style={{ width: '120px' }}>
                Top
            </ToggleButton>
            <ToggleButton key="chart" value="Chart" aria-label="left aligned" style={{ width: '120px' }}>
            Chart
            </ToggleButton>
        </ToggleButtonGroup>
    )
}