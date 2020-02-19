from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from marshmallow import Schema, fields

from .entity import Entity, Base
from .machine import MachineSchema
from .address import AddressSchema


class Factory(Entity, Base):
    __tablename__ = 'factory'

    name = Column(String(45))
    manufacturer_id = Column(Integer, ForeignKey('manufacturer.id'))
    address_id = Column(Integer, ForeignKey('address.id'))

    address = relationship('Address', uselist=False, back_populates='factory')
    machines = relationship('Machine')

    def __init__(self, name):
        self.name = name

class FactorySchema(Schema):
    id = fields.Number()
    name = fields.Str()
    manufacturer_id = fields.Number()
    address_id = fields.Number()
    address = fields.Nested(AddressSchema)