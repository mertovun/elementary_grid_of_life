import { useCallback, useContext, useEffect, useReducer } from "react";
import {
  Lifetime,
  Patch,
  clearUrlState,
  getLocalStorage,
  getUrlState,
  patchReducer,
  setLocalStorage,
} from "./lib/patch";
import { useSynth } from "./lib/useSynth";

import { initArray, makeScale, range } from "./lib/utils";
import Grid from "./ui/Grid";
import Panel from "./ui/Panel";
import Splainer from "./ui/Splainer";

import "./App.scss";
import { BpmContext } from "./lib/PlaybackContext";
import { core } from "./lib/webRenderer";
import useLife from "./lib/useLife";

const numTracks = 16;
const numSteps = 16;

const handleLoad = () => {
  core.on("error", (e: unknown) => {
    console.log(e);
  });
};

core.off("load", handleLoad);
core.on("load", handleLoad);

const initTracks = (height: number = numTracks) => {
  return initArray(height, numSteps);
};

const getInitialPatch = () => {
  let patchData = {
    scale: makeScale(["c", "d", "f", "g", "a"], numTracks),
    bassScale: makeScale(["c", "d", "f", "g", "a", "a#"], 7, 2),
    tracks: initTracks(),
    bassTracks: initTracks(7),
    tone: "stab",
    useKick: false,
    life: false,
    lifetime: Lifetime.QUARTER,
  } as Patch;

  const urlPatch = getUrlState();
  if (urlPatch && Object.keys(urlPatch).length !== 0) {
    patchData = { ...patchData, ...(urlPatch as Patch) };
  } else {
    const storedPatch = getLocalStorage<Patch>();
    if (storedPatch) {
      patchData = storedPatch;
    }
  }
  clearUrlState();

  return patchData;
};

const initialPatch = getInitialPatch();

const App = () => {
  const [patch, updatePatch] = useReducer(patchReducer, initialPatch);
  const { bpm } = useContext(BpmContext);

  useSynth({
    scale: patch.scale,
    bassScale: patch.bassScale,
    tone: patch.tone,
    tracks: patch.tracks,
    bassTracks: patch.bassTracks,
    withKick: patch.useKick,
    mute: patch.mute,
    bpm: bpm,
  });

  const handleLife = useCallback((field:any) => {
    updatePatch({ type: "setTracks", tracks: field });
  }, []);

  useLife({
    field: patch.tracks,
    setField: handleLife,
    life: patch.life,
    lifetime: patch.lifetime,
  });

  const toggleNote = useCallback(
    (note: number, step: number, value: number) => {
      const newTracks = [...patch.tracks];
      newTracks[note][step] = value;

      updatePatch({ type: "setTracks", tracks: newTracks });
    },
    [patch.tracks],
  );

  const toggleBassNote = useCallback(
    (note: number, step: number, value: number) => {
      const newTracks = [...patch.bassTracks];
      range(newTracks.length).forEach((i) => {
        newTracks[i][step] = 0;
      });
      newTracks[note][step] = value;

      updatePatch({ type: "setBassTracks", tracks: newTracks });
    },
    [patch.bassTracks],
  );

  useEffect(() => {
    setLocalStorage(patch);
  }, [patch]);

  return (
    <>
      <div className="eg-app">
        <Panel
          patch={patch}
          onClear={useCallback(() => {
            updatePatch({ type: "setTracks", tracks: initTracks() });
            updatePatch({ type: "setBassTracks", tracks: initTracks(7) });
          }, [])}
          onSetKick={useCallback(
            (useKick) => updatePatch({ type: "setUseKick", useKick }),
            [],
          )}
          onSetTone={useCallback(
            (tone) => updatePatch({ type: "setTone", tone }),
            [],
          )}
          onSetMute={useCallback(
            (mute) => updatePatch({ type: "setMute", mute }),
            [],
          )}
          onSetLife={useCallback(
            (life) => updatePatch({ type: "setLife", life }),
            [],
          )}
          onSetLifetime={useCallback(
            (lifetime) => updatePatch({ type: "setLifetime", lifetime }),
            [],
          )}
        />
        <Grid
          canTranspose={true}
          notes={patch.tracks}
          onSetNotes={useCallback((notes) => {
            updatePatch({ type: "setTracks", tracks: notes });
          }, [])}
          onToggleNote={toggleNote}
        ></Grid>

        <Grid
          canTranspose={true}
          color="blue"
          notes={patch.bassTracks}
          onSetNotes={useCallback(
            (notes) => updatePatch({ type: "setBassTracks", tracks: notes }),
            [],
          )}
          onToggleNote={toggleBassNote}
        />
        <Splainer />
      </div>
    </>
  );
};

export default App;
