import { useParams } from "react-router-dom";
import { MODES } from "../data/modes";
import Begena from "../components/Begena";

export default function Play() {
  const { modeId } = useParams();
  const mode = MODES[modeId];

  if (!mode) return <h2>Mode not found</h2>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{mode.name}</h2>
      <Begena mode={mode} />
    </div>
  );
}
