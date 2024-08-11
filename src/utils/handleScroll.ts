
const handleScroll = () => {
        const firstScreenHeight = window.innerHeight;
        // Get the current scroll position
        const scrollTop = window.scrollY

        return scrollTop > firstScreenHeight
}

export default handleScroll

