# Study Mates
**DECO3500 Project Proposal**

**Team Name** : Equals-Null  
**Note:** assigned-null for github


**Study mates** is a simple solution to find other people to meet and study with, whether it be another individual or a group.

### **Contributors** <br />

Name | Student Number | Github Username | Course   
-------------- | ---------- | ----------------- | -----------    
Jaymes Branch | 43221325 | jaymes95 | DECO3500  
Shashank Gururaj | 44888163 | shashankgururaj | DECO7350   
Wes Clarke | 4358277 | wclar6 | DECO3500  
Daniel Burke | 44012043 | burkdani | DECO7350  



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









## 1.0 Introduction 	
Education and technology evolve together constantly, with educational institutions making frequent use of computers and online learning platforms. However, there are still many problems that can be solved with innovative technologies. For example, University students often find it difficult to connect with other classmates to form study groups. They rarely speak to other students during lectures or practicals and even fewer make contact outside of class. The problem we have to solve is how we can allow users to create and find study groups in the easiest way possible. 

 For this course we have chosen the team name ‘assigned null’ and are required to create a solution to this problem using a mixture social and mobile technologies. The project that we selected for development is a location based study group finding application called “Study Mates”.


## 2.0 Concept

### 2.1 Rationale 	
Study Mates is a Mobile application that enables university students to connect with each other to study. It aims to address two issues that students face while at university, studying effectively and meeting like minded people. 

Common problems with studying include both procrastination and filling in gaps in understanding. People have struggled with procrastination going back to ancient civilisations. The Greek poet Hesiod, had cautioned not to “put your work off till tomorrow and the day after”, way back around 800 B.C. Given the rise of the internet and mobile devices it is clear that procrastination is rampant and easier than ever. While being alone you can always find ways to rationalise postponing the start of your study, i.e checking facebook, emails and watching youtube in frequent small breaks. 

Study groups have been known to address the issue of procrastination while also providing plenty of other benefits to participants. Studying alone can seem very monotonous and draining, it is often this idea that makes study unattractive when alone. Whereas studying in a group makes learning feel more enjoyable, fulfilling and engaging given its social nature. Another important benefit of group study is that it shares individual's unique talents and insights, allowing group members to learn from each other to fill in gaps in their knowledge. While those who help others by teaching them concepts are able to reinforce their own knowledge.  

The benefit of study mates is that it makes it easy for students to form study groups to significantly improve their study habits while connecting like minded people to help create lasting connections.












### 2.2 Features
* Profile: user creates a profile, specifying courses they are taking and the campus they are on.
* A Student can start a study group by displaying their location and specifying what topic or area they wish to study and the duration. 
* Students are then able to search for groups by filtering on topic/subject area and enter that study group 
* Chat: The chat feature lets students get more information about the study group before they join it to see if it is compatible with their timeline and the kind of study they wish to do. I.e Place, Timing, Content 
* Navigation: Utilizes GPS geolocation to help students find their study group.
* Notification: students can opt in to being notified when a study group for a course they are taking is available.  
* Security: communicate with universities so that students can only connect through active uni emails. Enables a sense of security for students as they know that only other university students are using the app. Also enables us to provide filtering features based on course codes.

### 2.3 Project Aims
* Develop a mobile prototype for study mates that enables students to engage in face to face study
* Allow students to form study groups in an ad-hoc manner 
* Investigate what tools can help facilitate study in groups and how they could be incorporated into the application 
* Interview target audience to discover insights into their study habits and when they would normally partake in group study


### 2.4 Audience 
The target audience for study mates is tertiary level students.This is because the university environment supports group study by providing access to rooms and tables which groups can be stationed at. Also compared to schools, university can tend to isolate students. Because even if friends are attending the same university they may not be taking the same course, so finding new friends or groups to study with can be difficult. Study mates helps bridge this by providing a platform that allows students to meet new people within their course.





### 2.5 Context of Use
Students will use the app in a mobile setting as it is easier to meet up while on the go. Each individual has the ability to search for existing groups, or to create a new one. Location is integrated with the use of a map api, making use of the mobile GPS to both share and find locations. For example, a student named Roger may finish a lecture at 11:00AM and have to wait around until 1:00PM until his next class. While he waits he buys some lunch while setting an active group meeting to his location. Interested students, some of which may have attended his previous lecture can meet up and discuss concepts related to his chosen topic.

