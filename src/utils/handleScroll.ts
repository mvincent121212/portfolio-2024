import { Direction } from "@smakss/react-scroll-direction"
import decrementIndex from "./decrementIndex"
import incrementIndex from "./incrementIndex"

type handleScrollProps = {
    scrollDirection: Direction
    screenPositionIndex: number
    setScreenPositionIndex: (newIndex: number) => void
}

const handleScroll = ({scrollDirection, screenPositionIndex, setScreenPositionIndex}: handleScrollProps) => {
    switch(scrollDirection) {
        case 'up':
            decrementIndex({screenPositionIndex, setScreenPositionIndex})
            break
        case 'down':
            incrementIndex({screenPositionIndex, setScreenPositionIndex})
            break
        default:
            break
    }
}

export default handleScroll