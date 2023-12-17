from pyramid.view import view_config


@view_config(route_name='home', renderer='templates/home.jinja2')
def home(request):
    return {}


@view_config(route_name='login', renderer='templates/login.jinja2')
def login(request):
    if request.method == 'POST':
        # Handle login logic here
        pass
    return {}


@view_config(route_name='register', renderer='templates/register.jinja2')
def register(request):
    if request.method == 'POST':
        # Handle registration logic here
        pass
    return {}