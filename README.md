# debugging
### [node-inspector](https://github.com/node-inspector/node-inspector) for chrome dev tools with node

```
npm install -g node-inspector

```
```
node-debug app.js
```

# nginx
#### how to use nginx's reverse proxy features to connect your apps to a single point of entry.

#### ie map http://mydomain.com/myapp to http://mydomain.com:3000/


install nginx

```
sudo apt-get install nginx
```

edit nginx.conf

```
sudo nano /etc/nginx/nginx.conf
```

add a server block with proxy_pass instructions into the http {} block. minimal nginx.conf example:

```
worker_processes 4;
pid /run/nginx.pid;

events {
	worker_connections 768;
	# multi_accept on;
}

http {
	server {
		listen 55.55.55.5:80;
		location /serv1/ {
			proxy_pass http://55.55.55.5:3000/;
		}
		location /serv2/ {
			proxy_pass http://55.55.55.5:3001/;
		}
	}

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}
```

# installing vagrant

install virtualbox https://www.virtualbox.org/wiki/Downloads

install vagrant https://www.vagrantup.com/downloads.html

browse list of available linux distros https://atlas.hashicorp.com/boxes/search

download the distros/boxes you want available on your machine
```
vagrant box add ubuntu/trusty64
```
list installed boxes
```
vagrant box list
```

# using vagrant for a project

navigate to your project's directory

initialize a new vagrant file
```
vagrant init ubuntu/trusty64
```
open up your VagrantFile to edit its configuration

for example if you want to have your vagrant accessible by a specific ip, uncomment and edit the private network line.
```
config.vm.network "private_network", ip: "55.55.55.5"
```

start your vagrant box
```
vagrant up
```
ssh into your vagrant box
```
vagrant ssh
```
stop your vagrant box
```
vagrant halt
```

everything in the same directory as the VagrantFile is automatically synced to `/vagrant/` inside the vagrant box

# example of gulp with browserify

the gulpexample directory of this repo contains a simple example of using gulp and browserify to provide client-side modularity. also a tiny example of how you would structure your code for easy testing of server routes.

to run, navigate to the gulpexample directory and run
```
gulp
```

in a seperate tab run the app with
```
node index.js
```

for the super extensive test suite i implemented you'll need to have mocha installed
```
npm install -g mocha
```

and then you can run the tests with either
```
mocha
```

or
```
npm test
```

### NOTE: in general, remember to .gitignore your build directory or you'll have fun with merges :)
