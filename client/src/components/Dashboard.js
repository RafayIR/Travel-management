import React, { useEffect } from 'react'
import axios from 'axios'

function Dashboard() {

    useEffect(() => {
        try{ axios.get('http://localhost:8080/users/dashboard')
        }catch(err) {
            console.log(err)
        }
    })


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard