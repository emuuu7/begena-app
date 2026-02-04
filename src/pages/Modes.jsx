import { useNavigate } from "react-router-dom";

export default function Modes() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>ቅኝት ይምረጡ</h2>

      <button onClick={() => navigate("/play/church")}>
        ሰላምታ(ባቲ)
      </button>

      <br /><br />

      <button onClick={() => navigate("/play/practice")}>
        ዋኔን(ትዝታ)
      </button>

      <br /><br />

      <button onClick={() => navigate("/play/experimental")}>
        ቸርነት(አንቺሆዬለኔ)
      </button>
    </div>
  );
}
