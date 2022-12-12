import "./CarouselDot.css"

const CarouselDot = ({active}) => {
    const classList = active ? "dot active" : "dot"
    return <div className={classList}></div>
}

export default CarouselDot;