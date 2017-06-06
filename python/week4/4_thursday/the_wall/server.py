from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
import datetime

app = Flask(__name__)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
bcrypt = Bcrypt(app)
app.secret_key = "TheWall"
mysql = MySQLConnector(app,'the_wall')

@app.route('/')
def index():
    if 'logged_in' in session:
        session['logged_in'] = ''

        return redirect('/wall')

        session['first_name'] = ''
    if session['last_name'] == None:
        session['last_name'] = ''
    if session['email'] == None:
        session['email'] = ''
    if session['user_id'] == None:
        session['user_id'] = ''
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    # Validate name fields (that they contain data)
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    if len(first_name) < 1 or len(last_name) < 1:
        flash('Name cannot be blank.')
        return redirect('/')
    else:
        session['first_name'] = first_name
        session['last_name'] = last_name

    # Validate email
    email = request.form['email']
    if not EMAIL_REGEX.match(email) or len(email) < 5:
        flash('Please enter a valid email address.')
        return redirect('/')
    else:
        session['email'] = email

    # Validate pasword
    pw = request.form['pw']
    pwc = request.form['pw_confirm']
    if len(pw) < 6:
        flash('Password must be at least 6 characters.')
        return redirect('/')
    if pw != pwc:
        flash('Passwords do not match.')
        return redirect('/')

    # Validate that user is not already registered
    check_email = mysql.query_db("SELECT email FROM the_wall.users WHERE email = :email", {'email': email})
    if check_email == []:
        # If list with like emails is empty, create the user
        success_message = "Thank you for registering, " + session['first_name'] + " " + session['last_name'] + "! You signed up with the following email address: " + session['email'] + "."
        pw_hash = bcrypt.generate_password_hash(request.form['pw'])
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': pw_hash,
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
            }
        mysql.query_db(query, data)
        return render_template('success.html', register=success_message)
    else:
        flash('A user with that email address already exists.')
        return redirect('/')


@app.route('/login', methods=['POST', 'GET'])
def login():
    email = request.form['email_login']
    pw = request.form['password_login']
    if len(email) < 1 or len(pw) < 1:
        flash("Email and password cannot be blank.")
        return redirect('/')
    else:
        query = "SELECT * FROM the_wall.users WHERE email = :email LIMIT 1"
        data = {'email': email}
        user = mysql.query_db(query, data)
        print user
        if bcrypt.check_password_hash(user[0]['password'], pw):
            session['first_name'] = user[0]['first_name']
            session['last_name'] = user[0]['last_name']
            session['user_id'] = user[0]['id']
            session['logged_in'] = True
            return redirect('/wall')
        else:
            flash("Email address or password is incorrect.")
            return redirect('/')

@app.route('/wall')
def getContent():
    query_messages = "SELECT messages.id, messages.message, DATE_FORMAT(messages.created_at, '%b %e, %Y') AS date, CONCAT(users.first_name, ' ', users.last_name) AS name FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC"
    messages = mysql.query_db(query_messages)
    query_comments = "SELECT comments.message_id, comments.id, comments.comment, DATE_FORMAT(comments.created_at, '%b %e, %Y') AS date, CONCAT(users.first_name, ' ', users.last_name) AS name FROM comments JOIN messages ON messages.id = comments.message_id JOIN users ON comments.user_id = users.id"
    comments = mysql.query_db(query_comments)
    return render_template("wall.html", messages=messages, comments=comments)

@app.route('/post', methods=['POST'])
def post():
    if len(request.form['wall_post']) < 1:
        flash('Messages cannot be blank.')
        return redirect('/wall')
    else:
        message_query = "INSERT INTO messages (message, created_at, updated_at, user_id) VALUES (:message, NOW(), NOW(), :user_id)"
        message_data = {
                'message': request.form['wall_post'],
                'user_id': session['user_id']
        }
        mysql.query_db(message_query, message_data)
        return redirect('/wall')

@app.route('/post_comment', methods=['POST'])
def postComment():
    if len(request.form['comment']) < 1:
        flash('Comments cannot be blank.')
        return redirect('/wall')
    else:
        query = "INSERT INTO comments (message_id, comment, created_at, updated_at, user_id) VALUES (:message_id, :comment, NOW(), NOW(), :user_id)"
        data = {
                'message_id': request.form['m_id'],
                'comment': request.form['comment'],
                'user_id': session['user_id']
        }
        mysql.query_db(query, data)
        return redirect('/wall')

@app.route('/delete_comment', methods=['POST'])
def deleteComment():
    if session['user_id'] == request.form['u_id']:
        query = "DELETE FROM comments WHERE comments.user_id = users.user_id"
        data = {
                'message_id': request.form['m_id'],
                'comment': request.form['comment'],
                'user_id': session['user_id']
        }
        mysql.query_db(query, data)
        return redirect('/wall')
    else:
        return redirect('/wall')

@app.route('/logout', methods=['POST', 'GET'])
def logout():
    session['first_name'] = ''
    session['last_name'] = ''
    session['email'] = ''
    session['password'] = ''
    session['confirm_password'] = ''
    session['user_id'] = ''
    session['logged_in'] = False
    return redirect('/')

app.run(debug=True)
