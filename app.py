from flask import Flask, render_template, request
from ai_model import generate_response
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_url_path='/static', static_folder='static')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# ------Loading the HTML template-------
@app.route('/')
def index():
    return render_template('nxt-gen.html')

#----------Response API----------
@app.route('/generate_text', methods=['GET'])
@cross_origin()
def generate():
    input = request.args.get('input', '')
    model = request.args.get('model', 'gpt2')
    return generate_response(input, model)

# -----------Run the app----------
if __name__ == '__main__':
    app.run()