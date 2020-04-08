from flask import Flask, redirect, render_template, request, session, url_for, g, flash, abort
import sqlite3
DATABASE = "database.db"
app = Flask(__name__)

# INDEX
@app.route('/')
def initial():
	return redirect(url_for('index'))

# render index page
@app.route('/index')
def index():
	return render_template('index.html')

# render my car page
@app.route('/car')
def car():
	return render_template('car.html')

# render touge page
@app.route('/touge')
def touge():
	return render_template('touge.html')

# render track page
@app.route('/track')
def track():
	return render_template('track.html')

# Debug on
if (__name__ == "__main__"):
	# Creates a secret key.
	app.secret_key = b"secretkey"
	app.run(debug = True)
