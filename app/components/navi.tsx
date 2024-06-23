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
        background: "rgba(255,255,255,.6)",
        lineHeight: 1.2,
        fontSize: '1vw',
    }

    return (
        <ButtonGroup variant="outlined" style={naviStyle}>
            <Button href="/" style={btnStyle}>
                Top
            </Button>
            <Button href="/chart" style={btnStyle}>
                Charts & Tables<br />Example
            </Button>
        </ButtonGroup>

    )
}