const SelectButton = ({ text, type, checkstate, onChange }) => {
  return (
    <label className='container'>{text}
      <input type={type} checked={checkstate} onChange={onChange} name={type === 'radio' ? 'trackingSelection' : text}/>
      <span className="checkmark"></span>
    </label>
  );
};

export default SelectButton;
