const SelectButton = ({ text, type, isSelected, onChange, setMap }) => {
  return (
    <label
      className="container"
      onClick={() => {
        if ({ text }.text === 'Pollen') {
          setMap('Pollen');
        } else if ({ text }.text === 'Air Quality') {
          setMap('Air Quality');
        } else {
          setMap('default');
        }
      }}
    >
      {text}
      <input
        type={type}
        checked={isSelected}
        onChange={() => onChange(text)}
        name={type === 'radio' ? 'trackingSelection' : text}
      />
      <span className={type === 'radio' ? 'checkmark radio' : 'checkmark'}></span>
    </label>
  );
};

export default SelectButton;
