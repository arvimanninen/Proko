# Dynamic survey application for construction companies
Dynamic survey app, which main purpose is to increase customer satisfaction in construction projects. In practice, the application is made for collecting data about various issues in construction projects from construction workers. 

## Features
- Unlimited amount of question sets with unlimited amount of questions, based on database data
- Unlimited amount of chosable answerer types, based on database data
- Voluntary written feedback
- Survey results sended to the database
- Advanced result data visualization features and questioning method elements
	- The result of several usability testing iterations
- Designed with keeping administrator application requirements in mind

## Background

The application is part of the Digitalization In Customer Interaction (DICIA)-research project, which is an co-op of Haaga-Helia University of Applied Sciences, Aalto University, University of Helsinki, and few Finnish companies. Project is mainly funded by TEKES (The Finnish Funding Agency for Technology and Innovation). TEKES merged with Finpro (government-owned corporation for promotion of export) in 2018 and is now known as Business Finland. 

## Stack 
### Client app

- AngularJS (1.7.2+) - https://angularjs.org/ - Front-end web development framework
- Angular-Route (1.7.2+) - Angular add-on module for URL routing
- Angular-Resource (1.7.2+) - Angular add-on module for interaction with REST API
- Bootstrap (3.3.7+) - https://getbootstrap.com/docs/3.3/ - UI library
- Chart.js (2.7.2+) - https://www.chartjs.org/ - Chart library, used in result data visualization
- Angular-Chart.js (1.1.1+) - http://jtblin.github.io/angular-chart.js/ - AngularJS directives for Chart.js
- jQuery (3.3.1+) - https://jquery.com/ - Library for JavaScript code simplification, Bootstrap is dependent on jQuery
- npm (3.10.10+) - https://www.npmjs.com/ - Package manager

### Server-side

- ASP.NET Web API 2 - https://msdn.microsoft.com/en-us/library/dn448365(v=vs.118).aspx - Framework for creating RESTful services
- Entity Framework (6.1.3+)- https://msdn.microsoft.com/en-us/library/aa937723(v=vs.113).aspx - Object-relational data mapper
- NuGet - https://www.nuget.org/ - Package manager

## Paths
### Client-app
Root: \
SurveyApp/SurveyApp/clientapp/

AngularJS app module initialization: \
SurveyApp/SurveyApp/clientapp/module.js

AngularJS app module configuration: \
SurveyApp/SurveyApp/clientapp/config.js

Components: \
SurveyApp/SurveyApp/clientapp/*component-name*/

Shared AngularJS assets: \
SurveyApp/SurveyApp/clientapp/core/*asset-name*.*assettype*.js

Images: \
SurveyApp/SurveyApp/clientapp/core/images/

CSS/SCSS stylesheets: \
SurveyApp/SurveyApp/clientapp/core/styles/

### Back-end
Root: \
/SurveyApp/SurveyApp/

Configuration files: \
SurveyApp/SurveyApp/App_Start/

REST API controllers: \
SurveyApp/SurveyApp/ApiControllers/

Data model classes: \
SurveyApp/SurveyApp/Models/

Data model initilialization: \
SurveyApp/SurveyApp/Models/DbSets.cs

### Setup

- Run command "npm install" in Client app root folder
- Open /Surveyapp/SurveyApp.sln in Visual Studio
- Install dependencies with NuGet, if not installed automatically
- Comment out all code in /SurveyApp/SurveyApp/Models/DbSets.cs "public MainDbContext() : base("BackContext")" -function

### Getting started

Prerequisite: Database is created.

1. Add answerer types to AnswererTypes-table. string Name tells the AnswererType name in text, bool Chosen tells if the AnswererType is in use, and chosable in client app.

2. Add needed question methods to the QuestionMethods table. string Value must match with question method component routing names in client app's configuration file \

Example:
```
.when('/qm-buttons-smileys', {
	template: '<qm-buttons-smileys></qm-buttons-smileys>'
})
```
-> Value must be "buttons-smileys" or "/buttons-smileys"

int ScaleMax tells what is the maximum scale value for particular QuestionMethod. Minimum scale value is always 1. For example, if QuestionMethod has answering scale with four options, the ScaleMax should be 4.

3. Add some questions to the Questions-table. string Text is the question as text.

4. Add question sets to the QuestionSets-table. One QuestionSet means one view, which can include many ChosenQuestions. int QuestionMethodID tells which QuestionMethod is used in ChosenQuestions related to the particular QuestionSet. int ChosenIndex tells the showing order of QuestionSets (one QuestionSet = one view) in client app

5. Add chosen questions to the ChosenQuestions table. int QuestionSetID tells which QuestionSet the particular ChosenQuestion is related to. int QuestionID tells which Question the particular ChosenQuestion is related to. int ChosenIndex tells the showing order of ChosenQuestions within the related QuestionSet.




### Usage

### Known issues and bugs

- Slow algorithms in some functions, especially in Results average calculations. Move to the server-side?
- Transaction management missing
- Satisfactory line graphs show satisfactory as 1, if no answers in particular week, should be using last week's satisfactory results if no answers in that week.
- Satisfactory line graphs show current date as current date + one day

### Live demo

Coming soon...

### Team (main roles)
Arvi Manninen \
Software architecture, program logic (JavaScript/AngularJS, C#/ASP.NET), database design and implementation (Entity Framework, code-first approach).

Ilkka Alakarhu \
User interface design and implementation (HTML, CSS/SCSS, Bootstrap), usability testing, project management.










