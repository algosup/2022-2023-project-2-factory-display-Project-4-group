<details>
<summary><b id="toc">Table of Content</b></summary>

- [AppNews Network](#appnews-network)
  - [Glossary](#glossary)
- [Introduction](#introduction)
  - [Scope](#scope)
  - [In Scope](#in-scope)
  - [Out Of Scope](#out-of-scope)
- [Functional Requirements](#functional-requirements)
  - [Assumptions](#assumptions)
  - [Constraints](#constraints)
  - [Use Cases Analysis](#use-cases-analysis)
  - [Functional Analysis](#functional-analysis)
  - [About the laws](#about-the-laws)

</details> 
  
# AppNews Network



<sub> Author : [Victor Leroy](https://www.linkedin.com/in/victor-leroy-64baa3229/) (Program Manager)

<sub> Team : [Laurent Bouquin](https://www.linkedin.com/in/laurent-bouquin-60911a1b8/) (Project Leader), [Lucas Aubard](https://www.linkedin.com/in/lucas-aubard-596b37251/) (Technical Leader),   
  [Alexis Lasselin](https://www.linkedin.com/in/alexis-lasselin-318649251/) (Software Engineer), [Paul Nowak](https://www.linkedin.com/in/paul-nowak-0757a61a7/) (Quality insurance) </sub>

## Glossary

- **AppNews Network** : The project we are working on.  
  
- **Cyberattack** : A cyberattack is an attempt from hackers to damage or destroy a computer network or system.

- **ANSSI** : Abreviation of "**A**gence **N**ationale de la **S**écurité des **S**ystèmes d'**I**nformation"

- **Bcrypt** : This is an encryption method used to reduce vulnerability of brute-force attacks.

- **Brute-force attack** : A brute-force attack consists of an attacker submitting many passwords or passphrases (sequence of words) with the hope of eventually guessing correctly.

# Introduction

[Jacobi](https://www.jacobi.net), a company located in Vierzon, needs a communication tool that could send informations based on  what the user requests, in order to facilitate the information transmission between employees. Jacobi has their head office in Paris. 

## Scope

The most important points of this project is to be able to control the displayed content remotely, they also have to be independent to each other, which means that we could display different content on each screen. 

## In Scope

These are the mains features that are planned in our V0 : 
- Adapt the content to the screen size
- Widgets for weather, news, etc. that will be updated on a regular basis
- An history of the displayed content with a tracking of who changed what
- A login page the website to ensure that only authorized people can use it (there will only be 4 people who will have their access granted to the tool)
- Planning messages for a given date (i.e Friday for Monday)
- English and French languages
- Draft system (you can start writing a message and finish writing it later)

  
## Out Of Scope
 
Due to time and resources constraints, these features might be included in the upcoming versions :
- Different languages (other than English or French)
- Smart screen in Paris to display informations
- Unique logins for each users 




# Functional Requirements

## Assumptions
- Content will be displayed horizontally.
- Both buildings are connected to the same network.
- The screens will be connected to the same network.  
  
## Constraints

- There are 3 shifts per day. 
- Small shutdown at Christmas time.
- Wi-Fi sometimes had issues.

## Use Cases Analysis 



| Use Case # | Addresses Business/User Requirement n° | Name                                                  | Description                                                                               | Actor(s)                                                 | Pre-Conditions                                                                                                                                                                                                                                                                                                                                                                                                                                       | Flow of Events                                                                                                                                                                                        | Post-Conditions                                                                                                                                         | Exit Criteria                                                                                                                 |
| ---------- | -------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UC 1       | U.R #1                                | Login                            | The customer wants to login to the website via the login page | Content producer | Actor must have access   to the login informations which will be given to the authorized users the device must be connected to the Network in order to access the website         | The actor enters its credentials in the input boxes then press the login button                                  | A pop-up shows up saying "successefully logged in" the actor then have access to the website      | The case is complete when the user is successefully logged in   
| UC 2      | U.R #2                               | Watch screen                           | The customer wants to watch what is displayed on the screen through the website | Content producer | Actor must be logged in and connected to the device he wants to display the content on         | The actor goes to the screen displaying page and selects the screen he wants to watch                                  | The actor can now watch what is displayed on the screen     | The case is complete when the user can watch the screen     
| UC 3      | U.R #3                               | Change displayed content                           | The customer wants to change the displayed content | Content producer | Actor must be logged in and connected to the device he wants to display the content on he also must have selected the screens that he wants to change the content          | The actor selects the screen that he wants to change the content, he then can either write a message or change any widget                                   | The actor can now see their changes displayed on the screen      | The case is complete when the user see their message on the screen                                                         
| UC 4      | U.R #4                               | Planning message                           | The customer wants to schedule a message for the next week | Content producer | Actor must be logged in and have selected the screen he wants to display the content on          | The actor types the message that he wants to be scheduled, he then clicks on the "Scheduling" button. After clicking the button, the actor can now choose the date he wants, after selecting the date he then clicks the "Confirm scheduling" button                                   | A message saying "message successfully scheduled" appears       | The case is complete when the scheduled message is sent
<!-- | UC 5      | U.R #5                               | Planning message                           | The customer wants to schedule a message for the next week | Content producer | Actor must be logged in and have selected the screen he wants to display the content on          | The actor types the message that he wants to be scheduled, he then clicks on the "Scheduling" button. After clicking the button, the actor can now choose the date he wants, after selecting the date he then clicks the "Confirm scheduling" button                                   | A message saying "message successfully scheduled" appears       | The case is complete when the scheduled message is sent -->


  

## Functional Analysis

- UC1 (Login to the website) :  
    - User connects to the website
    - Enters his credentials
    - Accesses the website
    - Case is closed

- UC2 (Watch screen) :  
    - User accesses the website
    - User selects the screen he wants to watch
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


## About the laws

Following the [ANSSI's guidelines](https://www.ssi.gouv.fr/en/cybersecurity-in-france/ciip-in-france/), we ensured that our product followed the DICP criteria. (AIPT)

- Availability : By using an Ethernet connection, we ensure that the screen will always be connected to the website.

- Integrity : By using an authentication system we ensure that no unauthorized person can connect to the website.

- Privacy : By using [Bcrypt](https://fr.wikipedia.org/wiki/Bcrypt), we ensure a good data encryption to prevent any potential hackers to steal any data.

- Traceability : We're using a database to store every modifications done, containing the user name and the date.

For more informations, we recommend you to visit the websites dedicated to that law.




  