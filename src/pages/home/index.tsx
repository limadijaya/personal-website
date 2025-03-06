import Img from "./components/img";
import Desc from "./components/desc";
import Author from "./components/author";
import "./home.style.css";


export default function HomeView() {
    return (
    <div className="card-container">
        <Img />
        <Desc />
        <Author />
  </div>
  );
}
