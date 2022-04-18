import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, setReview] = useState([
        {
            id:1,
            text: 'This is review item 1',
            rating: 10
        },
        {
            id:2,
            text: 'This is review item 2',
            rating: 9
        },
        {
            id:3,
            text: 'This is review item 3',
            rating: 7
        },
    ])

    const [reviewEdit, setReviewEdit] = useState({
        item: {},
        edit: false
    })

    // add review
    const addReview = (newReview) => {
      newReview.id = uuidv4()
      setReview([newReview, ...review])
    }

    // delete review
    const deleteReview = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
        setReview(review.filter((item) => item.id !== id))
      }
    }

    // set item to be updated
    const editReview = (item) => {
        setReviewEdit({
            item,
            edit: true
        })
    }

    // update review item
    const updateReview = (id, updItm) => {
        setReview(review.map((item) => item.id === id ? { ...item, ...updItm } : item))
    }

    return <ReviewContext.Provider value={{
        review,
        reviewEdit,
        deleteReview,
        addReview,
        editReview,
        updateReview             
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext