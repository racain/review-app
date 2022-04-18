import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewItem({ item }) {
  const {deleteReview, editReview} = useContext(ReviewContext)

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteReview(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <button className="edit">
          <FaEdit onClick={() => editReview(item)} color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default ReviewItem