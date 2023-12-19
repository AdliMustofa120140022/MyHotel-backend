from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    String,
    Date,
    Enum,
    ForeignKey,
    JSON,
    TIMESTAMP
)
from .meta import Base

class MyModel(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)

class Roles(Base):
    __tablename__ = 'roles'
    id = Column(Integer, primary_key=True)
    role_name = Column(Text)
    
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role = Column(Integer, ForeignKey('roles.id'), nullable=False)

class Token(Base):
    __tablename__ = 'tokens'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    refresh_token = Column(Text, nullable=False)
    access_token = Column(Text, nullable=False)

class Room(Base):
    __tablename__ = 'rooms'
    id = Column(Integer, primary_key=True)
    room_name = Column(String(255), unique=True, nullable=False)
    room_description = Column(Text, nullable=True)
    room_capacity = Column(Integer, nullable=True)
    room_address = Column(Text, nullable=True)
    room_city = Column(Text, nullable=True)
    room_longlat = Column(Text, nullable=True)
    room_price = Column(Integer, nullable=False)
    room_status = Column(Enum('available', 'unavailable'), nullable=False)
    
class Booking(Base):
    __tablename__ = 'bookings'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    room_id = Column(Integer, ForeignKey('rooms.id'), nullable=False)
    start_time = Column(Date, nullable=True)
    end_time = Column(Date, nullable=True)
    addons = Column(JSON, nullable=True)
    total_price = Column(Integer, nullable=False)
    
class Rating(Base):
    __tablename__ = 'ratings'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    room_id = Column(Integer, ForeignKey('rooms.id'), nullable=False)
    rate = Column(Integer, nullable=False)
    
class Addons(Base):
    __tablename__ = 'addons'
    id = Column(Integer, primary_key=True)
    addon_name = Column(String(255), nullable=False)
    addon_price = Column(Integer, nullable=False)
    
Index('my_index', MyModel.name, unique=True, mysql_length=255)