### 2.6 Prior Art

**GroupME -** https://play.google.com/store/apps/details?id=com.groupme.android&hl=en 
GroupME is probably the biggest application now that is focused on forming groups with people with a total number of instances ranging from 10,000,000 - 50,000,000. It is a mobile application that is solely concerned with forming groups with your Family, Roommates, Friends, Coworkers, Teams, Bands or Faith Groups. Users are able to communicate to a group through a chat system that also enables sending images and videos. It seems that this app is more focused with forming groups with people the user already knows and doesn’t facilitate meeting up face to face. This is where it differs from study mates as our focus is targeted towards tertiary students and aims to bring people together who may not already know each other, face to face.

**Study Mate-timer, group study -** https://play.google.com/store/apps/details?id=vh.frl.stopwatch&hl=en 
This application has a much smaller install base at 10,000 - 50 000 installs but focuses more on studying in an almost gamified manner. The app centred is around the idea of trying to do more study than others in your group. You can time the amount of study you do and by forming a group you can see the study statistics of everyone else in the group with the idea seeing how much study everyone else is doing will motivate you to study more.This idea is a different take on how to engage people with study in a collaborative way, by appealing to the more competitive nature of some people. Getting statistics of a user’s study habits might prove to be interesting feature to add to study mates but would require more research by interviewing our target audience to see if it is something that adds value to their experience.













## 3.0 Team 
**Equals null** consists of 4 members:  

**Daniel Burke**  

Daniel is pursuing his Masters in IT (DECO7350) and he will be leading the team and will be responsible for managerial decisions of the project. He will be responsible for making the project plan and finalizing the features of our project, dividing the features into modules and assigning work for all team members each week. He will also be responsible for keeping track of the progress of the team and shall be point of contact for the tutors. He will also be working as a back-end developer and support the team in developing the project.  

**Jaymes Branch**  

Jaymes is pursuing his Bachelors in IT (Course Code: DECO3500) and he will be working as a front end and focusing on the UI/UX part of the project. He will also be responsible for the logistics of the project. He will be responsible for discussing with all team members and scheduling the weekly meeting, booking meeting rooms, set up immediate meeting if past meetings were missed (decide place/time) etc.  

**Shashank Gururaj**  

Shashank is pursuing his Masters in Computer Science (Management) (Course Code: DECO7350) and will be responsible for the designing the architecture of the product. His responsibilities include building the project architecture, selection of tools used for development etc. He will be also be working as a full stack developer and support the team in developing the project.  

**Wes Clarke**  

Wes is pursuing his Bachelors in Software Engineering (Course Code: DECO3500) and he will be responsible for the content of the writings of our project like project proposal, project report etc. He will also be working on the front-end developer and will be responsible for the UI Design of the project. 


### 3.1 Decision Making
Key decisions will be made during workshops and weekly catch up meetings. Decisions will be made based upon examining the ideas/feasibility/supporting documents. If a team member is not convinced by the idea, then decision will be made by voting within the team. The idea with most votes will be selected for development. Although it is first reviewed with one of the tutors (if it’s a key decision) and worked on upon approval with provided feedback.
 
### 3.2 Minor Issues
If the team is developing the product too slowly, we will consult with one of the tutors to find a way to get back on track. If that fails, the team leader (Daniel) will set short and frequent milestones for each team member. Every member will update the team on the progress of their work twice a week. If one of the team members is unavailable to work on the project for a duration, then the other 3 members divide the person’s work and complete it within a deadline.
 

### 3.3 Resolving Conflicts
When a conflict arises within the team, all members meet to resolve the conflict. If a meeting cannot be arranged and the conflict needs urgent attention, then all the team member will connect through skype or facetime to resolve the conflict. The views of each member involved in the conflict will be examined/discussed. If the conflict cannot be solved within the team, we shall seek the help of the course staff. Precautions shall be taken to avoid miscommunication which can lead into conflicts (making sure everybody is on the same page during meetings). 


