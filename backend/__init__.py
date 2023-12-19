from pyramid.config import Configurator
from wsgicors import CORS


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        # config.include('pyramid_jinja2')
        config.include('.routes')
        config.include('.models')
        config.scan()
        app = config.make_wsgi_app()
    return CORS(app, headers='*', methods='*', maxage='180', origin='*')
