import { SOLUTION_GRID } from "../constants/solutionGrid";
import { Index, getNewFocusTargetParams } from "../types/types";

/**
 * finds the new input to focus onto after a user enters an input on a tile.
 *
 * @returns index of new focus target 
 */
export const getNewFocusTarget = ({ value, lastIndex, activeRowOrCol }: getNewFocusTargetParams): Index => {
    if (!activeRowOrCol) {
      return undefined;
    }
    const [lastRow, lastCol] = [lastIndex[0], lastIndex[1]];

    // if value is empty, the user just emptied the current tile and we
    // need to navigate backwards on the active word
    if (value === "") {
      if (!!activeRowOrCol[0]) {
        // if we're at the beginning of a word, keep the target the same
        if (SOLUTION_GRID[lastRow][lastCol - 1][0] === "") {
            return [lastRow, lastCol]
        }

        document.getElementById(`${lastRow}-${lastCol - 1}`)?.focus();
        return [lastRow, lastCol - 1]
      } else {
        if (SOLUTION_GRID[lastRow - 1][lastCol][0] === "") {
            return [lastRow, lastCol]
        }

        document.getElementById(`${lastRow - 1}-${lastCol}`)?.focus();
        return [lastRow - 1, lastCol]
      }
    } else {
      if (!!activeRowOrCol[0]) {
        // similarly, if we're at the end of a word, we should blur the current tile
        // and have the user select again
        if (SOLUTION_GRID[lastRow][lastCol + 1][0] === "") {
            document.getElementById(`${lastRow}-${lastCol}`)?.blur()
            return undefined
        } 

        document.getElementById(`${lastRow}-${lastCol + 1}`)?.focus();
        return [lastRow, lastCol + 1]

      } else {
        if (SOLUTION_GRID[lastRow + 1][lastCol][0] === "") {
            document.getElementById(`${lastRow}-${lastCol}`)?.blur()
            return undefined
        }

        document.getElementById(`${lastRow + 1}-${lastCol}`)?.focus();
        return [lastRow + 1, lastCol]
      }
    }
  };


  export const formatTime = (time: number) => {
    const minutes = Math.floor((time/ 60000) % 60).toString().padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
  
    return { minutes, seconds };
  }