## 4.0 Communication 
### 4.1 Communication methods
Team meetings outside workshops will be done weekly on Tuesdays at 3-4pm at General Purpose South Building, Room 207. If the team is unable to meet on the scheduled time/place, then the details of a replacement meeting will be discussed. If everyone in the team is unable to meet physically, then a conference call will be set up using skype/facetime and the proceedings shall be discussed. Facebook Messenger group is used as the main channel for communication. Flies will be shared through Google Docs. Each file that is uploaded with be name with the following convention: “MemberName_AssignmentName_ModifiedDate_UpdatedTopic”
 
### 4.2 Reason for choice of Social Platforms
Facebook Messenger is a very popular and convenient way to communicate between team members. This is due to the fact that most people have facebook downloaded on their phones and check it regularly. Which is also beneficial because people will not have to learn how to use the system. Messenger allows users to add documents/media into the chat which can help in providing better explanations between members of a group. 

Google docs has been chosen for file sharing due to two main reasons. One being that it is integrated with google drive, which allows its users to create multiple folders and has a huge storage space. The Folder structure is like windows folder structure and easy to understand/modify. It is very easy to share a folder or file with multiple people. Second is that a file on google docs can be updated simultaneously by 2 or more people whom it is shared with. This prevents multiple files being created and the hassle of integrating them. 

## 5.0 Plan
The project “StudyMates” has been finalized on week 6 and project proposal has been submitted for the same. The delivery date for the design prototype is on week 13 which includes Documentation, prototype and promo material. However, there are 3 standups on weeks 8, 10 and 12. Here goes our plan:
 
| Week		|			Task 										|		Team Members				|	
|	---		|			:---:											|			---						|
|			|	**Requirements Gathering**								|									|
| 7			|	Interview Target Audience							|	Wes Clarke, Jaymes Branch		|
| 7			|	Prototype Tools Selection							|	Daniel Burke, Shashank Gururaj	|
| 8 (start) |	*Stand Up 1: Research/Tool Selection Finalised* 		|	Everyone						|
|			|	**Design** 												|									|
|8 			|	Design User Interface 								|	Wes Clarke, Jaymes Branch		|	
|8 			|	Design Backend Topology								|	Daniel Burke, Shashank Gururaj	|
|9			|	Paper Prototype User Testing						|	Jaymes Branch, Daniel Burke		|
|9			|	Backend/Frontend Integration Plan					|	Wes Clarke, Shashank Gururaj	|
|10 (start) 	|	*Stand up 2: Design Finalised*						|	Everyone 						|
|			|	**Construction**										|									|
|10			|	UI Implementation									|	Wes Clarke, Jaymes Branch		|
|10			|	Backend Implementation								|	Daniel Burke, Shashank Gururaj	|
|11			|	Prototype Refinement 								|	Everyone						|
|12 (Start) |	*Stand up 3: Prototype Implemented*					|	Everyone						|



### 5.1 Plan overview
Our Project will be development will consist of 3 main phases:
* Requirement Gathering and Analysis
* Design
* Construction

Requirement gathering and Analysis: Here we analyze the requirements and conceptualise features to add into the product. We will achieve this by conducting interviews with our target audience to identify what incentivises group study among them. As well as what tools/features they will need to help them achieve this. This will also help us identify any pain points that students have related to group study. We will also be analysing various prototyping tools and selecting those which we believe to be most appropriate for development.
The deadline for this phase is week 8.

Design: In the design phase we build the high level and low-level designs of the project and document the details. The deadline for this phase is week 10. This also requires collaboration between or front-end and back-end developers to coordinate the development of these parts for a seamless integration.
The deadline for this phase is week 10

Construction: The prototype shall be built, tested and documented in this phase. Once the first iteration of prototype has been developed there will be time available to refine the implementation. This will be conducted with further user testing if time permits or in-house testing to help finalise the implementation. 
 The deadline for this phase is week 12.
 

## 6.0 Resources
The resource we will be needing is:
* Prototyping tool (yet to be decided)
 

## Tags
### Cooperative Work (CSCW)
### Collaboration 
### Social
### Awareness
### Security
### Education
### Community
### Group study.

