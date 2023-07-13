from moviepy.editor import *

clip_01=VideoFileClip('machine-learning/rain1.mp4')
clip_02=VideoFileClip('machine-learning/rain2.mp4')
result_clip=concatenate_videoclips([clip_01,clip_02])
result_clip.write_videofile('combined.mp4')