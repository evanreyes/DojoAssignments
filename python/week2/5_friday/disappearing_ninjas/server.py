from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'Secrets'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninja')
def tmnt():
    return render_template("tmnt.html")

@app.route('/ninja/<color>')
def ninja(color):
    if color == "blue":
        return render_template("leonardo.html", color="leonardo")
    elif color == "orange":
        return render_template("michelangelo.html", color="michelangelo")
    elif color == "red":
        return render_template("raphael.html", color="raphael")
    elif color == "purple":
        return render_template("donatello.html", color="donatello")
    else:
        return render_template("april.html", color="notapril")

app.run(debug=True)
