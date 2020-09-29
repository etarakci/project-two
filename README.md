# 

In light of the recent international criticism of United States police departments, we decided to investigate the trends of who is most likely to be killed by the police and where. The term "police killings" will be used to refer to those killed by the police. 

## Coding Approach

We used pandas via jupyter notebook to export the data from a [Kaggle database](https://www.kaggle.com/jpmiller/police-violence-in-the-us).
After cleaning the data we stored it in a MongoDB database. This database was then accessed using Flask, which was also used to host the data visualization website. The data was visualized on the website using a combination of javascript libraries.

* Import data: Jupyter Notebook & Pandas
* Export cleaned data: MongoDB
* Create API and Host Web Page: Flask (used to extract data from MongoDB)
* Visualize Data: JavaScript

## Data Extraction and Cleaning

The data extracted from the kaggle databse was cleaned and uploaded to a mongodb database [here](https://github.com/etarakci/project-two/blob/master/data_to_JSON.ipynb) with additional data extracted and cleaned [here.](https://github.com/etarakci/project-two/blob/master/data_extract.ipynb)

Several steps were taken to clean the data with Pandas inside the jupyter notebook. The main methods were:
* Renaming the columns to make them easier to query the data.
* Removing data that was not needed from each dataset.
* Updating the data types where needed.
* Removing erroroneous data (i.e. age with string values).
* Replacing null values with 0 for numbers, and 'Unknown' for string values.
* Removing _id object column caused by MongoDB in our Flask app.

## Visualizations

You can go to [this folder](https://github.com/etarakci/project-two/tree/master/static/js) to browse through our interactive visualization code.

Tools used include:
* Leaflet
* D3
* Plotly
* Axios
* Jquery
* Jupyter

## Flask and Web Deployment

* [Eplore our html templates](https://github.com/etarakci/project-two/tree/master/templates)
* [Explore our flask app deployment](https://github.com/etarakci/project-two/blob/master/app.py)




