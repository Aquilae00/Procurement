from sqlalchemy import create_engine, Column, Integer, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

db_url = 'localhost:3306'
db_name = 'finalproject'
db_user = 'root'
db_password = 'root'
engine = create_engine(f'mysql://{db_user}:{db_password}@{db_url}/{db_name}')
Session = sessionmaker(bind=engine)

Base = declarative_base()

machine_makes_product = Table('machine_makes_product', Base.metadata,
    Column('machine_id', Integer, ForeignKey('machine.id')),
    Column('product_id', Integer, ForeignKey('product.id'))
)

class Entity:
    id = Column(Integer, primary_key=True)
