from flask import Flask, session, render_template, request, redirect
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

def genWinningNumber():
    session['number'] = int(random.randrange(0, 101))

@app.route('/')
def index():
    genWinningNumber()
    return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guessNumber():
    guess = int(request.form['guess'])
    if guess < session['number']:
        print "Too low"
        return render_template("toolow.html")
    elif guess > session['number']:
        print "Too high"
        return render_template("toohigh.html")
    else:
        print "You win!"
        return render_template("youwin.html")

app.run(debug=True)
