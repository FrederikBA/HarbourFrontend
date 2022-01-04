import axios from "axios"
import apiUtils from "../utils/apiUtils"
import { useState } from "react"

const CreateBoat = () => {
  const init = { brand: "", make: "", name: "", image: "", harbour: { id: 0 } };
  const [boat, setBoat] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const URL = apiUtils.getUrl()

  const handleInput = (event) => {
    setBoat({ ...boat, [event.target.id]: event.target.value })
  }


  const createBoat = async () => {
    try {
      await axios.post(URL + "/boat", {
        brand: boat.brand,
        make: boat.make,
        name: boat.name,
        image: boat.image,
        harbour: { id: boat.id }
      })
      setMsgColor('#4caf50');
      setStatusMessage('Movie Added Successfully!');
    } catch (error) {
      setStatusMessage(error.response.data.message);
      setMsgColor('#FF0000')
    }
  }

  return (
    <div className="center">
      <h1>Create Boat</h1>
      <p className="statusMsg" style={{ color: msgColor }}>{statusMessage}</p>
      <form onChange={handleInput}>
        <input className="form-control addInput" id="brand" placeholder="Enter brand" type="text"></input>
        <input className="form-control addInput" id="make" placeholder="Enter make" type="text"></input>
        <input className="form-control addInput" id="name" placeholder="Enter name" type="text"></input>
        <input className="form-control addInput" id="image" placeholder="Enter image" type="text"></input>
        <input className="form-control addInput" id="id" placeholder="Enter harbour ID of existing harbour" type="text"></input>
      </form>
      <button onClick={createBoat} className="btn btn-primary mt-3">Create</button>
    </div>
  )
}

export default CreateBoat