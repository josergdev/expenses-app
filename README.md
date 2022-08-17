## Run application

### Auto: Using Docker
1. [Install Docker](https://www.docker.com/get-started)
2. Run docker-compose `docker-compose up`
3. Application will run on port `http://localhost:4200`
4. If any code changes are made:
   1. Down containers `docker-compose down`
   2. Restart again with building option `docker-compose up --build`

### Manual: Using Node (v16.17.0)
1. Download dependencies `npm install`
2. Run local server `ng serve`
3. Application will run on host `http://localhost:4200`
