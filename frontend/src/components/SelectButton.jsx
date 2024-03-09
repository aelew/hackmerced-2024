const SelectButton = ({text, type, checkstate}) => {
  return (
    <label className='container'>{text}
        <input type={type} checked = {checkstate} name={type}/>
        <span className="checkmark"></span>
    </label>
  )
}

export default SelectButton
