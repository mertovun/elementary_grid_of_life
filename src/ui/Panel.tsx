import classNames from "classnames";
import {
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import Icons from "../assets/icons";
import { encodeUrlParams, Lifetime, Patch } from "../lib/patch";
import PlaybackContext from "../lib/PlaybackContext";
import useAnimationFrame from "../lib/useAnimationFrame";
import useClickAway from "../lib/useClickAway";
import { clamp } from "../lib/utils";
import { Logo } from "./Logo";

import "./Panel.scss";
import Scope from "./Scope";
import BpmInput from "./BpmInput";
import Picker from "./Picker";

const cls = "eg-panel";

const ShareWidget = ({ patch }: { patch: Patch }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, (e) => {
    setShowMenu(false);
    setShowCopyAlert(false);
  });

  const makeUrl = useCallback(
    () =>
      globalThis.location.origin + globalThis.location.pathname + encodeUrlParams(patch),
    [patch],
  );

  const showPop = () => setShowCopyAlert(true);
  const hidePop = () => setShowCopyAlert(false);

  useEffect(() => {
    if (!showCopyAlert) {
      return;
    }
    const t = window.setTimeout(hidePop, 800);
    return () => window.clearTimeout(t);
  }, [showCopyAlert]);

  const handleCopyClick = useCallback(() => {
    navigator.clipboard.writeText(makeUrl());
    showPop();
  }, [makeUrl]);

  return (
    <div ref={ref} className="eg-share">
      <Icons.Share
        className="eg-share__icon"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      {showMenu && (
        <ul className="eg-menu eg-share__menu">
          <li className="eg-menuitem">
            <a className="eg-text eg-text--link" href={makeUrl()}>
              Link to this track
            </a>
            <Icons.Copy className="eg-share__clipboardicon" onClick={handleCopyClick} />
            {showCopyAlert && <div className="eg-share__copyalert">Copied!</div>}
          </li>
          <li className="eg-meniutem">
            <a
              className="eg-text eg-text--menuitem twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `I just made this with Elementary Grid!\n${makeUrl()}`,
              )}`}
              data-size="large"
            >
              Tweet track
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

const Switch = ({
  label,
  active,
  setActive,
}: {
  label: string;
  active: boolean;
  setActive: (active: boolean) => void;
}) => {
  return (
    <div className={`${cls}__option ${cls}__kick-switch`}>
      <input
        className={`${cls}__switch`}
        type="checkbox"
        id={`${label}`}
        checked={active}
        onChange={() => setActive(!active)}
      />
      <label htmlFor={`${label}`}>{label}</label>
    </div>
  );
};

type ToneName = "stab" | "ding" | "bell";

type Tone = {
  name: ToneName;
  label: string;
};

const tones = [
  { name: "stab", label: "Stab" },
  { name: "ding", label: "Ding" },
  { name: "bell", label: "Bell" },
] as Array<Tone>;


type TonePickerProps = {
  currentTone: ToneName;
  onSetTone: (name: ToneName) => void;
};

const TonePicker = ({ currentTone, onSetTone }: TonePickerProps) => {
  return <Picker items={tones} currentName={currentTone} onSet={onSetTone} />;
};

type LifeTimeOption = {
  name: Lifetime;
  label: string;
};

const lifeTimeOptions = [
  { name: Lifetime.QUARTER, label: "1/4" },
  { name: Lifetime.HALF, label: "2/4" },
  { name: Lifetime.WHOLE, label: "4/4" },
] as Array<LifeTimeOption>;


type LifetimePickerProps = {
  currentLifetime: Lifetime;
  onSetLifetime: (lifetime: Lifetime) => void;
};


const LifetimePicker = ({ currentLifetime, onSetLifetime }: LifetimePickerProps) => {
  return <Picker items={lifeTimeOptions} currentName={currentLifetime} onSet={onSetLifetime}/>;
};

type MeterProps = {
  ids: string[];
  color?: "yellow" | "blue" | "orange" | "green";
};

const Meter = ({ ids, color = "yellow" }: MeterProps) => {
  const ctx = useContext(PlaybackContext);

  useAnimationFrame(1000 / 30, "meter");

  return (
    <div className={classNames(["eg-meter__track", `eg-meter__track--color-${color}`])}>
      {ids.map((id, i) => (
        <div
          key={`meter:${id}:${i}`}
          className="eg-meter__value"
          style={{
            transform: `scale(1, ${clamp(Math.sqrt(ctx.meters[id])) * 100}%)`,
          }}
        ></div>
      ))}
    </div>
  );
};

type Props = {
  patch: Patch;
  onClear: () => void;
  onSetKick: (useKick: boolean) => void;
  onSetTone: (tone: string) => void;
  onSetMute: (mute: boolean) => void;
  onSetLife: (life: boolean) => void;
  onSetLifetime: (lifetime: Lifetime) => void;
};

const getUseFancyLayout = () => window.matchMedia("(min-width: 35.001em)").matches;

function Panel({ patch, onClear, onSetKick, onSetTone, onSetMute, onSetLife, onSetLifetime }: Props) {
  const [skip, setSkip] = useState(1);
  const [fancyLayout, setFancyLayout] = useState<boolean>(getUseFancyLayout());
  const [showMeters, setShowMeters] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setFancyLayout(getUseFancyLayout);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleLogoClick: MouseEventHandler = (ev) => {
    setShowMeters((prev) => !prev);
  };

  return (
    <>
      <div ref={ref} className={`${cls}`}>
        {fancyLayout && (
          <div className={`${cls}__logo`} onClick={handleLogoClick}>
            {showMeters ? (
              <div className={`${cls}__meters`}>
                <Meter ids={["synth:left", "synth:right"]} color="yellow" />
                <Meter ids={["bass"]} color="blue" />
                <Meter ids={["kick"]} color="orange" />
                <Meter ids={["master:left", "master:right"]} color="green" />
              </div>
            ) : (
              <Logo />
            )}
          </div>
        )}

        <button
          type="button"
          className={`eg-button ${cls}__clearbutton`}
          onClick={onClear}
        >
          Clear
        </button>

        <BpmInput />

        <TonePicker currentTone={patch.tone as ToneName} onSetTone={onSetTone} />

        <div className={`${cls}__option`}>
          <Switch label="Life" active={patch.life} setActive={onSetLife} />
          <LifetimePicker currentLifetime={patch.lifetime} onSetLifetime={onSetLifetime} />
        </div>
        
        <div>
          <Switch label="Kick" active={patch.useKick} setActive={onSetKick} />
          <Switch label="Mute" active={patch.mute || false} setActive={onSetMute} />
        </div>

        {fancyLayout && <ShareWidget patch={patch} />}
      </div>
      {showMeters && (
        <div className="scopes">
          <Scope index="debug:tick" height={32} />
          <Scope index="debug:beat" height={32} />
          <Scope index="debug:sync" height={32} />
          <Scope index="debug:playhead" height={32} />
          <Scope index="master:left" height={32} />
          <Scope index="master:right" height={32} />
        </div>
      )}
    </>
  );
}

export default Panel;
