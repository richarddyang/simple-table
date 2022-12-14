import "./Table.css";
import { headers } from "../../utils/dependencies";

const Table = ({ results }) => {
  ///////////////////////////DATA ABSTRACTION/////////////////////////////////////////
  const tableHeaders = (
    <tr className="table_headers">
      {headers.map((header) => (
        <th key={header.label} accessKey={header.key} className="">
          {header.label}
        </th>
      ))}
    </tr>
  );

  const tableBody = results?.map((result) => (
    <tr key={result.id}>
      {headers.map((header) => (
        <td key={header.label}>{result[header.key]}</td>
      ))}
    </tr>
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
