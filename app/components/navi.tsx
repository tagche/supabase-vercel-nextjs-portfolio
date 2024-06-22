import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Navi() {
    const naviStyle = {
        position: "absolute",
        top: "1.5vw",
        right: "2vw",
        zIndex: 10
    } as const

    const btnStyle = {
        color: "#BDB5E4",
        borderColor: "#BDB5E4",
        background: "rgba(255,255,255,.6)"
    }

    return (
        <ButtonGroup variant="outlined" style={naviStyle}>
            <Button href="/" style={btnStyle}>
                Top
            </Button>
            <Button href="/chart" style={btnStyle}>
                Example Charts 
            </Button>
        </ButtonGroup>

    )
}