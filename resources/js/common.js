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
		$(this).parents(".filebox").find(".h-input").val(filename);
	});
});
/* =====================================
 * popup
 * =====================================
 */


/* =====================================
 * BP0110 고객등록 - 할인/프로모션 추가 삭제
 * =====================================
 */

$(document).on('click', '.adding-set .k-button[data-function="add"]', function() {
	var listbox = '';
	listbox += ' <div class="list-box total sm">';
	listbox += ' <div class="list">';
	listbox += ' <span class="label has-bar">할인 적용</span>';
	listbox += ' <span class="desc">업종 할인 &gt; 학원할인</span>';
	listbox += ' <span class="price-set"><span class="price">- 10,000</span><span class="unit">원</span></span>';
	listbox += ' <button data-function="close" class="h-ico close hidden"></button>';
	listbox += ' </div>';
	listbox += ' </div>';
	$(this).parents('.adding-set').find('.added').append(listbox);
});

$(document).on('click', '.list-box .close[data-function="close"]', function() {
	$(this).parents('.list-box').remove();
});

/* =====================================
 * BP0110 고객등록 - 결제서비스 정보 서비스구분
 * =====================================
 */
$(window).load(function () {
	$('[data-function^="checkbox-check"] input[type="checkbox"]').trigger('change');
});
$(document).on('change', '[data-function="checkbox-check1"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check1"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');

$(document).on('change', '[data-function="checkbox-check2"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check2"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');

$(document).on('change', '[data-function="checkbox-check3"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check3"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');

$(document).on('change', '[data-function="checkbox-check4"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check4"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');

$(document).on('change', '[data-function="checkbox-check5"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check5"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');

$(document).on('change', '[data-function="checkbox-check6"] input[type="checkbox"]', function(e) { 
	e.stopPropagation();
	if($('[data-function="checkbox-check6"] input[type="checkbox"]:checked').length > 0) {
		$(this).parents('.form-group.box').addClass('is-checked');
	}else {
		$(this).parents('.form-group.box').removeClass('is-checked');
	}
}).trigger('change');
