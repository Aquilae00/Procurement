from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from marshmallow import Schema, fields

from .entity import Entity, Base
from .product import ProductSchema

class Machine(Entity, Base):
    __tablename__ = 'machine'

    manufacturer_id = Column(Integer, ForeignKey('factory.id'))
    machine_name = Column(String(45))
    rpm = Column(Integer)

    products = relationship('Product', secondary='machine_makes_product')

    def __init__(self, machine_name, rpm):
        self.machine_name = machine_name
        self.rpm = rpm


class MachineSchema(Schema):
    id = fields.Number()
    manufacturer_id = fields.Number()
    machine_name = fields.Str()
    rpm = fields.Number()
    products = fields.Nested(ProductSchema, many=True)