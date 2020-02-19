from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from marshmallow import Schema, fields

from .entity import Entity, Base


class Contact(Entity, Base):
    __tablename__ = 'contact'

    name = Column(String(45))
    phone_number = Column(String(45))

    manufacturer = relationship('Manufacturer', back_populates='contact', uselist=False)

    def __init__(self, name, phone_number):
        self.name = name
        self.phone_number = phone_number


class ContactSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    phone_number = fields.Str()
