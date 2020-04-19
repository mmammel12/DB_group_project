from bottle import default_app, route, post, template, run, static_file


@route("/static/css/<filename>")
def css(filename):
    return static_file(filename, root="./static/css/")


@route("/static/js/<filename>")
def js(filename):
    return static_file(filename, root="./static/js/")


@route("/")
def home():
    return template("index.html")


@route("/view")
def viewForm():
    return template("view.html")


@post("/viewResult")
def viewResult():
    return template("viewResult.html")


@route("/add")
def addForm():
    return template("add.html")

@post("/editResult")
def addResult():
    return template("addResult.html")


@route("/delete")
def deleteForm():
    return template("delete.html")


@post("/deleteConfirm")
def deleteConfirm():
    return template("deleteConfirm.html")

@post("/deleteResult")
def deleteResult():
    return template("deleteResult.html")


application = default_app()

run(host="localhost", port=8080, debug=True)
