function HeaderButton({ dataButton }) {
  return (
    <button type="button" className="btn btn-outline-danger btn-lg px-3 py-1">
      {dataButton.text}
    </button>
  );
}

export default HeaderButton;
