export default function TodoItem2() {
  let todoname = "Buy Milk";
  let tododate = "04/08/2020";
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2 kg-button">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
