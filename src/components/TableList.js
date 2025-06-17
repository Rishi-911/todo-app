import "../App.css";
import Button from "./Button";
const TableList = ({ addTodo = [], handleDelete, handleStatus }, props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Toggle Tasks</th>
            <th>Added Tasks</th>
            <th>Status</th>
            <th>Delete Tasks</th>
          </tr>
        </thead>
        <tbody>
          {addTodo.map((items, index) => (
            <tr key={index}>
              <td className="check">
                <input
                  type="checkbox"
                  checked = {items.Status === "Completed"}
                  onChange={(e) => handleStatus(index, e.target.checked)}
                />
              </td>
              <td
                className={items.Status === "Completed"? "td-items":""}
                style={{textTransform: "capitalize"}}
              >
                {items.text}
              </td>
              <td>{items.Status}</td>
              <td>
                <Button onDelete={handleDelete} index={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
