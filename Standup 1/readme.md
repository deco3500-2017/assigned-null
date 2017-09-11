# Week 8 Update
### 12/09/2017

## To Do before next standup deliverable
* Vertical/Horizontal Prototype (Adobe XD || Framework 7)
* User testing
* 

## User Personas
| Commerce Student | Math Tutor |
| ---------------------|----------------------|
| “I really wish I could get some help” - Stacey | “I find myself trying to help others where I can” - Tim Brooks |
| Key Characteristics: | |
|Has little time to help others| Very Knowledgable on topic|
|Needs help and likes to socialize with other students| Very generous and thoughtful person|
|Likes to have a structure and topic in place| Has more free time|
| |Views helping others on tasks as revision|
|Motivations:| |
|Money|Giving|
|Socializing|Knowledge|
| Career| Career|


## Scenarios

|**Someone looking for a study group**| |
|---|----|
|Primary Actor| UQ student|
|Secondary Actors| System|
|Extensions Points| |
|Precondition(s)| Primary actor must have registered an account and also have logged in|

**Sequence of Events**

|**Actor Stimulus**| **System Response**|
|-----|-------|
|1. Individual is has no one to study with|  |
|1.1 User runs app to search other people to study with| 2. Systems presents results of other students to study with|
|3. User selects group/individual they wish to study with| 4. System initiates screen to find location and contact the individual/group|
|5. User proceeds to contact and/or go to location of study group|
|**Post Condition(s)**| |

|**Someone looking to create a study group**| |
|---|----|
|Primary Actor| UQ student|
|Secondary Actors| System|
|Extensions Points| |
|Precondition(s)| Primary actor must have registered an account and also have logged in|

**Sequence of Events**

|**Actor Stimulus**| **System Response**|
|-----|-------|
|1. Individual searches to see if appropriate existing group exists|2. Systems returns no existing groups that fulfil users criteria |
|3. Individual cannot find appropriate existing group|  |
|4. User proceeds to create a new study group| 5. System updates to reflect successful input of new group|
|**Post Condition(s)**| |

**Someone wishing to tutor**

|**Individual wishing to tutor**| |
|---|----|
|Primary Actor| UQ Tutor|
|Secondary Actors| System|
|Extensions Points| |
|Precondition(s)| Primary actor must have registered an account and also have logged in|

**Sequence of Events**

|**Actor Stimulus**| **System Response**|
|-----|-------|
|1. Individual wishes to provide tutoring services|  |
|1.1 Individual proceeds to begin to input details | 2. Systems verifies the validity of details|
| |3. System udates and reflects new tutor offering|
|**Post Condition(s)**| |


|**A group wishing to gain more members**| |
|---|----|
|Primary Actor| UQ Students (many)|
|Secondary Actors| System|
|Extensions Points| |
|Precondition(s)| Primary actors must have registered an account and also have logged in|

**Sequence of Events**

|**Actor Stimulus**| **System Response**|
|-----|-------|
|1. Group wishes to extended its services to further individuals|  |
|1.1 Individual on behalf of group allows group viewing to be public | 2. Systems reflects study group and allows to be viewed by public (or those meeting criteria)|
| 3. Individual acting on behalf of group views requests to join| 4. System updates and reflects new individual requests|
|5. Individual acting on behalf of group accepts invitation| 6. System shows new individual in group and includes in group activity|
|**Post Condition(s)**| |

## Test Cases

**Test Case 1**

| | |
|--|--|
|Rationale| The ability to create a user account for either finding other students to study with, creating a study group or displaying Tutor services is an essential (mandatory) task that individuals must be able to perform to be able to interact with the application |
|Goal| Testing whether an individual can create the necessary account |
|Steps| 1. User to download application |
| | 2. User to fill in details to create account|
| | 3. User to verify account (UQ verification via uq email)|
|Result| Time to complete task and whether successful or not|
|Pass/Fail Criteria| Under 5 mins and  successful verification|

## Storyboard
## Basic Design Prototype
https://drive.google.com/open?id=0B9Pu9DHDTCw5dGMtQ1ZwRU9yb0k
https://www.draw.io/?state=%7B%22ids%22:%5B%220B9Pu9DHDTCw5c01RX3J4M2o1YW8%22%5D,%22action%22:%22open%22,%22userId%22:%22103455800862587575392%22%7D#G0B9Pu9DHDTCw5c01RX3J4M2o1YW8 

## Results: 
### Do you Meet up to study with other students? 
 * 73.7% Yes, 26.3% no
 
