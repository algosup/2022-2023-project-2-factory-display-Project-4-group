# Testing Plan

## Table of contents


- [Table of contents](#table-of-contents)
- [Login](#login)
- [Website Navigation](#website-navigation)
- [Screens page](#screens-page)
  - [Check screens](#check-screens)
  - [Manage screens Updates](#manage-screens-updates)
  - [Manage screens Templates](#manage-screens-templates)
  - [Date Parameters](#date-parameters)
    - [Update Date Parameters](#update-date-parameters)
    - [Template Date Parameters](#template-date-parameters)
  - [Interactive UI](#interactive-ui)
- [Remote TV Screens](#remote-tv-screens)
  - [Check TVs](#check-tvs)
  - [TV Application](#tv-application)
- [Settings](#settings)
- [Template modifying](#template-modifying)
  - [Update Template](#update-template)
  - [Manage Templates](#manage-templates)
  - [Add Elements](#add-elements)
  - [Modify Elements](#modify-elements)
  - [Change Parameters](#change-parameters)
  - [Manage Elements](#manage-elements)
  - [Remove Elements](#remove-elements)
  - [Use Element Tools](#use-element-tools)
  - [Tools UI](#tools-ui)

## Login:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Good password | We enter our login and password to get connected.| 3 |    1. Enter your login <br /> 2.Enter your password  <br /> 3. Click on login     |    The page display the website.    |     Success, but it doesn't work on Mac.       |     High     |        
| Wrong password | Display a message when the password entered is wrong.| 3 |    1. Enter your login <br /> 2.Enter a wrong password  <br /> 3. Click on login     |    The website displays "wrong password".   |     To be tested       |     Medium    |   
| Forgot password | Display a pop up to enter our username/email in case we forgot our password.| 1 |    1. Click on "forgotten password ?"<br />     |    The popup allowing us to type our username or email appears on screen.   |     To be tested       |     Low     |
| Send New password request | Go to your mail application to allow us sending a new Password request.| 3 |    1. Click on "forgotten password ?"<br /> 2. Type your username/email.<br /> 3. Click on "OK"<br />    |    This will open directly the default mail application with the prewritten message to send.   |     To be tested       |     Low     |         
| Inexisting user | Display a message when the login doesn't exist.| 3 |    1. Enter a random login <br /> 2.Enter a random password  <br /> 3. Click on login     |    The website displays "This user doesn't exist".   |     To be tested       |     Medium     |   

## Website Navigation:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Screens| Navigate to the "Screens" page| 1 |    1. Outside the Screens page, click on "Screens" on your navbar <br /> |    The website (excepted the navbar) should switch to "Screens" page.   |     To be tested       |     High     |       
| Template modifying| Navigate to the "Template modifying" page| 1 |    1. Outside the Template modifying page, click on "Template modifying" on your navbar <br /> |    The website (excepted the navbar) should switch to "Template modifying" page.   |     To be tested       |     High     |       
| Settings| Navigate to the "Settings" page| 1 |    1. Outside the Settings page, click on "Settings" on your navbar <br /> |    The website (excepted the navbar) should switch to "Settings" page.   |     To be tested       |     High     |      
| Log out| Get disconnected from your website account| 3 |    1. Click on "Log Out" on your navbar <br /> 2. Display the message "Are you sure ?" <br/> 3. Click on "Yes"|    The website should switch to "Login" page and you get disconnected.   |     To be tested       |     Medium     |     

## Screens page:

### Check screens:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Filter TV | Filter a particular TV among the list of connected screens| 1 |    1. Filter your TV according to your research on the filter menu <br /> |    Display on the right all the screens corresponding to your research   |     To be tested       |     Medium     |          
| Screen Zoom | When we select a screen, it get zoomed in.| 1 |    1. Select the TV Screen<br />     |    The selected screen is zoomed in   |     To be tested       |     Low     |     
| Last update | The website labels the screens which got the last update.| 1 |    1. Update a TV screen <br />   |    The screen is labeled.   |     To be tested       |     Low     |   
| Screen History | Check the history of the screen modifications.| 2 |    1. Select a screen. <br /> 2. Click on "View History". <br />   |    The website display all informations about the screens updates and template changes.   |     To be tested       |     Medium     |     


### Manage screens Updates:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |  
| Screen Update| Update a particular screen with your actual template| 4 |    1. Select your screen<br /> 2. Click on "Update with the template".<br /> 3. Click on "Confirm Update"<br /> 4. Turn on the same TV Screen<br />     |    The screen is updated with the edited template    |     To be tested       |     High     |       
| Update many screens | Update several screens with your actual template at the same time| 4 |    1. Select all your screens<br /> 2. Click on "Update all".<br /> 3. Click on "Confirm All Updates".<br />  4. Turn on all the selected TV screens<br />     |    The screen is updated with the edited template    |     To be tested       |     High     |    

### Manage screens Templates:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Change screen template | Change the template used which will be displayed on the selected screen| 5 |    1. Select your screen<br /> 2. Click on "Change the template".<br /> 3. Choose the template.<br /> 4. Click on "Confirm Template Change".<br /> 5. Turn on the same TV Screen<br />     |    The screen is updated with the new template    |     To be tested       |     High     |     
| Change several screens templates | Change the template of several screens with the same template all at the time| 5 |    1. Select all your screens<br /> 2. Click on "Change all templates".<br /> 3. Choose the template from your template database.<br /> 4. Click on "Confirm Template Change".<br /> 5. Turn on all the selected TV screens<br />     |    All screens are updated with the new template    |     To be tested       |     High     |   

### Date Parameters:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Set date parameters for Update| Parameter a screen so you can set at which time it is updated.| 6 |    1. Select your screen<br /> 2. Click on "Update with the template".<br />  3. Select "Set a Time change" on the parameters.<br /> 4. Set the time parameters for the screen.<br /> 5. Click on "Confirm Update".<br /> 6. Turn on the same TV Screen and wait at the right moment.<br />     |    The screen will be updated at the moment we set.    |     To be tested       |     High     |      
| Set date parameters for several screens Update version| Parameter several screens so you can set at which time it they are all updated.| 6 |    1. Select your screens<br /> 2. Click on "Update all". <br />3. Click on "Set a Time change for all the screens".<br /> 4. Set the time parameters for all screens.<br /> 5. Click on "Confirm All Updates".<br /> 6. Turn on all the TV Screens and wait at the right moment.<br />     |    All screens will be updated at the moment we set.    |     To be tested       |     High     |   
| Set date parameters for Template change| Parameter a screen so you can set at which time its template is changed.| 6 |    1. Select your screen<br /> 2. Click on "Change the template".<br />  3. Select your template from the database.<br /> 4. Set the time parameters for the screen.<br /> 5. Click on "Confirm Template Change".<br /> 6. Turn on the same TV Screen and wait at the right moment.<br />    |    The screen will be updated with the new template at the moment we set.    |     To be tested       |     High     |        
| Set date parameters for several screens Template Change Version| Parameter several screens so you can set at which time they switch from one template to another.| 6 |    1. Select your screens<br /> 2. Click on "Change all templates".<br /> 3. Choose the template from your template database. <br />  4. Set the time parameters for all screens.<br /> 5. Click on "Confirm All Templates Changes".<br /> 6. Turn on all the TV Screens and wait at the right moment.<br />     |    All screens will be updated with the new template at the moment we set.    |     To be tested       |     High     |

### Interactive UI :
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |
| Select several screens| Click on the square at the top right corner of a screen to select it, allowing a potential selection of several screens.| 2 |    1. Click on a square at the top right corner of a screen <br /> 2. Do the same for other screens<br />     |    The selected screens's squares contain a cross.    |     To be tested       |     High     |
| Use Filter| Display a research menu to filter screens.| 1 |    1. Click on the "Filter' button on the left side of the screen. <br />      |    A small filter contextual menu should appear on the left.    |     To be tested       |     Medium     |
| Use Time parameters| Display a pop up to set time parameters of a screen.| 3 |    1. Click on the screen of your choice. <br /> 2. Click on either "Update with the template" or "Change with the template". <br /> 3. Select "Set Time Parameters". <br />     |    The parameters are showing time parameters to show date and hour.    |     To be tested       |     High     |
| Update All Button| Display a pop up to update several screens.| 2 |    1. Select at least 2 screens. <br /> 2. Click the button "Update All". <br />    |    The button should appear when at least 2 screens are selected, and a pop-up to parameter the update of several screens should appear when clicked.    |     To be tested       |     High     |
| Change All Template Button| Display a pop up to change the template of several screens.| 2 |    1. Select at least 2 screens. <br /> 2. Click the button "Change All Templates". <br />    |    The button should appear when at least 2 screens are selected, and a pop-up to set the parameters (new template and time parameters) for all templates selected when clicked.     |     To be tested       |     High     |                  
| Select New Template| Display a pop up to selecting the new template for 1 or several screens.| 2 |    1. Go to a Change Template parameters pop-up (either for one or several). <br /> 2. Click on the Template Area. <br />    |    A pop-up to select the template of our choice is displayed.     |     To be tested       |     High     |


## Remote TV Screens:

### Check TVs:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Check Widget | Verify if a widget with real time data is updated on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should have the widget with the right real time data. |     To be tested       |     High     |    
| Check Hour | //Verify if the real time hour is updated on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should display the actual time and be updated dynamically. |     To be tested       |     High     |    
| Check Picture | //Verify if a picture is displayed on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should display the picture without issue. |     To be tested       |     Medium     |    
| Check Changeable Element | //Verify if a an element displayed on screen can be switched with another one smoothly on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should display the element, and then this element is replaced smoothly by another one for a while. |     To be tested       |     Medium     |   
| Check restricted Element | //Verify if a an element restricted on a screen is displayed on this TV but doesn't appear in another one| 1 |    1. Turn on the 2 screens, with one allowed to the restricted element and the other isn't. <br/>|    Only the TV screen allowed will display the restricted element. |     To be tested       |     High    |   
| Check Background Color | //Verify if the template's background color is displayed on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should display with the updated background color. |     To be tested       |     Low     |   
| Check Background Picture | //Verify if the template's background picture is displayed on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should display with the updated background picture. |     To be tested       |     Low     |  

### TV Application:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |
| Open Application directly | When we switch on a TV, it will immediately open to the application with the template.| 1 |    1. Turn on the TV when it's shut down. <br/>|    The TV screen will immediately display the template. |     To be tested       |     High     |       
| Prevent screen Cancel | Prevent an user to change the screen to do something else on TV| 2 |    1. Turn on the screen. <br/> 2. Try to change channel with the TV remote. <br/>|    The TV screen will display the message "it's currently not possible to leave the info application." at the top right corner. |     To be tested       |     High     |   

## Settings:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Change language | Switch the website language from English to French| 2 |    1. Select language  <br /> 2. Click on OK|    The website should restore and be set in French  |     To be tested       |     Low     |     
| Set to Dark mode| Change the website dominant background color to black | 1 |    1. Select "dark mode"  <br />|    The website should restore and be set with its main background color in black  |     To be tested       |     Medium     |    
| Set to Light mode| Change the website dominant background color to white | 1 |    1. Select "light mode"  <br />|    The website should restore and be set with its main background color in white  |     To be tested       |     Medium     |
| Change password | Display a pop up to enter our username/email in case we want to change our password.| 1 |    1. Click on "Change password"<br />     |    The popup allowing us to type our username or email appears on screen.   |     To be tested       |     Low     |
| Send New password request | Go to your mail application to allow us sending a new Password request.| 3 |    1. Click on "Change password".<br /> 2. Type your username/email.<br /> 3. Click on "OK".<br />    |    This will open directly the default mail application with the prewritten message to send.   |     To be tested       |     Low     |      



## Template modifying:

### Update Template:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Update template | Save your template after editing it. | 2 |    1. Edit your template. <br/> 2. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the edited information  |     To be tested       |     High     |   
| Undo previous action | Undo the previous action you did while editing your template. | 2 |    1. Edit your template. <br/> 2. Do the "undo" shortcut. <br/>|    The template should go back to its previous state.  |     To be tested       |     Medium     |    
| Redo action after undo | After undoing an action in your template, gives the possibility to redo the cancelled action again. | 3 |    1. Edit your template. <br/> 2. Do the "undo" shortcut. <br/> 3.Do the "redo" shortcut.<br/> |    After redoing an action in your template, the template return to its last modification.  |     To be tested       |     Medium     |    

### Manage Templates:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Create template | Create a new template from scratch which can be used. | 4 |    1. Click on "Create new template" above the actual template. <br/> 2. Click on "Start from scratch" <br/> 3. Type your new template's name. <br/> 4. Click on "Create". <br/>|    The website will replace the actual template with a new blank template we created.  |     To be tested       |     High     |   
| Create template using old template| Create a new template which is a copy of your actual template so we can edit it. | 5 |    1. Open an existing template. <br/> 2. Click on "Create new template" above the actual template. <br/> 3. Click on "Copy this template to create a new one". <br/> 4. Type your new template's name. <br/> 5. Click on "Create". <br/>|    The website show seemingly the same template but with the new name displayed.  |     To be tested       |     Medium     |   
| Select template | Choose the template to work with among those we already saved. | 3 |    1. Click on "Select template" above the actual template. <br/> 2. Search and Select the template you want. <br/> 3. Click on "Edit template". <br/>|    The website will then show the template we want to edit.  |     To be tested       |     High     |   
| Rename template | Choose the template you want to rename among those we already saved. | 5 |    1. Click on "Select template" above the actual template. <br/> 2. Search and Select the template you want. <br/> 3. Click on "Rename template". <br/> 4. Type the updated name. <br/> 5. Click on "Ok". <br/>|    The template selection show the template with the new name.  |     To be tested       |     Medium     |   
| Delete template on screen | Delete the actual template on screen. | 2 |    1. Click on "Delete template" above the actual template. <br/> 2. Click on "Yes" to confirm. <br/>|    The template will now be completely blank.  |     To be tested       |     High     |   
| Delete template on screen on the selection menu| Delete a template among those we already saved. | 4 |    1. Click on "Select template" above the actual template. <br/> 2. Search and Select the template you want. <br/> 3. Click on "Delete template". <br/> 4. Click "Yes" to confirm. <br/>|    The deleted template should disappear from the selection list.  |     To be tested       |     High     |


### Add Elements:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Add a text| Add a text area| 5 |    1. Select the text tool. <br/> 2. Select the text form you want. <br/> 3. Drag it on the template's grid at the location you want. <br/> 4. Type the text you want <br/> 5. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the added text area.  |     To be tested       |     Medium     | 
| Add a widget| Add a widget which will display the current weather| 4 |    1. Select the widgets tool. <br/> 2. Select the widgets form you want. <br/> 3. Drag it on the template's grid at the location you want. <br/> 4. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the added widget  |     To be tested       |     High     | 
| Add a picture| Add a picture which will be displayed on the template.| 4 |    1. Select the pictures tool. <br/> 2. Select the picture you want. <br/> 3. Drag it on the template's grid at the location you want. <br/> 4. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the added picture.  |     To be tested       |     Low     |
| Add the changeable element| Add a particular element which can change into another, like a picture to another picture, or a text in another text.| 6 |    1. Select the changeable tool.  <br/> 2. Drag it on the template. <br/> 3. Select the first element you want and drag it inside the changeable module.  <br/> 4. Select the second element you want and drag it inside the changeable module.  <br/> 5. Do the transition settings. <br/> 6. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the added changeable element. Plus, when hovering a mouse over the changeable elements, it should display the order of the elements displayed.  |     To be tested       |     Medium     |  

### Modify Elements:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Edit text| Modify a text from the template.| 3 |    1. Click on the text element. <br/> 2. Modify your text. <br/> 3. Click on "Update". <br/>|    The template preview show the modified text. |     To be tested       |     Medium     |
| Edit widget| Modify a widget from the template.| 3 |    1. Click on the widget element. <br/> 2. Modify your widget. <br/> 3. Click on "Update". <br/>|    The template preview show the modified widgate. |     To be tested       |     Medium     |
| Modify size| Allow to either reduce or grow an element size.| 3 |    1. Right click on an element. <br/> 2. Select one of the white dots at the corner with your mouse. <br/> 3. Hold the mouse and move the white dot diagonally. <br/>|    The selected element will either grow in size or be reduced. |     To be tested       |     Medium     |
| Change Background Color| Change the background color of the template.| 2 |    1. Click on the "change background color" icon above the template. <br/> 2. Select your color. <br/>|    The background color of the template is changed. |     To be tested       |     Low     |
| Use picture as background| Use a picture as the template's background.| 3 |    1. Click on the picture icon over the template. <br/> 2. Select your picture from your pictures database. <br/> 3. Click "OK". <br/>|    The picture we selected is now used as the background's template. |     To be tested       |     Low     |

### Change Parameters:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Change Color| Change the color of an element (text area, widget...).| 4 |    1. Right click on the element. <br/> 2. Select "Color" on the contextual menu. <br/> 3. Choose a color. <br/> 4. Click on "Update". <br/>|    The template preview show the element with the new color. |     To be tested       |     Low     |
| Element Restriction| Restrict an element to only a few screens so only them could display them.| 5 |    1. Right click on the element. <br/> 2. Select "Restrictions" on the contextual menu. <br/> 3. Select "Yes". <br/> 4. Choose the screens with the restricted element.  <br/> 5. Click on "Update". <br/>|    The template preview show the element with a small lock icon. |     To be tested       |     High     | 
| Change Text Font| Change the text font of an element (text area, widget...).| 4 |    1. Right click on the element. <br/> 2. Select "Font" on the contextual menu. <br/> 3. Choose a Font. <br/> 4. Click on "Update". <br/>|    The template preview show the element with the new text font. |     To be tested       |     Medium     | 
| Change Text Size| Change the text size of an element (text area, widget...).| 3 |    1. Right click on the element. <br/> 2. Choose a text size. <br/> 3. Click on "Update". <br/>|    The template preview show the element with the updated text size. |     To be tested       |     Medium     | 

### Manage Elements:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |  
| Select Element| Select an element we want to interact with| 1 |    1. Click the element. <br/>|    White dots around the element's border should be appearing.  |     To be tested       |     Medium     |
| Display contextual menu| Display a contextual menu to allow modifications on the template.| 1 |    1. Right click either on the grid or on an element. <br/>|    The contextual menu should be appearing.  |     To be tested       |     High     |
| Move Element| Change the position of an element on the template's grid| 3 |    1. Select the element. <br/> 2. Drag it on the template's grid at its new location. <br/> 3. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the element at its new position  |     To be tested       |     High     |
| Copy and Paste Element| Copy and paste an element to create a new one on the template's grid.| 4 |    1. Right click on the element. <br/> 2. Click on "Copy". <br/> 3. Right click anywhere on the grid. <br/> 4. Click on "Paste" <br/>|    A copy of the element should appear at the mouse's location.  |     To be tested       |     High     |
| Select Several Elements| Make a selection of several element to either move, copy or delete them| 2 |    1. Right click anywhere on the screen. <br/> 2. Drag the selecting square over the elements you want to select. <br/>|    The selected elements should be covered by a solid border. |     To be tested       |     High     |
| Out of place| Prevent a selected element to be placed on another one.| 3 |    1. Select an element. <br/> 2. Drag it above another element by holding the left click. <br/> 3. Release the mouse. <br/>|    The selected element will be back to its original location and the message "cannot be placed" will be displayed. |     To be tested       |     High     |

### Remove Elements:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Remove Element| Remove an element out of the template| 3 |    1. Right click on the element. <br/> 2. Select "Delete". <br/> 3. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the removed element  |     To be tested       |     High     |
| Remove several elements| Remove several elements out of the template| 4 |    1. Right click on the screen.  <br/> 2. Drag the selecting square over the elements you want to delete. <br/> 3. Select "Delete". <br/> 4. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with all the removed elements  |     To be tested       |     High     |

### Use Element Tools:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Display text menu| Display a contextual menu showing differents text areas forms| 1 |    1. Select "text" tool. <br/>|    A contextual menu showing several forms for text areas is displayed  |     To be tested       |     Low     |
| Display widget menu| Display a contextual menu showing differents widgets forms| 1 |    1. Select "widgets" tool. <br/>|    A contextual menu showing several shapes for widgets is displayed  |     To be tested       |     High     |
| Display picture menu| Display a small menu to select a picture from an image database.| 1 |    1. Select "picture" tool. <br/>|    A small menu showing several pictures available is displayed  |     To be tested       |     Low     |
| Drag element| Allow to drag one element template ot the grid| 2 |    1. Select any element from the tools. <br/> 2. Hold your element with your mouse left click. <br/>|    You can drag the element template while holding the mouse to the grid. |     To be tested       |     High     |

### Tools UI:
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Create New Template pop-up| Display a pop-up for selecting how to create a new template.| 1 |    1. Click on "Create New Template" button. <br/>|    A pop-up proposing "Start from Scratch" and "Copy this template to create new template" should appear.  |     To be tested       |     High    |
| Select New Template pop-up| Display a pop-up for selecting the template to work with.| 1 |    1. Click on "Select template" above the actual template.<br/>|    A pop-up showing all available templates should appear.  |     To be tested       |     High    |
| Select Color pop-up| Display a pop-up for selecting the color of an element.| 2 |    1. Right Click on an element.<br/> 2. Select "Color" on the contextual menu. <br/>|    A pop-up showing a set of color should appear.  |     To be tested       |     Low     |
| Select Background Color pop-up| Display a pop-up for selecting the background color of the template.| 1 |    1. Click on the "change background color" icon above the template.<br/>|    A pop-up showing a set of color should appear.  |     To be tested       |     Low     |
| Select Background Picture pop-up| Display a pop-up for selecting the Picture used as a background.| 1 |    1. Click on the picture icon over the template.  <br/>|    A pop-up showing a list of available pictures should appear.  |     To be tested       |     Low     |
| Select Restrictions pop-up| Display a pop-up for selecting the screens which could see the selected element.| 3 |    1. Right click on the element. <br/>2. Select "Restrictions" on the contextual menu. <br/>3. Select "Yes". <br/>|    A pop-up showing a list of all your screens should appear.  |     To be tested       |     High     |







