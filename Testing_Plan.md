# Testing Plan

## Explanation

lorem

## Features:

### Login:

| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Good password | We enter our login and password to get connected| 3 |    1. Enter your login <br /> 2.Enter your password  <br /> 3. Click on login     |    Get connected in the website    |     To be tested       |        
| Change password | In case we don't remember our password, we want to click on a link sending us to a page where we could modify it.| 1 |    1. Click on "forgotten password ?"<br />     |    Go to the changing password procedure page    |     To be tested       |      

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

### Settings:

| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Change language | Switch the website language from English to French| 2 |    1. Select language  <br /> 2. Click on OK|    The website should restore and be set in French  |     To be tested       |  
| Set to Night mode| Change the website dominant background color to dark | 1 |    1. Select "night mode"  <br />|    The website should restore and be set with its main background color in dark  |     To be tested       | 

### Template modifying:
| Test Name | Description | Number of Test cases |    Test cases list     |    Expected    |       Got       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       | 
| Edit info | Edit an information about the carbon footprint of the day on a selected template| 6 |    1. Go in the "Template modifying" page  <br /> 2. Select a template <br/> 3.Click on "Edit" <br/> 4. Do your modification. <br/> 5. Click on "Update" <br/> . 6. Select "View the template" <br/>|    The page should show the template with the edited information  |     To be tested       | 
| Add info | Add an new date about an incoming schedule on a selected template| 6 |    1. Go in the "Template modifying" page  <br /> 2. Select a template <br/> 3.Click on "Edit" <br/> 4. Add your information. <br/> 5. Click on "Update" <br/> . 6. Select "View the template" <br/>|    The page should show the template with the added information  |     To be tested       | 
| Remove info | Remove a date of a finished meeting on a selected template| 6 |    1. Go in the "Template modifying" page  <br /> 2. Select a template <br/> 3.Click on "Edit" <br/> 4. Remove your Information. <br/> 5. Click on "Update" <br/> . 6. Select "View the template" <br/>|    The page should show the template with the removed information  |     To be tested       | 
| Update screen| Update a screen with a selected template| 5 |    1. Go in the "Screens" page  <br /> 2. Select a screen actually activated <br/> 3.Click on "Update screen" <br/> 4. Select your template. <br/> 5. Click on "Confirm" <br/>|    The screen should be updated on TV with the right info  |     To be tested       | 

