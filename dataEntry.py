import pyodbc
import time

server = 'IN-CSCI-MSSQL.ADS.IU.EDU\\SQLSERV2017DEV2' 
database = 'Group7' 
username = '18Mam18' 
password = 'Venwiv5-CSCI44300' 
conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = conn.cursor()

start = time.time()
cursor.execute('''
    select
        CityName,
        StateProvName,
        CountryName
    from Cities, StatesProvs, Countries
    where
        Cities.StateProvID = StatesProvs.StateProvID AND
        StatesProvs.CountryID = Countries.CountryID
    order by
        CountryName   desc,
        StateProvName asc,
        CityName      asc;'''
    )
end =  time.time()
print(end-start)


# for row in cursor:
#     print(row)
