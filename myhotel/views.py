from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound
from .forms import LoginForm, RegisterForm
from .models import DBSession, User


@view_config(route_name='login', renderer='templates/login.jinja2')
def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.validate():
            # Retrieve user from the database
            username = form.data['username']
            password = form.data['password']
            user = DBSession.query(User).filter_by(username=username, password=password).first()

            if user:
                # Log the user in (you may want to use a proper authentication library)
                # For simplicity, we just redirect to the home page
                return HTTPFound(location='/')
    else:
        form = LoginForm()
    return {'form': form}


@view_config(route_name='register', renderer='templates/register.jinja2')
def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.validate():
            # Create a new user in the database
            username = form.data['username']
            password = form.data['password']

            new_user = User(username=username, password=password)
            DBSession.add(new_user)
            # Commit the transaction
            DBSession.commit()

            # For simplicity, redirect to the login page after registration
            return HTTPFound(location='/login')
    else:
        form = RegisterForm()
    return {'form': form}