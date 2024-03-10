const SelectButton = ({ text, type, isSelected, onChange, setMap }) => {
  return (
    <label
      className={type === 'radio' ? 'container radio' : 'container checkbox'}
      onClick={() => {
        if (setMap) {
          switch (text) {
            case 'Pollen':
              setMap('Pollen');
              break;
            case 'Air Quality':
              setMap('Air Quality');
              break;
            default:
              setMap('default');
              break;
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
