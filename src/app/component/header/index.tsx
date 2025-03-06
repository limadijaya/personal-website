// Successful Reference
// import Navbar from "../../component/navbar";

import Link from "next/link";

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
            
            <Link href={"/about"}>
                About Me |
            </Link>
            <Link href={"/skills"}>
                Skills |
            </Link>
            <Link href={"/portfolio"}>
                Portfolio |
            </Link>
            <Link href={"/experience"}>
                Experience | 
            </Link>
            <Link href={"/testimonial"}>
                Testimonial |
            </Link>
            <Link href={"/contact"}>
                Contact |
            </Link>
            {/* <a href="../../../pages/about"> About Me </a> */}
            {/* | Skills | Portfolio | Experience | Testimonial | Contact */}
            </div>

        </div>
    );
}