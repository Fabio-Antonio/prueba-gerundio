# prueba-gerundio
#Users crud with Node.js Typescript (Domain Driven Design)

This project is a RESTFULL API that implements a user crud with Express and Mongodb. It is developed with Domain Driven Design, with dependency injection with inversify, unit test with jest and github workflows.

## Installation

### Docker MongoDB config

```
sudo docker volume create mongo-db

sudo docker container run -dp 27017:27017 --name mongo-db -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -v mongo-db:/data/db mongo 
```

### .env file

```
PORT=3000
MONGO_USER=mongoadmin
MONGO_PASSWORD=secret
```


> **Requirements**: NodeJS `v14.17.3` or `v16.20.2`.

### Using NPM

- Run `npm i` to install the project dependencies



## Test your service


```
curl --request POST \
  --url http://localhost:3000/api/v1/user \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5' \
  --data '{
	"name":"fabio antonio",
	"email":"ing.fabio.a@gmail.com",
	"phoneNumber":"+525513658263"
}'


curl --request PATCH \
  --url http://localhost:3000/api/v1/user \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5' \
  --data '{
	"name":"Fabio Antonio",
	"email":"ing.fabio.a@gmail.com",
	"phoneNumber":"+525513658263"
}'

curl --request GET \
  --url http://localhost:3000/api/v1/user \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5'

curl --request GET \
  --url http://localhost:3000/api/v1/user \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5'

```


### Run
- `npm run run:dev`
- `npm run run:test`