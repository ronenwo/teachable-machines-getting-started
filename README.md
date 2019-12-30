# teachable-machines-getting-started
This is an kickstart project to use teachable machines with image recognition,
to run and pause a video with a cup I used. 
This project pauses and playes a video when the cup's logo is showing or missing respectivly.
You will of course have to modify this to your needs and teachanble machine model to make it run as you want.


Example 1:
A. Using google drive to store project and model
B. Using visual studio code editor
C. Using Chrome local server extension 

1. First login to your google drive/gmail account 
2. Browse in Chrome to https://teachablemachine.withgoogle.com/   (verify you are logged in)
2. Follow getting started instructions...
3. In the preview stage click Export model button:
In Tensorflow.js tab, in code COPY the model url, something like this:
 let imageModelURL = 'https://teachablemachine.withgoogle.com/models/zd_XwkwT/'
4. Save project to drive with <project name> you choose

Download your template project: 

5. If you are not familiar with Git just Click on green button clone or download -> Download zip

6. unzip and locate this project at your working local folder (e.g Documents\my project)

Download Visual Studio Code: 
7. https://code.visualstudio.com/download

8. Run the Visual Studio Code
9. File->Open... the folder of cupmodel4
10. Open the sketch.js file and replace the following line with what you copied in item (3) above:
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/zd_XwkwT/model.json';

Don't forget to save the file


Preparing local web server

5. Add Chrome web server extention from: https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en

6. Open the local web server extension from chrome://apps, click on 200 OK web server icon  

7. Select your project folder (e.g. Documents\my project)

8. Open http://127.0.0.1:8887/ or other url the extension suggests

9. Use interactions to test



Example 2:
A. Using google drive to store project and model
B. Using Processing editor and it's local web server

Under construction...


