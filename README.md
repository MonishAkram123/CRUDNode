
# CRUDNode
A simple node.js application with CRUD operation.


# ER Diagram
<img src="https://user-images.githubusercontent.com/34596279/60685813-da9bd300-9ec2-11e9-910a-57f93f99a480.png" width="80%" />


## Software Requirements
* [Node v8.12.0](https://nodejs.org/en/) (Recommended).
* [Mongodb v4.2](https://www.mongodb.com/download-center/community)(Recommended)
## Setup
Step 1: Clone or download repository to a local directory.

	>git clone https://github.com/MonishAkram123/CRUDNode.git

Step 2: Goto CRUDNode/

	>cd CRUDNode

Step 3: Download Required Modules using node package manager

	>npm install

Step 4: Add Database details in config/keys.json

	{
		"database": {
			<db>: {
		    "db_name": <db_name>,
				"host": <host_name>,
				"user": <user_name>,
				"pwd": <password>
			}
		}
	}
example:

	{
		"database": {
			"crudnode": {
				"db_name": "CRUDNode",
				"host": "localhost:27017",
				"user": "user1",
				"pwd": "pass1234"
			},
			"test_node": {
		  	"db_name": "test_node",
				"host": "localhost:27017",
				"user": "testUser1",
				"pwd": "testPassword"
			}
		}
	}

## Setup Database
Before starting the app make sure to create Database and their users with readWrite roles. Follow [this](https://medium.com/mongoaudit/how-to-enable-authentication-on-mongodb-b9e8a924efac) to know more about how to create users in mongodb.

## Starting the App
Start application from app.js.

	>node app.js


## Accessing the App
You can access the appication on [localhost:3000](localhost:3000).
To Check configuration details and environment Goto [localhost:3000/env](localhost:3000/env) (change port to 4000 for testing environment).


### API References

	Documentation unfinished. Will be updated soon.
