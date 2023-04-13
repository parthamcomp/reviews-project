import { useState } from 'react'
import reviews from './data'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0
    }
    if (number < 0) {
      return reviews.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          Surprise me
        </button>
      </article>
    </main>
  )
}
export default App
