from sqlalchemy import create_engine
from sqlalchemy.engine import url
from sqlalchemy.orm import (scoped_session, sessionmaker)

connection_url = url.URL(
            drivername='mysql+mysqlconnector',
            username='root',
            password='root',
            host='localhost',
            port='3306',
            database='users')

engine = create_engine(connection_url, convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))