import './TableNode.css'

const TableNode = ({ data }) => {
  return (
    <div className="table-node">
      <div className="table-header">
        <strong>{data.label}</strong>
      </div>
      <ul className="table-columns">
        {data.columns.map((col, index) => (
          <li key={index}>
            {col.name} ({col.type})
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TableNode
