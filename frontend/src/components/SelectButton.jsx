const SelectButton = ({ text, type, isSelected, onChange }) => {
  return (
    <label className='container'>{text}
<<<<<<< HEAD
        <input type={type} checked = {checkstate} name={type}/>
        <span className="checkmark"></span>
=======
      <input type={type} checked={isSelected} onChange={() => onChange(text)} name={type === 'radio' ? 'trackingSelection' : text}/>
      <span className="checkmark"></span>
>>>>>>> c33b1c335804e69a56b4acb0332413cc85716023
    </label>
   
  );
};

export default SelectButton;
