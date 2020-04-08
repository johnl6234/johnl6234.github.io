from flask import Flask, request, url_for, redirect, render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    """Renders a sample page."""
    return render_template("index.html", title="DeadWormy Gaming")

@app.route('/gaming')
def gaming():
    return render_template("gaming.html", title="Games")

@app.route('/WIP')
def WIP():
    return render_template("WIP.html", title="WIP")

@app.route('/models')
def models():
    return render_template("models.html", title="models")