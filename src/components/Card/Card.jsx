import "./Card.css"

const Card = ({className, children}) => {
    const classList = "card " + className;
    return <div className={classList}>{children}</div>
}

export default Card;