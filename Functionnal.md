<details>
<summary><b id="toc">Table of Content</b></summary>


- [AppNews Network](#appnews-network)
  - [1. Glossary](#1-glossary)
- [2. Introduction](#2-introduction)
  - [2.1. Scope](#21-scope)
  - [2.2. In Scope](#22-in-scope)
  - [2.3. Out Of Scope](#23-out-of-scope)
- [3. Functional Requirements](#3-functional-requirements)
  - [3.1. Assumptions](#31-assumptions)
  - [3.2. Constraints](#32-constraints)
- [4. Personas](#4-personas)
  - [4.1. Content Producers](#41-content-producers)
    - [4.1.1. **Robert**](#411-robert)
    - [4.1.2. **Jeanne**](#412-jeanne)
  - [4.2. Viewers](#42-viewers)
    - [4.2.1 **Bryan**](#421-bryan)
    - [4.2.2 **Frédéric**](#422-frédéric)
    - [4.2.3. **Marie**](#423-marie)
- [5. Use cases](#5-use-cases)
  - [5.1. Use Cases Analysis](#51-use-cases-analysis)
  - [5.2. Functional Analysis](#52-functional-analysis)
- [6. Non-Functional Requirements](#6-non-functional-requirements)
  - [6.1. Costs](#61-costs)
    - [6.1.1. Hardware](#611-hardware)
    - [6.1.2. Software](#612-software)
    - [6.1.3. Energy consumption](#613-energy-consumption)
  - [6.2. Security](#62-security)
- [7. Conclusion](#7-conclusion)

</details> 
  
# AppNews Network



<sub> Author : [Victor Leroy](https://www.linkedin.com/in/victor-leroy-64baa3229/) (Program Manager)

<sub> Team : [Laurent Bouquin](https://www.linkedin.com/in/laurent-bouquin-60911a1b8/) (Project Leader), [Lucas Aubard](https://www.linkedin.com/in/lucas-aubard-596b37251/) (Technical Leader),   
  [Alexis Lasselin](https://www.linkedin.com/in/alexis-lasselin-318649251/) (Software Engineer), [Paul Nowak](https://www.linkedin.com/in/paul-nowak-0757a61a7/) (Quality Assurance) </sub>

## 1. Glossary
 We recommend the reader to read this glossary in order to understand the following parts.  
- **AppNews Network** : The project we are working on.  
  
- **Cyberattack** : A cyberattack is an attempt from hackers to damage or destroy a computer network or system.

- **ANSSI** : Abreviation of "**A**gence **N**ationale de la **S**écurité des **S**ystèmes d'**I**nformation"

- **Bcrypt** : This is an encryption method used to reduce vulnerability of brute-force attacks.  

- **Brute-force attack** : A brute-force attack consists of an attacker submitting many passwords or passphrases (sequence of words) with the hope of eventually guessing correctly.

- **Content producer** : The content producer is in charge of creating and changing the displayed content.

- **Viewer** : We consider the viewer as someone viewing any of Jacobi's connected screen.

- **Cloud** : A cloud is a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.

# 2. Introduction

[Jacobi](https://www.jacobi.net), a company located in Vierzon, needs a communication tool that could send informations based on  what the user requests, in order to facilitate the information transmission between employees. Jacobi has their head office in Paris. 

## 2.1. Scope

The most important points of this project is to be able to control the displayed content remotely, they also have to be independent to each other, which means that we could display different content on each  screen. 

## 2.2. In Scope

These are the mains features that are planned in our V0 : 
- Adapt the content to the screen size
- Widgets for weather, news, etc. that will be updated on a regular basis
- An history of the displayed content with a tracking of who changed what
- A login page the website to ensure that only authorized people can use it (there will only be 4 people who will have their access granted to the tool)
- Planning messages for a given date (i.e Friday for Monday)
- English and French languages
- Draft system (you can start writing a message and finish writing it later)

  
## 2.3. Out Of Scope
 
Due to time and resources constraints, these features might be included in the upcoming versions :
- Different languages (other than English or French)
- Smart screen in Paris to display informations
- Unique logins for each users   
    
# 3. Functional Requirements

## 3.1. Assumptions
- Content will be displayed horizontally.
- Both buildings are connected to the same network.
- The screens will be connected to the same network.  
  
## 3.2. Constraints

- There are 3 shifts per day. 
- Small shutdown at Christmas time.
- Wi-Fi sometimes had issues.


# 4. Personas 

## 4.1. Content Producers

### 4.1.1. **Robert**

Robert has been working for Jacobi since July 2020, he works as an HR manager. He is 31 years old and single. He likes listening to music while he is working but he also likes climbing and other extreme sports.   

Robert lives in Vierzon, so he comes most of the time walking, or he uses the bike when he is a bit late. 

He will need to access the screen in order to provide informations for his colleagues, about upcoming recruitment campaigns but also to give informations and advices if an intern is in the factory.

### 4.1.2. **Jeanne**

Jeanne has been working for Jacobi since December 2021, she is working as the factory manager. She is 42 years old and lives in Orleans, she is married and has 2 children. She loves playing tennis with her husband and her childs.   

Because she is far from the factory, she takes the train every morning and evening, when she arrives at the train station, Bryan, her colleague picks her up and drive her to the factory, which takes around 10 minutes.

Jeanne's use of the screen displaying is pretty clear and simple, she wants to display the production numbers for her colleagues in order for them to have an idea on if they are doing well or not, but also to give them a heads up everyday. She would also like to have a widget displaying the weather, so that she can plan her day accordingly.

## 4.2. Viewers

### 4.2.1 **Bryan** 

Bryan is a technician that has been working for Jacobi since 2018, he is 28 years old and lives in Paris. He is single and lives with his family. He likes playing video games and watching movies. He comes to Vierzon by car at the end of the week-end, he takes the highway and it takes him around 3 hour to get there; where he stays for the week and then goes back to Paris on Friday evening.   

He comes to the factory every day by car, picks up Jeanne at the train station and then drives her to the factory. 

Bryan wants to use the screen in order to know if there is any important information that he needs to know about, he also wants to know if there is any important information about the factory, such as if there is a problem with the machines.

### 4.2.2 **Frédéric**

Frédéric is an engineer that has been working for Jacobi since 2016, he is 56 years old and lives in Salbris. He is married and has 4 children. He likes watching his son's rugby matches on his weekends.   

He comes to Vierzon by car everyday which takes him around 30 minutes to get to the factory.

Frédéric needs the screen in order to know if there is any important information that he needs to know about, mostly informations that concerns the production rate of the factory. He also wants to have some feedbacks from his manager, on the quality of the products that are being produced.

### 4.2.3. **Marie**

Marie is an intern that joined Jacobi in September 2022, she is 21 years old and lives in Toulouse. She is here for 6 months and she is doing an internship in the factory. She likes mangas, parties and hanging out with her friends. She is currently living with her uncle in Vierzon. She comes back to Toulouse once every 2 weeks in order to see her family and her friends. 

Because her uncle is also working in the factory, he drives her to the factory everyday which takes around 15 minutes. 

Marie will need the screen because she wants to get the factory informations everyday, in order to not miss anything important. She also wants to get the latest news about the company, in order to know what is going on in the company.

# 5. Use cases
## 5.1. Use Cases Analysis 
Here is a more detailed version of the functional analysis below :
<details>
<summary><b id="toc"><u>Use case table</u></b></summary>

| Use Case # | Addresses Business/User Requirement n° | Name                                                  | Description                                                                               | Actor(s)                                                 | Pre-Conditions                                                                                                                                                                                                                                                                                                                                                                                                                                       | Flow of Events                                                                                                                                                                                        | Post-Conditions                                                                                                                                         | Exit Criteria                                                                                                                 |
| ---------- | -------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UC 1       | U.R #1                                | Login                            | The customer wants to login to the website via the login page | Content producer | Actor must have access   to the login informations which will be given to the authorized users the device must be connected to the Network in order to access the website         | The actor enters its credentials in the input boxes then press the login button                                  | A pop-up shows up saying "successefully logged in" the actor then have access to the website      | The case is complete when the user is successefully logged in   
| UC 2      | U.R #2                               | Monitoring screen                           | The customer wants to monitor what is displayed on the screen through the website | Content producer | Actor must be logged in and connected to the device he wants to display the content on         | The actor goes to the screen displaying page and selects the screen he wants to watch                                  | The actor can now watch what is displayed on the screen     | The case is complete when the user can watch the screen     
| UC 3      | U.R #3                               | Change displayed content                           | The customer wants to change the displayed content | Content producer | Actor must be logged in and connected to the device he wants to display the content on he also must have selected the screens that he wants to change the content          | The actor selects the screen that he wants to change the content, he then can either write a message or change any widget                                   | The actor can now see their changes displayed on the screen      | The case is complete when the user see their message on the screen                                                         
| UC 4      | U.R #4                               | Planning message                           | The customer wants to schedule a message for the next week | Content producer | Actor must be logged in and have selected the screen he wants to display the content on          | The actor types the message that he wants to be scheduled, he then clicks on the "Scheduling" button. After clicking the button, the actor can now choose the date he wants, after selecting the date he then clicks the "Confirm scheduling" button                                   | A message saying "message successfully scheduled" appears       | The case is complete when the scheduled message is sent
| UC 5      | U.R #5                               | Watching screen                         | The employee wants to watch the screen to see some new inormations | Employee, content producer | The actor must be in front of the screen in order to see the informations          | The actor watches the informations on the screen                                   | The actor knows the latest news and can head to work       | The case is complete when the actor is aware of the latest news

</details>
  

## 5.2. Functional Analysis

- UC1 (Login to the website) :  
    - User connects to the website
    - Enters his credentials
    - Accesses the website
    - Case is closed

- UC2 (Monitoring screen) :  
    - User accesses the website
    - User selects the screen he wants to monitor
    - User can now watch the screen
    - Case is closed

- UC3 (Change displayed content) :  
    - User accesses the website
    - User selects the screen he wants to change the content on
    - User now can see the content he can change
    - User selects the content he wants to change
    - Content is changed    
    - Case is closed

- UC4 (Planning message) :  
    - User accesses the website
    - User selects the screen he wants to display the content on
    - User types the message he wants to schedule
    - User selects the date he wants to schedule the message
    - Message is scheduled
    - Case is closed

- UC5 (Watching screen) : 
  - User comes to the screen
  - User watches the screen content
  - User is aware of the latest news
  - Case is closed

# 6. Non-Functional Requirements

## 6.1. Costs

### 6.1.1. Hardware

The hardware that will be used for this project is the following :

- A Smart TV with a screen size of 55 inches, and a resolution of 3840x2160 pixels (4K UHD)
- A wall bracket for the television
- An Ethernet cable to connect the TV to the network

The toal cost of the hardware is around 550€.

### 6.1.2. Software

The database we will be using is [Firebase](https://firebase.google.com). It is a cloud database, which means that it is hosted on the cloud and we don't need to install it on our computer. It is also **free to use**, which is a good thing for us.

### 6.1.3. Energy consumption

The energy consumption of the TV is 0.084kWh. The TV will be turned on 24/7, so it will consume around 2.016kWh per day. The TV will be used the whole year, so it will consume around 735.84kWh per year. The price of the electricity in France is 0.1024€ per kWh, so one TV will cost around 75.35€ per year.

## 6.2. Security 

Following the [ANSSI's guidelines](https://www.ssi.gouv.fr/en/cybersecurity-in-france/ciip-in-france/), we ensured that our product followed the DICP criteria. (AIPT)

- Availability : By using an Ethernet connection, we ensure that the screen will always be connected to the website.

- Integrity : By using an authentication system we ensure that no unauthorized person can connect to the website.

- Privacy : By using [Bcrypt](https://fr.wikipedia.org/wiki/Bcrypt), we ensure a good data encryption to prevent any potential hackers to steal any data.

- Traceability : We're using a database to store every modifications done, containing the user name and the date.

For more informations, we recommend you to visit the websites dedicated to that law.

# 7. Conclusion

We had a lot of freedom for this project which led us finding a lot of interesting ideas and implement them on our website.

We would like to thank the stakeholders, Jacobi, and especially Mr Usman SAEED who was here to answer to our questions and was always available when we needed, this project could never have been made without a good communication between our stakeholders and ALGOSUP.


  
