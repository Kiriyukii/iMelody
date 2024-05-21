const ffmpeg = require('fluent-ffmpeg')

// Đường dẫn tới tệp MP3 nguồn và tệp WAV đích
const inputFile = 'input.mp3'
const outputFile = 'output.wav'

// Chuyển đổi MP3 thành WAV
ffmpeg(inputFile)
	.toFormat('wav')
	.save(outputFile)
	.on('end', () => {
		console.log(`Đã chuyển đổi ${inputFile} thành ${outputFile}`)
	})
	.on('error', (err: { message: any }) => {
		console.error(`Lỗi: ${err.message}`)
	})
