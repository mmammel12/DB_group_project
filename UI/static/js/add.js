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
    if ($("select#AddFormControlSelect").val() == "choose")
    {
        resetSelects();
        hideAll();
    }
    else {
        showSumbit();
        showCourses();
        showCountries();
    }
}

function showSumbit() {
    let mainSelect = $("select#AddFormControlSelect").val();

    // TODO
}

function showCourses() {
    // TODO
    switch($("select#AddFormControlSelect").val()) {
        case "holes":
            $("#courseInput").removeClass("hidden");
            break;
        case "city":
        case "state":
        case "country":
        case "locs":
        case "courses":
            $("#courseInput").val("choose");
            $("#courseInput").addClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }
}

function showCountries() {
    let mainSelect = $("select#AddFormControlSelect").val();

    switch(mainSelect) {
        case "city":
        case "state":
            $("#countrySelect").removeClass("hidden");
            break;
        case "tee":
        case "hole":
        case "default18":
        case "course":
        case "country":
            $("#countrySelect").addClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }

    showStates();
    showCityInput();
}

function showStates() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "city" || mainSelect == "course") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#stateSelect").removeClass("hidden");
        }
        else {
            $("#stateSelect").addClass("hidden");
        }
    }
    else {
        $("#stateSelect").addClass("hidden");
    }
    
    showCityInput();
}

function showCityInput() {
    let mainSelect = $("select#AddFormControlSelect").val();

    if (mainSelect == "chooose") {
        resetSelects();
        hideAll();
    }
    else if (mainSelect == "city" || mainSelect == "course") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#cityName").removeClass("hidden");
        }
        else {
            $("#cityName").addClass("hidden");
        }
    }
    else {
        $("#cityName").addClass("hidden");
    }
}

function resetSelects() {
    $("#courseSelect").val("choose");
    $("#holeSelect").val("choose");
    $("#parSelect").val("choose");
    $("#teeSelect").val("choose");
    $("#countrySelect").val("choose");
    $("#stateSelect").val("choose");
    $("#citySelect").val("choose");
    $("#holeName").val("");
    $("#cityName").val("");
    $("#stateName").val("");
    $("#countryName").val("");
    $("#courseName").val("");
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