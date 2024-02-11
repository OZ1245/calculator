export function useAudio () {
    const getAudio = async () => {
        const audioContext = new AudioContext
        const result = await fetch(
            '/audio/taga3.mp3',
            {
                headers: {
                    "Content-Type": "arraybuffer",
              },
            }
        )
        console.log('result:', result);
        
    }

    return {
        getAudio
    }
}