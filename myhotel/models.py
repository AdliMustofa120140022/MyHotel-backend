from sqlalchemy import (
    Column,
    Integer,
    Text,
    create_engine,
)

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

DBSession = scoped_session(sessionmaker())
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(Text, unique=True)
    password = Column(Text)


def initialize_sql(engine):
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine
    Base.metadata.create_all(engine)


def includeme(config):
    # Set up the database engine and bind it to the Pyramid app
    settings = config.get_settings()
    engine = create_engine(settings['sqlalchemy.url'])
    initialize_sql(engine)
    # Make the `DBSession` and `User` model available for Pyramid views
    config.registry['dbsession_factory'] = DBSession
    config.add_request_method(lambda request: DBSession, 'dbsession', reify=True)
    config.add_request_method(lambda request: User, 'user', reify=True)
