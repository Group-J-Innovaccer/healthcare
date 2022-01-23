Group-J (DocEasy) Documentation

Set up your project for local deployment :-


1. Create a folder

2. Clone the repo

        git clone https://github.com/Group-J-Innovaccer/healthcare.git

3. Create and install dependencies:

        pipenv shell
        pipenv install -r /backend/requirements.txt

4. Get back to Backend directory:

        cd /backend

5. Get back to Frontend directory:

        cd ..
        cd /frontend

6. Change the template directory in the setting.py for React Build

        Run python manage.py runserver

7. Install the npm:

        npm install

8. Start the npm:

        npm run build


Set up your project for EC2 deployment :-


	Whenever you push/merge into the repo, the github actions will automatically build a 
	Docker image and push that image to the Docker Hub.

	After that , we’ll create a EC2 instance and install the docker, then we’ll run our docker
    Image inside the EC2 Instance.
