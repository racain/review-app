import {AnimatePresence, motion} from 'framer-motion'
import {useContext} from 'react'
import ReviewItem from './ReviewItem'
import ReviewContext from '../context/ReviewContext'

function ReviewList() {
  const {review} = useContext(ReviewContext)

  if(!review || review.length === 0) {
    return <p>No reviews to display</p>
  }

  return (
      <div className='feedback-list'>
        <AnimatePresence>
          {review.map((item) => (
              <motion.div
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opactiy: 0}}
              >
                <ReviewItem item={item} />
              </motion.div>
          ))}
        </AnimatePresence>
      </div>
  )

  // return (
  //   <div className='feedback-list'>
  //       {review.map((item) => (
  //           <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )
}

export default ReviewList