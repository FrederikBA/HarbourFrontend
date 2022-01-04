import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"

const BoatOwners = () => {
  const [owners, setOwners] = useState([]);

  const id = parseInt(useParams().id)
  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getOwners = async () => {
      const response = await axios.get(URL + "/owner/" + id)
      setOwners(response.data.owners)
    }
    getOwners()
  }, [URL, id]);

  return (
    <div>
      <h4>This is the boat with the ID: </h4>
      <h4>This boat belongs to:</h4>
      <ul>{owners.map((o) => <li key={o.id}> {o.name} </li>)}</ul>
    </div>
  )
}

export default BoatOwners