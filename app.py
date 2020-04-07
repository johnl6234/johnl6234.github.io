from flask import Flask, request, url_for, redirect, render_template
app = Flask(__name__)


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


if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
