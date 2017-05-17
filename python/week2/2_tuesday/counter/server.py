from flask import Flask, session, render_template, request, redirect
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

def pageViews():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 1

@app.route('/')
def index():
    pageViews()
    return render_template("index.html")

@app.route('/ninja', methods=['POST'])
def ninja():
    session['counter'] +=2
    return render_template("index.html")

@app.route('/hacker', methods=['POST'])
def hacker():
    session['counter'] = 1
    return render_template("index.html")

app.run(debug=True)
