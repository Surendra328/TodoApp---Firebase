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


**************************************************************************************************************************************************************************************************************

                                                                                   HOW TO WORK WITH OUR PROJECT:

1 . Git Cloning :
    
    

2. Navigate to our project folder

3. There you will find dscript.sh file

   open terminal there and run script using sh dscript.sh

   This script contains :

   * docker image build -t myimage . (Create docker image from docker file)
   * docker container run --publish 3006:3000 --detach myimage (This will run image to get container and mapped the container port to host port)
   
   
4.Goto browser :

	Browse for :

	
	http://localhost:3006/ 


*************************************************************************************************************************************************************************************************************






* npm create-react-app appname


* npm install (npm install should be done , to run npm start)
* npm start

Firebase:

npm install firebase --save


npm install string 




Docker:

* Create docker file with required dependencies (touch dockerfile)

* Building docker file:
    To make the image need to use this command-->sudo docker image build -t "name of your choice"(quotes not required and . required) .
    after some time image will be created.
    *To check whether the image is formed or not need to run following command-->sudo docker run -it react bash
        then we can observe container id and path .. if we want to check the files give ls command and can find node_modules,src,public,
        package.json
        we can check by start npm then we get ip's
        -->npm run build command ,, in main container then will sasee 
        exit and come back to main project in command line and write
        sudo docker cp (container id):/usr/src/app .  , to get whole container data into our server including with build
   
    
    
