su
npm install -g @angular/cli
=====
git clone https://github.com/didier-mycontrib/tp_angular4plus
cd tp_angular4plus/devise-app
npm install
ng build --prod --base-href .
===========

su

docker image build -t xyz/devise-ngapp  .

docker image ls

docker run -p 80:80 -d --link devise-api-container:deviseApiHost --name devise-ngapp-container xyz/devise-ngapp

docker container ls



===== dans nginx.conf (127.0.0.1 ou  deviseApiHost , 8080 ou ...)  ==== dans image docker ====

location  ~ ^/devise-app/deviseApi/(.*){
            proxy_pass   http://deviseApiHost:8080/deviseApi/$1?$args;
        }

====
dans image docker "nginx" , �craser le contenu de /etc/nginx/conf.d/default.conf
par une copie avec en plus le param�trage ad�quat  : docker-nginx.conf
=======
docker container exec -ti devise-ngapp-container sh
pour debug
