# flask_sqlalchemy/app.py
from flask import Flask, jsonify
from flask_graphql import GraphQLView
from db import db_session
from schema import schema
from api.user_api import all_users, get_user

app = Flask(__name__)
app.debug = True
app.config.from_object(__name__)

app.config.update(
    SESSION_COOKIE_NAME = 'graphql',
    SESSION_COOKIE_PATH = '/graphql/'
)

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True # for having the GraphiQL interface
    )
)

@app.route('/all-users/<int:limit>', methods = ['GET'])
def get_all_users(limit):
    return jsonify(all_users(limit))

@app.route('/get-user/<int:id>', methods = ['GET'])
def get_single_user(id):
    return jsonify(get_user(id))

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

if __name__ == '__main__':
    app.run()