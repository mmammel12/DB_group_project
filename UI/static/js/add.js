"use strict";

function createEventListeners() {
    document.getElementById("ViewFormControlSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("courseInputSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("countryInputSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("stateInputSelect").addEventListener("change", chooseMainInputs);
    document.getElementById("cityInputSelect").addEventListener("change", chooseMainInputs);
}

function chooseMainInputs() {
    if ($("select#ViewFormControlSelect").val() == "choose")
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
    let mainSelect = $("select#ViewFormControlSelect").val();

    if (mainSelect == "choose") {
        resetSelects();
        hideAll();
    }
    else if (mainSelect == "holes") {
        if ($("select#courseInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "city") {
        if ($("select#countryInputSelect").val() != "choose") {
            if ($("select#stateInputSelect").val() != "choose") {
                if ($("select#cityInputSelect").val() != "choose") {
                    $("#submitBtn").removeClass("hidden");
                }
                else {
                    $("#submitBtn").addClass("hidden");
                }
            }
            else {
                $("#submitBtn").addClass("hidden");
            }
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "state") {
        if ($("select#countryInputSelect").val() != "choose") {
            if ($("select#stateInputSelect").val() != "choose") {
                $("#submitBtn").removeClass("hidden");
            }
            else {
                $("#submitBtn").addClass("hidden");
            }
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "country") {
        if ($("select#countryInputSelect").val() != "choose") {
            $("#submitBtn").removeClass("hidden");
        }
        else {
            $("#submitBtn").addClass("hidden");
        }
    }
    else if (mainSelect == "locs" || mainSelect == "courses") {
        $("#submitBtn").removeClass("hidden");
    }
}

function showCourses() {
    switch($("select#ViewFormControlSelect").val()) {
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
    let mainSelect = $("select#ViewFormControlSelect").val();

    switch(mainSelect) {
        case "locs":
        case "courses":
        case "holes":
            $("#countryInput").val("choose");
            $("#countryInput").addClass("hidden");
            break;
        case "city":
        case "state":
        case "country":
            $("#countryInput").removeClass("hidden");
            break;
        case "choose":
            resetSelects();
            hideAll();
            break;
    }

    showStates();
    showCities();
}

function showStates() {
    let mainSelect = $("select#ViewFormControlSelect").val();

    if (mainSelect == "city" || mainSelect == "state") {
        if ($("select#countryInputSelect").val() != "choose") {
            $("#stateInput").removeClass("hidden");
            $("#stateInputSelect > option").each(function() {
                if (this.id == $("#countryInputSelect").val()) {
                    $(this).removeClass("hidden");
                }
                else if (this.value != "choose") {
                    $(this).addClass("hidden");
                }
            });
        }
        else {
            $("#stateInput").val("choose");
            $("#stateInput").addClass("hidden");
        }
    }
    else if (mainSelect == "choose") {
        resetSelects();
        hideAll();
    }
    else {
        $("#stateInput").val("choose");
        $("#stateInput").addClass("hidden");
    }
    
    showCities();
}

function showCities() {
    let mainSelect = $("select#ViewFormControlSelect").val();

    if (mainSelect == "chooose") {
        resetSelects();
        hideAll();
    }
    else if (mainSelect == "city") {
        if ($("select#countryInputSelect").val() != "choose") {
            if ($("select#stateInputSelect").val() != "choose") {
                $("#cityInput").removeClass("hidden");
                $("#cityInputSelect > option").each(function() {
                    if (this.id == $("#stateInputSelect").val()) {
                        $(this).removeClass("hidden");
                    }
                    else if (this.value != "choose") {
                        $(this).addClass("hidden");
                    }
                });
            }
            else {
                $("#cityInput").val("choose");
                $("#cityInput").addClass("hidden");
            }
        }
        else {
            $("#cityInput").val("choose");
            $("#cityInput").addClass("hidden");
        }
    }
    else {
        $("#cityInput").val("choose");
        $("#cityInput").addClass("hidden");
    }
}

function resetSelects() {
    $("#courseInput").val("choose");
    $("#countryInput").val("choose");
    $("#stateInput").val("choose");
    $("#cityInput").val("choose");
}

function hideAll() {
    $("#courseInput").addClass("hidden");
    $("#countryInput").addClass("hidden");
    $("#stateInput").addClass("hidden");
    $("#cityInput").addClass("hidden");
    $("#submitBtn").addClass("hidden");
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}