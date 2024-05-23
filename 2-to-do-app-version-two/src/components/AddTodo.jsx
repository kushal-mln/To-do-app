function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="ENTER TO DO" />
        </div>
        <div className="col-4">
          <input type="Date" />
        </div>
        <div className="col-2 kg-button">
          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
