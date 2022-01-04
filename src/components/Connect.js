import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import { NavLink } from "react-router-dom"

const Connect = () => {
  const [boats, setBoats] = useState([]);

  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getBoats = async () => {
      const response = await axios.get(URL + "/boat/all")
      setBoats(response.data.boats)
    }
    getBoats()
  }, [URL]);

  return (
    <div className="center">
      <h1>Connect a boat to a harbour</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          {boats.map((boat) => <tr key={boat.id}><td>{boat.id}</td><td>{boat.brand}</td><td>{boat.make}</td><td>{boat.image}</td><td><NavLink to={`/connect/${boat.id}`}><button className="btn btn-primary">Connect</button></NavLink></td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Connect