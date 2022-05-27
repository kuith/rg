import LiGrade from "./LiGrade";

function DropGrades({ drop }) {
  
  const liGrades = drop.grades.map(item => (
    <LiGrade data={item} key={ item.grade}/>
  ));
  
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href={drop.url}
        id="dropdown01"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {drop.title}
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdown01">
        {liGrades}
      </ul>
    </li>
  );
}

export default DropGrades;
