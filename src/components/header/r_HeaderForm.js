import { useState } from "react";

function HeaderForm({ onClickForm, keyWords }) {

  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (searchItem) => {
    setValue(searchItem)
    setOpen(false);
  }

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by keyword"
        aria-label="Search"
        id="input"
        value={value}
        onChange={onChange}
      />
      <ul className="dropdown_Search">
        {keyWords
          .filter((item) => {
            const searchItem = value.toLocaleLowerCase();
            const keyWord = item.toLocaleLowerCase();
            return (
              searchItem &&
              keyWord.startsWith(searchItem) &&
              keyWord !== searchItem
            );
          })
          .map((item) => (
            <div key={item} className="dropdown-row_Search" onClick={() => onSearch(item)}>
              {item}
            </div>
          ))}
      </ul>
      <button className="btn btn-danger" type="submit" onClick={() => onClickForm(value)}>
        Search
      </button>
    </form>
  );
}

export default HeaderForm;
