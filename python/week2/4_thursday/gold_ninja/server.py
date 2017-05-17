from flask import Flask, session, render_template, request, redirect
import random
import datetime
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


def initGold():
    if ('gold' and 'log') in session:
        return
    else:
        session['gold'] = 0
        session['log'] = ''
        return

@app.route('/')
def index():
    initGold()
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def processMoney():
    if request.form['value'] == 'farm':
        gold = int(random.randrange(5, 11))
        session['gold'] += gold
        session['log'] += 'You earned ' + str(gold) + ' gold from the farm on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S}'.format(datetime.datetime.now())) + '.<br>'
        print session.items()
        return redirect('/')
    elif request.form['value'] == 'cave':
        gold = int(random.randrange(5, 11))
        session['gold'] += gold
        session['log'] += 'You earned ' + str(gold) + ' gold from the cave on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S}'.format(datetime.datetime.now())) + '.<br>'
        return redirect("/")
    elif request.form['value'] == 'house':
        gold = int(random.randrange(2, 6))
        session['gold'] += gold
        session['log'] += 'You earned ' + str(gold) + ' gold from the house on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S}'.format(datetime.datetime.now())) + '.<br>'
        return redirect("/")
    elif request.form['value'] == 'casino':
        gold = int(random.randrange(-50, 51))
        session['gold'] += gold
        if gold > 0:
            session['log'] += 'You won ' + str(gold) + ' gold at the casino on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S}'.format(datetime.datetime.now())) + '.<br>'
        else:
            gold = abs(gold)
            session['log'] += 'You lost ' + str(gold) + ' gold at the casino on ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + ' at ' + ('{:%H:%M:%S}'.format(datetime.datetime.now())) + '.<br>'
        return redirect("/")
    elif request.form['value'] == 'reset':
        if ('gold' and 'log') in session:
            session.pop('gold')
            session.pop('log')
            return redirect("/")
        else:
            return redirect("/")


app.run(debug=True)
