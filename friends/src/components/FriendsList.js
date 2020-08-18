import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'
import AddAFriend from './AddAFriend'

const FriendsList = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log('this is where data is coming from foo', res.data)
            setList(res.data)
        })
        .catch(err => {
            console.log('error from FriendsList', err.data)
        })
    },[])

    console.log(list)

    return(
        <div> 
            <AddAFriend/>
            {list.map(friend => 
                <div id='container' key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )}
        </div>
    )
}

export default FriendsList