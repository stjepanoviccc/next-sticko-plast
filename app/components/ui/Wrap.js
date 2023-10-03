const Wrap = (props) => {
    return (
        <div className={`mx-auto max-w-7xl px-3 ${props.className}`} style={props.style} id={props.id}>
            {props.children}
        </div>
    )
};

export default Wrap;