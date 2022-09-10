# flask_sqlalchemy/app.py
from flask import Flask, jsonify, request
from flask_graphql import GraphQLView
import json
from db import db_session
from schema import schema
from api.user_api import all_users, get_user, add_user, update_user, delete_user

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

@app.route('/add-user', methods=['PUT'])
def create_record():
    record = json.loads(request.data)
    res = add_user(record)
    return jsonify(res)

@app.route('/update-user', methods=['PUT'])
def update_record():
    record = json.loads(request.data)
    res = update_user(record)
    return jsonify(res)

@app.route('/delete-user/<int:id>', methods = ['DELETE'])
def delete_record(id):
    res = delete_user(id)
    return jsonify(res)

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

if __name__ == '__main__':
    app.run()