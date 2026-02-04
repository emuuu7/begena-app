import { useEffect } from "react";
const strings = [
 { id: 0, left: "37%", angle: -3.3 },
 { id: 1, left: "44.5%", angle: -2 },
 { id: 2, left: "49%", angle: -0.5 },
 { id: 3, left: "54%", angle: 0.7 },
 { id: 4, left: "57.5%", angle: 0.8 }
];

function playSound(src) {
  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play();
}
function vibrateString(id) {
  const el = document.getElementById(`string-${id}`);
  if (!el) return;

  el.classList.add("vibrate");
  void el.offsetHeight;
  el.classList.add("vibrate");
}

export default function Begena({ mode }) {
    useEffect(() => {
        const keyMap = {
            a: 4,
            s: 3,
            d: 2,
            f: 1,
            v: 0,
        };
        function handleKeyDown(e){
            const stringId = keyMap[e.key];
            if(stringId === undefined) return;
           playSound(mode.sounds[stringId]);
           vibrateString(stringId);

        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [mode]);
    return (
        <div
          style={{
    position: "relative",
    width: "100%",
    maxWidth: "420px",
    aspectRatio: "3 / 5",   
    margin: "0 auto",
  }}>
            <h4>key board manual </h4>
            <p> <b>a:5, s:4, d:3, f:2, v:1</b></p>
            <img
                src="/begenaimg.jpg"
                alt="Begena"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                />
      {strings.map((string) => (
        <div 
            id ={`string-${string.id}`}
          key={string.id}
          onClick={() =>{
            playSound(mode.sounds[string.id]);
            vibrateString(string.id);
          } }
          style={{
            
            position:" absolute",
            top: "18%",
            left: string.left,
            width: "3px",
            height: "76%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
           transform: `rotate(${string.angle}deg)`,
            transformOrigin: "top center",
            cursor: "pointer",
            "--angle": `${string.angle}deg`,
          }}
        />
      ))}


        </div>
    );
}
