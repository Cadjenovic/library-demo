import "./Stars.css"

import Star from "../Star/Star"

const Stars = ({review}) => {

    const stars = [];

    for(let i=0; i < 5; i++){
        stars.push(<Star key={i} full={i <= parseInt(review) - 1} />)
    }

    return <div className="stars">
        {stars}
    </div>
}

export default Stars