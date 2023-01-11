import "./Tabla.scss";

function Tabla({ container }) {
  return (
    <div className="Container">
      <table className="Table">
        <thead>
          <tr>
            <th colSpan="5" className="Table-th Table-td Table-td--section Table-td--line">
              Equipo
            </th>
            <th colSpan="5" className="Table-th Table-td Table-td--section">
              Estadio
            </th>
          </tr>
          <tr>
            <th className="Table-th Table-td Table-td--left">Nombre</th>
            <th className="Table-th Table-td">Código</th>
            <th className="Table-th Table-td">País</th>
            <th className="Table-th Table-td">Fundado</th>
            <th className="Table-th Table-td Table-td--line">Escudo</th>
            <th className="Table-th Table-td Table-td--left">Nombre</th>
            <th className="Table-th Table-td">Dirección</th>
            <th className="Table-th Table-td">Ciudad</th>
            <th className="Table-th Table-td">Capacidad</th>
            <th className="Table-th Table-td">Estadio</th>
          </tr>
        </thead>
        <tbody>
          {container.map(({ team, venue }) => {
            return (
              <tr key={team.id}>
                <td className="Table-td Table-td--left">{team.name}</td>
                <td className="Table-td">{team.code}</td>
                <td className="Table-td">{team.country}</td>
                <td className="Table-td">{team.founded}</td>
                <td className="Table-td Table-td--line">
                  <img className="Table-img" src={team.logo} alt={team.name} />
                </td>
                <td className="Table-td  Table-td--left">{venue.name}</td>
                <td className="Table-td ">{venue.address}</td>
                <td className="Table-td">{venue.city}</td>
                <td className="Table-td">{venue.capacity}</td>
                <td className="Table-td">
                  <img className="Table-img" src={venue.image} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
