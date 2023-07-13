import moviepy.editor

video=moviepy.editor.VideoFileClip('machine-learning/test.mp4')
audio = video.audio
audio.write_audiofile('answer.mp3')