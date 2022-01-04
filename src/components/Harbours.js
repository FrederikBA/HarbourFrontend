import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import { NavLink } from "react-router-dom"

const Harbours = () => {
  const [harbours, setHarbours] = useState([]);

  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getHarbours = async () => {
      const response = await axios.get(URL + "/harbour/all")
      setHarbours(response.data.harbours)
    }
    getHarbours()
  }, [URL]);

  return (
    <div>
      <h1>Harbous</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>See Boats</th>
          </tr>
        </thead>
        <tbody>
          {harbours.map((h) => <tr key={h.id}><td>{h.id}</td><td>{h.name}</td><td>{h.address}</td><td>{h.capacity}</td><td><NavLink to={`/harbour/${h.id}`}><button className="btn btn-primary">See boats</button></NavLink></td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Harbours