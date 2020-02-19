from entities import entity
from entities.manufacturer import Manufacturer
from entities.factory import Factory
from entities.machine import Machine
from entities.product import Product
from entities.contact import Contact
from entities.address import Address
from entities.entity import Session, engine, Base

# generate database schema
entity.Base.metadata.create_all(entity.engine)

# start session
session = entity.Session()

manufacturer1 = Manufacturer('Star Knits')
factory1 = Factory('Palsana')
address1 = Address('Palsana', 'Surat', '394315')
contact1 = Contact('Yatiraj', '9737633000')
machine1 = Machine('RugMaker2000', 9001)
product1 = Product('Fine Rug', 'Rug')
machine1.products.append(product1)
factory1.machines.append(machine1)

manufacturer2 = Manufacturer('Milan Textiles')
factory2 = Factory('Kim')
address2 = Address('Kim', 'Surat', '394111')
contact2 = Contact('Brijesh', '9327922333')

manufacturer3 = Manufacturer('Unique Fur N Fabric P. Ltd')
factory3 = Factory('Sachin')
address3 = Address('Sachin', 'AwwShucksville', '31041')
contact3 = Contact('Vikash', '9825116375')

manufacturer4 = Manufacturer('CMC Textile ')
factory4 = Factory('Mumbai')
address4 = Address('Ringroad', 'Surat', '395002')
contact4 = Contact('Ajeet','9825128432')

manufacturer5 = Manufacturer('Weknit fab LLP')
factory5 = Factory('Mandavi Road')
address5 = Address('Ringroad', 'Surat', '395002')
contact5 = Contact('Ankur', '9687400000')


factory1.address = address1
manufacturer1.factories.append(factory1)
manufacturer1.address = address1
manufacturer1.contact = contact1

factory2.address = address2
manufacturer2.factories.append(factory2)
manufacturer2.address = address2
manufacturer2.contact = contact2

factory3.address = address3
manufacturer3.factories.append(factory3)
manufacturer3.address = address3
manufacturer3.contact = contact3

factory4.address = address4
manufacturer4.factories.append(factory4)
manufacturer4.address = address4
manufacturer4.contact = contact4

factory5.address = address5
manufacturer5.factories.append(factory5)
manufacturer5.address = address5
manufacturer5.contact = contact5


session.add(manufacturer1)
session.add(manufacturer2)
session.add(manufacturer3)
session.add(manufacturer4)
session.add(manufacturer5)

session.commit()
session.close()
