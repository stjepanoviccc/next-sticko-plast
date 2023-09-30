const ButtonHolder = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default ButtonHolder;