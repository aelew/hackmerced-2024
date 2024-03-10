const SelectButton = ({ text, type, isSelected, onChange, setMap }) => {
  return (
    <label
      className={type === 'radio' ? 'container radio': 'container checkbox'}
      onClick={() => {
        if (setMap) {
          if ({ text }.text === 'Pollen') {
            setMap('Pollen');
          } else if ({ text }.text === 'Air Quality') {
            setMap('Air Quality');
          } else {
            setMap('default');
          }
        }
      }}
    >
      {text}
      <input
        type={type}
        checked={isSelected}
        name={type === 'radio' ? 'trackingSelection' : text}
        onChange={(e) => {
          if (onChange) {
            onChange(e, text);
          }
        }}
      />
      <span className={'checkmark'}></span>
    </label>
  );
};

export default SelectButton;
