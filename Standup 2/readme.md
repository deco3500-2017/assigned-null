# Week 10 Update
### 03/10/2017


## Resources
* Zone: https://study-mates.uqcloud.net/
* Interactive web prototype: https://marvelapp.com/9jc9dge
* Google Maps: https://developers.google.com/maps/
* Digital Prototype Questionaire : https://docs.google.com/forms/d/e/1FAIpQLSdaaOPs-5j2JG1vQ2Vq70YWMqUoDOhVttZLfVqCRad9KAibQQ/viewform
* Consent Form (PDF): https://study-mates.uqcloud.net/consent-form.pdf


## To Do before next standup deliverable (Standup 3)
 * Final digital prototype
 * Complete User testing
 * Complete Final User interviews
 * Complete Pass/Fail Tests
 * Video (interaction): youtube.com/
 
## Marvel Prototype - Wes Clarke

Interactive Link https://marvelapp.com/9jc9dge

| | | |
|---|---|---|
| **Create Group** | **Existing Groups** | **Location** |
|<img src="https://imgur.com/3zdo3hn.png" height="450">|<img src="https://imgur.com/2cCLJw6.png" height="450">|<img src="https://imgur.com/3P9lUR7.png" height="450">|
| **Filter** | **Create Account** | **Account** |
|<img src="https://imgur.com/gm12AiH.png" height="450">|<img src="https://imgur.com/rTKQEcj.png" height="450">|<img src="https://imgur.com/GkBe4C1.png" height="450">|
| **Selecting Group** | **Sign In** | **Selecting Time** |
|<img src="https://imgur.com/w43xclB.png" height="450">|<img src="https://imgur.com/5q2doU7.png" height="450">|<img src="https://imgur.com/022bBD9.png" height="450">|

## Schema
<img src="https://imgur.com/X4SVYF2.png" width="500">

## Mockups (Screenshots)
### Desktop Website
<img src="https://imgur.com/l0D36IW.png" width="500">

### Mobile Website
<img src="https://imgur.com/WGdX8dW.png" height="400">

### Current Study Locations
<img src="https://imgur.com/kbsgTX1.png" height="400">

### Mobile Application (Android and iOS)
#### Android
![image4]

#### iOS
<img src="https://imgur.com/82g3zJ4.png" height="400">


## DECIDE
### Determine
* Test whether the user can easily create an account to use study mates
* Whether a user can find existing study groups and filter them
* User can show filtered results in a list or map view
* Test creation of study groups should be able to be performed by users
* Testing of messaging of both individuals and messaging groups
* To test whether a group meetup can be performed

### Explore
* Do you use any similar applications or solutions already?
* What part/s of the prototype did you find hard to use?
* Did you find it easy to filter study groups and meetups?

### Choose
* Questionaire
* Interview
* Observation
 
### Identify
* Does it provide sufficient feedback?
* Is the error handling clear?
* Is it easy to understand and learn?
* Does the underlying paradigm make sense?
* Is it convenient?

### Deal
* Location sharing permissions
* Account information access (sharing university UQ single sign-on info)
* Personal information such as availability and courses participated in

### Evaluate
* Quantitative: Timing the user with task performance
* Qualitative: Questionaire and discussion with user


## Test Cases

| **Test Case 1** | Create Account  |
|---|---|
| **Rationale** | Study Mates is for UQ students (and extension of staff). As such, it should only be accessible to those members. To use study mates, an account is required, which will consist of making use of 'UQ Single Sign-on' to login in and automatically retrieve student email, student number, student name and undergrad/postgrad/staff.|
| **Goal** | The goal of the test case is to test whether the user can successfully login using 'UQ single sign-on and fill the remaining fields to create their account. |
| **Steps to be performed** | 1. Instruct the user login with 'UQ single sign-on'.|
| |2. Get the user to check/verify the prefilled fields.|
| |3. Get the user to continue with remaining fields and register their account.|
| **Record Result** | Time taken to create account|
| **Pass/Fail** | |
| **Pass:**| The user successfully applies logins to 'UQ single sign-on, and finishes creating their account.|
| **Fail:**|Failure to complete the task without help|
| |There is a bug within the application|

| **Test Case 2** | Search Groups |
|---|---|
| **Rationale** | When searching for a suitable, existing study group, the user needs to be able to view the results. Whether this be in either a list view or in a map view. This will be so that the user can easily filter, with map view being beneficial for location filtering, while list view being suitable for time and other fields. |
| **Goal** | The goal of the test case is to test whether the user can successfully use either (or both) views to show results. |
| **Steps to be performed** | 1. Instruct the user to perfom a filter to show existing study groups.|
| |2. Get the user to return recommended study groups in list view.|
| |3. Get the user to return recommended study groups in map view.|
| **Record Result** | Time taken to search|
| **Pass/Fail** | |
| **Pass:**| The user successfully applies approriate filters, and returns either map or list view (or both).|
| **Fail:**|Failure to complete the task without help|
| |There is a bug within the application|

