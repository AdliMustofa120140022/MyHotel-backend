from pyramid.config import Configurator
from pyramid.session import SignedCookieSessionFactory
from sqlalchemy import engine_from_config
from .models import (
    DBSession,
    Base,
)


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    # Configuration setup
    session_factory = SignedCookieSessionFactory('my_secret_key')
    config = Configurator(settings=settings, session_factory=session_factory)
    config.include('pyramid_jinja2')

    # Database setup
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    # Routes setup
    config.add_route('home', '/')
    config.add_route('login', '/login')
    config.add_route('register', '/register')

    # Views setup
    config.scan('.views')

    return config.make_wsgi_app()