process: migrate
	@node -r dotenv/config lib/processor.js


build:
	@npm run build


serve:
	@npx squid-graphql-server


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-evm-typegen src/abi abi/*.json --clean


up:
	@docker-compose up -d


up-local-archive:
	@docker compose -f docker-compose.archive.yml up -d


down:
	@docker-compose down


down-local-archive:
	@docker compose -f docker-compose.archive.yml down


.PHONY: build serve process migrate codegen typegen up down