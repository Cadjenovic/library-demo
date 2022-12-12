import "./Carousel.css"

import AuthorCard from "../AuthorCard/AuthorCard"
import Card from "../Card/Card"
import CarouselDots from "../CarouselDots/CarouselDots"
import { useState } from "react"

const Carousel = ({authors}) => {

    const [activeAuthor, setActiveAuthor] = useState(0);

    const author = authors && authors[activeAuthor]

    const onLeft = () => {
        if (activeAuthor === 0) return;
        setActiveAuthor(prev => prev - 1)
    }

    const onRight = () => {
        if (activeAuthor === authors.length - 1) return;
        setActiveAuthor(prev => prev + 1)
    }

    return <Card className="carousel">
            <button className="carousel-btn" onClick={onLeft}>{"<"}</button>
             <AuthorCard {...author} /> 
             <button className="carousel-btn" onClick={onRight}>{">"}</button>
             <CarouselDots length={authors.length} active={activeAuthor} />
           </Card>
}

export default Carousel