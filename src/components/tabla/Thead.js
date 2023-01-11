function Thead() {
  const info = [
    "nombre",
    "codigo",
    "país",
    "fundado",
    "escudo",
    "nombre",
    "dirección",
    "ciudad",
    "capacidad",
    "estadio",
  ];

  return (
    <>
      {info.map((li, i) => (
        <th
          key={i}
          className={
            li === "nombre"
              ? "Table-th Table-td Table-td--left"
              : "Table-th Table-td"
          }
        >
          {li}
        </th>
      ))}
    </>
  );
}

export default Thead;
