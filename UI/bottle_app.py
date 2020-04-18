from bottle import default_app, route, post, template, run


@route("/")
def home():
    return template("index.html")


@route("/view")
def basicForm():
    return template("view.html")


@post("/viewResult")
def basicResult():
    return template("viewResult.html")


@route("/edit")
def bbForm():
    return template("edit.html")


@post("/editResult")
def bbResult():
    return template("editResult.html")


@route("/delete")
def final():
    return template("delete.html")


@post("/deleteConfirm")
def finalResult():
    return template("deleteConfirm.html")

@post("/deleteResult")
def finalResult():
    return template("deleteResult.html")


application = default_app()

run(host="localhost", port=8080, debug=True)
