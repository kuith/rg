function HeaderForm({ onChangeForm, inputValue }) {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by keyword"
        aria-label="Search"
        id="input"
        value={inputValue}
        onChange={onChangeForm}
      />
      <ul id="pipo">
        
      </ul>
      <button className="btn btn-danger" type="submit">
        Search
      </button>
    </form>
    
  );
}

export default HeaderForm;
