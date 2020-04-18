use Group7;
go
--select * from Cities;
--select * from StatesProvs;
--select * from Countries;
--select * from Courses;
--select * from Holes;
--select * from Pars;
--select * from Tees;
--select * from HoleTees;

drop view vw_Locations;
drop view vw_CourseLocations;

drop procedure get_HoleTeePars;
drop procedure get_CityCourses;
drop procedure get_StateProvCourses;
drop procedure get_CountryCourses;
drop procedure new_HoleTeePar;
drop procedure new_Hole;
drop procedure new_City;
drop procedure new_StateProv;
drop procedure new_Country;
drop procedure new_Location;
drop procedure new_Course;

--drop view vw_Locations;
go
--see all locations that have courses
create view vw_Locations
as
	select
		CityName        as City,
		StateProvName   as StateProv,
		CountryName     as Country
	from Cities, StatesProvs, Countries
	where
		Cities.StateProvID    = StatesProvs.StateProvID AND
		StatesProvs.CountryID = Countries.CountryID
	order by
		CountryName   desc,
		StateProvName asc,
		CityName      asc offset 0 rows;
go
--	select * from vw_Locations;

--drop view vw_CourseLocations;
go
--see the locations of all courses
create view vw_CourseLocations
as
	select
		CourseName    as Course,
		CityName      as City,
		StateProvName as StateProv,
		CountryName   as Country
	from Courses, Cities, StatesProvs, Countries
	where
		Courses.CityID        = Cities.CityID           AND
		Cities.StateProvID    = StatesProvs.StateProvID AND
		StatesProvs.CountryID = Countries.CountryID
	order by
		CountryName	  desc,
		StateProvName asc,
		CityName      asc,
		CourseName    asc offset 0 rows;
go
--	select * from vw_CourseLocations;


--drop procedure get_HoleTeePars;
go
--see the Holes, and their Tees and corresponding Pars, for a specific Course
create procedure get_HoleTeePars (@CourseID int) as
begin
	select
		HoleNum as Hole,
		TeeName as Tee,
		Par,
		Distance
	from Holes, Tees, Pars, HoleTees
	where
		Holes.CourseID  = @CourseID    AND
		HoleTees.HoleID = Holes.HoleID AND
		HoleTees.TeeID  = Tees.TeeID   AND
		HoleTees.ParID  = Pars.ParID
end
go
--	exec get_HoleTeePars 1;

--drop procedure get_CityCourses;
go
--see all courses in the given city
create procedure get_CityCourses (@CityID int) as
begin
	select
		CourseName as Course,
		CityName   as City
	from Courses, Cities
	where
			Cities.CityID  = @CityID AND
			Courses.CityID = @CityID
	order by CourseName offset 0 rows;
end
go
--	exec get_CityCourses 12;

--drop procedure get_StateProvCourses;
go
--see all courses and the Cities in which they're located in the given StateProv
create procedure get_StateProvCourses (@StateProvID int) as
begin
	select
		CourseName    as Course,
		CityName      as City,
		StateProvName as StateProv
	from
		Courses, Cities, StatesProvs
	where
		StatesProvs.StateProvID = @StateProvID AND
		Cities.StateProvID      = @StateProvID AND
		Courses.CityID          = Cities.CityID
	order by CityName, CourseName offset 0 rows;
end
go
--	exec get_StateProvCourses 3;

--drop procedure get_CountryCourses;
go
--see all courses and the Cities and StateProvs in which they're located in the given Country
create procedure get_CountryCourses (@CountryID int) as
begin
	select
		CourseName    as Course,
		CityName      as City,
		StateProvName as StateProv,
		CountryName   as Country
	from
		Courses, Cities, StatesProvs, Countries
	where
		Countries.CountryID   = @CountryID              AND
		StatesProvs.CountryID = @CountryID              AND
		Cities.StateProvID    = StatesProvs.StateProvID AND
		Courses.CityID        = Cities.CityID
	order by
		StateProvName,
		CityName,
		CourseName offset 0 rows;
end
go
--	exec get_CountryCourses 2;

--drop procedure new_HoleTeePar;
go
--Add a new Tee and corresponding Par and Distance to a Hole
create procedure new_HoleTeePar (@HoleID int, @TeeID int, @ParID int, @Distance int) as
begin
	insert into HoleTees values (@HoleID, @TeeID, @ParID, @Distance);
end
go
--	exec new_HoleTeePar 1, 2, 3, 100;

--drop procedure new_Hole;
go
--Add a new Hole and corresponding Name, Tee, Par, and Distance to a Course
create procedure new_Hole (
	@CourseID int,
	@HoleNum  int,
	@HoleName varchar(100),
	@TeeID    int,
	@ParID    int,
	@Distance int) as
declare
	@HoleID int
begin
	insert
		into Holes ( CourseID,  HoleNum,  HoleName)
		values     (@CourseID, @HoleNum, @HoleName);

	set @HoleId = scope_identity();
	exec new_HoleTeePar @HoleID, @TeeID, @ParID, @Distance;
end
go	
--	exec new_Hole 1, 19, NULL, 3, 2, 101;

--drop procedure new_City;
go
--Add a new City to the given StateProv
create procedure new_City (@CityName varchar(100), @StateProvID int) as
begin
	insert into Cities (CityName, StateProvID) values (@CityName, @StateProvID);
end
go
--	exec new_City 'Greenwood', 3;

--drop procedure new_StateProv;
go
--add a new StateProv to the given Country
create procedure new_StateProv (@StateProvName varchar(100), @CountryID int) as
begin
	insert into StatesProvs (StateProvName, CountryID) values (@StateProvName, @CountryID);
end
go
--	exec new_StateProv 'Puerto Rico', 1;

--drop procedure new_Country;
go
--add a new Country
create procedure new_Country (@CountryName varchar(100)) as
begin
	insert into Countries (CountryName) values (@CountryName);
end
go
--	exec new_Country 'Mexico';

--drop procedure new_Location;
go
--add a new City and the StateProv and Country in which it's located
create procedure new_Location (
	@CountryName   varchar(100),
	@StateProvName varchar(100),
	@CityName      varchar(100)) as
begin
	insert into Countries   (CountryName)                values (@CountryName);
	insert into StatesProvs (StateProvName, CountryID)   values (@StateProvName, scope_identity());
	insert into Cities      (CityName,      StateProvID) values (@CityName,      scope_identity());
end
go
--	exec new_Location 'Mexico', 'Mexican Province', 'Mexico City';

--drop procedure new_Course;
go
--add a new Course to a City
create procedure new_Course (@CityID int, @CourseName varchar(100), @Notes varchar(max)) as
begin
	insert
		into Courses ( CityID,  CourseName,  Notes)
		values       (@CityID, @CourseName, @Notes);
end
go