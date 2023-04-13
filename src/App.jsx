import { useState } from 'react'
import reviews from './data'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = reviews[index]

  const nextPerson = () => {
    setIndex((oldIndex) => {
      return (oldIndex + 1) % reviews.length
    })
  }
  const prevPerson = () => {
    setIndex((oldIndex) => {
      return (oldIndex - 1 + reviews.length) % reviews.length
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % reviews.length
    setIndex(newIndex)
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
