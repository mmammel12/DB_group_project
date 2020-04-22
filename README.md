# DB_group_project
## How to run:
* clone repo
* run `pipenv install`
* run `pipenv shell`
* cd into UI
* run `python bottle_app.py`
* UI is accessible through [http://localhost:8080](http://localhost:8080)

## Driver Error Fix
If you receive the error
> InterfaceError('IM003', '[IM003] Specified driver could not be loaded due to system error  126: The specified module could not be found. (ODBC Driver 17 for SQL Server, C:\WINDOWS\SysWOW64\msodbcsql17.dll). (160) (SQLDriverConnect)')

Or similar driver error, you can download the correct driver from:

[Python SQL Driver - pyodbc](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver15)

## commands
```bash
pipenv install
pipenv shell
cd UI
python bottle_app.py
```
