import './Tabla.scss'

function Tabla ({container}) {
  return ( <div className="container">
  <table className="table">
    <thead>
      <tr>
        <th className="td section line" colSpan="5">
          Equipo
        </th>
        <th className="td section" colSpan="5">
          Estadio
        </th>
      </tr>
      <tr>
        <th className="td">Nombre</th>
        <th className="td">CODE</th>
        <th className="td">País</th>
        <th className="td">Fundado</th>
        <th className="td line">Escudo</th>
        <th className="td">Nombre</th>
        <th className="td">Dirección</th>
        <th className="td">Ciudad</th>
        <th className="td">Capacidad</th>
        <th className="td">Estadio</th>
      </tr>
    </thead>
    <tbody>
      {container.map(({ team, venue }) => {
        return (
          <tr key={team.id}>
            <td className="td">{team.name}</td>
            <td className="td">{team.code}</td>
            <td className="td">{team.country}</td>
            <td className="td">{team.founded}</td>
            <td className="td line">
              <img className="img" src={team.logo} alt={team.name} />
            </td>
            <td className="td">{venue.name}</td>
            <td className="td ">{venue.address}</td>
            <td className="td">{venue.city}</td>
            <td className="td">{venue.capacity}</td>
            <td className="td">
              <img className="img" src={venue.image} alt="" />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div> );
}

export default Tabla;