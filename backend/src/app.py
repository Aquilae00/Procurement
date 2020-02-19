from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import or_
from entities.entity import Session
from entities.manufacturer import Manufacturer, ManufacturerSchema
from entities.factory import Factory, FactorySchema
from entities.machine import Machine, MachineSchema
from entities.product import Product
from entities.contact import Contact
from entities.address import Address

# creating the Flask application
app = Flask(__name__)


CORS(app)

@app.route('/manufacturers')
def get_manufacturers():
    # fetching from the database
    session = Session()
    manufacturer_objects = session.query(Manufacturer).all()

    # transforming into JSON-serializable objects
    schema = ManufacturerSchema(many=True)
    manufacturers = schema.dump(manufacturer_objects)

    # serializing as JSON
    session.close()

    return jsonify(manufacturers.data)



@app.route('/search_manufacturers')
def search_manufacturers():

    term = request.args.get('search_term')

    # fetching from the database
    session = Session()
    search_term = '%{0}%'.format(term)
    search_clause = or_(Manufacturer.name.like(search_term), Address.city.like(search_term),
                        Address.region.like(search_term), Address.zip_code.like(search_term))
    manufacturer_objects = session.query(Manufacturer).join(Manufacturer.address).filter(search_clause)

    # transforming into JSON-serializable objects
    schema = ManufacturerSchema(many=True)
    manufacturers = schema.dump(manufacturer_objects)

    # serializing as JSON
    session.close()
    return jsonify(manufacturers.data)

@app.route('/manufacturer_by_id')
def get_manufacturer_by_id():

    id = request.args.get('id')

    # fetching from the database
    session = Session()
    manufacturer_object = session.query(Manufacturer).get(id)


    # transforming into JSON-serializable objects
    schema = ManufacturerSchema()
    manufacturer = schema.dump(manufacturer_object)

    # serializing as JSON
    session.close()

    return jsonify(manufacturer.data)

@app.route('/factory_by_id')
def get_factory_by_id():

    id = request.args.get('id')

    # fetching from the database
    session = Session()
    factory_object = session.query(Factory).get(id)


    # transforming into JSON-serializable objects
    schema = FactorySchema()
    factory = schema.dump(factory_object)

    # serializing as JSON
    session.close()

    return jsonify(factory.data)

@app.route('/get_manufacturers_factories')
def get_manufacturers_factories():
    id = request.args.get('id')

    # fetching from the database
    session = Session()
    factory_objects = session.query(Factory).filter(Factory.manufacturer_id == id)


    # transforming into JSON-serializable objects
    schema = FactorySchema(many=True)
    factories = schema.dump(factory_objects)

    # serializing as JSON
    session.close()

    return jsonify(factories.data)

@app.route('/get_factory_machines')
def get_factory_machines():
    id = request.args.get('id')

    # fetching from the database
    session = Session()
    machine_objects = session.query(Machine).filter(Machine.manufacturer_id == id)


    # transforming into JSON-serializable objects
    schema = MachineSchema(many=True)
    machines = schema.dump(machine_objects)

    # serializing as JSON
    session.close()

    return jsonify(machines.data)

if __name__ == '__main__':
    app.run(debug=True)
