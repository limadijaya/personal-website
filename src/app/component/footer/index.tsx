export default function Footer() {
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "75px",
                padding: "10px",
                width: "100%",
        }}
        >
            <div>Logo</div>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>

        </div>
    );
}