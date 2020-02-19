from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from marshmallow import Schema, fields

from .entity import Entity, Base
from .factory import FactorySchema
from .address import AddressSchema
from .contact import ContactSchema


class Manufacturer(Entity, Base):
    __tablename__ = 'manufacturer'

    name = Column(String(45))
    address_id = Column(Integer, ForeignKey('address.id'))
    contact_id = Column(Integer, ForeignKey('contact.id'))

    address = relationship('Address', uselist=False, back_populates='manufacturer')
    contact = relationship('Contact', uselist=False, back_populates='manufacturer')
    factories = relationship('Factory')

    def __init__(self, name):
        self.name = name

class ManufacturerSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    address_id = fields.Number()
    contact_id = fields.Number()
    address = fields.Nested(AddressSchema)
    contact = fields.Nested(ContactSchema)
