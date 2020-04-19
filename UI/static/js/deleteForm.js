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
        case "course":
            $("#countrySelect").removeClass("hidden");
            break;
        case "tee":
        case "hole":
        case "default18":
        case "country":
            $("#countryInputSelect").val("choose");
            $("#countrySelect").addClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }

    showStates();
    showStateInput();
}

function showCountryInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "country") {
        $("#countryName").removeClass("hidden");
    }
    else {
        $("#inputCountryName").val("");
        $("#countryName").addClass("hidden");
    }
    
    showSumbit();
}


function showStates() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "city" || mainSelect == "course") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#stateInputSelect > option").each(function() {
                if (this.id == $("#countryInputSelect").val()) {
                    $(this).removeClass("hidden");
                }
                else if (this.value != "choose") {
                    $(this).addClass("hidden");
                }
            });
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
    showCityInput();
}

function showStateInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "state") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#stateName").removeClass("hidden");
        }
        else {
            $("#inputStateName").val("");
            $("#stateName").addClass("hidden");
        }
    }
    else {
        $("#inputStateName").val("");
        $("#stateName").addClass("hidden");
    }

    showSumbit();
}


function showCities() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "course") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#cityInputSelect > option").each(function() {
                if (this.id == $("#stateInputSelect").val()) {
                    $(this).removeClass("hidden");
                }
                else if (this.value != "choose") {
                    $(this).addClass("hidden");
                }
            });
            $("#citySelect").removeClass("hidden");
        }
    }
    else {
        $("#cityInputSelect").val("choose");
        $("#citySelect").addClass("hidden");
    }

    showCourseInput();
}


function showCityInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "city") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#cityName").removeClass("hidden");
        }
        else {
            $("#cityName").val("");
            $("#cityName").addClass("hidden");
        }
    }
    else {
        $("#cityName").val("");
        $("#cityName").addClass("hidden");
    }

    showSumbit();
}


function showCourseInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "course") {
        if ($("#cityInputSelect").val() != "choose") {
            $("#courseName").removeClass("hidden");
        }
        else {
            $("#inputCourseName").val("");
            $("#courseName").addClass("hidden");
        }
    }
    else {
        $("#inputCourseName").val("");
        $("#courseName").addClass("hidden");
    }

    showSumbit();
}


function showSumbit() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "tee") {
        if ($("#teeInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "default18") {
        if ($("#courseInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "course") {
        if ($("#cityInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "city") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "state") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "country") {
        $("#submitBtn").removeClass("hidden");
    }
    else {
        $("#submitBtn").addClass("hidden");
    }
}


function resetSelects() {
    $("#courseInputSelect").val("choose");
    $("#holeInputSelect").val("choose");
    $("#parInputSelect").val("choose");
    $("#teeInputSelect").val("choose");
    $("#countryInputSelect").val("choose");
    $("#stateInputSelect").val("choose");
    $("#cityInputSelect").val("choose");
    $("#inputHoleName").val("");
    $("#inputCityName").val("");
    $("#inputStateName").val("");
    $("#inputCountryName").val("");
    $("#inputCourseName").val("");
    $("#inputDistance").val("");
}

function hideAll() {
    $("#courseSelect").addClass("hidden");
    $("#holeSelect").addClass("hidden");
    $("#parSelect").addClass("hidden");
    $("#teeSelect").addClass("hidden");
    $("#countrySelect").addClass("hidden");
    $("#stateSelect").addClass("hidden");
    $("#citySelect").addClass("hidden");
    $("#holeName").addClass("hidden");
    $("#cityName").addClass("hidden");
    $("#stateName").addClass("hidden");
    $("#countryName").addClass("hidden");
    $("#courseName").addClass("hidden");
    $("#submitBtn").addClass("hidden");
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}