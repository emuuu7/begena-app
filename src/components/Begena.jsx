import { useEffect } from "react";
const strings = [
 {id: 2, sound: "/sounds/kuter2.mp3", left: "41%" },
 {id: 3, sound: "/sounds/kuter3.mp3", left: "47%" },
 {id: 1, sound: "/sounds/kuter1.mp3", left: "34%" },
 {id: 5, sound: "/sounds/kuter5.mp3", left: "57%" },
 {id: 4, sound: "/sounds/kuter4.mp3", left: "52%" }
];
function playSound(src) {
  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play();
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
        <div className="begena-container">
            <h2 style={{ textAlign: "center"}}>Play the Begena</h2>
            <img
                src="/public/begenaimg.jpg"
                alt="Begena"
                style={{width: "100%", display : "block"}}
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
          key={string.id}
          onClick={() => playSound(string.sound)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            position:" absolute",
            top: "0",
            left: string.left,
            width: "2%",
            height: "200%",
            cursor: "pointer",
          }}
        />
      ))}


        </div>
    );
}
