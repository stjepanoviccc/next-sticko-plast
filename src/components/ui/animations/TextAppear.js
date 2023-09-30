import { CSSTransition } from "react-transition-group";

const TextAppear = (props) => {
    return (
        <CSSTransition in={props.showWrap} timeout={1500} appear unmountOnExit
            onEnter={(node) => {
                node.style.opacity = "0";
                node.style.transform = "translateY(-20px)";
            }}
            onEntering={(node) => {
                node.style.opacity = "1";
                node.style.transform = "translateY(0)";
                node.style.transition = "opacity 1500ms, transform 1500ms";
            }}>
            {props.children}
        </CSSTransition>
    )
}

export default TextAppear;
