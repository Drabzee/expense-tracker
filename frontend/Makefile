shell:
	@docker container exec -it $(shell docker-compose ps -q app) sh

install:
	@docker container exec -it $(shell docker-compose ps -q app) sh -c "npm install -y $(pkg)"

deploy:
	@docker container exec -it $(shell docker-compose ps -q app) sh -c "npm run deploy"