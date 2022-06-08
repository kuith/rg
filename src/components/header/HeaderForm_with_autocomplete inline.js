import { useState, useEffect, useRef } from "react";


function HeaderForm({ onClickForm, keyWords }) {
  const [userValue, setUserValue] = useState("");
  const [suggestionPart, setSuggestionPart] = useState("");

  const inputRef = useRef();
  const userValueRef = useRef();

  userValueRef.current = userValue;

  function findSuggestionFor(phrase) {
    const found = keyWords.find((word) => word.indexOf(phrase) === 0);
    return found
  }

  function handlerUserInputChange(e) {
    const inputValue = e.target.value;
    const newUserValue = inputValue;

    const diff = newUserValue.substr(userValue.length);
    if (suggestionPart.indexOf(diff) === 0) {
      setSuggestionPart(suggestionPart.substr(diff.length));
    } else {
      setSuggestionPart("");
    }

    setUserValue(newUserValue);
  }

  useEffect(() => {
    
    if (userValue.length > 0) {
      const suggestWord = findSuggestionFor(userValue);
      if (suggestWord) {
        const stillFits = suggestWord.indexOf(userValueRef.current) === 0;
        if (stillFits) {
          setSuggestionPart(suggestWord.substr(userValueRef.current.length));

        } else {
          setSuggestionPart("");
        }
      } 
    } else {
      setSuggestionPart("")
    }
  }, [userValue]);

  useEffect(() => {
    inputRef.current.selectionStart = userValueRef.current.length;
    inputRef.current.selectionEnd =
      userValueRef.current.length + suggestionPart.length;
  }, [suggestionPart]);

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by keyword"
        aria-label="Search"
        id="input"
        ref={inputRef}
        onChange={(e) => handlerUserInputChange(e)}
        value={userValue + suggestionPart}
      />
      <button className="btn btn-danger" type="submit">
        Search
      </button>
    </form>
  );
}

export default HeaderForm;
