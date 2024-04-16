import "./Panel.scss";
const cls = "eg-panel";

type PickerItem = {
  name: string;
  label: string;
};

type PickerProps = {
  items: PickerItem[];
  currentName: string;
  onSet: (name: any) => void;
};

const Picker = ({ items, currentName, onSet }: PickerProps) => {
  return (
    <div className={`${cls}__picker`}>
      {items.map((item) => (
        <div className={`${cls}__option`} key={item.name}>
          <input
            type="radio"
            className={`${cls}__led`}
            id={item.name}
            value={item.name}
            checked={item.name === currentName}
            onChange={() => onSet(item.name)}
          />
          <label htmlFor={item.name}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Picker;