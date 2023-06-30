import moviepy.editor

video=moviepy.editor.VideoFileClip('machine-learning/rain1.mp4')
audio = video.audio
audio.write_audiofile('rain1_audio.mp3')