### Reasons for no
 * Students feel that they study better by themselves 60%
 * Struggle to make friends or find people to study in their classes 40%
 
### Do you prefer to study with people or by yourself? Why?
 * Individual 10 ~47%
	* Others are too distracting, easier to focus 8
	* by myself 1
 * Group ~21%
	* Promotes knowledge sharing 4
  * Either way ~32%
  * Depends on the subject 4
  * doesn't matter 2
  
### How do you find someone to study with?
 * Friends found in the course 5 ~33%
 * People in their class dependent on their knowledge 2 ~13%
 * Ask Around 8 ~53%
 
### Are you comfortable studying with someone in your course but you don't know?
 * Yes 10 ~55%
  * Good to get to know people in your course
 * No 7 ~38%
	* Don't feel comfortable if they don't know them
 * Doesn't matter 1 ~5%
	* Prefer someone they know, but its better than nothing
	
### What prevents you from studying with a stranger? if any.
 * Social Issues i.e. comfort, breaking ice, awkward to approach a stranger 10 ~66%
 * Not their friends/rather studying with people they know 4 ~26%
 * Don't want to become a tutor for a stranger, wasting their own studying time 1 ~0.06
 
### Would you be willing to tutor others?
 * Yes 12 63.2%
 * No 2 10.5%
 * Maybe 26.3%
 
### Difficulties (PAINS) with group study? (aggregated for multi answers)
 * Getting Distracted 7 ~36%
Quiz voting on a specific topic to keep people on task, discussion and quiz time have time limits.
Phones go on silent mode during discussion
 * Place/Access to study rooms 6 ~31%
Location based group finding
 * Time and Effort to organise 6 ~31%
None needed for ad hoc. However we are integrating student uq timetable to find available times for scheduling.
* Not knowing the knowledge/capabilities of others
Specifying the content to be studied, personal profiles can contain expertise in the course.
*Finding reliable people to study with 
Star system, for different topics in a course. 
*Breaking the ice is difficult.
The course content itself works as an ice breaker, as does having many people in a room.

 
### Would an app that allows you to find other students to study with be beneficial to you?
 * Yes 12 ~63% 
 * No 4 ~21%
 * Maybe 3 ~15%
 * "If it allowed me to find help with specific areas of studies, it would be beneficial. I would want to know that the person I'm studying with won't just use me as a free tutor." One response

### Is there anything you would want from an app like this
 * Show places to study (quiet places)
 * Schedule meetings 
 * Timetable Sharing
 * Post ads looking for groups or starting one. Distinction between looking for help and offering help
 * Description of how they study 
 * Make comments/chat with group so everyone understands what content is intended for study
 * Filter by location 



  




  


## User Survey
| **“If no, why not?”** |
| ---|
| I focus more when by self. Too distracting to study with others |
| This is my first semester and it is hard for me to find friends to study together |
| I study better alone |
| I prefer studying alone at home. |
| I find it easier to focus, studying alone. Also because I don't, generally, befriend many people in my classes. |

|**Do you prefer to study with people or by yourself? Why?**|
| ---|
|mix of both. depends on the subject matter of what we are studying.|
|By self. Other people may be too distracting and asking questions|
|By myself, easier to focus|
|doesn't bother me either way|
|By myself ..|
|Group study promots knowledge sharing|
|Yes, because I can concerntrate more but whenever I have doubt I want to discuss with my classmate|
|Myself. See above|
|For quizes group work and assignments I prefer to work in a group. Good for feedback|
|As above.|
|by myself, more concentrated|
|Both 75% on my own first then in group|
|Self. Self study is the best.|
|With people. Quiz each other.|
|Dependent on the exam. If the exam is applied knowledge, I will meet up with other students to discuss content. If the exam is more theory based, I prefer to study alone so that I do not become distracted.|
|By myself, for the reason stated above.|
|It depends what course it's for. Sometimes alone is better, sometimes it's better in groups.|
|I prefer to study with others as it motivates me to study, and we can learn from and teach each other|
|I prefer to study by myself as I find it less distracting.|

|**How do you find someone to study with?**|
|----|
|Friends found through the course|
|If i need to, i usually base it around how much knowledge they have on an area that I (or we both) are struggling with|
|ask around?|
|ask friends|
|I don't .. I study alone homes|
|Interacting with classmates|
|I request my classmates if I have doubt|
|Through friends|
|Usually they are the same people as my class.|
|accompanied by others, encouraged by them, but sometimes distracted by them too especially |when we go chatting|
|Ask ppl in class|
|Not convenient|
|Classmates.|
|I study with friends in my degree.|
|I don't. If I wanted to though, I would find them in my class and ask if they wanted to study with me.|
|Generally just the people I've befriended in class.|
|Friends from uni|
|I just ask a group member to meet up|

