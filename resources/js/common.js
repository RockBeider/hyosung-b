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
			kendo.bind($(".sidebar-wrap"), {});
			kendo.bind($("#header"), {});
		});
	});
}

$(window).load(function () {
	// kendo.bind($(".wrap"), {});
	includePath();
});

/* =====================================
 * side submenu accordion
 * =====================================
 */

// $(".sidebar-body .has-submenu:first-child").addClass("active"); //첫번째 메뉴는 열림
// $(".sidebar-body .has-submenu:first-child .sidebar-2depth").slideDown(200);
$(document).on("click", ".sidebar-body .has-submenu > .sidebar-1depth", function () {
	// $(".sidebar-wrap .sidebar-2depth.has-submenu:first-of-type").addClass("active"); //첫번째 메뉴는 열림
	if (!($(this).parent().hasClass("active"))) {
		// $(".sidebar-wrap .has-submenu").removeClass('active');
		// $(this).next(".sidebar-wrap .sidebar-2depth").slideUp(200);
		// $(this).parent().removeClass("active");
	// } else {
		$(".sidebar-wrap .sidebar-2depth").slideUp(200);
		$(".sidebar-wrap .has-submenu").removeClass('active');
		$(this).next(".sidebar-2depth").slideDown(200);
		$(this).parent().addClass("active");
		setTimeout(function () {
			$(".sidebar-wrap .sidebar-2depth").css({ overflow: "visible" });
		}, 200);
	}
});

// $(document).on("click", ".sidebar-wrap .sidebar-2depth.has-submenu > a", function () {
// 	if ($(this).parent(".sidebar-2depth").hasClass("active")) {
// 		$(this).next(".sidebar-wrap .sidebar-3depth").slideUp(200);
// 		$(this).parent(".sidebar-2depth").removeClass("active");
// 	} else {
// 		$(this).next(".sidebar-wrap .sidebar-3depth").slideDown(200);
// 		setTimeout(function () {
// 			$(".sidebar-wrap .sidebar-3depth").css({ overflow: "visible" });
// 		}, 200);
// 		$(this).parent(".sidebar-2depth").addClass("active");
// 	}
// });
$(document).on('click', '#sidebarFold', function() {
	if($('.sidebar-wrap').hasClass('fold')) { //접힌상태
		console.log('닫힌상태')
		$(".sidebar-wrap .sidebar-2depth").slideUp(200);
		$('.sidebar-wrap').removeClass('fold');
	}else {
		console.log('열린상태')
		$(".sidebar-wrap .sidebar-2depth").slideUp(200);
		$('.sidebar-wrap').addClass('fold');
	}
})
$(document).on('click', '.sidebar-wrap.fold .sidebar-head, .sidebar-wrap.fold .sidebar-1depth', function() {
	$('.sidebar-wrap').removeClass('fold');
})


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
 * SA020202
 * =====================================
 */
$(document).on('click', '.table-bg-box .cell [data-function="close"]', function() {
	$(this).parents('.row').remove();
});
/* =====================================
 * SA070602_02
 * =====================================
 */
$(document).on('click', '#addRecipient', function() {
	$('.add-recipient-pop').hide();
	$('#addRecipientPop').show();
});
$(document).on('click', '#addRecipientPop [data-function="close"]', function() {
	$('#addRecipientPop').hide();
});
$(document).on('click', '#addBulkRecipient', function() {
	$('.add-recipient-pop').hide();
	$('#addBulkRecipientPop').show();
});
$(document).on('click', '#addBulkRecipientPop [data-function="close"]', function() {
	$('#addBulkRecipientPop').hide();
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

/* =====================================
 * SA070602_02
 * =====================================
 */
if($('.selected-box .item').length == 0 ) {
	$('.selected-box').find('.placeholder').css({'display': 'flex'});
}
$(document).on('click', '.listDelete', function() {
	$(this).parents('.item').remove();
	if($('.selected-box .item').length == 0 ) {
		$('.selected-box').find('.placeholder').css({'display': 'flex'});
	}
})

/* =====================================
 * checkbox
 * =====================================
 */
$(".textarea-byte-set textarea").on('input', function (e) {
	$(this).parents('.textarea-byte-set').find('.k-counter-container .k-counter-value').html($(e.target).val().length);
});
/* =====================================
 * checkbox disabled SA070702.html
 * =====================================
 */
if( $('.radioTab').hasClass('disabled') ) {
	$('.radioTab.disabled').find('input').attr('disabled', true);
}

if( $('.check-group').hasClass('disabled') ) {
	$('.check-group.disabled').find('input').attr('disabled', true);
}
/* =====================================
 * file close 
 * =====================================
 */

$(document).on('click', '.t-file .close', function() {
	$(this).parents('.t-file').remove();
})

