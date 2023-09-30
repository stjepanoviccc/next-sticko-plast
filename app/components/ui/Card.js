const Card = (props) => {
  return (
    <div className={`flex-1 flex flex-col ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card;
