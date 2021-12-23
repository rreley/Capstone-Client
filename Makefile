run-dev:
	docker-compose -f docker-compose-dev.yml up

dev-stop:
	docker-compose -f docker-compose-dev.yml stop
	
dev-down:
	docker-compose -f docker-compose-dev.yml down

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up

prod-stop:
	ENV=local docker-compose -f docker-compose-production.yml stop

prod-down:
	ENV=local docker-compose -f docker-compose-production.yml down

#########


build-dev:
	docker build -t client-dev -f Dockerfile.dev .

run:
	docker run -i -d -p 5000:5000 client-dev

stop:
	docker stop gracious_fermi


##########



build-local:
	docker build \
		-t client-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5001/api \
		-f Dockerfile.production .


##########

build-production:
	docker build \
		-t client-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://rest-api.capstone.civdev.rocks/api \
		-f Dockerfile.production .


##########

nuke-image: 
	docker images -a -q | xargs docker rmi -f

.PHONY: build-dev build-local build-production stop nuke-image