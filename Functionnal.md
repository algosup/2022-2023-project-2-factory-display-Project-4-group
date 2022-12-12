<details>
<summary><b id="toc">Table of Content</b></summary>


- [AppNews Network - Functional Specification](#appnews-network---functional-specification)
  - [1. Glossary](#1-glossary)
- [2. Introduction](#2-introduction)
- [3. Goal of the project](#3-goal-of-the-project)
  - [3.1. Scope](#31-scope)
  - [3.2. In Scope](#32-in-scope)
  - [3.3. Out Of Scope](#33-out-of-scope)
  - [3.4. Deadlines](#34-deadlines)
- [4. Functional Requirements](#4-functional-requirements)
  - [4.1. Assumptions](#41-assumptions)
  - [4.2. Constraints](#42-constraints)
- [5. Personas](#5-personas)
  - [5.1. Content Producers](#51-content-producers)
    - [5.1.1. **Robert**](#511-robert)
    - [5.1.2. **Jeanne**](#512-jeanne)
  - [5.2. Viewers](#52-viewers)
    - [5.2.1 **Bryan**](#521-bryan)
    - [5.2.2 **Frédéric**](#522-frédéric)
    - [5.2.3. **Marie**](#523-marie)
    - [5.2.4. **Kim Seonghwa**](#524-kim-seonghwa)
- [6. Use cases](#6-use-cases)
  - [6.1. Functional Analysis](#61-functional-analysis)
  - [6.2. Use Cases Analysis](#62-use-cases-analysis)
- [7. Non-Functional Requirements](#7-non-functional-requirements)
  - [7.1. Costs](#71-costs)
    - [7.1.1. Hardware](#711-hardware)
      - [**Maintenance**](#maintenance)
    - [7.1.2. Software](#712-software)
    - [7.1.3. Energy consumption](#713-energy-consumption)
  - [7.2. Environment](#72-environment)
    - [7.2.1. Environmental impact](#721-environmental-impact)
    - [7.2.2. Scalability](#722-scalability)
- [8. Security](#8-security)
- [9. Conclusion](#9-conclusion)

</details> 

<sub> Author : [Victor Leroy](https://www.linkedin.com/in/victor-leroy-64baa3229/) (Program Manager) </sub>

<sub> Team : [Laurent Bouquin](https://www.linkedin.com/in/laurent-bouquin-60911a1b8/) (Project Leader), [Lucas Aubard](https://www.linkedin.com/in/lucas-aubard-596b37251/) (Technical Leader), [Alexis Lasselin](https://www.linkedin.com/in/alexis-lasselin-318649251/) (Software Engineer), [Paul Nowak](https://www.linkedin.com/in/paul-nowak-0757a61a7/) (Quality Assurance) </sub>

---

# AppNews Network - Functional Specification



## 1. Glossary

 We recommend the reader to read this glossary in order to understand the following parts.  

 - **ANSSI** : Abreviation of "**A**gence **N**ationale de la **S**écurité des **S**ystèmes d'**I**nformation"
  
- **AppNews Network** : The project we are working on.  
  
- **Bcrypt** : This is an encryption method used to reduce vulnerability of brute-force attacks.  
  
- **Brute-force attack** : A brute-force attack consists of an attacker submitting many passwords or passphrases (sequence of words) with the hope of eventually guessing correctly.
  
- **Cloud** : A cloud is a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.
  
- **Content producer** : The content producer is in charge of creating and changing the displayed content.
  
- **Cyberattack** : A cyberattack is an attempt from hackers to damage or destroy a computer network or system.

- **Ethernet** : Ethernet is a system for connecting a number of computer systems to form a local area network. It is a standard that defines how computers communicate over a network.

- **Viewer** : We consider the viewer as someone viewing any of Jacobi's connected screen.



# 2. Introduction

Jacobi Group is world leader in purification solution of air and water, using Activated Carbon, Ion Exchange Resins and Mobile Filtration Units. With its factory in Forges industrial zone since 1956, it has a heritage of being the only French industry manufacturing this unique product and supplying customers like Veolia, Valeo, Honeywell and French Ministry of Defence to name a few. There are over 1000 applications in which activated carbon is used which you can read up on [their website](https://www.jacobi.net). The factory in Vierzon is the oldest in the Group however one of the most successful thanks to a flexible and can-do approach.   

The Managing Director of Jacobi in France, Mr Saeed is constantly seeking ways to improve his management. One of his favourite subjects, which is also the one for which he receives most feedback, is communication. Communication - updated, accurate and transparent. The short and sweet wishlist!  

One of the many ways to achieve this is to digitalise the communication of the Company and make it easy to publish the content. Currently, factory news and important announcements are done by email to groups, on MS Teams Groups, Yammer, etc. However, of the 64 factory staff, only around half of the aforementioned have Company email addresses. Displaying paper format information is outdated and in a huge factory of 8 hectares, it is not efficient.

# 3. Goal of the project

The goal of this project is to create a communication tool that will be used to facilitate the communication between the company and its employees. 

## 3.1. Scope

The most important points of this project is to be able to control the displayed content remotely, they also have to be independent to each other, which means that we could display different content on each  screen. 

## 3.2. In Scope

These are the mains features that are planned in our V0 : 
- Adapt the content to the screen size
- Widgets for weather, news, etc. that will be updated on a regular basis
- A login page the website to ensure that only authorized people can use it (there will only be 4 people who will have their access granted to the tool)
- Planning messages for a given date (i.e Friday for Monday)
  
## 3.3. Out Of Scope
 
Due to time and resources constraints, these features might be included in the upcoming versions :
- Different languages
- Smart screen in Paris to display informations
- Unique logins for each users   
- An history of the displayed content with a tracking of who changed what
- Draft system (you can start writing a message and finish writing it later)

  
## 3.4. Deadlines

The deadline for the hardware choosing is the 14th November 2022. The deadline for the V0 is the 16th December 2022.

# 4. Functional Requirements

## 4.1. Assumptions
- Content will be displayed horizontally.
- Both buildings are connected to the same network.
- The screens will be connected to the same network.  
- Ethernet is the safest way to connect the screens to the network.
- The V0 will concern 2 screens.
- Each screen will be independent from each other.
  
## 4.2. Constraints

- There are 3 shifts per day. 
- Small shutdown at Christmas time.
- Wi-Fi sometimes had issues.


# 5. Personas 

## 5.1. Content Producers

### 5.1.1. **Robert**

Robert has been working for Jacobi since July 2020, he works as an HR manager. He is 31 years old and single. He likes listening to music while he is working but he also likes climbing and other extreme sports.   

Robert lives in Vierzon, so he comes most of the time walking, or he uses the bike when he is a bit late. 

He will need to access the screen in order to provide informations for his colleagues, about upcoming recruitment campaigns but also to give informations and advices if an intern is in the factory.

### 5.1.2. **Jeanne**

Jeanne has been working for Jacobi since December 2021, she is working as the factory manager. She is 42 years old and lives in Orleans, she is married and has 2 children. She loves playing tennis with her husband and her childs.   

Because she is far from the factory, she takes the train every morning and evening, when she arrives at the train station, Bryan, her colleague picks her up and drive her to the factory, which takes around 10 minutes.

Jeanne's use of the screen displaying is pretty clear and simple, she wants to display the production numbers for her colleagues in order for them to have an idea on if they are doing well or not, but also to give them a heads up everyday. She would also like to have a widget displaying the weather, so that she can plan her day accordingly.

## 5.2. Viewers

### 5.2.1 **Bryan** 

Bryan is a technician that has been working for Jacobi since 2018, he is 28 years old and lives in Paris. He is single and lives with his family. He likes playing video games and watching movies. He comes to Vierzon by car at the end of the week-end, he takes the highway and it takes him around 3 hour to get there; where he stays for the week and then goes back to Paris on Friday evening.   

He comes to the factory every day by car, picks up Jeanne at the train station and then drives her to the factory. 

Bryan wants to use the screen in order to know if there is any important information that he needs to know about, he also wants to know if there is any important information about the factory, such as if there is a problem with the machines.

### 5.2.2 **Frédéric**

Frédéric is an engineer that has been working for Jacobi since 2016, he is 56 years old and lives in Salbris. He is married and has 4 children. He likes watching his son's rugby matches on his weekends.   

He comes to Vierzon by car everyday which takes him around 30 minutes to get to the factory.

Frédéric needs the screen in order to know if there is any important information that he needs to know about, mostly informations that concerns the production rate of the factory. He also wants to have some feedbacks from his manager, on the quality of the products that are being produced.

### 5.2.3. **Marie**

Marie is an intern that joined Jacobi in September 2022, she is 21 years old and lives in Toulouse. She is here for 6 months and she is doing an internship in the factory. She likes mangas, parties and hanging out with her friends. She is currently living with her uncle in Vierzon. She comes back to Toulouse once every 2 weeks in order to see her family and her friends. 

Because her uncle is also working in the factory, he drives her to the factory everyday which takes around 15 minutes. 

Marie will need the screen because she wants to get the factory informations everyday, in order to not miss anything important. She also wants to get the latest news about the company, in order to know what is going on in the company.

### 5.2.4. **Kim Seonghwa**

Seonghwa is a customer of Jacobi since 2013, he is living in Korea and comes once every 6 months in order to have a meeting with Jeanne. He loves listening to K-pop music because his brother is working in this industry. It takes Seonghwa one day to come to Paris by plane, he then comes to Vierzon taking the train which takes him approximately 2 hours, then Jeanne picks him up at the train station and drives him to the factory. 

Seonghwa will need an authorization in order to access the room where the screens are located, because there might be confidential informations displayed on the screen. He will also need to know if there is any important information that he needs to know about, in order to have a good meeting with Jeanne.

# 6. Use cases

## 6.1. Functional Analysis

- UC1 (Login to the website) :  
    - Robert connects to the website
    - He enters his credentials
    - He accesses the website
    - Case is closed

- UC2 (Monitoring screen) :  
    - Jeanne accesses the website
    - She selects the screen she wants to monitor
    - She can now watch the screen
    - Case is closed

- UC3 (Change displayed content) :  
    - Robert accesses the website
    - He selects the screen he wants to change the content on
    - He can now see the content he can change
    - He selects the content he wants to change
    - Content is changed    
    - Case is closed

- UC4 (Planning message) :  
    - Jeanne accesses the website
    - She selects the screen she wants to display the content on
    - She types the message she wants to schedule
    - She selects the date she wants to schedule the message
    - Message is scheduled
    - Case is closed

- UC5 (Watching screen) : 
  - Marie comes to the screen
  - She watches the screen content
  - She is aware of the latest news
  - Case is closed

## 6.2. Use Cases Analysis 
Here is a more detailed version of the functional analysis above :
<details>
<summary><b id="toc"><u>Use case table</u></b></summary>

| Use Case # | Addresses Business/User Requirement n° | Name                                                  | Description                                                                               | Actor(s)                                                 | Pre-Conditions                                                                                                                                                                                                                                                                                                                                                                                                                                       | Flow of Events                                                                                                                                                                                        | Post-Conditions                                                                                                                                         | Exit Criteria                                                                                                                 |
| ---------- | -------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UC 1       | U.R #1                                | Login                            | Robert wants to login to the website via the login page | Content producer | Robert must have access to the login informations which will be given to the authorized users the device must be connected to the Network in order to access the website         | Robert enters its credentials in the input boxes then press the login button                                  | A pop-up shows up saying "successefully logged in" Robert then have access to the website      | The case is complete when Robert is successefully logged in   
| UC 2      | U.R #2                               | Monitoring screen                           | Jeanne wants to monitor what is displayed on the screen through the website | Content producer | Jeanne must be logged in and connected to the device he wants to display the content on         | Jeanne goes to the screen displaying page and selects the screen he wants to watch                                  | Jeanne can now watch what is displayed on the screen     | The case is complete when Jeanne can watch the screen     
| UC 3      | U.R #3                               | Change displayed content                           | Robert wants to change the displayed content | Content producer | Robert must be logged in and connected to the device he wants to display the content on he also must have selected the screens that he wants to change the content          | Robert selects the screen that he wants to change the content, he then can either write a message or change any widget                                   | Robert can now see their changes displayed on the screen      | The case is complete when Robert see their message on the screen                                                         
| UC 4      | U.R #4                               | Planning message                           | Jeanne wants to schedule a message for the next week | Content producer | Jeanne must be logged in and have selected the screen he wants to display the content on          | Jeanne types the message that she wants to be scheduled, she then clicks on the "Scheduling" button. After clicking the button, she can now choose the date she wants, after selecting the date she then clicks the "Confirm scheduling" button                                   | A message saying "message successfully scheduled" appears       | The case is complete when the scheduled message is sent
| UC 5      | U.R #5                               | Watching screen                         | Marie wants to watch the screen to see some new inormations | Employee, content producer | Marie must be in front of the screen in order to see the informations          | Marie watches the informations on the screen                                   | Marie knows the latest news and can head to work       | The case is complete when Marie is aware of the latest news

</details>     


# 7. Non-Functional Requirements

## 7.1. Costs

### 7.1.1. Hardware

The hardware that will be used for this project is the following :

- A Smart TV with a screen size of 55 inches, and a resolution of 3840x2160 pixels (4K UHD)
- A wall bracket for the television
- An Ethernet cable to connect the TV to the network

The toal cost of the hardware for one screen is around 550€. Because there are 2 screens in the factory, the total cost of the hardware is around 1100€.

#### **Maintenance**

- The Smart TV will be maintained by the company, in order to make sure that it is always working properly. The television will last at least 7 years, time of the guarantee.  
  
- The wall bracket shouldn't need any maintenance, it is a simple bracket that will be used to hang the television on the wall. As long as no one touches or breaks it, it should last for a long time.
    
### 7.1.2. Software

The database we will be using is [Firebase](https://firebase.google.com). It is a cloud database, which means that it is hosted on the cloud and we don't need to install it on our computer. It is also **free to use**, which is a good thing for us.

### 7.1.3. Energy consumption

The energy consumption of the TV is 0.084kWh. The TV will be turned on 24/7, so it will consume around 2.016kWh per day. The TV will be used the whole year, so it will consume around 735.84kWh per year. The price of the electricity in France is 0.1024€ per kWh, so one TV will cost around 75.35€ per year.

## 7.2. Environment

### 7.2.1. Environmental impact

One of the main environmental impact of this project is the energy consumption of the TV. As we said in the previous section, the TV will consume around 735.84kWh per year. This is a lot of energy. The TV is a necessary part of the project, and we can't remove it.   

That's why we focused on the **scalability** of the project. If the company wants to add more screens, we can do it easily. We chose this screen because it is the most efficient and among the cheapest. We could have chosen a screen with a lower energy consumption, but it would have been more expensive. We could also have chosen a screen with a higher energy consumption, but it would have been cheaper. We chose the middle ground, because we think that it is the best option. We also had to chose a Smart TV in order to be compatible with our website.

### 7.2.2. Scalability

You can see on this image the energy consumption of the TV we have chosen :  

![Energy consumption of the TV](EnergyChart.jpg)

As you can see, it's rated G, which means that it consumes a lot of energy. That's why for the future of this project we would be more likely to aim, for better energy consumption, with a more expensive TV, this would be a long-term investment, as the quality is better so it will last longer but it also consumes less energy, so it will be cheaper in the long run. There's also an ecological aspect to this, as it consumes less energy, it will be better for the environment.


# 8. Security 

Following the [ANSSI's guidelines](https://www.ssi.gouv.fr/en/cybersecurity-in-france/ciip-in-france/), we ensured that our product followed the DICP criteria. (AIPT)

- Availability : By using an Ethernet connection, we ensure that the screen will always be connected to the website.

- Integrity : By using an authentication system we ensure that no unauthorized person can connect to the website.

- Privacy : By using [Bcrypt](https://fr.wikipedia.org/wiki/Bcrypt), we ensure a good data encryption to prevent any potential hackers to steal any data.

- Traceability : We're using a database to store every modifications done, containing the user name and the date.

For more informations, we recommend you to visit the websites dedicated to that law.

# 9. Conclusion

We had a lot of freedom for this project which led us finding a lot of interesting ideas and implement them on our website.

We would like to thank the stakeholders, Jacobi, and especially Mr Usman SAEED who was here to answer to our questions and was always available when we needed, this project could never have been made without a good communication between our stakeholders and ALGOSUP.


  
