import "./App.css";
import List from "./components/List";

function App(props) {
  const list = props.Liststudent;
  const listUsers = list.map((item) => {
    return (
      <List
        img={item.img}
        name={item.name}
        second_name={item.second_name}
        homeworks={item.homeworks.length}
        points={item.homeworks.reduce((sum, element) => sum + element, 0)}
      />
    );
  });

  const sortList = listUsers.sort((a, b) => b.props.points - a.props.points);

  return (
    <div className="wrapper">
      <div className="subtitle_students_list">
        <div className="text-subtitle text-subtitle-left">Студент</div>
        <div className="text-subtitle text-subtitle-right">Домашки/Бали</div>
      </div>
      <div className="block_students_list">{sortList}</div>
    </div>
  );
}

export default App;
