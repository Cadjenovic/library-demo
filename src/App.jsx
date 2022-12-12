import './App.css'

import Book from './components/Book/Book';
import BookContainer from './components/BookContainer/BookContainer';
import { useState } from 'react'

const INITIAL_BOOKS = [
  {
    id: '1',
    name: 'Norwegian Wood',
    author: 'Haruki Murakami',
    cover: "https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '2',
    name: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    cover: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/223804_w.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '3',
    name: '1984',
    author: 'George Orwell',
    cover: "https://teachprivacy.com/wp-content/uploads/Orwell-1984-Book-Cover-12.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '4',
    name: 'Demian',
    author: 'Herman Hesse',
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/afd44046577977.585a19223ddc4.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '5',
    name: 'Siddhartha',
    author: 'Herman Hesse',
    cover: "https://images.booksense.com/images/315/604/9781800604315.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
]

function App() {

  const [books, setBooks] = useState(INITIAL_BOOKS);


  return <div><BookContainer books={books}/></div>
}

export default App
