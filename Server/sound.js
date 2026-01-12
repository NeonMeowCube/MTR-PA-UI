
// Mapping list: ID → file path
const soundList = {
    "01": "./Media/sound/Hold_Handrail.wav",
    "02": "./Media/sound/door_left.mp3",
    "03": "./Media/sound/door_right.mp3",
    "04": "./Media/sound/Move_Inside.mp3",
    "05": "./Media/sound/No_Eating.wav",
    // Add more sound mappings as needed
};

function playSound(id) {
    // Find the file path from the list
    const filePath = soundList[id];

    if (!filePath) {
    console.error("No sound file found for ID:", id);
    return;
    }

    // Create audio object and play
    const audio = new Audio(filePath);
    audio.play().catch(err => {
    console.error("Error playing sound:", err);
    });
}
