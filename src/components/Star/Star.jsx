import "./Star.css"

const Star = ({full, changeReview}) => {
    const className = full ? "star full" : "star"

    return <div className={className} onClick={changeReview}></div>
}

export default Star