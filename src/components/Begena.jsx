import { useEffect } from "react";
const strings = [
 {id: 2, sound: "/sounds/kuter2.mp3", left: "44.5%", angle: -2 },
 {id: 3, sound: "/sounds/kuter3.mp3", left: "49%", angle: -0.5 },
 {id: 1, sound: "/sounds/kuter1.mp3", left: "37%",angle: -3.3 },
 {id: 5, sound: "/sounds/kuter5.mp3", left: "57.5%", angle:0.8 },
 {id: 4, sound: "/sounds/kuter4.mp3", left: "54%", angle:0.7  }
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
  setTimeout(() => el.classList.remove("vibrate"), 10);
}

export default function Begena() {
    useEffect(() => {
        const keyMap = {
            a: 5,
            s: 4,
            d: 3,
            f: 2,
            v: 1,
        };
        function handleKeyDown(e){
            const stringId = keyMap[e.key];
            if(!stringId) return;
            const string = strings.find((s) => s.id === stringId);
            if(!string) return;
            playSound(string.sound);
            vibratestring(stringId);
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    return (
        <div
          style={{
    position: "relative",
    width: "100%",
    maxWidth: "420px",
    aspectRatio: "3 / 5",   // adjust to match your image
    margin: "0 auto",
  }}>
            <h2 style={{ textAlign: "center"}}>Play the Begena</h2>
            <img
                src="/public/begenaimg.jpg"
                alt="Begena"
                style={{width: "100%",
                          height: "100%",
      objectFit: "contain",
      display: "block",
                }}
                />
            {/* use strings array to create buttons for each string 
            {strings.map((string) => (
                <button
                    key={string.id}
                    onClick={() => playSound(string.sound)}
                    style={{display: "block", margin: "8px auto"}} >
                    String {string.id}
                </button>
            ))} */}
                  {/* Strings overlay */}
      {strings.map((string) => (
        <div 
            id ={`string-${string.id}`}
          key={string.id}
          onClick={() =>{
            playSound(string.sound);
            vibrateString(string.id);
          } }
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            position:" absolute",
            top: "18%",
            left: string.left,
            width: "3px",
            height: "76%",
           transform: `rotate(${string.angle}deg)`,
            transformOrigin: "top center",
            cursor: "pointer",
 
          }}
        />
      ))}


        </div>
    );
}
