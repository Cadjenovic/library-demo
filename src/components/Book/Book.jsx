import "./Book.css"

const Book = ({name, author, cover, synopsis, review}) => {
    return <div className="book-card">
        <img className="book-cover" src={cover} alt={name} />
        <div className="book-info">
            <h2 className="book-author">{author}</h2>
            <p className="book-synopsis">{synopsis}</p>
            <div className="book-review">{review}</div>
        </div>
    </div>
}

export default Book