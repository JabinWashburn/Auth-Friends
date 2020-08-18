import React, {useState, useContext} from 'react'
import axiosWtihAuth from '../Utils/axiosWithAuth'
import {FriendsContext} from '../Context/FriendsContext'

const AddAFriend = () => {
    // const [friends, setFriends] = useContext(FriendsContext)
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setForm({
            ...form, [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        // e.preventDafault()
        axiosWtihAuth()
        .post('/api/friends', form)
        .then( res => {
            setForm({
                name: '',
                age: '',
                email: ''
            })
            // setFriends([...friends, res.data])
            console.log(res.data)
        })
        .catch(err => {
            console.log('error from AddAFriend', err)
        })
    }

    return(
        <form onSubmit={onSubmit}>
        <input autoComplete='off' type='text' name='name' placeholder='name' value={form.name} onChange={handleChange}/>
        <input autoComplete='off' type='text' name='age' placeholder='age' value={form.age} onChange={handleChange}/>
        <input autoComplete='off' type='text' name='email' placeholder='email' value={form.email} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    )
}

export default AddAFriend


