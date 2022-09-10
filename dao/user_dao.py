
from db import db_session
from models.user import User
class UserDAO():
    
    @staticmethod
    def get_user_by_id(user_id):
        return db_session.query(User).filter(User.id == user_id).one()
    
    @staticmethod
    def add_user(name, address, phone):
        try:
            user = User(
                name= name,
                address=address,
                phone=phone
            )

            db_session.add(user)
            db_session.commit()
            return (user, True,  "User added.")
        except Exception as err:
            return (None, False, f"Error updating user with ID - [{id}]!")
    
    @staticmethod
    def update_user(id, input):
        try:
            if not id:
                return (None, False,  "Id is mandatory.")
            u = db_session.query(User).filter(User.id == id).one()
            
            if input.name is not None:
                u.name = input.name
            if input.address is not None:
                u.address = input.address
            if input.phone is not None:
                u.phone = input.phone

            db_session.commit()
            return (u, True,  "User updated.")
        except Exception as err:
            return (None, False, f"Error updating user with ID - [{id}]!")
    
    @staticmethod
    def delete_user(id):
        try:
            u = User.query.filter_by(id=id).one()
            db_session.delete(u)
            db_session.commit()
            return (True, "User deleted.")
        except Exception as err:
            return (False, f"Error deleting user with ID - [{id}]!")
