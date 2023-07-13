from keras.models import load_model 
model=load_model("neural_model.h5")
print(model.summary())