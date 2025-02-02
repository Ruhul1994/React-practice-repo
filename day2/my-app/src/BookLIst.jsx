
import BookRow from "./Bookrow"
const Books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt", featured: true },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", featured: false },
  { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", featured: true },
  { id: 4, title: "JavaScript: The Good Parts", author: "Douglas Crockford", featured: false },
  { id: 5, title: "Eloquent JavaScript", author: "Marijn Haversine", featured: true }
];
function BookLIst() {
  return (
    <ul>
      {
        Books.map((book)=>(
          <li key={book.id}>
            <BookRow book ={book}/>
          </li>
        ))
      }
    </ul>
  )
}

export default BookLIst
