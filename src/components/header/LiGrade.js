function LiGrade({ data, onClick}) {
  
  return (
    <li>
      <a className="dropdown-item" onClick={() => onClick(data.grade)}>
        {data.grade}
      </a>
    </li>
  );
}

export default LiGrade;