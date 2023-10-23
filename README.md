# NewLeafNavi
<p align="center">
  <img src="src/resources/newleaf.png" height = "300" width = "300"/>
</p>

## Members

- Jusung Park jpa118@sfu.ca
- Jiin Kim jka273@sfu.ca
- Sanghyun Park spa202@sfu.ca
- Kathy Cho hca171@sfu.ca
- Tommy Oh koa18@sfu.ca
## Short Description
NewLeafNavi is a web-based AI application designed to help users find ideal locations to begin a fresh chapter in their lives while traveling. When users initiate the program, it gathers their personal preferences across various categories to create a personalized travel plan. Subsequently, the AI presents a map displaying the top travel destinations based on the collected data.

## Requirements
**Note**: Move the attached .env file into the project directory.

**Note**: This project is required to run the command down below to download all the dependencies.

```bash
// to install all the dependencies
npm install
// to run react project
npm start
```

This web application uses both the Google Maps API and the Chat GPT API. To enable their functionality, users are required to generate an .env file in the root directory for storing their respective API keys – one for Google Maps and the other for Chat GPT.

Folder structure:
```
photo/          - contains photos
src/            - source code directory
.env            - contains required environment variables
```


## Rough UI Sketch/Design

Starting page
![](photo/image.png)

Questioning page
![](photo/question.jpg)

Result page
![](photo/report.jpg)