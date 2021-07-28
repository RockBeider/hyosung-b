//************************************************************
//* Description of index.js
//* @project : Hyosung B system
//* @category : Javascript
//* @date : 2021.07
//* @content : index javascript
//* @author : bhlbest20@gmail.com
//************************************************************

// Include Html
function includePath() {
	var dataAttr = "data-include-path";
	var include = $("[" + dataAttr + "]");
	$.each(include, function (index, item) {
		var self = $(this);
		var path = self.attr(dataAttr);
		self.load(path, function () {
			$(this).before($(this).children());
			$(this).remove();
			kendo.bind($(".wrap"), {});
		});
	});
}

$(window).load(function () {
	kendo.bind($(".wrap"), {});
	includePath();
});

/* =====================================
 * side submenu accordion
 * =====================================
 */
$(".sidebar-wrap .has-submenu:first-child").addClass("active"); //첫번째 메뉴는 열림
$(document).on("click", ".sidebar-wrap .has-submenu > .sidebar-1depth", function () {
	$(".sidebar-wrap .sidebar-2depth.has-submenu:first-of-type").addClass("active"); //첫번째 메뉴는 열림
	if ($(this).parent().hasClass("active")) {
		$(this).next(".sidebar-wrap .sidebar-2depth").slideUp(200);
		$(this).parent().removeClass("active");
	} else {
		$(this).next(".sidebar-wrap .sidebar-2depth").slideDown(200);
		setTimeout(function () {
			$(".sidebar-wrap .sidebar-2depth").css({ overflow: "visible" });
		}, 200);
		$(this).parent().addClass("active");
	}
});

$(document).on("click", ".sidebar-wrap .sidebar-2depth.has-submenu > a", function () {
	if ($(this).parent(".sidebar-2depth").hasClass("active")) {
		$(this).next(".sidebar-wrap .sidebar-3depth").slideUp(200);
		$(this).parent(".sidebar-2depth").removeClass("active");
	} else {
		$(this).next(".sidebar-wrap .sidebar-3depth").slideDown(200);
		setTimeout(function () {
			$(".sidebar-wrap .sidebar-3depth").css({ overflow: "visible" });
		}, 200);
		$(this).parent(".sidebar-2depth").addClass("active");
	}
});

/* =====================================
 * 타이틀 영역 토글버튼 SA0101.html
 * =====================================
 */
$(document).on("click", ".funcToggle", function () {
	$(this).toggleClass("active");
});

/* =====================================
 * file upload
 * =====================================
 */
$(document).ready(function () {
	$(document).on("change", ".filebox .upload-hidden", function () {
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
			console.log("filename", filename);
		} else {
			var filename = $(this).val().split("/").pop().split("\\").pop();
		}
		$(this).parent(".filebox").find(".h-input").val(filename);
	});
});
/* =====================================
 * popup
 * =====================================
 */
