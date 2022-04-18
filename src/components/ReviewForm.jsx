import { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useContext} from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addReview, reviewEdit, updateReview } = useContext(ReviewContext)

  useEffect(() => {
    if(reviewEdit.edit === true) {
      setBtnDisabled(false)
      setText(reviewEdit.item.text)
      setRating(reviewEdit.item.rating)
    }
  }, [reviewEdit])

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null);
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Review must be atleast 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newReview = {
        text,
        rating
      }
      
      if(reviewEdit.edit === true) {
        updateReview(reviewEdit.item.id, newReview)
      } else {
        addReview(newReview)
      }

      setText('')
    }
  }

  return <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={setRating} selected={rating} />
          <div className="input-group">
            <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
          </div>

          {message && <div className='message'>{message}</div>}
      </form>
  </Card>
}

export default ReviewForm