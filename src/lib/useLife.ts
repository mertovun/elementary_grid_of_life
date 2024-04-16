import { useCallback, useContext, useEffect, useRef, useState } from "react";

import PlaybackContext, { BpmContext } from "./PlaybackContext";
import useAnimationFrame from "./useAnimationFrame";
import { deepCopy, range } from "./utils";
import { Lifetime } from "./patch";

function getAliveNeighborsAt(x: number, y: number, field: number[][]) {
  let count = 0;
  
  [-1, 0, 1].forEach(dy => {
    [-1, 0, 1].forEach(dx => {
      if (dx === 0 && dy === 0) return;
      
      let nx = x + dx, ny = y + dy;
      if (ny >= 0 && ny < field.length && nx >= 0 && nx < field[ny].length) {
        count += field[ny][nx];
      }
    });
  });

  return count;
}

const doLife = (field: number[][]) => {
  let newField: number[][] = new Array(field.length).fill(null).map(() => new Array(field[0].length).fill(0));

  field.forEach((row, y) => {
    row.forEach((cell, x) => {
      const aliveNeighbors = getAliveNeighborsAt(x, y, field);
      
      if (cell === 1) {
        newField[y][x] = aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : 0;
      } else {
        newField[y][x] = aliveNeighbors === 3 ? 1 : 0;
      }
    });
  });

  return newField;
};

type Props = {
  field: number[][];
  setField: (field: number[][]) => void;
  life: boolean;
  lifetime: Lifetime
};

function noteLength(lifetime: Lifetime): number {
  switch (lifetime) {
    case Lifetime.WHOLE:
      return 16;
    case Lifetime.HALF:
      return 8;
    case Lifetime.QUARTER:
      return 4;
    default:
      return 16;
  }
}

const useLife = ({ field, setField, life, lifetime }: Props) => {
  const nextField = useRef<number[][]>(deepCopy(field));
  const { bpm } = useContext(BpmContext);
  const { playheadPos } = useContext(PlaybackContext);
  const [lastCol, setLastCol] = useState<number>(0);
  const [updateReady, setUpdateReady] = useState<boolean>(false);

  const refreshRate = life ? 60 * 1000 / (bpm * 8) : 1000;
  useAnimationFrame(refreshRate, "life");

  const doRefresh = useCallback(() => {
    if (lastCol !== playheadPos) {
      setLastCol(playheadPos);
      setUpdateReady(true);
    }
  }, [ playheadPos, updateReady, setUpdateReady]);

  useEffect(() => {
    doRefresh();
    if (Math.round(lastCol) % noteLength(lifetime) !== 0 || !life || !updateReady) return;
    nextField.current = doLife(deepCopy(field));
    setField(nextField.current);
    setUpdateReady(false);
  }, [field, setField, doRefresh, life, updateReady, setUpdateReady, lifetime, noteLength]);
};


export default useLife;
