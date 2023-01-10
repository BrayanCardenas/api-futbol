import Tabla from "../tabla/Tabal";
import "./Form.scss";
function Form({ onCHangeHandlerteam, submitHandler, team, container }) {
  return (
    <>
      <form>
        <input type="text" value={team} onChange={onCHangeHandlerteam} />
        <button type="submit" onSubmit={submitHandler}>
          Buscar
        </button>
      </form>

      <Tabla container={container} />
    </>
  );
}

export default Form;
