const strings = [
 {id: 2, sound: "/sounds/kuter2.mp3"},
 {id: 3, sound: "/sounds/kuter3.mp3"},
 {id: 1, sound: "/sounds/kuter1.mp3"},
 {id: 5, sound: "/sounds/kuter5.mp3"},
 {id: 4, sound: "/sounds/kuter4.mp3"}
];
function playSound(src) {
  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play();
}
export default function Begena() {
    return (
        <div className="begena-container">
            <h2>Play the Begena</h2>

            {strings.map((string) => (
                <button
                    key={string.id}
                    onClick={() => playSound(string.sound)}
                    style={{display: "block", margin: "8px auto"}} >
                    String {string.id}
                </button>
            ))}
        </div>
    );
}
