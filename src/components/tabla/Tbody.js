function Tbody({ container }) {
  return (
    <>
      {container.map(({ team, venue }) => {
        return (
          <tr key={team.id}>
            <td className="Table-td Table-td--left">{team.name}</td>
            <td className="Table-td">{team.code}</td>
            <td className="Table-td">{team.country}</td>
            <td className="Table-td">{team.founded}</td>
            <td className="Table-td">
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
    </>
  );
}

export default Tbody;
