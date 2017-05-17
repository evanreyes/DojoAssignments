from flask import Flask, session, render_template, request, redirect
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


def initGold():
    if 'gold' in session:
        return
    else:
        session['gold'] = 0
        return

@app.route('/')
def index():
    print session.items()
    initGold()
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def processMoney():
    log = []
    if request.form['value'] == 'farm':
        result = ''
        gold = int(random.randrange(10, 21))
        session['gold'] += gold
        result = 'You got ' + str(gold) + ' gold from the ' + str(request.form['value']) + '.'
        log.append(result)
        print log
        print session.items()
        return redirect('/')
    elif request.form['value'] == 'cave':
        session['log'] = ''
        gold = int(random.randrange(5, 11))
        session['gold'] += gold
        session['log'] += 'You got ' + str(gold) + ' gold from the ' + str(request.form['value']) + '.'
        return redirect("/")
    elif request.form['value'] == 'house':
        session['log'] = ''
        gold = int(random.randrange(2, 6))
        session['gold'] += gold
        session['log'] += 'You got ' + str(gold) + ' gold from the ' + str(request.form['value']) + '.'
        return redirect("/")
    elif request.form['value'] == 'casino':
        session['log'] = ''
        gold = int(random.randrange(-50, 51))
        session['gold'] += gold
        session['log'] += 'You got ' + str(gold) + ' gold from the ' + str(request.form['value']) + '.'
        return redirect("/")
    elif request.form['value'] == 'reset':
        if ('gold' and 'log') in session:
            session.pop('gold')
            session.pop('log')
            return redirect("/")
        else:
            return redirect("/")


app.run(debug=True)
