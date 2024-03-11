import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Card() {
  const [client, setClient] = useState("");
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState(""); // State to track priority value
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/card", { client, query, priority }) // Send priority value to the server
      .then((result) => {
        console.log(result);
        // Handle server response appropriately
        navigate("/home"); // Navigate to home page on success
      })
      .catch((err) => console.log(err));
  };

  // Function to handle radio button clicks and set priority value
  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <div className="card" style={{ width: "100rem" }}>
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>GCS QUERY SYSTEM</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="client">
                  <strong>Client Name :</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Client"
                  autoComplete="off"
                  name="client"
                  className="form-control rounded-0"
                  onChange={(e) => setClient(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="query">
                  <strong>Query</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Query"
                  name="query"
                  className="form-control rounded-0"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="btn-group ms-5" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                  onClick={() => handlePriorityChange("NORMAL")}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  NORMAL
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={() => handlePriorityChange("MEDIUM")}
                />
                <label className="btn btn-outline-warning" htmlFor="btnradio2">
                  MEDIUM
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={() => handlePriorityChange("HIGH")}
                />
                <label className="btn btn-outline-danger" htmlFor="btnradio3">
                  HIGH
                </label>
              </div>
              <br />
              <button type="submit" className="btn btn-dark w-100 rounded-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
