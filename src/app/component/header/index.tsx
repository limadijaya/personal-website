// Successful Referenct
// import Navbar from "../../component/navbar";

export default function Header() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "75px",
                padding: "10px",
                width: "100%",
        }}
        >
            <div>Logo</div>
            <div className="text-black" >
                <a href="../../../pages/about">About Me </a>
                | Skills | Portfolio | Experience | Testimonial | Contact
            </div>

        </div>
    );
}