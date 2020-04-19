import pyodbc
import time

server = 'IN-CSCI-MSSQL.ADS.IU.EDU\\SQLSERV2017DEV2' 
database = 'Group7' 
username = '18Mam18' 
password = 'Venwiv5-CSCI44300' 
conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = conn.cursor()

try:
    cursor.execute('insert into StatesProvs (StateProvName, CountryID) values (?, ?)', "Test City", 5)
except:
    print("fail")

