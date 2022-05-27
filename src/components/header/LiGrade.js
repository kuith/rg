function LiGrade({data}) {
  return (
    <li>
      <a className="dropdown-item" href={data.url}>
        {data.grade}
      </a>
    </li>
  );
}

export default LiGrade;
