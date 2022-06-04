import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../Home/styles.css'

export default function Home() {

    const [usersList, setUsersList] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/users').then((response) => {
            setUsersList(response.data)
        })

    }, [])
    

    return (
    <>
    <div className="container-add-user">
        <h1>Users</h1>
        <button className="button-add-user">Adicionar Usuário</button>
    </div>

    <div>

        {usersList !== [] && 
    <ul>
        {usersList.map((user)=> {
            return (
                <li>
                <p>Nome: {user.name} / Idade: {user.age} </p>
            </li>
            )   
    }

    )}
    </ul>
}
)      
    </div>
    </>
  
    )
}

