//************************************************************
//* Description of index.js
//* @project : Hyosung B system
//* @category : Javascript
//* @date : 2021.07
//* @content : index javascript
//* @author : bhlbest20@gmail.com
//************************************************************

// Include Html
window.addEventListener("load", function () {
    var allElements = document.getElementsByTagName("*");
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open("GET", includePath, true);
            xhttp.send();
        }
    });
});

$(document).ready(function () {
    kendo.bind($(".wrap"), {});
});