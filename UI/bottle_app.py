from bottle import default_app, route, post, template, run


@route("/")
def home():
    return template("index.html")


@route("/view")
def basicForm():
    return template("view.html")


@post("/basicResult")
def basicResult():
    return template("result.html")


@route("/bbForm")
def bbForm():
    return template("bbForm.html")


@post("/bbResult")
def bbResult():
    return template("bbResult.html")


@route("/final")
def final():
    return template("final.html")


@post("/finalResult")
def finalResult():
    return template("finalResult.html")


application = default_app()

run(host="localhost", port=8080, debug=True)
