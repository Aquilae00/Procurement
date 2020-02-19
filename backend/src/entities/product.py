from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from .entity import Entity, Base
from marshmallow import Schema, fields


class Product(Entity, Base):
    __tablename__ = 'product'

    name = Column(String(45))
    product_type = Column(String(45))

    machines = relationship('Machine', secondary='machine_makes_product')

    def __init__(self, name, product_type):
        self.name = name
        self.product_type = product_type


class ProductSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    product_type = fields.Str()
