
export default function PopUp(props) {

    return(props.click) ? (
        <div>
            {props.children}
        </div>
    ) : "";
}