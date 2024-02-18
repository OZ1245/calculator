export function useAudio () {
	const playAudio = async (name: string) => {
		const audioContext = new AudioContext

		const source = audioContext.createBufferSource();

		const audioBuffer = await fetch(
			`audio/${name}.mp3`,
			{
				headers: {
					"Content-Type": "arraybuffer",
				},
			}
		)
			.then(res => res.arrayBuffer())
			.then(ArrayBuffer => audioContext.decodeAudioData(ArrayBuffer));

		source.buffer = audioBuffer;
		source.connect(audioContext.destination);
		source.start();
	}

	return {
		playAudio
	}
}