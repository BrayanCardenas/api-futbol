import Thead from "./Thead";
import Tbody from "./Tbody";
import "./Tabla.scss";

function Tabla({ container }) {
  return (
    <div className="Container">
      <table className="Table">
        <thead>
          <tr>
            <th colSpan="5" className="Table-th Table-td Table-td--section">
              Equipo
            </th>
            <th colSpan="5" className="Table-th Table-td Table-td--section">
              Estadio
            </th>
          </tr>
          <tr>
            <Thead />
          </tr>
        </thead>
        <tbody>
          <Tbody container={container} />
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
