import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getOwners = async () => {
      const response = await axios.get(URL + '/owner/all')
      setOwners(response.data.owners);
    }
    getOwners()
  }, [URL]);

  return (
    <div>
      <h1>Owner List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner) => <tr key={owner.id}><td>{owner.id}</td><td>{owner.name}</td><td>{owner.address}</td><td>{owner.phone}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default OwnerList