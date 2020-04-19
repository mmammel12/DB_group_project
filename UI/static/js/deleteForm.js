"use strict";

function createEventListeners() {
    document.getElementById("AddFormControlSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("courseSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("holeSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("parSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("teeSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("countrySelect").addEventListener("change", chooseMainInputs);
    document.getElementById("stateSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("citySelect").addEventListener("change", chooseMainInputs);
}

function chooseMainInputs() {
    if ($("select#AddFormControlSelect").val() != "choose")
    {
        showCourses();
        showCountryInput();
        showCountries();
    }
    else {
        resetSelects();
        hideAll();
    }
}


function showCourses() {
    switch($("select#AddFormControlSelect").val()) {
        case "tee":
        case "hole":
        case "default18":
            $("#courseSelect").removeClass("hidden");
            break;
        case "course":
        case "city":
        case "state":
        case "country":
            $("#courseInputSelect").val("choose");
            $("#courseSelect").addClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }

    showSumbit();
    showHoles();
}


function showHoles() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "tee" || mainSelect == "hole") {
        if ($("#courseInputSelect").val() != "choose") {
            $("#holeSelect").removeClass("hidden");
        }
        else {
            $("#holeInputSelect").val("choose");
            $("#holeSelect").addClass("hidden");
        }
    }
    else {
        $("#holeInputSelect").val("choose");
        $("#holeSelect").addClass("hidden");
    }

    showPars();
}


function showPars() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "tee" || mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("#parSelect").removeClass("hidden");
        }
        else {
            $("#parInputSelect").val("choose");
            $("#parSelect").addClass("hidden");
        }
    }
    else {
        $("#parInputSelect").val("choose");
        $("#parSelect").addClass("hidden");
    }

    showTees();
}


function showTees() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "tee") {
        if ($("#parInputSelect").val() != "choose") {
            $("#teeSelect").removeClass("hidden");
        }
        else {
            $("#teeInputSelect").val("choose");
            $("#teeSelect").addClass("hidden");
        }
    }
    else if (mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("#teeSelect").removeClass("hidden");
        }
        else {
            $("#teeInputSelect").val("choose");
            $("#teeSelect").addClass("hidden");
        }
    }
    else {
        $("#teeInputSelect").val("choose");
        $("#teeSelect").addClass("hidden");
    }

    showDistanceInput();
}


function showDistanceInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "tee") {
        if ($("#teeInputSelect").val() != "choose") {
            $("#distance").removeClass("hidden");
        }
        else {
            $("#inputDistance").val("");
            $("#distance").addClass("hidden");
        }
    }
    else if (mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("#distance").removeClass("hidden");
        }
        else {
            $("#inputDistance").val("");
            $("#distance").addClass("hidden");
        }
    }
    else {
        $("#inputDistance").val("");
        $("#distance").addClass("hidden");
    }

    showHoleInput();
    showSumbit();
}


function showHoleInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("holeName").removeClass("hidden");
        }
        else {
            $("InputholeName").val("");
            $("holeName").addClass("hidden");
        }
    }
    else {
        $("InputholeName").val("");
        $("holeName").addClass("hidden");
    }
}


function showCountries() {
    let mainSelect = $("select#AddFormControlSelect").val();

    switch(mainSelect) {
        case "city":
        case "state":
        case "country":
            $("#countrySelect").removeClass("hidden");
            showStates();
            break;
        case "combo":
        case "hole":
        case "course":
            $("#countryInputSelect").val("choose");
            $("#countrySelect").addClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }

    if (mainSelect == "course") {
        $("#countryWarning").removeClass("hidden");
    }
    else {
        $("#countryWarning").addClass("hidden");
    }
}


function showStates() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "city" || mainSelect == "state") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#stateInputSelect > option").each(function() {
                if (this.id == $("#countryInputSelect").val()) {
                    $(this).removeClass("hidden");
                }
                else if (this.value != "choose") {
                    $(this).addClass("hidden");
                }
            });
            if (mainSelect == "state") {
                $("#stateWarning").removeClass("hidden");
            }
            else {
                $("#stateWarning").addClass("hidden");
            }
            $("#stateSelect").removeClass("hidden");
        }
        else {
            $("#stateInputSelect").val("choose");
            $("#stateSelect").addClass("hidden");
        }
    }
    else {
        $("#stateInputSelect").val("choose");
        $("#stateSelect").addClass("hidden");
    }
    
    showCities();
}


function showCities() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "city") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#cityInputSelect > option").each(function() {
                if (this.id == $("#stateInputSelect").val()) {
                    $(this).removeClass("hidden");
                }
                else if (this.value != "choose") {
                    $(this).addClass("hidden");
                }
            });
            $("#cityWarning").removeClass("hidden");
            $("#citySelect").removeClass("hidden");
        }
    }
    else {
        $("#cityWarning").addClass("hidden");
        $("#cityInputSelect").val("choose");
        $("#citySelect").addClass("hidden");
    }

    showSumbit();
}


function showSumbit() {
    let mainSelect = $("select#AddFormControlSelect").val();

    
}


function resetSelects() {
    $("#courseInputSelect").val("choose");
    $("#holeInputSelect").val("choose");
    $("#teeInputSelect").val("choose");
    $("#countryInputSelect").val("choose");
    $("#stateInputSelect").val("choose");
    $("#cityInputSelect").val("choose");
}

function hideAll() {
    $("#courseSelect").addClass("hidden");
    $("#holeSelect").addClass("hidden");
    $("#teeSelect").addClass("hidden");
    $("#countrySelect").addClass("hidden");
    $("#stateSelect").addClass("hidden");
    $("#citySelect").addClass("hidden");
    $("#submitBtn").addClass("hidden");
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}