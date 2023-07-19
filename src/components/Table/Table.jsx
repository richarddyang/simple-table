import "./Table.css";

const Table = ({ headers, results }) => {
  ///////////////////////////DATA ABSTRACTION/////////////////////////////////////////
  const tableHeaders = (
    <tr className="table_headers">
      {headers.map((header) => (
        <th key={header} accessKey={header}>
          {header}
        </th>
              // MOCK-DATA headers
              // <th key={header.label} accessKey={header.key}>
              //   {header.label}
              // </th>
      ))}
    </tr>
  );

  const tableBody = results?.map((result) => (
    <tr key={result.id}>
      {headers.map((header) => (
        <td key={header}>{result[header]}</td>
      ))}
    </tr>
    // MOCK-DATA results with headers
  // <tr key={result.id}>
  //   {headers.map((header) => (
  //     <td key={header.label}>{result[header.key]}</td>
  //   ))}
  // </tr>
  ));

  return (
    <div className="table_container">
      <table>
        <thead>{tableHeaders}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default Table;
