
# My Hotel

Frontend : React\
Backend  : Pyramid\
Database : MySQL

## Installation Backend

```py
# Create your own database name 
# inside backend/development.ini
# sqlalchemy.url = mysql+mysqlconnector://root@localhost/my_hotel
```

Install venv
```bash
git clone https://github.com/adislksn/my_hotel.git
cd my_hotel\backend
python -m venv venv
```

Every command below can be run using makefile. Try this command in your terminal
```bash
make -v
# if the result not found, install make using 
# this command
choco install make
```

Install backend
```bash
make install
```

Initialize database
```bash
make init record
make upgrade
```

Migrate database
```bash
make migrate
```

Run backend
```bash
make run develop
# Server will run on http://localhost:6543
```

## Installation Frontend

```bash
cd my_hotel\frontend
npm install
npm run dev
# Server will run on http://localhost:5173
```