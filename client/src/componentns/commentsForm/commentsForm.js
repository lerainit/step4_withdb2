import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch,useSelector } from "react-redux";
import * as yup from 'yup'
import { addCommentsAC, setCommentsAC } from "../../store/comments/actionCreators";
import { setProducts } from "../../store/products/actions";



const CommentsForm = (props) => {
  const dispatch = useDispatch()

  const comments = useSelector(store =>store.comments.value)
  const products = useSelector(store => store.products.value)

  


  let initialValues = {
    comment: '',

  }



  const validationSchema = yup.object().shape({
    comment: yup.string()
      .min(3, 'Min 3 symbols')
      .max(12, 'Max 12 symbols')
      .required('Name is required'),

  })


  return (

    <Formik
      initialValues={initialValues}

      validationSchema={validationSchema}
      onSubmit={ async (values, FormikProps) => {
        console.log(values)
  

        fetch(`http://localhost:3001/posts/comments/${props.index}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment:{userIndex:props.userIndex,text: values.comment,isVisible:false}, userIndex: props.userIndex,userId:props.userId })
        }).then(res => res.json())

      await  dispatch(setCommentsAC())
    dispatch(addCommentsAC({ comment:{userIndex:props.userIndex,text: values.comment}, userIndex: props.userIndex, index: props.index ,comments:comments}))
    dispatch({type:setCommentsAC,payload:comments})
      

       
        dispatch({ type: setProducts,payload:products })
     

      }}

    >
      {({ dirty, isValid }) => {




        return (
          <Form>

            <Field
              type='text'
              name='comment'
              placeholder='Add comment'

            />
            <ErrorMessage name="comment">{msg => <span className='error'>{msg}</span>}</ErrorMessage>



            <button className='form_button' disabled={!dirty || !isValid} type="submit">Post</button>

          </Form>

        )
      }
      }
    </Formik>
  )

}
export default CommentsForm
