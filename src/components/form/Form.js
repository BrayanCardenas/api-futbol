import "./Form.scss";

function Form({ onCHangeHandlerteam, submitHandler, team }) {
  return (
    <>
      <form className="Form">
        <input
          className="Form-input"
          type="text"
          value={team}
          onChange={onCHangeHandlerteam}
        />
        <button className="Form-btn" type="button" onSubmit={submitHandler}>
          Buscar
        </button>
      </form>
    </>
  );
}

export default Form;
