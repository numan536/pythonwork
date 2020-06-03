from flask import Flask, jsonify, render_template, url_for, request, session, redirect
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from bson import json_util
import json
# import bcrypt

client = MongoClient('mongodb://localhost:27017')

db = client['admin-panel']
users = db['Users']
Companies = db['Companies']


app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

if __name__ == '__main__':
    app.secret_key = 'mysecret'


@app.route('/register', methods=["POST"])
@cross_origin()
def register():
    if request.method == "POST":
        body = request.get_json(force=True)
        existing_user = users.find_one({"name": body['username']})

        if existing_user is None:

            # hashpass = bcrypt.hashpw(body['pass'],bcrypt.gensalt())
            created_user = users.insert(
                {"name": body['username'], 'password': body['pass'], 'email': body['email']})
            return {'message': 'successfully created user'}


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        body = request.get_json(force=True)
        loginQuery = {'email': body['email'], "password": body['pass']}
        found_user = users.find_one(loginQuery)
        if found_user:
            return {'message': 'you are loggedin'}
        else:
            return {'message': 'invalid credentials'}


@app.route('/postcompanies2', methods=['POST'])
@cross_origin()
def companies():
    if request.method == 'POST':
        body = request.get_json(force=True)
        companyBody = {'name': body['name'], "companyname": body['companyname'], 'address': body['address'],
                       'address2': body['address2'], 'city': body['city'], 'zip': body['zip']}
        create_company_query = Companies.insert_one(companyBody)
        if create_company_query:
            return {'message': 'Company Created'}
        else:
            return {'message': 'error comes in creating'}


@app.route('/getcompanies', methods=['GET'])
@cross_origin()
def getcompanies():
    companies = []
    data = Companies.find()
    for _ in data:
        companies.append(json.dumps(_, indent=4, default=json_util.default))
    return jsonify({'companies': companies})


@app.route('/deletecompany/<id>', methods=["GET"])
@cross_origin()
def deletecompanies(id):
    delete_user = Companies.delete_one({'_id': id})
    return jsonify({'success': True})


@app.route('/updatecompany/<id>', methods=['POST'])
def updatecompany(id):
    body = request.get_json(force=True)
    companyBody = {'name': body['name'], "companyname": body['companyname'], 'address': body['address'],
                   'address2': body['address2'], 'city': body['city'], 'zip': body['zip']}
    companies_updated = Companies.update_one({"id": id}, {'$set': companyBody})
    return jsonify({"companies_updated": companies_updated})

    # @app.route('/home')
    # @cross_origin()
    # def home():
    #     my_new_data = {'name':'rehan','fatherName':'Saeed'}
    #     # data = users.insert_one(my_new_data)
    #     data = users.find_one({'name':'rehan'})
    #     # print(data)
    #     data['_id'] = str(data['_id'])
    #     return jsonify({"dataaa":data})
    # @app.route('/login1' , methods=['GET, POST'])
    # @cross_origin()
    # def get():
    #     if request.method == "POST":
    #         body = request.get_json(force=True)
    #         existing_user = user.find_one({"email" : body['email'],"password" : body['pass']})
    #         if existing_user is None:
    #             return {"message" : "Please Register"}
app.run(port=4000, debug=True)
