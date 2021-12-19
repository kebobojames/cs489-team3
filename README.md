# cs489-team-3
CS489 KAIST 2021 Fall Project Team 3

We present Nahcho, a news/social media site that aims to combat echo chambers by providing multiple sources of news for current events.

Articles are grouped by topic and shown in descending order of polarization score, which is learned through NLP models trained on a dataset of news sources and their political leanings. Users must upvote at least one article to gain the right to comment in the comments section, hopefully incentivizing users to actually read through different sources. The comments section allows for users to discuss the topic with other users who may have differing opinions on the topic. Easier quoting functionality was also implemented for the comments; highlighting from an article while commenting automatically copies the highlighted section into the comment. Such quotes are also highlighted in yellow to other users, and can be clicked to show the snippet from the original article that it is quoted from. This allows users to easily cite different sources for their comments and have context on what other users based their comments on. 

Our website was developed with React, Axios, the Django REST framework and PostgreSQL.
Our NLP models for topic modelling and polarization score calculations were trained with Tensorflow.

We also provide links to some trained models: https://drive.google.com/drive/folders/1So8XyH1Kl6-56wF_RM3tzdYjAqKszcbM?usp=sharing