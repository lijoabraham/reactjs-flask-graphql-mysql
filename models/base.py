from sqlalchemy.ext.declarative import declarative_base
from db import db_session

Base = declarative_base()
# We will need this for querying
Base.query = db_session.query_property()



