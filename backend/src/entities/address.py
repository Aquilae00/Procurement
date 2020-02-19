from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from marshmallow import Schema, fields

from .entity import Entity, Base


class Address(Entity, Base):
    __tablename__ = 'address'

    city = Column(String(45))
    region = Column(String(45))
    zip_code = Column(String(45))
    manufacturer = relationship('Manufacturer', back_populates='address', uselist=False)
    factory = relationship('Factory', back_populates='address', uselist=False)

    def __init__(self, city, region, zip_code):
        self.city = city
        self.region = region
        self.zip_code = zip_code


class AddressSchema(Schema):
    id = fields.Number()
    city = fields.Str()
    region = fields.Str()
    zip_code = fields.Str()
