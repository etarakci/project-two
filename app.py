from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.police

police_db = db["police"]
contracts_db = db["contracts"]
equipment_db = db["equipment"]



@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    police_killings = list(police_db.find())
    print(police_killings)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index.html", police_killings=police_killings)


if __name__ == "__main__":
    app.run(debug=True)
