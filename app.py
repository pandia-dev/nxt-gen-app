from flask import Flask, render_template
from gpt2 import generate_response
app = Flask(__name__, static_url_path='/static', static_folder='static')

# Loading the HTML template
@app.route('/')
def index():
    return render_template('nxt-gen.html')
#-------------------------------------------------------------


#-----------------------------------------------------------------
# Creating a GET API
@app.route('/generate_text', methods=['GET'])
def generate_text():
    data = {
        'message': 'Hello, this is a GET API example!'
    }
    return data

# Consuming the GET API
# response = requests.get('http://127.0.0.1:5000/get-messegae', None)
# result = response
# print(result)

# --------------Run the app-------------
if __name__ == '__main__':
    # generatedResult = generate_response()
    # print(generatedResult)
    app.run()


