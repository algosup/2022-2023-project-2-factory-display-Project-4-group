# Technical Specifications

- Project: AppNews Network

- Author: Lucas AUBARD

- Team:

| Role              | Name                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Manager   | [Laurent BOUQUIN](https://www.linkedin.com/in/laurent-bouquin-60911a1b8/)                                                                                                                                                                                     |
| Technical Leader  | [Lucas AUBARD](https://www.linkedin.com/in/lucas-aubard-596b37251/)                                                                                                                                                                                           |
| Program Manager   | [Victor LEROY](https://www.linkedin.com/in/victor-leroy-64baa3229/)                                                                                                                                                                                           |
| Software Engineer | [Alexis LASSELIN](https://www.linkedin.com/in/alexis-lasselin-318649251/)                                                                                                                                                                                     |
| Q&A               | [Paul NOWAK](https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADBZVtkBb5ugjrZvpvZmqg93Lt3ap4Wj6S0&keywords=paul%20nowak&origin=RICH_QUERY_SUGGESTION&position=1&searchId=5c69c398-dac9-498a-9729-48bdc1fb2f66&sid=hb-) |

- Created on: 2022-11-08

- [Bug tracker](https://github.com/algosup/2022-2023-project-2-factory-display-Project-4-group/blob/QA/Bug_Tracker.md)

## Table of content

<details>

  > **Note**
  > You can navigate through the document using the table of contents as shown below.
  > ![Tips](https://docs.github.com/assets/cb-47415/images/help/repository/headings_toc.png)

</details>

## 1. Introduction

### 1.1. Overview

Project ordered by [Jacobi](https://jacobi.com/), supervised by [ALGOSUP](https://algosup.com).


### 1.2. Problem description

[Jacobi](https://jacobi.com/), a company located in Vierzon, needs a communication tool that could send informations based on what the user requests, in order to facilitate the information transmission between employees. [Jacobi](https://jacobi.com/) has their head office in Paris.

### 1.3. Glossary

| Word                                   | Definition                                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Smart TV                               | The LED Sign                                                                                    |
| AppNews Network                        | the application that [Jacobi](https://jacobi.com/) will have at the end of the project          |
| [ALGOSUP](https://algosup.com/fr.html) | School where the project is made                                                                |
| [Jacobi](https://jacobi.com/)          | The company that ordered the project                                                            |
| ANSSI                                  | Abreviation of "**A**gence **N**ationale de la **S**écurité des **S**ystèmes d'**I**nformation" |
| Bcrypt                                        |This is an encryption method used to reduce vulnerability of brute-force attacks
| Brute-force attack | A brute-force attack consists of an attacker submitting many passwords or passphrases (sequence of words) with the hope of eventually guessing correctly
| Cloud | A cloud is a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer
| Content produce | The content producer is in charge of creating and changing the displayed content
| Cyberattack | A cyberattack is an attempt from hackers to damage or destroy a computer network or system
| Viewer | We consider the viewer as someone viewing any of Jacobi's connected screen
## 2. Technical specifications
### 2.1. In scope

The final product should be able to :

- Send informations to the Smart TV
- Receive informations from the Smart TV
- Turn on the application if the TV is turned off
- Leave the TV on 24 hours a day
- Display weather and news widgets
- Modify widgets
- Schedule changes for a date
- Not being able to change the TV source so as not to watch another TV function than the one intended 
- Be able to make modifications remotely

### 2.2. Out of scope

The features that will arrive in the next versions :

- Adding new languages
- Smart screen in Paris to display informations
- Unique logins for each users
- An history of the displayed content with a tracking of who changed what

### 2.3. Hardware
#### Samsung TV

Here is the [wall arm](https://www.but.fr/produits/8006023265794/Pack-support-mural-40-a-80-MELICONI-PACK-VESA-400-FIXE.html?comingFrom=t2s) and the [smart TV](https://www.electrodepot.fr/led-samsung-55au6925-uhd-4k-smart.html?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke5Y3svlndPqg3oE-S6rhCtynBwlKOWwZm90iZxnxMvUwbKh55gkmPQaAhvlEALw_wcB) samsung that uses the operating system Tizen that we have chosen for the project. We chose it for these reasons :

- It's cheaper than monitors
- It's easier to install with a wall arm
- It has a good graphic uality
- Bigger than a monitor

### 2.4. Software
#### 2.4.1. Tizen Studio

It's an application that allows to translate html, css and js code into a web app by putting the smart TV in developer mode

#### 2.4.2. Firebase

It's a database that allows to store mails, passwords and all the information that will be displayed on the smart TV

## 3. Software architecture

#### 3.1. getCurrentTimeDate()

It's a function that allows to get the current time.

#### 3.2. getWeather()

It's a function that allows to get the weather.

#### 3.3. login()

This function allows us to connect to the website through a login page.

#### 3.4.displayTemplate()

This function allows us to display the template of the website.

#### 3.5. displaySelected()

This function allows to display the modification boxes for the widgets.

#### 3.6. initializeFirebase()

This function allows us to initialize the firebase database.

#### 3.7. displayTemplate()

This function allows us to display the selected template size.

#### 3.7. rotateTemplate()

This function allows us to rotate the template.

#### 3.8. submitTemplate()

This function allows us to submit the template.
