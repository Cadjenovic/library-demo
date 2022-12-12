import "./AddBookForm.css"

import { useState } from "react"

const AddBookForm = ({addBook}) => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [review, setReview] = useState('')

    const onAddBookSubmitHandler = (event) => {
        event.preventDefault();
        const book = {
            name,
            author,
            cover,
            synopsis,
            review
        }
        addBook(book);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const authorChangeHandler = (event) => {
        setAuthor(event.target.value)
    }

    const coverChangeHandler = (event) => {
        setCover(event.target.value)
    }

    const synopsisChangeHandler = (event) => {
        setSynopsis(event.target.value)
    }

    const reviewChangeHandler = (event) => {
        setReview(event.target.value)
    }

    return <div className="form-wrapper">
        <form className="form" onSubmit={onAddBookSubmitHandler}>
            <div className="form-item">
                <label>Name</label>
                <input type="text" value={name} onChange={nameChangeHandler} />
            </div>
            <div className="form-item">
                <label>Author</label>
                <input type="text"  value={author} onChange={authorChangeHandler} />
            </div>
            <div className="form-item">
                <label>Cover Image</label>
                <input type="text"  value={cover} onChange={coverChangeHandler} />
            </div>
            <div className="form-item">
                <label>Synopsis</label>
                <input type="text"  value={synopsis} onChange={synopsisChangeHandler} />
            </div>
            <div className="form-item">
                <label>Review</label>
                <input type="number" min="1" max="5" step="1"  value={review} onChange={reviewChangeHandler} />
            </div>
            <div className="form-item">
                <input type="submit" value="Add Book" />
            </div>
        </form>
    </div>
}

export default AddBookForm;