include .env;

start-dev:
	@COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up -f docker-compose.dev.yml -d --no-deps