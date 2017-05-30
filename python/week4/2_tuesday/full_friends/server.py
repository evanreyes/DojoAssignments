from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "AllMyFriends"
mysql = MySQLConnector(app,'full_friends')

@app.route('/', methods=['POST', 'GET'])
def index():
    query = 'SELECT * FROM friends'
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    if len(request.form['email']) < 1 or len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1:
        flash("Please fill out all fields!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
    else:
        flash("The email address you entered (" + request.form['email'] + ") is valid. Thank you!")
        query = "INSERT INTO friends (first_name, last_name, email, created_at) VALUES (:first_name, :last_name, :email, NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
            }
        mysql.query_db(query, data)
        query = 'SELECT * FROM friends'
        friends = mysql.query_db(query)
        return redirect('/')
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['POST', 'GET'])
def edit(id):
    query = 'SELECT * FROM friends WHERE id = :id'
    data = {
            'id': request.form['edit'],
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email']
            }
    friends = mysql.query_db(query, data)
    id = request.form['edit']
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    return render_template("edit.html", friends=friends, id=id, first_name=first_name, last_name=last_name, email=email)

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
    data = {
            'id': request.form['id'],
            'first_name': request.form['first_name'],
            'last_name':  request.form['last_name'],
            'email': request.form['email'],
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': request.form['delete']}
    mysql.query_db(query, data)
    flash("Email address successfully deleted")
    return redirect('/')

app.run(debug=True)
