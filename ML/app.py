from asyncio import tasks
import numpy as np
from flask import Flask, abort, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pickle


app = Flask(__name__)
cors = CORS(app)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='la réponse a votre requete est {}'.format(output))



# Flask API
@app.route('/api/tasks', methods=['POST'])
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def create_task():
    return jsonify({'request': request}), 200

books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]

@app.route('/api/books/all', methods=['GET'])
def books_all():
    return jsonify(books)


if __name__ == "__main__":
    app.run(debug=True)
