import screens from "../deprecated/navigation/screens"
import { WINDOW_HEIGHT } from "../constants/windowHeight"

type incrementIndexProps = {
    screenPositionIndex: number
    setScreenPositionIndex: (newIndex: number) => void
}

const incrementIndex = ({screenPositionIndex, setScreenPositionIndex}: incrementIndexProps) => {
    const incrementedIndex = screenPositionIndex + 1
    if (screenPositionIndex < screens.length - 1) {
        setScreenPositionIndex(incrementedIndex)
    }

    window.scrollTo({
        left: 0,
        top: WINDOW_HEIGHT * incrementedIndex,
        behavior: "smooth",
      });
}

export default incrementIndex