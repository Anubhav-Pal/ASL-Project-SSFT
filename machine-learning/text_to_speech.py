import gtts 
import playsound
text = input("Enter something here")
sound = gtts.gTTS(text,lang="en")
sound.save("Sounds_conversion.mp3")
playsound.playsound("Sounds_conversion.mp3")