TodoApp - Here data will store in databse (Firebase is the database we used)
An app that stores the list of activities you make to do. 
The funtionalities of the sampletodo are : 
	adding todo 
	removing todo 
	updating todo(editing todo)
	toggling todo 
	toggling list of todos 
	filtering 
	clearing completed todos

Git Cloning :
    
    git clone https://github.com/Surendra328/TodoApp---Firebase.git




* npm create-react-app appname


* npm install (npm install should be done , to run npm start)
* npm start

Docker:

* Create docker file with required dependencies (touch dockerfile)

* Building docker file:
    To make the image need to use this command-->sudo docker image build -t "name of your choice"(quotes not required and . required) .
    after some time image will be created.
    *To check whether the image is formed or not need to run following command-->sudo docker run -it react bash
        then we can observe container id and path .. if we want to check the files give ls command and can find node_modules,src,public,
        package.json
        we can check by start npm then we get ip's
        -->npm run build command ,, in main container then will see 
        exit and come back to main project in command line and write
        sudo docker cp (container id):/usr/src/app .  , to get whole container data into our server including with build
   
    
    