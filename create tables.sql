use Group7;

CREATE TABLE Countries (
CountryID INT IDENTITY(1,1) PRIMARY KEY, 
CountryName VARCHAR(100)
);

CREATE TABLE StatesProvs (
StateProvID INT IDENTITY(1,1) PRIMARY KEY,
CountryID INT,
StateProvName VARCHAR(100),
FOREIGN KEY(CountryID)
REFERENCES Countries(CountryID)
);

CREATE TABLE Cities (
CityID INT IDENTITY(1,1) PRIMARY KEY,
StateProvID INT,
CityName VARCHAR(100),
FOREIGN KEY(StateProvID)
REFERENCES StatesProvs(StateProvID)
);

CREATE TABLE Courses (
CourseID INT IDENTITY(1,1) PRIMARY KEY,
CityID INT,
CourseName VARCHAR(100),
Notes VARCHAR(MAX),
FOREIGN KEY(CityID)
REFERENCES Cities(CityID)
);

CREATE TABLE Holes (
HoleID INT IDENTITY(1,1) PRIMARY KEY,
CourseID INT,
HoleNum INT,
HoleName VARCHAR(100),
FOREIGN KEY(CourseID)
REFERENCES Courses(CourseID)
);

CREATE TABLE Tees (
TeeID INT IDENTITY(1,1) PRIMARY KEY,
TeeName VARCHAR(50)
);

CREATE TABLE Pars (
ParID INT IDENTITY(1,1) PRIMARY KEY,
Par INT
);

CREATE TABLE HoleTees (
HoleID INT,
TeeID INT,
ParID INT,
Distance INT,
FOREIGN KEY(HoleID)
REFERENCES Holes(HoleID),
FOREIGN KEY(TeeID)
REFERENCES Tees(TeeID),
FOREIGN KEY(ParID)
REFERENCES Pars(ParID)
);
