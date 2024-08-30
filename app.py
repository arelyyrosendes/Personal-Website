from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

if __name__ == '__main__':
    app.run(debug=True)
