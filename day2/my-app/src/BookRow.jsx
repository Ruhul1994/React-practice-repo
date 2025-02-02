import BookDetails
 from "./BookDetails"
 import FeatureBook from "./FeatureBook"
 import PropTypes from "prop-types";

function BookRow({book}) {
  return (
    <div className="flex items-center justify-between w-full p-4">
        <>
            <BookDetails title={book.title} author = {book.author}/>
            <FeatureBook />
        </>
      
    </div>
  )
}

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
}

export default BookRow
