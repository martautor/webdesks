import React from 'react'
import { Form } from './AuthForm'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const CreateNewAccount = () => {
  const navigate = useNavigate()
    const HandleRegister = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user)
          navigate('/main')
        })
        .catch((e) => {
          console.log(e.message)
        })
    }
    return (
      <Form
          title="Регистрация" 
          bTitle="Зарегистрироваться"
          links={<Link to='/login'>Уже есть аккаунт? Войдите</Link>}
          handleClick={HandleRegister} 
      />
    )
}

export default CreateNewAccount