const Wrap = (props) => {
    return (
        <div className={`mx-auto max-w-7xl px-3 ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
};

export default Wrap;