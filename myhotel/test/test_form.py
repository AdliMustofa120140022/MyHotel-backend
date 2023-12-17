import colander
import deform
import pytest
from ..forms import LoginForm, RegisterForm


@pytest.fixture
def csrf_request():
    request = testing.DummyRequest()
    request.session.get_csrf_token = lambda: 'dummy_csrf_token'
    return request


def test_login_form(csrf_request):
    form = LoginForm().bind(request=csrf_request)
    form['username'].validate('testuser')
    form['password'].validate('password')
    assert form.validate()


def test_register_form(csrf_request):
    form = RegisterForm().bind(request=csrf_request)
    form['username'].validate('newuser')
    form['password'].validate('newpassword')
    form['confirm_password'].validate('newpassword')
    assert form.validate()


def test_register_form_password_mismatch(csrf_request):
    form = RegisterForm().bind(request=csrf_request)
    form['username'].validate('newuser')
    form['password'].validate('newpassword')
    form['confirm_password'].validate('mismatchedpassword')
    assert not form.validate()
