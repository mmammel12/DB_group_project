"use strict";

function createEventListeners() {
    document.getElementById("deleteFormControlSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("courseSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("holeSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("teeSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("countrySelect").addEventListener("change", chooseMainInputs);
    document.getElementById("stateSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("citySelect").addEventListener("change", chooseMainInputs);
}

function chooseMainInputs() {
    if ($("select#deleteFormControlSelect").val() != "choose")
    {
        showCourses();
        showCountries();
    }
    else {
        resetSelects();
        hideAll();
    }
}


function showCourses() {
    switch($("select#deleteFormControlSelect").val()) {
        case "hole":
        case "combo":
        case "course":
            $("#courseSelect").removeClass("hidden");
            showHoles();
            break;
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
}


function showHoles() {
    let mainSelect = $("select#deleteFormControlSelect").val();

    if (mainSelect == "hole" || mainSelect == "combo") {
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

    showTees();
}


function showTees() {
    let mainSelect = $("select#deleteFormControlSelect").val();

    if (mainSelect == "combo") {
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

    showSumbit();
}


function showCountries() {
    let mainSelect = $("select#deleteFormControlSelect").val();

    switch(mainSelect) {
        case "city":
            $("#cityWarning").removeClass("hidden");
        case "state":
            $("#stateWarning").removeClass("hidden");
        case "country":
            $("#countryWarning").removeClass("hidden");
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

    if (mainSelect == "state") {
        $("#countryWarning").addClass("hidden");
        $("#cityWarning").addClass("hidden");
    }
    else if (mainSelect == "city") {
        $("#countryWarning").addClass("hidden");
        $("#stateWarning").addClass("hidden");
    }
    else if (mainSelect == "country") {
        $("#stateWarning").addClass("hidden");
        $("#cityWarning").addClass("hidden");
    }
    else {
        $("#countryWarning").addClass("hidden");
        $("#stateWarning").addClass("hidden");
        $("#cityWarning").addClass("hidden");
    }
}


function showStates() {
    let mainSelect = $("select#deleteFormControlSelect").val();

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
    let mainSelect = $("select#deleteFormControlSelect").val();

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
            $("#citySelect").removeClass("hidden");
        }
    }
    else {
        $("#cityInputSelect").val("choose");
        $("#citySelect").addClass("hidden");
    }

    showSumbit();
}


function showSumbit() {
    let mainSelect = $("select#deleteFormControlSelect").val();

    if (mainSelect == "choose") {
        resetSelects();
        hideAll();
    }
    else if (mainSelect == "hole") {
        if ($("#holeInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else if (mainSelect == "combo") {
        if ($("#teeInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else if (mainSelect == "course") {
        if ($("#courseInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else if (mainSelect == "city") {
        if ($("#cityInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else if (mainSelect == "state") {
        if ($("#stateInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else if (mainSelect == "country") {
        if ($("#countryInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
    }
    else {
        $("#submitBtn").addClass("hidden");
    }
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