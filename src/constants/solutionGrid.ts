
export type TileInfo = [string, number | undefined]


// a 2D grid with each position as a 2-length array, the first string being the letter in the solution and the second the marker in the crossword (either a number or undefined)
export const SOLUTION_GRID: TileInfo[][] = [
    [["", undefined], ["", undefined], ["B", 1], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["E", undefined], ["", undefined], ["H", 2], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["M", 3], ["A", undefined], ["D", undefined], ["E", undefined], ["I", undefined], ["N", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["S", undefined], ["", undefined], ["R", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["T", undefined], ["", undefined], ["E", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["S", 4], ["", undefined]],
    [["", undefined], ["", undefined], ["U", undefined], ["", undefined], ["M", 5], ["A", undefined], ["T", 6], ["H", undefined], ["", undefined], ["T", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["Y", undefined], ["", undefined], ["E", undefined], ["", undefined], ["A", undefined], ["", undefined], ["", undefined], ["U", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["C", undefined], ["", undefined], ["", undefined], ["D", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["T", undefined], ["", undefined], ["", undefined], ["I", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["P", 7], ["I", undefined], ["L", undefined], ["L", undefined], ["O", undefined], ["W", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["C", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
]


export const EMPTY_GRID: TileInfo[][] = [
    [["", undefined], ["", undefined], ["", 1], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", 2], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", 3], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", 4], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", 5], ["", undefined], ["", 6], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", 7], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],
    [["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined], ["", undefined]],

]


