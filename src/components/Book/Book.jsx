import "./Book.css"

import Stars from "../Stars/Stars"

const Book = ({name, author, cover, synopsis, review}) => {
    return <div className="book-card">
        <img className="book-cover" src={cover} alt={name} />
        <div className="book-info">
            <h2 className="book-author">{author}</h2>
            <p className="book-synopsis">{synopsis}</p>
            <Stars review={review}/>
        </div>
    </div>
}

export default Book