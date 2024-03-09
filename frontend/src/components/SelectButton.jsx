const SelectButton = ({text, type, checkstate}) => {
  return (
    <label class='container'>{text}
        <input type={type} checked = {checkstate} name={type}/>
        <span class="checkmark"></span>
    </label>
  )
}

export default SelectButton
