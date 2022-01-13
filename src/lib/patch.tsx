import { Reducer } from "react";
import { bitsToNumber, numberToBits, range } from "./utils";

export type Patch = {
  tracks: number[][];
  bassTracks: number[][];
  useKick: boolean;
  tone: string;
};

export type Action =
  | { type: "setTracks"; tracks: number[][] }
  | { type: "setBassTracks"; tracks: number[][] }
  | { type: "setTone"; tone: string }
  | { type: "setUseKick"; useKick: boolean };

export const patchReducer: Reducer<Patch, Action> = (patch, action) => {
  switch (action.type) {
    case "setTracks":
      return { ...patch, tracks: action.tracks };
    case "setBassTracks":
      return { ...patch, bassTracks: action.tracks };
    case "setTone":
      return { ...patch, tone: action.tone };
    case "setUseKick":
      return { ...patch, useKick: action.useKick };
    default:
      throw new Error(
        `Tried to perform ${action}, which is not a valid action`,
      );
  }
};

export const getUrlState = () => {
  const state: Partial<Patch> = {};
  const p = new window.URLSearchParams(window.location.search);

  try {
    const tracksParams = p.getAll("tracks");
    if (tracksParams.length > 0) {
      state.tracks = tracksParams[0]
        .split(",")
        .map((s) => numberToBits(Number(s)));
    }

    const bassParams = p.getAll("bassTracks");
    if (bassParams.length > 0) {
      let newTracks = range(7).map((i) =>
        bassParams[0].split(",").map((s) => (1 << i === Number(s) ? 1 : 0)),
      );

      // bassParams[0].split(",").map((s: string) =>
      //   range(7).map((i) => (1 << i === Number(s) ? 1 : 0)),
      // );
      // newTracks.

      state.bassTracks = newTracks;
    }

    const kickParams = p.getAll("kick");
    if (kickParams.length > 0) {
      state.useKick = Boolean(Number(kickParams[0]));
    }

    const presetParams = p.getAll("tone");
    if (presetParams.length > 0) {
      state.tone = presetParams[0];
    }
    return state;
  } catch (e) {
    console.log("Recall failed:", e);
  }
};

const getDelta = (val: number) => {
  return val > 1 ? val - 1 : val;
};

const encodeBassTracks = (tracks: number[][]) => {
  const numSteps = tracks[0].length;

  let noteVals = Array(numSteps).fill(0);
  let deltas = Array(numSteps).fill(0);

  range(numSteps).forEach((step) => {
    range(tracks.length).forEach((note) => {
      if (tracks[note][step] !== 0) {
        noteVals[step] = 1 << note;
        deltas[step] = getDelta(tracks[note][step]);
      }
    });
  });

  return range(numSteps)
    .map((step) => {
      const d = deltas[step];
      const showDelta = d !== 0 && d !== 1;
      return `${noteVals[step]}${showDelta ? "+" + d : ""}`;
    })
    .join(",");
};

export const setUrlState = (patch: Patch) => {
  let out = "?";
  out += "tracks=" + patch.tracks.map(bitsToNumber);
  out += "&kick=" + (patch.useKick ? 1 : 0);
  out += "&tone=" + patch.tone;
  out += "&bassTracks=" + encodeBassTracks(patch.bassTracks);
  globalThis.history.replaceState(null, "", out);
};