| **Test Case 3** | Create Group  |
|---|---|
| **Rationale** | Study groups exist due to crowd sourcing and collaboration. This allows for instantaneous creation and moderation with minimal work on behalf of the developers and admin team of Study Mates. As such, users should be able to create their own groups. |
| **Goal** | The goal of the test case is to test whether the user can successfully create their own study group. |
| **Steps to be performed** | 1. Instruct the user to proceed to create a group.|
| |2. Get the user to fill out the appropriate fields.|
| |3. Get the user to add any other participants to the group.|
| **Record Result** | Time taken to create group|
| **Pass/Fail** | |
| **Pass:**| The user successfully creates a group and adds participants|
| **Fail:**|Failure to complete the task without help|
| |There is a bug within the application|

| **Test Case 4** | Message Individual and Message Group  |
|---|---|
| **Rationale** | Individuals need to be able to have a method of communication to discuss missed items, provide more information or keep records. |
| **Goal** | The goal of the test case is to test whether the user can successfully message both an individual or a group. |
| **Steps to be performed** | 1. Instruct the user to proceed to the messaging area.|
| |2. Get the user to create a message for another individual in their list.|
| |3. Get the user to create a message for a group in their list.|
| **Record Result** | Time taken to create messages|
| **Pass/Fail** | |
| **Pass:**| The user successfully messages both an individual and a group|
| **Fail:**|Failure to complete the task without help|
| |There is a bug within the application|

| **Test Case 5** | Create Group Meetup  |
|---|---|
| **Rationale** | Study groups are beneficial, with the ability to organize meetups being very advantageous for collaboration. |
| **Goal** | The goal of the test case is to test whether the user can successfully create a study group meetup at a specified location and time. |
| **Steps to be performed** | 1. Instruct the user to proceed to create a meetup.|
| |2. Get the user to fill out the appropriate fields.|
| |3. Get the user to finalize the meetup and create it.|
| **Record Result** | Time taken to create group meetup|
| **Pass/Fail** | |
| **Pass:**| The user successfully creates a group meetup|
| **Fail:**|Failure to complete the task without help|
| |There is a bug within the application|


## Test Protocol
### Preperation (before participant arrives)
* Provide a consent form (either printer or digital) for the participant to use
* Document to record data/observations (either paper or digital document)
* Video Camera or mobile phone for recording any audio or video
* Device for the digital prototype
* Questionaire for participant to fill out (pref Google form, as above)


### Introduction
* Introduce ourselves (or our group) and a summary of the test to be performed
* A quick run through about the application and its purpose
* The participant needs to fill out aforementioned consent form, and participation is voluntary and withdrawal can be performed at any time. There will be no reimbursements nor will there be any penalties for incompletion


### Observation Task
* Provide the participant with instructions, guiding them through the tasks at hand (i.e asking them to perform a task, notifying when next task is beginning)
* Record the time taken for the participant to perform tasks. Monitor the body language and movements, look for points of failure
* Ask the participant to make their thoughts verbal as they progress through the tasks


### Questionaire
* Link: https://docs.google.com/forms/d/e/1FAIpQLSdaaOPs-5j2JG1vQ2Vq70YWMqUoDOhVttZLfVqCRad9KAibQQ/viewform


### Closing
* Thank the participant for their time
* Inform them of the benefits of their help, and they are free to view the results of their efforts
* Remind the participant that their privacy will be upheld, with audio/video being deleted
* Interpret the results, finalize the task


## Test Reports
### Person_ID: 1
-
### Person_ID: 2
-
### Person_ID: 3
-
### Person_ID: 4
-
### Person_ID: 5
-

## User Testing and Interviews
Continuation of User Testing was performed to allow for a greater idea of our progress with Study Mates.


## Minimum Viable Product
The bare minimum that we plan to roll out for Study mates:
* Ability to create group
* Ability to create meeting
* Ability to message individual or group
* Search for meetings on map
* Search for meeting in filtered list
* Search for groups in filtered list

Additions we wish to include:
* Sharable timetable, with meetup integration
* Directions to location
* File sharing (for notes)


## Storyboard(s)
(Include image here)


## Colours, Fonts and Themes
### Colours
|**Colour 1**|**Colour 2**|**Colour 3**|
|---|---|---|
|<img src="https://imgur.com/8GYSZdX.png" width="500">|<img src="https://imgur.com/r0CEnZF.png" width="500">|<img src="https://imgur.com/njCU8nl.png" width="500">|
|**Colour 4**|**Colour 5**|**Colour 6**|
|<img src="https://imgur.com/Hl3HuQR.png" width="500">|<img src="https://imgur.com/RgFpB70.png" width="500">|<img src="https://imgur.com/r3zsMPM.png" width="500">|
|**Colour 7**|**Colour 8**|**Colour 9**|
|<img src="https://imgur.com/HAGKY08.png" width="500">|<img src="https://imgur.com/GTgTL6Q.png" width="500">|<img src="https://imgur.com/5RVsiEm.png" width="500">|

### Fonts
| | | |
|--|--|--|
| **Roboto** | **Abeezee** | **Open Sans**|
|<img src="https://imgs2.fontbrain.com/imgs/54/a9/1b0619ccf9373d525109268219dc/sp-720x400-333333-penultimate@2x.png" width="500">|<img src="https://imgs4.fontbrain.com/imgs/f9/a5/c45277e6555adc7ee38e9a48a241/sp-720x400-333333-penultimate@2x.png" width="500">|<img src="https://imgs1.fontbrain.com/imgs/62/9a/55a7e793da068dc580d184cc0e31/sp-720x400-333333-penultimate@2x.png" width="500">|

### Themes
