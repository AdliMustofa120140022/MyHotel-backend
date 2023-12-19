from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import SQLAlchemyError
import json
import jwt
import datetime

from .. import models


# def auth_jwt_verify(request):
#     '''verify jwt token'''
#     authorization_header = request.cookies.get('token')
#     if authorization_header:
#         decoded_user = jwt.decode(authorization_header, 'secret', algorithms=['HS256'])
#         with connection.cursor() as cursor:
#             sql = "SELECT refresh_token FROM tokens WHERE user_id=%s"
#             cursor.execute(sql, (decoded_user['sub'],))
#             result = cursor.fetchone()
#         if result:
#             return decoded_user
#         return None
#     return None

def auth_jwt_verify(request):
    try:
        authorization_header = request.cookies.get('token')
        if authorization_header:
            decoded_user = jwt.decode(authorization_header, 'secret', algorithms=['HS256'])
            query = request.dbsession.query(models.Token)
            get_token = query.filter(models.Token.user_id == decoded_user['sub']).first()
            if get_token:
                return decoded_user
            return None
    except SQLAlchemyError:
        return Response(db_err_msg, content_type='text/plain', status=500)
    
@view_config(route_name='login', renderer='json' ,request_method='POST')
def login(request):
    try:
        username = request.POST.get('username')
        password = request.POST.get('password')
        if not username or not password:
            return Response('Username or password is empty', content_type='text/plain', status=400)
        
        query = request.dbsession.query(models.User)
        get_user = query.filter(models.User.username == username).first()
        if not get_user:
            return Response('User not found', content_type='text/plain', status=401)
        
        if get_user.password != password:
            return Response('Wrong password', content_type='text/plain', status=401)
        
        payload = {
            'sub': get_user.id,
            'name': get_user.username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=100000)
        }
        encoded_token = jwt.encode(payload, 'secret', algorithm='HS256')
        
        # token_query = request.dbsession.query(models.Token)
        # new_token = models.Token(user_id=get_user.id, access_token=encoded_token)
        # token_query.add(new_token)
        # token_query.flush()
        
        return Response(f'data : {encoded_token}', content_type='json', status=200, charset='UTF-8')
        
    except SQLAlchemyError:
        return Response(db_err_msg, content_type='text/plain', status=500)

@view_config(route_name='home', renderer='json')
def home(request):
    try:
        query = request.dbsession.query(models.MyModel)
        one = query.all()
        api_data=[]
        for i in one:
            api_data.append({'id':i.id,'name':i.name,'value':i.value})
        return {'message': 'Hello, API World!', 'data': api_data}
    except SQLAlchemyError:
        return Response(db_err_msg, content_type='text/plain', status=500)

# Add new view for API
@view_config(route_name='api_data', renderer='json')
def api_data(request):
    data = {'key': 'value'}
    return Response(json.dumps(data), content_type='application/json', charset='UTF-8')


db_err_msg = """\
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to initialize your database tables with `alembic`.
    Check your README.txt for descriptions and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.

After you fix the problem, please restart the Pyramid application to
try it again.
"""
