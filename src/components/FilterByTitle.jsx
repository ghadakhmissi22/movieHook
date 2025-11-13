import Form from "react-bootstrap/Form";

function FilterByTitle({ searchTitle, setSearchTitle }) {
  return (
    <div className="m-5">
      {" "}
      <Form.Control
        type="text"
        placeholder="serach movie by title..."
        value={searchTitle}
        onChange={(e)=>setSearchTitle(e.target.value)}
      />
    </div>
  );
}

export default FilterByTitle;
