//************************************************************
//* Description of index.js
//* @project : Hyosung B system
//* @category : Javascript
//* @date : 2021.07
//* @content : index javascript
//* @author : bhlbest20@gmail.com
//************************************************************

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



/* =====================================
* side submenu accordion
* =====================================
*/
$('.sidebar-wrap .has-submenu:first-child').addClass('active'); //첫번째 메뉴는 열림
$(document).on('click', '.sidebar-wrap .has-submenu > .sidebar-1depth', function () {
	$('.sidebar-wrap .sidebar-2depth.has-submenu:first-of-type').addClass('active'); //첫번째 메뉴는 열림
	if ($(this).parent().hasClass('active')) {
		$(this).next('.sidebar-wrap .sidebar-2depth').slideUp(200);
		$(this).parent().removeClass('active');
	} else {
		$(this).next('.sidebar-wrap .sidebar-2depth').slideDown(200);
		setTimeout(function () {
			$('.sidebar-wrap .sidebar-2depth').css({ "overflow": "visible" });
		}, 200);
		$(this).parent().addClass('active');
	}
});

$(document).on('click', '.sidebar-wrap .sidebar-2depth.has-submenu > a', function () {
	if ($(this).parent('.sidebar-2depth').hasClass('active')) {
		$(this).next('.sidebar-wrap .sidebar-3depth').slideUp(200);
		$(this).parent('.sidebar-2depth').removeClass('active');
	} else {
		$(this).next('.sidebar-wrap .sidebar-3depth').slideDown(200);
		setTimeout(function () {
			$('.sidebar-wrap .sidebar-3depth').css({ "overflow": "visible" });
		}, 200);
		$(this).parent('.sidebar-2depth').addClass('active');
	}
});

/* =====================================
* 검색영역 기간선택 버튼
* =====================================
*/
$(document).on('click', '.btn-box.period .h-btn', function() {
	$('.btn-box.period .h-btn').removeClass('active');
	$(this).addClass('active');
});
/* =====================================
* 타이틀 영역 토글버튼
* =====================================
*/
$(document).on('click', '.funcToggle', function() {
	$(this).toggleClass('active');
});
/* =====================================
* datepicker
* =====================================
*/
$(document).on('click', '.datepicker', function() {
	$(this).datepicker({ 
		dateFormat: 'yy/mm/dd' 
	})
	.datepicker( "show" );
});

/* =====================================
* 헤더 시간 카운트다운
* =====================================
*/
// var time = 570; //기준 초
// var min = ""; //분
// var sec = "" //초

// var x= setInterval(function() {
// 	min = parseInt(time/60);
// 	sec = parseInt(time % 60);

// 	if(min < 10) {
// 		min = "0" + min;
// 	}
// 	if(sec < 10) {
// 		sec = "0" + sec;
// 	}
// 	document.getElementById("timer").innerHTML = min + ":" + sec;
// 	time--;
// 	if(time < 0) {
// 		clearInterval(x);
// 	}
// }, 1000);

 
var categories = $(".kd-dropdown").kendoDropDownList({
    dataTextField: "CategoryName",
    dataValueField: "CategoryID",
    height: 200,
    template: '<span class="k-state-default" ></span><span class=\"k-state-default\">#: data.CategoryName #</span>',
    valueTemplate: '<span class="selected-value"></span><span>#:data.CategoryName#</span>',
    dataSource: {
        type: "odata",
        serverFiltering: true,
        transport: {
            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
        }
    }
}).data("kendoDropDownList");


$(".kd-dateinput").kendoDateInput({ //date input
    // change: onChange,
    value: new Date()
});



function onChange(arg) {
    kendoConsole.log("The selected product ids are: [" + this.selectedKeyNames().join(", ") + "]");
}

$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            pageSize: 10,
            transport: {
                read:  {
                    url: "https://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "jsonp"
                }
            },
            schema: {
                model: {
                    id: "ProductID"
                }
            }
        },
        // pageable: true,
        scrollable: false,
        persistSelection: true,
        sortable: true,
        change: onChange,
        columns: [
            { selectable: true, width: "50px" },
            { field:"ProductName", title: "Product Name" },
            { field: "UnitPrice", title:"Unit Price", format: "{0:c}"},
            { field: "UnitsInStock", title:"Units In Stock"},
            { field: "Discontinued"}]
    });
});