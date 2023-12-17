# my_pyramid/forms.py
import colander
import deform
from deform.widget import TextInputWidget, PasswordWidget


class LoginForm(colander.MappingSchema):
    username = colander.SchemaNode(
        colander.String(),
        title='Username',
        widget=TextInputWidget(size=20),
    )
    password = colander.SchemaNode(
        colander.String(),
        title='Password',
        widget=PasswordWidget(size=20),
    )


class RegisterForm(colander.MappingSchema):
    username = colander.SchemaNode(
        colander.String(),
        title='Username',
        widget=TextInputWidget(size=20),
    )
    password = colander.SchemaNode(
        colander.String(),
        title='Password',
        widget=PasswordWidget(size=20),
    )
    confirm_password = colander.SchemaNode(
        colander.String(),
        title='Confirm Password',
        widget=PasswordWidget(size=20),
        validator=colander.EqualTo('password', messages='Passwords do not match'),
    )


def includeme(config):
    # Add a deform renderer for easier integration with Pyramid
    config.include('pyramid_deform')
    # Add a Deform package
    config.include('pyramid_deform_resources')
