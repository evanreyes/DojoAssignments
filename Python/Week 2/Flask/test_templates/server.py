from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html", phrase="Hello", times=10)


@app.route('/internet')
def internet():
  return render_template("internet.html")

app.run(debug=True)
