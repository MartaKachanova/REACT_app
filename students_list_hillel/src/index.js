import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Liststudent = [
  {
    name: "Микола",
    second_name: "Трафіменко",
    img: "https://lms.ithillel.ua/assets/images/userpic.jpg",
    homeworks: [
      96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Марина",
    second_name: "Лихолетова",
    img: "https://lms.ithillel.ua/uploads/images/2519ab52ca03245272dbdc09df2b8393.jpg?width=100&height=100",
    homeworks: [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Павло",
    second_name: "Черняков",
    img: "https://lms.ithillel.ua/uploads/images/2dba89e3a2dc15a5352922664836f0bc.jpg?width=100&height=100",
    homeworks: [
      91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Elena",
    second_name: "Voloshyna",
    img: "https://lms.ithillel.ua/uploads/images/55abf3e83c16808834dacda675354944.jpg?width=100&height=100",
    homeworks: [
      90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Olesia",
    second_name: "Vashchenko",
    img: "https://lms.ithillel.ua/uploads/images/9635ebfb0d299223a7ea53144177ad33.jpg?width=100&height=100",
    homeworks: [
      88, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Олександр",
    second_name: "Асаулов",
    img: "https://lms.ithillel.ua/uploads/images/307b36412d16b4b1e87f4b3d914ab360.jpg?width=100&height=100",
    homeworks: [
      79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Denys",
    second_name: "Kyslytsia",
    img: "https://lms.ithillel.ua/uploads/images/1b94cd2c8d068cebb1049c4c604f3ec0.jpg?width=100&height=100",
    homeworks: [
      57, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Yulia",
    second_name: "Zabuha",
    img: "https://lms.ithillel.ua/assets/images/userpic.jpg",
    homeworks: [
      76, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,
    ],
  },
  {
    name: "Ігор",
    second_name: "Денисюк",
    img: "https://lms.ithillel.ua/uploads/images/cabda5a69cf06a445cc729815bd4092b.jpg?width=100&height=100",
    homeworks: [
      75, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,
    ],
  },
  {
    name: "Марта",
    second_name: "Качанова",
    img: "https://lms.ithillel.ua/uploads/images/848d937faa82c7b685369bca502dc1eb.jpg?width=100&height=100",
    homeworks: [
      51, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,
    ],
  },
  {
    name: "Катерина",
    second_name: "Корицька",
    img: "https://lms.ithillel.ua/uploads/images/22d9ec49ec5b21a62607c89ff27b4366.jpg?width=100&height=100",
    homeworks: [
      55, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,
    ],
  },
  {
    name: "Дарина",
    second_name: "Онуфрієнко",
    img: "https://lms.ithillel.ua/uploads/images/2b58f1459ff4af6d652f01bbc2c72d56.jpg?width=100&height=100",
    homeworks: [
      47, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100,
    ],
  },
  {
    name: "Владимир",
    second_name: "Кудряшов",
    img: "https://lms.ithillel.ua/uploads/images/21db908e61e1385473f01f9485a5e721.jpg?width=100&height=100",
    homeworks: [
      42, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
  },
  {
    name: "Віталій",
    second_name: "Зіннер",
    img: "https://lms.ithillel.ua/uploads/images/dda10d419bf3f15b1a0d0cc866203cc4.jpeg?width=100&height=100",
    homeworks: [
      98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100,
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App Liststudent={Liststudent} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
