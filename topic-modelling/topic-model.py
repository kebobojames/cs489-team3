import os

# Regular modules for data science and visualization:
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


# Keras (2.2.4) and tensorflow (1.13).
import tensorflow as tf
import tensorflow_hub as hub

from tensorflow.keras.regularizers import l1, l2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import Dropout
from tensorflow.keras import backend
from tensorflow.keras import optimizers
import tensorflow.compat.v1 as tf

# sklearn and imblearn modules:
from sklearn.model_selection import cross_val_predict
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import StratifiedShuffleSplit
from imblearn.over_sampling import SMOTE
from sklearn.metrics import confusion_matrix

# For topic modelling
from bertopic import BERTopic

tf.disable_v2_behavior()

def polarization_score(pred_list, cls):
  if cls == 0 or cls == 3:
    return int(50 + 50 * pred_list[cls] - 12.5 * (1 - pred_list[cls]))
  else:
    return int(50 * pred_list[cls] - 12.5 * (1 - pred_list[cls]))

def make_pred(news_text, news_DNN_four, bert_topic, session, scaler, e_All_four):
  sim_matrix = session.run(embedded_text, feed_dict={text_input: [news_text]})
  combine = np.vstack([e_All_four, sim_matrix])
  sca = scaler.fit_transform(combine)[-1]
  sca = np.array([sca])
  # sca = sca.reshape(sca.shape[0], 1, sca.shape[1])
  pred = news_DNN_four.predict(sca)
  classes_y= np.argmax(pred,axis=1)

  # topic modelling addition
  topic_num = bert_topic.transform(news_text)[0][0]
  keywords = bert_topic.get_topic(topic_num)
  keywords_lst = [entry[0] for entry in keywords]

  if classes_y[0] == 0:
    return 'Left', polarization_score(pred[0], classes_y), keywords_lst
  elif  classes_y[0] == 1:
    return 'Left-center', polarization_score(pred[0], classes_y), keywords_lst
  elif  classes_y[0] == 2:
    return 'right-center', polarization_score(pred[0], classes_y), keywords_lst
  else:
    return 'right', polarization_score(pred[0], classes_y), keywords_lst

if __name__ == "__main__":
    # Load text and dataset
    df = pd.read_csv("../datasets/articles3.csv")  # load dataset here
    small_df = df[30:40]  # in case only a small portion of a large dataset is needed

    e_All_four = np.load("../models/e_All_four_0_2.npy")

    # Load the encoder:
    g = tf.Graph()
    with g.as_default():
        text_input = tf.placeholder(dtype=tf.string, shape=[None])
        embed = hub.Module("https://tfhub.dev/google/universal-sentence-encoder-large/3")
        embedded_text = embed(text_input)
        init_op = tf.group([tf.global_variables_initializer(), tf.tables_initializer()])
    g.finalize()

    # Initialize session:
    session = tf.Session(graph=g)
    session.run(init_op)

    scaler = StandardScaler()

    bert_topic = BERTopic.load("../models/topic_model")  # loading the BERTopic for topic modelling
    news_DNN_four = tf.keras.models.load_model("../models/news_DNN_four")  # loading the news DNN for bias classification

    for i, row in small_df.iterrows():
        output = make_pred(row['content'], news_DNN_four, bert_topic, session, scaler, e_All_four)
        print(output)
