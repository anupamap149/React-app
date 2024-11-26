# node -v

# npm init -y

# npm install express

# node .

# http://localhost:3000/

# touch dockerfile
# command to build docker images
docker build -t nodeimg .

# command to check if image is created
docker images 

# to create the docker container 
docker run --name node-container -dp 3000:3000 nodeimg:latest 

# to check created container
docker ps

# to check running and stopped container
docker ps -a

# command to build the image with dockerhub username 
docker build -t anupamamp/reactapp .

docker images

# login to push the image to public repository
docker login

# command to push the image to repo
docker push anupamamp/reactapp:latest

