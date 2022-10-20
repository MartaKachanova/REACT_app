import "./List.css";

function List({ img, name, second_name, homeworks, points }) {
  const homework_number = 35;
  const average_point = points / homework_number;
  const sorting = {
    40: "s",
    60: "g",
    90: "vg",
    100: "ex",
  };

  const mark = (stage) => {
    for (let key in sorting) {
      if (key >= stage) {
        return sorting[key];
      }
    }
  };

  return (
    <div className="wrap_user_list">
      <div className="user_list">
        <img className="user_photo" alt="" src={img}></img>
        <div className="user_name">
          <div className="name">{name}</div>
          <div className="second_name">{second_name}</div>
        </div>
        <div className="user_result">
          <div className="homeworks">{homeworks}</div>
          <div className="points">{points}</div>
        </div>
      </div>

      <div className="mark">
        <span>{mark(average_point)}</span>
      </div>
    </div>
  );
}

export default List;
