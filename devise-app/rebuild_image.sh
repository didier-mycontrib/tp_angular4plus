docker container rm -f devise-ngapp-container
docker images rm -f xyz/devise-ngapp
docker image build -t xyz/devise-ngapp  .