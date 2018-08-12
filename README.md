# Dynamic survey application for construction companies
Dynamic questionnaire app, which main purpose is to increase customer satisfaction in construction projects. Part of the Digitalization In Customer Interaction (DICIA)-research project, which is an co-op of Haaga-Helia University of Applied Sciences, Aalto University, University of Helsinki, and few Finnish companies. Target user group is (regular) construction workers.

## Features
- Unlimited amount of question sets with unlimited amount of questions, based on database data
- Unlimited amount of chosable answerer types, based on database data
- Voluntary written feedback
- Survey results sended to the database
- Advanced result data visualization features and questioning method elements
	- The result of several usability testing iterations
- Designed with keeping administrator application requirements in mind

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



