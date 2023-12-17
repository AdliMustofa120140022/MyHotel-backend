from ..models import User, initialize_sql
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


@pytest.fixture
def db_session():
    engine = create_engine('sqlite:///:memory:')
    initialize_sql(engine)
    Session = sessionmaker(bind=engine)
    return Session()


def test_user_model(db_session):
    # Create a user
    user = User(username='testuser', password='testpassword')
    db_session.add(user)
    db_session.commit()

    # Retrieve the user
    retrieved_user = db_session.query(User).filter_by(username='testuser').first()
    assert retrieved_user is not None
    assert retrieved_user.username == 'testuser'
    assert retrieved_user.password == 'testpassword'
