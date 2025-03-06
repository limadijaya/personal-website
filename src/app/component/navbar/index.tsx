export default function Navbar({ name, email }: { name: string, email: string }) {
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
            <div>Hello {name}, {email}</div>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>

        </div>
    );
}