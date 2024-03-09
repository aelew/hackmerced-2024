const Form = ({text}) => {
  return (
    <label class="container">{text}
        <input type="checkbox" />
        <span class="checkmark"></span>
    </label>
  )
}

export default Form
