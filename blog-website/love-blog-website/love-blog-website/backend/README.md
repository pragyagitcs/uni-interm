# Backend for Love Blog Website

## Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Run the application: `python app.py`

## Usage
- The backend API is available at `http://localhost:5000`.
- Use the `/posts` endpoint to interact with blog posts:
  - **GET** `/posts`: Retrieve all blog posts.
  - **POST** `/posts`: Create a new blog post by sending a JSON body with `title` and `content`.