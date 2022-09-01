
from db import db_session
from models.user import User
class UserDAO():
    
    @staticmethod
    def get_user_by_id(user_id):
        print('user id - ' + str(user_id))
        return db_session.query(User).filter(User.id == user_id).one()
