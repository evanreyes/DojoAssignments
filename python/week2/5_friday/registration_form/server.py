from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'Secreto'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
    name = request.form['name']
    loc = request.form['loc']
    lang = request.form['lang']
    com = request.form['com']
    if len(request.form['name']) < 1 or len(request.form['com']) > 120:
        if len(request.form['name']) < 1:
            flash("Please enter your name!")
            return render_template("index.html", name=name, loc=loc, lang=lang, com=com)
        elif len(request.form['com']) > 120:
            flash("Please limit comments to 120 characters!")
            return render_template("index.html", name=name, loc=loc, lang=lang, com=com)
    else:
        return render_template("users.html", name=name, loc=loc, lang=lang, com=com)



app.run(debug=True)
