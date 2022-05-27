function HeaderButton({ dataButton }) {
  return (
    <a className="nav-link" href={dataButton.url}>
      {dataButton.text}
    </a>
  );
}

export default HeaderButton;
