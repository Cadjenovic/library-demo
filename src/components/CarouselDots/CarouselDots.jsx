import "./CarouselDots.css"

import CarouselDot from "../CarouselDot/CarouselDot";

const CarouselDots = ({length, active}) => {

    const dots = [];

    for (let i = 0; i < length; i++) {
        dots.push(<CarouselDot key={i} active={active === i} />)
    }

    return <div className="dots">{dots}</div>
}

export default CarouselDots;