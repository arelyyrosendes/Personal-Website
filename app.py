from flask import Flask, render_template

app = Flask(__name__)

# Route to serve images from a custom directory
@app.route('/assets/<path:filename>')
def custom_static(filename):
    return send_from_directory('assets/images', filename)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

if __name__ == '__main__':
    app.run(debug=True)
