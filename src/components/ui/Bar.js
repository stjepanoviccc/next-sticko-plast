const Bar = (props) => {
    return (
        <div className={`bg-${props.bgColor} text-${props.textColor}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Bar;