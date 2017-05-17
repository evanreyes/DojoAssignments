from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
    name = request.form['name']
    loc = request.form['loc']
    lang = request.form['lang']
    com = request.form['com']
    return render_template("users.html", name=name, loc=loc, lang=lang, com=com)

app.run(debug=True)
