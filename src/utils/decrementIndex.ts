import { WINDOW_HEIGHT } from "../constants/windowHeight"

type decrementIndexProps = {
    screenPositionIndex: number
    setScreenPositionIndex: (newIndex: number) => void
}

const decrementIndex = ({screenPositionIndex, setScreenPositionIndex}: decrementIndexProps) => {
    if (screenPositionIndex > 0) {
        setScreenPositionIndex(screenPositionIndex - 1)

    window.scrollTo({
      left: 0,
      top: WINDOW_HEIGHT * screenPositionIndex,
      behavior: "smooth",
    });
    }
}

export default decrementIndex