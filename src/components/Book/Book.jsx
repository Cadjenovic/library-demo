import "./Book.css"

import Card from "../Card/Card"
import Stars from "../Stars/Stars"

const Book = ({id, name, author, cover, synopsis, review, changeReview, deleteBook}) => {

    const changeReview2 = (newReview) => {
        changeReview(id, newReview)
    }

    return <Card className="book-card">
        <button className="book-delete-btn" onClick={() => deleteBook(id)}>X</button>
        <img className="book-cover" src={cover} alt={name} />
        <div className="book-info">
            <h2 className="book-author">{author}</h2>
            <p className="book-synopsis">{synopsis}</p>
            <Stars review={review} changeReview={changeReview2}/>
        </div>
        </Card>
}

export default Book