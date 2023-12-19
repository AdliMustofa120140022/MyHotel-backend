install:
	@echo "Installing backend..."
	venv/Scripts/pip install -e ".[testing]"

init record:
	@echo "Initializing first record database..."
	@echo "Running command alembic -c development.ini revision --autogenerate -m 'init'"
	venv\Scripts\alembic -c development.ini revision --autogenerate -m "init"
	@echo "Run make upgrade to upgrade database"

upgrade:
	@echo "Upgrading database..."
	@echo "Running command alembic -c development.ini upgrade head"
	venv\Scripts\alembic -c development.ini upgrade head

migrate:
	@echo "Migrating database..."
	venv\Scripts\initialize_backend_db development.ini

run develop:
	@echo "Running backend in development mode..."
	@echo "Running command pserve development.ini --reload"
	venv\Scripts\pserve development.ini --reload