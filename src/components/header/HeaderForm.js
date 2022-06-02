function HeaderForm({ searchKeyWords }) {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by keyword"
        aria-label="Search"
        onChange={searchKeyWords}
      />
      <button className="btn btn-danger" type="submit">
        Search
      </button>
    </form>
  );
}

export default HeaderForm;