|**Are you comfortable studying with someone in your course but you don't know?**|
|----|
|Yes (3)|
|yes (2)|
|Yes. It is always good to get to know people in your own course|
|Yeah.|
|ehhh not really, but if i've met them before in the class i guess it's okay|
|Yeah|
|No, I don't feel comfortable if I don't know him or her|
|Not really, no.|
|no|
|No|
|Yes.|
|My cohort is very small, there aren't many people in my course that I don't know very well. But I would be uncomfortable studying with someone I didn't know.|
|Potentially, sure.|
|Probably not|
|It would be better than nothing, but I would prefer someone I know|


|**What prevents you from studying with a stranger? if any.**|
|----|
|general social issues. having to meet a new person entirely to simply study together. Ice breaking is sometimes difficult|
|I value my study time. I do not want to become a tutor to a stranger at the risk of sacrificing my own studies|
|being strangers|
|Coz I'm not a very social person|
|I hesitate because I feel they would not like to be disturbed|
|I am more comfortable with more 2 or more people|
|It seems unusual and there are already people in my class.|
|Comfort|
|Not friends|
|May not know them well.|
|As above, not many strangers in my course. I have met and worked with most of the people in my cohort. I know who I study well with and tend to always study with those people.|
|If I wanted to study with a stranger, it would be weird to ask them to study with me out of the blue.|
|I would rather study with someone I know.|
|The fact that they're a stranger, haha. However if the app breaks that barrier to communication then that is no longer as much of an issue.|
|Nothing|


|**What difficulties do you have when trying to study with a group? i.e organisation, place etc**|
|----|
|Getting distracted by being with a large group of people/friends and not actually studying|
|Place is the usual one. Its hard to find quiet areas for group discussions at such short notice.|
|Not being able to focus|
|a place to study|
|Place .. vibe ... peoples attitude|
|common study time|
|Hesitation|
|Distraction, making plans|
|Study rooms are good at libaries and booking rooms in advance is a good idea.|
|There can be a difference of opinions, or arguments.|
|sometimes will go chat|
|Staying on track|
|Need time and effort to organize.|
|Finding a time that we are all free. Ensuring that we stay on topic.|
|When I've had group work, mostly it was finding a good time and place. Google Drive makes the rest fairly easy.|
|Actually being productive, people arriving on time, finding a place to study|
|Can get distracted if even just one member isn't focused|
|Organisation and time are the greatest factors|


| **Would an app that allows you to find other students to study with be beneficial to you?**|
| ---- |
|Yes (5)|
|I guess, hard to judge.|
|If it allowed me to find help with specific areas of studies, it would be beneficial. I would want to know that the person I'm studying with won't just use me as a free tutor.|
|Probably|
|maybe|
|Yeah sure|
|yes|
|Possibly|
|For me, no. I dont like to study with others, and if I did I would use people in my class.|
|no|
|Yes.|
|No, due to reasons explained above.|
|Maybe. My classes are pretty small mostly though so I doubt I'd find people with an app more easily than just asking them.|
|Possibly, but I probably wouldn't use it|
|Yes, it would be beneficial|


|**Is there anything you would want from an app like this?**|
|----|
|i dont know|
|I like pushing the bounds of my learning. If the app augmented my existing studies and fast tracked my learning I would use it.|
|show me places to study (quiet places)|
|Yeah.. studymates|
|study plans for the course|
|Open forum on certain topic of the course|
|Just as long as we are all studying same course|
|The ability to filter by location as you would need to have the same place.|
|Description of how they study|
|The ability to make comments when organising a study mate so that they are prepared to study the same particular content I am.|
|Well it depends whether this is just an app for connecting people the first time, and then you're on your own, or whether it can be used to schedule group meetings etc. into the future. It could be useful just as a neutral study group chat. For those people who don't have Facebook etc. that can be useful.|
|Not currently|
|The ability to post ads either looking for groups or for starting a group. Maybe even a distinction between looking for help or offering help|
|Timetable sharing|


![image1](https://imgur.com/6XL7CjA.png)
![image2](https://imgur.com/DrpQI7o.png)
![image3](https://imgur.com/48hI8rR.png)
![image4](https://imgur.com/w81Bc4A.png)
![image5](https://imgur.com/TeIaeuP.png)

