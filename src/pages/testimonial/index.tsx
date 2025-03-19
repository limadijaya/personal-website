// import Img from "./components/img";
// import Desc from "./components/desc";
// import Author from "./components/author";

import Link from "next/link";
import "../home/home.style.css";

export default function Testimonial() {
  return(
    <div className="card-container">
    Testimonial: <br/><br/>
      <Link href={"https://www.linkedin.com/in/limadijaya"}>
        LinkedIn 
      </Link>
  </div>
  );
}
