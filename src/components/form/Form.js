import "./Form.scss";

function Form({ onCHangeHandlerteam, submitHandler, team, container }) {
  return (
    <>
      <form className="Form">
        <input className="Form-input" type="text" value={team} onChange={onCHangeHandlerteam} />
        <button type="submit" onSubmit={submitHandler}>
          Buscar
        </button>
      </form>
    </>
  );
}

export default Form;
