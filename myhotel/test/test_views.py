from pyramid import testing
import pytest


@pytest.fixture
def dummy_request():
    return testing.DummyRequest()


def test_home_view(dummy_request):
    from ..views import home
    response = home(dummy_request)
    assert 'Home' in response


def test_login_view(dummy_request):
    from ..views import login
    response = login(dummy_request)
    assert 'Login' in response


def test_register_view(dummy_request):
    from ..views import register
    response = register(dummy_request)
    assert 'Register' in response
