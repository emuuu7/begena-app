import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      {/* Your intro text / image stays */}
      <h1>Welcome to the Begena App</h1>
      <p>Learn and play the traditional Ethiopian Begena.</p>
      <button onClick={() => navigate("/modes")}>
        ጀምር
      </button>
    </div>
  );
}
