install:
	@docker container exec -it $(shell docker-compose ps -q app) sh -c "npm install -y $(pkg)"