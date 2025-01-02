run:
	flask --app flaskr run --host=0.0.0.0

docker-build:
	docker build -t flaskr-app .

docker-run:
	docker run -p 5000:5000 flaskr-app

init:
	flask --app flaskr init-db