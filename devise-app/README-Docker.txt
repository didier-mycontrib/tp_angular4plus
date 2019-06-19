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

docker run -p 80:80 -d --network mynetwork --name devise-ngapp-container xyz/devise-ngapp

docker container ls



===== dans nginx.conf (127.0.0.1 ou  devise.api.host , 8080 ou ...)  ==== dans image docker ====

    #NB: ordre important dans ce fichier : du plus precis au plus general
    #syntaxes basees sur regexp

    # docker run -p 8080:8080 -d --name devise-api-container --network mynetwork --network-alias=devise.api.host xyz/devise-api
    # docker run -p 80:80 --name devise-ngapp-container --network mynetwork xyz/devise-ngapp

    #config pour rediriger les appels WS-REST vers api rest (nodeJs ou SpringBoot ou ...)
    #NB: resolver 127.0.0.11 refer to embedded docker DNS service (used for resolving devise.api.host : backend docker container)
    location  ~ ^/devise-app/deviseApi/(.*){
            resolver 127.0.0.11;
            proxy_pass   http://devise.api.host:8080/deviseApi/$1?$args;
    }

    #config pour les speudo-urls de angular (router)
    #toutes url/uri en /devise-app/xxxx (autre que devise-app/deviseApi/... plus haut)
    #entrainera une redirection vers /devise-app/index.html :
    location ~ ^/devise-app/(.*){
             root   /usr/share/nginx/html;
             index  index.html index.htm;
             try_files $uri $uri/ /devise-app/index.html;
    }

====
dans image docker "nginx" , écraser le contenu de /etc/nginx/conf.d/default.conf
par une copie avec en plus le paramétrage adéquat  : docker-nginx.conf
=======
docker container exec -ti devise-ngapp-container sh
pour debug :
ping -c 2 deviseApiHost
curl http://deviseApiHost:8080/deviseApi/rest/public/devises
