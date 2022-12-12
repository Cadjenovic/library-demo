import "./BookContainer.css"

import Book from "../Book/Book"
import Card from "../Card/Card"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const BookContainer = ({books, changeReview, deleteBook}) => {

    if (books.length === 0) {
        return <Card className="book-container"><LoadingSpinner /></Card>
    }

    const booksMap = books.map(book => <Book key={book.id} id={book.id} name={book.name} author={book.author} cover={book.cover} synopsis={book.synopsis} review={book.review} deleteBook={deleteBook} changeReview={changeReview}/>)

    return <Card className="book-container">{booksMap}</Card>

}

export default BookContainer