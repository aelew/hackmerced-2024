const SelectButton = ({ text, type, isSelected, onChange }) => {
  return (
    <label className='container'>{text}
      <input type={type} checked={isSelected} onChange={() => onChange(text)} name={type === 'radio' ? 'trackingSelection' : text}/>
      <span className="checkmark"></span>
    </label>
   
  );
};

export default SelectButton;
