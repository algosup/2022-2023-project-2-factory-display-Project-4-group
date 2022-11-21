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

- [Bug tracker]()

## Table of content

<details>

  > **Note**
  > You can navigate through the document using the table of contents as shown below.
  > ![Tips](https://docs.github.com/assets/cb-47415/images/help/repository/headings_toc.png)

</details>

## 1. Introduction

### 1.1 Overview

Project ordered by [Jacobi](https://jacobi.com/), supervised by [ALGOSUP](https://algosup.com).


### 1.2 Problem description

[Jacobi](https://jacobi.com/), a company located in Vierzon, needs a communication tool that could send informations based on what the user requests, in order to facilitate the information transmission between employees. [Jacobi](https://jacobi.com/) has their head office in Paris.

### 1.3 Glossary

| Word                                   | Definition                                                                             |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| Smart TV                               | The LED Sign                                                                           |
| AppNews Network                        | the application that [Jacobi](https://jacobi.com/) will have at the end of the project |
| [ALGOSUP](https://algosup.com/fr.html) | School where the project is made                                                       |
| [Jacobi](https://jacobi.com/)          | The company that ordered the project                                                   |

### 1.4 In scope

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

### 1.5 Out of scope

The features that will arrive in the next versions :

- Adding new languages
- Smart screen in Paris to display informations
- Unique logins for each users

### 1.6 Hardware
#### Samsung TV

Here is the [smart TV](https://www.but.fr/produits/8806094416671/Televiseur-55-138-cm-4K-SAMSUNG-55AU7025.html?utm_campaign=LIA_Brand&utm_source=google&utm_medium=cpc&gclid=CjwKCAiA68ebBhB-EiwALVC-NnkEjwU159bcN8QK8JjI0SckVqkgc4viZTl09nVMytn0d5ASNoSoehoCzWkQAvD_BwE&gclsrc=aw.ds) samsung that uses the operating system Tizen we have chosen for the project. We chose it for these reasons :

- It's cheaper than monitors
- It's easier to install with a [wall arm](https://www.but.fr/produits/8006023265794/Pack-support-mural-40-a-80-MELICONI-PACK-VESA-400-FIXE.html?comingFrom=t2s)
- It has a good graphic uality
- Bigger than a monitor

#### Tizen Studio

It's an application that allows to translate html, css and js code into a web app by putting the smart TV in developer mode

#### Firebase

It's a database that allows to store mails, passwords and all the information that will be displayed on the smart TV
