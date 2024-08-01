import { useState } from "react";
import { styled } from "styled-components";
import { SOLUTION_GRID, TileInfo } from "../../constants/solutionGrid";
import CrosswordTile from "./CrosswordTile";
import { FullRowOrColIndex, Index } from "../../types/types";

type CrosswordGridProps = {
  currentGrid: TileInfo[][];
  setCurrentGrid: React.Dispatch<React.SetStateAction<TileInfo[][]>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const CrosswordGrid = ({
  currentGrid,
  setCurrentGrid,
  setSolved,
  setIsActive,
}: CrosswordGridProps) => {
  const [activeRowOrCol, setActiveRowOrCol] =
    useState<FullRowOrColIndex>(undefined);
  const [activeIndex, setActiveIndex] = useState<Index>(undefined);

  if (JSON.stringify(currentGrid) === JSON.stringify(SOLUTION_GRID)) {
    setSolved(true);
    setIsActive(false);
  }

  return (
    <Container>
      {SOLUTION_GRID.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map(([letter, marker], columnIndex) => {
              return (
                <CrosswordTile
                  letter={letter}
                  marker={marker}
                  index={[rowIndex, columnIndex]}
                  currentGrid={currentGrid}
                  setCurrentGrid={setCurrentGrid}
                  activeRowOrCol={activeRowOrCol}
                  setActiveRowOrCol={setActiveRowOrCol}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  key={`${rowIndex}-${columnIndex}`}
                />
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  position: absolute;
  margin-left: 2rem;

  @media (max-width: 1100px) {
    position: relative;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-left: 1rem;
  }
`;

export default CrosswordGrid;
