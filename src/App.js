import Form from "./components/form/Form";
import Tabla from "./components/tabla/Tabla";
import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [team, setTeam] = useState("");
  const [container, setContainer] = useState([]);

  const onCHangeHandlerteam = (e) => setTeam(e.target.value);
  const submitHandler = (e) => e.preventDefault();

  useEffect(() => {
    const API = `https://api-football-v1.p.rapidapi.com/v3/teams?search=${team}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ae596b38aemsh4b2c2ef54100239p1773abjsn5e63418aaf4e",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
    fetch(API, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => setContainer(data.response))
      .catch((err) => console.error(err));
  }, [team]);

  return (
    <>
      <h1>Encuentra a tu equipo</h1>
      <Form
        team={team}
        onCHangeHandlerteam={onCHangeHandlerteam}
        submitHandler={submitHandler}
        container={container}
      />
      <Tabla container={container} />
    </>
  );
}

export default App;
