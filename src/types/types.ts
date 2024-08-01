// either undefined (none), a full row [number, undefined], or a full column [undefined, number]
export type FullRowOrColIndex =  [number, undefined] | [undefined, number] | undefined

export type Index = [number, number] | undefined

export type getNewFocusTargetParams = {
    value: string;
    lastIndex: [number, number]; // [row, col]
    activeRowOrCol: FullRowOrColIndex
  };