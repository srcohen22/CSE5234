from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

inventory = [
    {"name": "Cheese Casserole", "quantity": 500, "price": 10, "id": 1, "description":"Enjoy this delectable home-style meal cooked by only the most homely of chefs. This bundle of cheesy goodness will melt your taste buds through the sheer potency of its existence."},
    {"name": "Carrot Cake", "quantity": 100, "price": 8, "id": 2, "description":"Have you ever wanted to be like Bugs Bunny in the hit TV show Looney Toons?? Well now you can! With this scrumptious treat, you'll grow your rabbit ears in no time!"},
    {"name": "Cantaloupe", "quantity": 50, "price": 10, "id": 3, "description":"Have you ever tried cantaloupe wrapped in prosciutto? It's soooooooo good! But it doesn't start with a 'C', so it doesn't belong here."},
    {"name": "Corn Chowder", "quantity": 60, "price": 9, "id": 4, "description":"Have you ever seen the hit Cartoon Network show, 'Chowder'? It doesn't have anything to do with Corn Chowder, but it was a good show."},
    {"name": "Coffee", "quantity": 55, "price": 4, "id": 5, "description":"Inject yourself with this high-quality performance-enhancing dru-... stimulant! Not only tasty, but extremely effective, too!"},
    {"name": "Chicken Chilaquiles", "quantity": 250, "price": 12, "id": 6, "description":"Why did the chicken cross the road? To get turned into these delicious chicken chilaquiles for you to enjoy! You can taste the cruelty and death in every bite!"}
]

@app.route('/inventory')
def getAllInventory():
    return jsonify(inventory)

@app.route('/inventory/items/<id>')
def getInventoryByID(id):
    for item in inventory:
        if str(item["id"]) == str(id):
            return item
    return {}

@app.route('/inventory/items', methods=['GET'])
def getInventoryByName():
    name = request.args.get('name',None)
    for item in inventory:
        if str(item["name"]) == str(name):
            return item
    return {}

if __name__=='__main__':
    app.run()