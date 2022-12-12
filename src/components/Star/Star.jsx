import "./Star.css"

const Star = ({full}) => {
    const className = full ? "star full" : "star"
    return <div className={className}></div>
}

export default Star