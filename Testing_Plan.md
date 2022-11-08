# Testing Plan

## Features:

### Login:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Good password | We enter our login and password to get connected| 3 |    1. Enter your login <br /> 2.Enter your password  <br /> 3. Click on login     |    Get connected in the website    |     To be tested       |        
| Change password | In case we don't remember our password, we want to click on a link sending us to a page where we could modify it.| 1 |    1. Click on "forgotten password ?"<br />     |    Go to the changing password procedure page    |     To be tested       |  
| Wrong password | Display a message when the password entered is wrong.| 3 |    1. Enter your login <br /> 2.Enter a wrong password  <br /> 3. Click on login     |    The website displays "wrong password".   |     To be tested       |
| Inexisting user | Display a message when the login doesn't exist.| 3 |    1. Enter a random login <br /> 2.Enter a random password  <br /> 3. Click on login     |    The website displays "This user doesn't exist".   |     To be tested       |

### Website Navigation:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Screens| Navigate to the "Screens" page| 1 |    1. Outside the Screens page, click on "Screens" on your navbar <br /> |    The website (excepted the navbar) should switch to "Screens" page.   |     To be tested       |    
| Template modifying| Navigate to the "Template modifying" page| 1 |    1. Outside the Template modifying page, click on "Template modifying" on your navbar <br /> |    The website (excepted the navbar) should switch to "Template modifying" page.   |     To be tested       |    
| Settings| Navigate to the "Settings" page| 1 |    1. Outside the Settings page, click on "Settings" on your navbar <br /> |    The website (excepted the navbar) should switch to "Settings" page.   |     To be tested       |   
| Log out| Get disconnected from your website account| 3 |    1. Click on "Log Out" on your navbar <br /> 2. Display the message "Are you sure ?" <br/> 3. Click on "Yes"|    The website should switch to "Login" page and you get disconnected.   |     To be tested       |  

### Screens page:

| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Filter TV | Filter a particular TV among the list of connected screens| 1 |    1. Filter your TV according to your research on the filter menu <br /> |    Display on the right all the screens corresponding to your research   |     To be tested       |       
| Screen Zoom | When we select a screen, it get zoomed in.| 1 |    1. Select the TV Screen<br />     |    The selected screen is zoomed in   |     To be tested       |  
| TV State | When a remote screen is activated, the website label in green the corresponding screen on the page| 1 |    1. Turn on the TV Screen<br />     |    The screen is labeled in green    |     To be tested       | 
| Screen Update| Update a particular screen with your actual template| 3 |    1. Select your screen<br /> 2. Click on "Update with the template".<br /> 3. Turn on the same TV Screen<br />     |    The screen is updated with the edited template    |     To be tested       |  
| Select several screens| Turn on a mode to select several screens on the page| 2 |    1. Click on "Select several screens" <br /> 2. Start selecting one or several screens<br />     |    The selected screens's background colors are darkened.    |     To be tested       | 
| Update many screens | Update several screens with your actual template at the same time| 4 |    1. Click on "Select several screens" <br /> 2. Select all your screens<br /> 3. Click on "Update all of them with the template".<br /> 4. Turn on all the selected TV screens<br />     |    The screen is updated with the edited template    |     To be tested       | 
| Quit several screens mode| Turn off the select several screens mode| 3 |    1. Click on "Select several screens" <br /> 2. Start selecting one or several screens<br />3. Click on the red cross below "Cancel the selection".<br />       |    The selected screens's background colors which were darkened are back to normal.    |     To be tested       | 

### Remote TV Screens:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Check Widget | Verify if a widget with real time data is updated on the TV| 1 |    1. Turn on the screen. <br/>|    The TV screen should have the widget with the right real time data. |     To be tested       | 
| Prevent screen Cancel | Prevent an user to change the screen to do something else on TV| 1 |    1. Turn on the screen. <br/> 2. Try to change channel with the TV remote. <br/>|    The TV screen will display the message "it's currently not possible to leave the info application." at the top right corner. |     To be tested       |

### Settings:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Change language | Switch the website language from English to French| 2 |    1. Select language  <br /> 2. Click on OK|    The website should restore and be set in French  |     To be tested       |  
| Set to Dark mode| Change the website dominant background color to black | 1 |    1. Select "dark mode"  <br />|    The website should restore and be set with its main background color in black  |     To be tested       | 
| Set to Light mode| Change the website dominant background color to white | 1 |    1. Select "light mode"  <br />|    The website should restore and be set with its main background color in white  |     To be tested       | 



### Template modifying:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Edit info | Edit an information on the template| 2 |    1. Edit your information. <br/> 2. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the edited information  |     To be tested       | 
| Add a widget info | Add a widget which will display the current weather| 4 |    1. Select the widgets tool. <br/> 2. Select the widgets form you want. <br/> 3. Drag it on the template's grid at the location you want. <br/> 4. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the added widget  |     To be tested       | 
| Remove Element| Remove an element out of the template| 3 |    1. Right click on the element. <br/> 2. Select "Delete". <br/> 3. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the removed element  |     To be tested       |
| Move Element| Change the position of an element on the template's grid| 3 |    1. Select the element. <br/> 2. Drag it on the template's grid at its new location. <br/> 3. Click on "Update" <br/>|    The page should show a small screen of a preview of the template with the element at its new position  |     To be tested       |
| Copy and Paste Element| Copy and paste an element to create a new one on the template's grid.| 4 |    1. Right click on the element. <br/> 2. Click on "Copy". <br/> 3. Right click anywhere on the grid. <br/> 4. Click on "Paste" <br/>|    A copy of the element should appear at the mouse's location.  |     To be tested       |
| Select Several Elements| Make a selection of several element to either move, copy or delete them| 2 |    1. Right click anywhere on the screen. <br/> 2. Drag the selecting square over the elements you want to select. <br/>|    The selected elements should be covered by a solid border. |     To be tested       |
| Out of place| Prevent a selected element to be placed on another one.| 3 |    1. Select an element. <br/> 2. Drag it above another element by holding the left click. <br/> 3. Release the mouse. <br/>|    The selected element will be back to its original location and the message "cannot be placed" will be displayed. |     To be tested       |
| Adjust Element Size| Allow to either reduce or grow an element size.| 3 |    1. Right click on an element. <br/> 2. Select one of the white dots at the corner with your mouse. <br/> 3. Hold the mouse and move the white dot diagonally. <br/>|    The selected element will either grow in size or be reduced. |     To be tested       |



