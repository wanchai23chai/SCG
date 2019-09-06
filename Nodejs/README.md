# baseStructureNodejs

This project is base structure for nodejs application and example that use docker for build and run container.

## How to run nodejs without docker
 1. open cmd/terminal of root project
 2. run command ``` npm install ```
 3. run command ``` npm start ```
 
## How to run this project with docker
 1. open cmd/terminal of root project
 2. run command ``` docker-compose -f development.yml up -d --build ```
 
 ## How to build image with docker
  1. open cmd/terminal of root project
  2. run command ``` docker build --no-cache -t testnodejs -f ./docker/development/Dockerfile . ```

## Example Application
 * GET / ==> Web application for view jobs
 * GET /api/v1/users ==> Get user from DB
