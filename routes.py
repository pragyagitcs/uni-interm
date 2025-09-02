from flask import Flask, request, jsonify
from models import db, BlogPost

app = Flask(__name__)

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = BlogPost.query.all()
    return jsonify([post.to_dict() for post in posts])

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.json
    new_post = BlogPost(title=data['title'], content=data['content'])
    db.session.add(new_post)
    db.session.commit()
    return jsonify(new_post.to_dict()), 201