import "./BookContainer.css"

import Book from "../Book/Book"

const BookContainer = ({books}) => {

    const booksMap = books.map(book => <Book name={book.name} author={book.author} cover={book.cover} synopsis={book.synopsis} review={book.review}/>)

    return <div className="book-container">{booksMap}</div>

}

export default BookContainer