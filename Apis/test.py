from flask import Flask,jsonify,request,redirect,url_for
import sqlite3

app =  Flask(__name__)

connection = sqlite3.connect("data.db")

cursor = connection.cursor()

create_table_user = "CREATE TABLE IF NOT EXISTS Users (username text, password text)"
cursor.execute(create_table_user)

create_table_company = "CREATE TABLE IF NOT EXISTS companies (name text, address text,phone text,location text)"
cursor.execute(create_table_company)

# user = ("numan" , "asdf")

# insert_querry = "INSERT INTO users VALUES (?,?)"
# cursor.execute(insert_querry,user)


# users = [
#     ("rehan" , "asdfy"),
#     ("bhatti" , "asdfgh")
# ]
# cursor.executemany(insert_querry, users)

select_query = "SELECT * FROM users"
for row in cursor.execute(select_query):
    print(row)




@app.route('/companies')
def getCompanies():
    query = "SELECT * FROM companies"
    companies = cursor.execute(query)
   
    return jsonify({'companies':[doc for doc in companies]})

company = ("numan", "skdksdlsd","akndsknd","skdksdmks")

@app.route('/postcompanies', methods=["POST"])
def postcompanies():
    connection = sqlite3.connect("data.db")

    cursor = connection.cursor()
    if request.method == 'POST':
        body = request.get_json(force=True)
        company = (body['name'] , body['address'],body['phone'], body['location'])
        insert_querry_company = "INSERT INTO companies VALUES (?,?,?,?)"
        result = cursor.execute(insert_querry_company,company)
        return result
        # return jsonify({'success':'true'})

# @app.route('/companies/<int:id>', methods=['PUT'])
# def put_user(user_id):
#     if request.method == 'POST':
#         body = request.get_json(force=True)
#         loginQuery = {'id' : body['id'], 'name' : body['name'], 'address': body['address'] , "phone" : body['phone'], "location" : body['location']}

#     cursor.execute('UPDATE companies SET name=?, address=? WHERE id=?', (body['name'], body['address'], body['phone'], body['location'], body['id']))
#     return jsonify(company), 200

# @app.route('/delete')
# def delete():
#   con = sqlite3.connect('data.db')
#   cur = con.cursor()
#   cur.execute('DELETE FROM `companies` WHERE id = "' +  request.args.get('id')+ '"')
#   return jsonify({'success':"True"})

connection.commit()

connection.close()


    


app.run(port=4000,debug=True)


