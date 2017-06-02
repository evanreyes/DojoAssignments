from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
import datetime

app = Flask(__name__)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
bcrypt = Bcrypt(app)
app.secret_key = "LoginSecrets"
mysql = MySQLConnector(app,'login')

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    first_name_reg = request.form['first_name_reg']
    last_name_reg = request.form['last_name_reg']
    email_reg = request.form['email_reg']
    pw_reg = request.form['password_reg']
    pw_reg_con = request.form['password_confirm_reg']
    if len(first_name_reg) < 1 or len(last_name_reg) < 1 or len(email_reg) < 1:
        flash("Please fill out all fields!")
        return redirect('/')
    if not EMAIL_REGEX.match(email_reg) or len(email_reg) < 5:
        flash("Invalid email address!")
        return redirect('/')
    if len(pw_reg) < 6 or len(pw_reg_con) < 6:
        flash("Password must be at least 6 characters!")
        return redirect('/')
    if pw_reg != pw_reg_con:
        flash("Passwords do not match!")
        return redirect('/')
    else:
        success_message = "Thank you for registering, " + first_name_reg + " " + last_name_reg + "! You signed up with the following email address: " + email_reg + "."
        pw_hash = bcrypt.generate_password_hash(pw_reg)
        query = "INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (:first_name, :last_name, :email, :password, NOW())"
        data = {
            'first_name': first_name_reg,
            'last_name': last_name_reg,
            'email': email_reg,
            'password': pw_hash,
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
            }
        mysql.query_db(query, data)
        return render_template('success.html', register=success_message)
    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email_log = request.form['email_log']
    pw_log = request.form['password_log']
    query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    data = {'email': email_log}
    user = mysql.query_db(query, data)
    session['user'] = user[0]['id']
    if bcrypt.check_password_hash(user[0]['password'], pw_log):
        success_message = "Welcome back, " + email_log + "! You have successfully logged in."
        return render_template('success.html', register=success_message)
    else:
        flash("Email address or password is incorrect!")
        return redirect('/')

app.run(debug=True)
