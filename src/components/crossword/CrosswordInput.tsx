import { useRef } from "react";
import { styled } from "styled-components";
import { black, white } from "../../constants/colors";
import { FullRowOrColIndex, Index } from "../../types/types";
import { getNewFocusTarget } from "../../utils/crosswordUtils";

type CrosswordInputProps = {
  isActiveWord: boolean;
  activeRowOrCol: FullRowOrColIndex;
  value: string;
  index: [number, number];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
  setActiveIndex: React.Dispatch<React.SetStateAction<Index>>;
  id: string;
};

const CrosswordInput = ({
  isActiveWord,
  activeRowOrCol,
  value,
  index,
  onChange,
  onClick,
  setActiveIndex,
  id,
}: CrosswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // if the user hits backspace in an empty input, we want to move backwards in the active
  // row or col despite the onChange not invoking
  const captureInputBackspaces = ({ key }: Pick<KeyboardEvent, "key">) => {
    if (["Backspace", "Delete"].includes(key) && value === "") {
      const newIndex = getNewFocusTarget({
        value,
        lastIndex: index,
        activeRowOrCol,
      });
      setActiveIndex(newIndex);
    }
  };

  const placeCursorAtEndOfInput = () => {
    const input = document.getElementById(id) as HTMLInputElement;

    // the setTimeout ensures that the focus event fires after the cursor is placed,
    // as found here https://stackoverflow.com/a/10576409
    setTimeout(() => {
      input.selectionStart = input.selectionEnd = 10000;
    }, 0);
  };

  return (
    <Input
      $isActiveWord={isActiveWord}
      value={value}
      onChange={onChange}
      onClick={onClick}
      id={id}
      ref={inputRef}
      onKeyDown={captureInputBackspaces}
      onFocus={placeCursorAtEndOfInput}
      autoComplete="off"
    />
  );
};

export default CrosswordInput;

const Input = styled.input<{ $isActiveWord: boolean }>`
  outline: none;
  box-shadow: none;
  background-color: transparent;
  caret-color: transparent;
  border: none;
  width: 4rem;
  height: 4rem;
  text-align: center;
  font-family: "Darwin", Georgia, serif;
  font-size: 1.5rem;
  color: ${(props) => (props.$isActiveWord ? white : black)};
  cursor: pointer;
`;
