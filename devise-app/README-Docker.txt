git clone https://github.com/didier-mycontrib/tp_angular4plus
cd tp_angular4plus/devise-app
npm install
ng build --prod --base-href .
===========

su

docker image build -t xyz/devise-ngapp  .

docker image ls

docker run -p 8080:8080 -d --name devise-ngapp-container xyz/devise-ngapp

docker container ls
