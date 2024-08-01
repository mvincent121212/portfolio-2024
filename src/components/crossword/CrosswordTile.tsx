import React, { useState } from "react";
import { styled } from "styled-components";
import _ from "lodash";

import { black, green, mustard, night, red, white } from "../../constants/colors";
import { SOLUTION_GRID, TileInfo } from "../../constants/solutionGrid";
import { FullRowOrColIndex, Index } from "../../types/types";
import CrosswordInput from "./CrosswordInput";
import { getNewFocusTarget } from "../../utils/crosswordUtils";

type CrosswordTileProps = {
  letter: string;
  marker?: number;
  index: [number, number];
  currentGrid: TileInfo[][];
  setCurrentGrid: React.Dispatch<React.SetStateAction<TileInfo[][]>>;
  activeRowOrCol: FullRowOrColIndex;
  setActiveRowOrCol: React.Dispatch<React.SetStateAction<FullRowOrColIndex>>;
  activeIndex: Index;
  setActiveIndex: React.Dispatch<React.SetStateAction<Index>>;
};

const CrosswordTile = ({
  letter,
  marker,
  index,
  currentGrid,
  setCurrentGrid,
  activeRowOrCol,
  setActiveRowOrCol,
  activeIndex,
  setActiveIndex,
}: CrosswordTileProps) => {
  const [input, setInput] = useState("");
  const [row, col] = [index[0], index[1]];

  const [isActiveWordARow, isActiveWordACol] = !activeRowOrCol
    ? [undefined, undefined]
    : [!!activeRowOrCol[0], !!activeRowOrCol[1]];

  const [nextRowTile, prevRowTile, nextColTile, prevColTile] = [
    row === SOLUTION_GRID.length - 1
      ? undefined
      : SOLUTION_GRID[row + 1][col][0],
    row === 0 ? undefined : SOLUTION_GRID[row - 1][col][0],
    col === SOLUTION_GRID[0].length - 1
      ? undefined
      : SOLUTION_GRID[row][col + 1][0],
    col === 0 ? undefined : SOLUTION_GRID[row][col - 1][0],
  ];

  const onTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newGrid = currentGrid;
    const lastInputChar = (e.target as HTMLInputElement)?.value
      .slice(-1)
      .toUpperCase();

    newGrid[index[0]][index[1]] = [
      lastInputChar,
      newGrid[index[0]][index[1]][1],
    ];
    setCurrentGrid(newGrid);
    setInput(lastInputChar);

    const newIndex = getNewFocusTarget({
      value: lastInputChar,
      lastIndex: index,
      activeRowOrCol,
    });
    setActiveIndex(newIndex);
  };

  const onChangeActiveWord = () => {
    setActiveIndex(index);

    if (
      isActiveWordARow &&
      activeRowOrCol &&
      row === activeRowOrCol[0] &&
      (prevRowTile || nextRowTile)
    ) {
      setActiveRowOrCol([undefined, col]);
      return;
    }

    if (
      isActiveWordACol &&
      activeRowOrCol &&
      col === activeRowOrCol[1] &&
      (prevColTile || nextColTile)
    ) {
      setActiveRowOrCol([row, undefined]);
      return;
    }

    if (prevColTile || nextColTile) {
      setActiveRowOrCol([row, undefined]);
    } else if (prevRowTile || nextRowTile) {
      setActiveRowOrCol([undefined, col]);
    }
  };

  const isActiveWord = () => {
    if (!activeRowOrCol) {
      return false;
    }

    // our active tiles are adjacent to each other, so if we encounter a tile with no adjacent tiles
    // in the active row/col, we know that is from another word in the same
    // row or column that is not the active word
    const isIsolatedTile =
      (isActiveWordARow && !prevColTile && !nextColTile) ||
      (isActiveWordACol && !prevRowTile && !nextRowTile);

    return (
      !isIsolatedTile &&
      (activeRowOrCol[0] === row || activeRowOrCol[1] === col)
    );
  };

  // if the letter is "", it is not in the crossword but we still need to
  // place it in as invisible to obtain the proper spacing
  if (!letter) {
    return <InvisibleTile $isActiveWord={false} $isActiveIndex={false} />;
  }

  return (
    <Tile
      $isActiveWord={isActiveWord()}
      $isActiveIndex={_.isEqual(index, activeIndex)}
    >
      {marker && <Marker $isActiveWord={isActiveWord()}>{marker}</Marker>}
      <CrosswordInput
        isActiveWord={isActiveWord()}
        activeRowOrCol={activeRowOrCol}
        value={input}
        index={index}
        onChange={onTextChange}
        onClick={onChangeActiveWord}
        setActiveIndex={setActiveIndex}
        id={`${row}-${col}`}
      />
    </Tile>
  );
};

export default CrosswordTile;

const Tile = styled.div<{ $isActiveWord: boolean; $isActiveIndex: boolean }>`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) =>
    props.$isActiveIndex ? green : props.$isActiveWord ? night : white};
  border: 1px solid ${black};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;


  @media (max-width: 1400px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 1280px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 1100px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 600px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 400px) {
    width: 1.25rem;
    height: 1.25rem;
  }

`;

const InvisibleTile = styled(Tile)`
  background-color: ${mustard};
  border: 1px solid transparent;
`;

const Marker = styled.span<{ $isActiveWord: boolean }>`
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  font-family: "Darwin", Georgia, serif;
  font-size: 1rem;
  color: ${(props) => (props.$isActiveWord ? white : black)};

  @media(max-width: 600px) {
    font-size: 0.5rem;
  }
`;
