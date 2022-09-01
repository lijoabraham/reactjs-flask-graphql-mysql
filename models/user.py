from sqlalchemy import text
from sqlalchemy.sql.schema import Column
from sqlalchemy.types import Integer,String,DateTime, Text
from models.base import Base
from db import db_session

class User(Base):
    __tablename__ = 'user_details'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    address = Column(String)
    phone = Column(String)
    time_added = Column(DateTime, server_default=text("CURRENT_TIMESTAMP"))
    time_modified = Column(DateTime, server_default=text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))