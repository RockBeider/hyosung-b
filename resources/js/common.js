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
$('.web-sidebar .has-submenu:first-child').addClass('active'); //첫번째 메뉴는 열림
$(document).on('click', '.web-sidebar .has-submenu > .sidebar-1depth', function () {
	$('.web-sidebar .sidebar-2depth.has-submenu:first-of-type').addClass('active'); //첫번째 메뉴는 열림
	if ($(this).parent().hasClass('active')) {
		$(this).next('.web-sidebar .sidebar-2depth').slideUp(200);
		$(this).parent().removeClass('active');
	} else {
		$(this).next('.web-sidebar .sidebar-2depth').slideDown(200);
		setTimeout(function () {
			$('.web-sidebar .sidebar-2depth').css({ "overflow": "visible" });
		}, 200);
		$(this).parent().addClass('active');
	}
});

$(document).on('click', '.web-sidebar .sidebar-2depth.has-submenu > a', function () {
	if ($(this).parent('.sidebar-2depth').hasClass('active')) {
		$(this).next('.web-sidebar .sidebar-3depth').slideUp(200);
		$(this).parent('.sidebar-2depth').removeClass('active');
	} else {
		$(this).next('.web-sidebar .sidebar-3depth').slideDown(200);
		setTimeout(function () {
			$('.web-sidebar .sidebar-3depth').css({ "overflow": "visible" });
		}, 200);
		$(this).parent('.sidebar-2depth').addClass('active');
	}

});

/* =====================================
* 검색영역 기간선택 버튼
* =====================================
*/
$(document).on('click', '.btn-period-box .btn', function() {
	$('.btn-period-box .btn').removeClass('active');
	$(this).addClass('active');
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

var time = 570; //기준 초
var min = ""; //분
var sec = "" //초

var x= setInterval(function() {
	min = parseInt(time/60);
	sec = parseInt(time % 60);

	if(min < 10) {
		min = "0" + min;
	}
	if(sec < 10) {
		sec = "0" + sec;
	}
	document.getElementById("timer").innerHTML = min + ":" + sec;
	time--;
	if(time < 0) {
		clearInterval(x);
	}
}, 1000);

var header = `
	<a href="#" class="left-group">
		<span class="logo">효성에프엠에스</span><span class="logo-info">통합업무시스템</span>
	</a>
	<div class="right-group">
		<div class="profile-box">
			<i class="ico-md profile">프로필</i>
			<strong class="name">홍길동</strong>&nbsp;님
		</div>
		<div class="timer-box">
			<span class="timer-set"><i class="ico-xs time">타이머</i><span id="timer">09:30</span></span>
			<button type="button" class="btn-text time-add">로그인연장</button>
		</div>
		<button type="button" class="btn-logout">로그아웃</button>
	</div>
`;
$('.web-header').html(header);
// console.log(header);

var sidebar = `
	<aside class="web-sidebar">
		<!-- 상단 고정영역 -->
		<div class="sidebar-head">
			<a class="main-menu" aria-label=""><i class="ico-sm bookmark">북마크</i><span>즐겨 찾는 메뉴</span></a>
			<ul class="sub-menu">
				<a href="#;">입금 관리</a>
				<a href="#;">계약 관리</a>
				<a href="#;">정산 조회</a>
			</ul>
		</div>
		<!-- 컨텐츠  -->
		<div class="sidebar-body">
			<!-- 메뉴 -->
			<ul class="sidebar-menu">
				<!-- [D] 서브메뉴가 있을 때 .has-submenu 추가 -->
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>기준정보</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>계약</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>정산</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>과금</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>배분</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>회계</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>
				<li class="has-submenu active">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>서비스 품질</span></a>
					<!-- [D] 개발시 인라인 스타일 삭제 : 보여주기 위한 스타일임 -->
					<div class="sidebar-2depth" style="display: block; overflow: visible">
						<a href="#;">상담정보관리</a>
						<a href="#;">요청사항관리</a>
						<a href="#;">민원조치</a>
						<a href="#;">공지사항</a>
						<a href="#;">SMS관리</a>
						<a href="#;">이메일관리</a>
						<a href="#;">서류양식관리</a>
						<a href="#;">정기자료관리</a>
						<a href="#;">사후점검제출확인</a>
						<a href="#;">동의자료확인</a>
					</div>
				</li>
				<li class="has-submenu">
					<a class="sidebar-1depth" aria-label=""><i class="ico-sm bookmark">북마크</i><span>권한 관리</span></a>
					<div class="sidebar-2depth">
						<a href="#;">하위</a>
						<a href="#;">하위</a>
					</div>
				</li>

			</ul>
		</div>
		<!-- 하단 고정영역 -->
		<div class="sidebar-foot">
			<div class="btn-box">
				<button type="button" class="btn"><i class="ico-sm mail">메일</i><span>나의 업무 보관함</span></button>
				<button type="button" class="ico lnb-close">버튼</button>
			</div>
		</div>
	</aside>
`;
$('.web-sidebar').html(sidebar);
// console.log(header);

$(".main-content").load("./pages/SA/SA0101.html");
