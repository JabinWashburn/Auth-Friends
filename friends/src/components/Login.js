import React, {useState} from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'

const Login = (props) => {
    const [login, setLogin] = useState({
        username: 'Lambda School',
        password: 'i<3Lambd4'
    })

    const handleChange = e => {
        setLogin({
            ...login, [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', login)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            setLogin(login)
            props.history.push('/api/friends' || '/api/edit/friends')
        })
        .catch(err => {
            localStorage.removeItem('token')
            console.log('Login FAILED, you fail at loggin in, failure', err)
        },[])
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' name='username' placeholder='username' value={login.username} onChange={handleChange}/>
            <input type='password' name='password' placeholder='password' value={login.password} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login

