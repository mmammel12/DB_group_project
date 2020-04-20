import pyodbc
import time

server = 'IN-CSCI-MSSQL.ADS.IU.EDU\\SQLSERV2017DEV2' 
database = 'Group7' 
username = '18Mam18' 
password = 'Venwiv5-CSCI44300' 
conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = conn.cursor()

cursor.execute("SELECT countryName from Countries where CountryID = ?", 1)

row = cursor.fetchone()
print(row[0])