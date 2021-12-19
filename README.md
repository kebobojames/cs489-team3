# cs489-team-3
CS489 KAIST 2021 Fall Project Team 3

We present Nahcho, a news/social media site that aims to combat echo chambers by providing multiple sources of news for current events.

Articles are grouped by topic and shown in descending order of polarization score, which is learned through NLP models trained on a dataset of news sources and their political leanings. Users must upvote at least one article to gain the right to comment in the comments section, hopefully incentivizing users to actually read through different sources. The comments section allows for users to discuss the topic with other users who may have differing opinions on the topic. Easier quoting functionality was also implemented for the comments; highlighting from an article while commenting automatically copies the highlighted section into the comment. Such quotes are also highlighted in yellow to other users, and can be clicked to show the snippet from the original article that it is quoted from. This allows users to easily cite different sources for their comments and have context on what other users based their comments on. 

Our website was developed with React, Axios, the Django REST framework and PostgreSQL.
Our NLP models for topic modelling and polarization score calculations were trained with PyTorch and TensorFlow.

The following link hosts our pretrained models and dataset, which are too large to be included in this repository: https://drive.google.com/drive/folders/1So8XyH1Kl6-56wF_RM3tzdYjAqKszcbM?usp=sharing

## Directory Structure
* **Political bias classifier** contains files related to bias classification and polarization score computation, originally written in Google Colab
* **topic-modelling** contains files related to topic modelling, originally written in Google Colab. Modifications will be needed for the Jupyter notebooks to be run outside Colab. Please also make sure to adjust the directory paths referenced in the files below before running them on your local environment.
    * combine_with_bias.ipynb contains the code used to generate a tuple of political orientation, polarization score, and list of keywords from a given text
    * news_topic_modelling.ipynb contains the code used to train the BERTopic and visualize the resulting topic clusters
    * sample_topic_modelling.ipynb contains the code used to assign a text to the nearest topic cluster and extract its keywords using the pretrained BERTopic model.
    * topic-model.py contains a Python script you can run to output a prediction tuple (originally developed in combine_with_bias.ipynb) in terminal. This function covers both the bias classification and topic modelling aspects. Please make sure that all requirements are already met and the dataset and model paths in the script are modified before running the program. Please refer to the link above to find large files not included in this repository.
    
## Requirements
Our implementation requires quite a lot of dependencies with a specific version range, so it is strongly recommendeded to use a virtual environment for development. The BERTopic model we use for topic modelling particularly contains plenty of functions that are sensitive to version updates. Most of the requirements will be installed with bertopic, which can be done using pypi with the following command:

```
pip install bertopic
```

However, some dependencies might not be in the correct version. We used Python 3.7.2 during development as Python 3.9 and above did not support the current library versions required. The following is a list of requirements that must be satisfied:

* tensorflow>2.5.0 (from bias classification)
* bertopic>=0.9.3 (from topic modelling)
* scikit-learn>=0.22.2.post1 (from bertopic)
* pandas>=1.1.5 (from bertopic)
* plotly<4.14.3,>=4.7.0 (from bertopic)
* pyyaml<6.0 (from bertopic)
* tqdm>=4.41.1 (from bertopic)
* sentence-transformers>=0.4.1 (from bertopic)
* hdbscan>=0.8.27 (from bertopic)
* numpy>=1.20.0 (from bertopic)
* umap-learn>=0.5.0 (from bertopic)
* six (from hdbscan>=0.8.27->bertopic)
* cython>=0.27 (from hdbscan>=0.8.27->bertopic)
* scipy>=1.0 (from hdbscan>=0.8.27->bertopic)
* joblib>=1.0 (from hdbscan>=0.8.27->bertopic)
* python-dateutil>=2.7.3 (from pandas>=1.1.5->bertopic)
* pytz>=2017.2 (from pandas>=1.1.5->bertopic)
* retrying>=1.3.3 (from plotly<4.14.3,>=4.7.0->bertopic)
* threadpoolctl>=2.0.0 (from scikit-learn>=0.22.2.post1->bertopic)
* tokenizers>=0.10.3 (from sentence-transformers>=0.4.1->bertopic)
* transformers<5.0.0,>=4.6.0 (from sentence-transformers>=0.4.1->bertopic)
* nltk(from sentence-transformers>=0.4.1->bertopic)
* torch>=1.6.0 (from sentence-transformers>=0.4.1->bertopic)
* sentencepiece (from sentence-transformers>=0.4.1->bertopic)
* huggingface-hub (from sentence-transformers>=0.4.1->bertopic)
* torchvision (from sentence-transformers>=0.4.1->bertopic)
* typing-extensions (from torch>=1.6.0->sentence-transformers>=0.4.1->bertopic)
* requests(from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* sacremoses (from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* importlib-metadata (from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* filelock (from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* packaging>=20.0 (from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* regex!=2019.12.17 (from transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* pyparsing!=3.0.5,>=2.0.2 (from packaging>=20.0->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic) (3.0.6)
* numba>=0.49 (from umap-learn>=0.5.0->bertopic)
* pynndescent>=0.5 (from umap-learn>=0.5.0->bertopic) (0.5.5)
* setuptools (from numba>=0.49->umap-learn>=0.5.0->bertopic) (57.4.0)
* llvmlite<0.35,>=0.34.0.dev0 (from numba>=0.49->umap-learn>=0.5.0->bertopic)
* zipp>=0.5(from importlib-metadata->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* hardet<4,>=3.0.2 (from requests->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* idna<3,>=2.5 (from requests->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 (from requests->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* certifi>=2017.4.17 (from requests->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* click (from sacremoses->transformers<5.0.0,>=4.6.0->sentence-transformers>=0.4.1->bertopic)
* pillow!=8.3.0,>=5.3.0 (from torchvision->sentence-transformers>=0.4.1->bertopic)