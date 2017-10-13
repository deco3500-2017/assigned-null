SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

DROP DATABASE IF EXISTS `Studymates`;
CREATE DATABASE IF NOT EXISTS `Studymates` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Studymates`;

DROP TABLE IF EXISTS `Course`;
CREATE TABLE `Course` (
  `courseID` varchar(8) NOT NULL,
  `courseYear` year(4) NOT NULL,
  `courseSemester` int(1) NOT NULL,
  `courseLecturer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `studentNum` int(8) NOT NULL,
  `studentEmail` varchar(256) NOT NULL,
  `studentFirstName` varchar(50) NOT NULL,
  `studentLastName` varchar(50) NOT NULL,
  `studentDegree` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `groupMeeting`;
CREATE TABLE `groupMeeting` (
  `groupID` int(11) NOT NULL,
  `meetingID` int(11) NOT NULL,
  `startTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `endTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `meetLong` float DEFAULT NULL,
  `meetLat` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `studentCourses`;
CREATE TABLE `studentCourses` (
  `studentNum` int(8) NOT NULL,
  `courseID` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `studentGroup`;
CREATE TABLE `studentGroup` (
  `studentNum` int(8) NOT NULL,
  `groupID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `studyGroup`;
CREATE TABLE `studyGroup` (
  `groupID` int(11) NOT NULL,
  `groupName` varchar(50) NOT NULL,
  `groupCourse` varchar(8) DEFAULT NULL,
  `groupCampus` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `Course`
  ADD PRIMARY KEY (`courseID`,`courseYear`,`courseSemester`,`courseLecturer`);

ALTER TABLE `User`
  ADD PRIMARY KEY (`studentNum`);

ALTER TABLE `groupMeeting`
  ADD PRIMARY KEY (`groupID`,`meetingID`);

ALTER TABLE `studentCourses`
  ADD PRIMARY KEY (`studentNum`,`courseID`),
  ADD KEY `studentNum` (`studentNum`),
  ADD KEY `courseID` (`courseID`);

ALTER TABLE `studentGroup`
  ADD PRIMARY KEY (`studentNum`,`groupID`),
  ADD KEY `groupID` (`groupID`);

ALTER TABLE `studyGroup`
  ADD PRIMARY KEY (`groupID`);


ALTER TABLE `groupMeeting`
  ADD CONSTRAINT `groupMeeting_ibfk_1` FOREIGN KEY (`groupID`) REFERENCES `studyGroup` (`groupID`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `studentCourses`
  ADD CONSTRAINT `studentCourses_ibfk_1` FOREIGN KEY (`studentNum`) REFERENCES `User` (`studentNum`),
  ADD CONSTRAINT `studentCourses_ibfk_2` FOREIGN KEY (`courseID`) REFERENCES `Course` (`courseID`) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE `studentGroup`
  ADD CONSTRAINT `studentGroup_ibfk_1` FOREIGN KEY (`studentNum`) REFERENCES `User` (`studentNum`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studentGroup_ibfk_2` FOREIGN KEY (`groupID`) REFERENCES `studyGroup` (`groupID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
