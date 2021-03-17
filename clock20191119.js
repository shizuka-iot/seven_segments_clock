

// htmlの要素を取得
let segment0 = document.getElementsByClassName("segment0");
let segment1 = document.getElementsByClassName("segment1");
let segment2 = document.getElementsByClassName("segment2");
let segment3 = document.getElementsByClassName("segment3");
let segment4 = document.getElementsByClassName("segment4");
let segment5 = document.getElementsByClassName("segment5");
let segment6 = document.getElementsByClassName("segment6");
let collon = document.getElementsByClassName("collon");
// 上は各セグメント。下はセグメントを入れるdiv要素
let segmentContainer= document.getElementsByClassName("segment-container");


// 
function setNumber(n,digit)
{
	switch(n)
	{
		case 0: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "block";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "none";
			break;
		case 1: 
			segment0[digit].style.display= "none";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "none";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "none";
			segment6[digit].style.display= "none";
			break;
		case 2: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "none";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "block";
			segment5[digit].style.display= "none";
			segment6[digit].style.display= "block";
			break;
		case 3: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "none";
			segment6[digit].style.display= "block";
			break;
		case 4: 
			segment0[digit].style.display= "none";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "none";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "block";
			break;
		case 5: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "none";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "block";
			break;
		case 6: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "none";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "block";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "block";
			break;
		case 7: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "none";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "none";
			break;
		case 8: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "block";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "block";
			break
		case 9: 
			segment0[digit].style.display= "block";
			segment1[digit].style.display= "block";
			segment2[digit].style.display= "block";
			segment3[digit].style.display= "block";
			segment4[digit].style.display= "none";
			segment5[digit].style.display= "block";
			segment6[digit].style.display= "block";
			break;
		default:
			break;
	}
}


let count = 0;

let nowTime = 0; 
let nowHour = 0;
let nowMin = 0;
let nowSec = 0;
let oneHour = 0;
let tenHour = 0;
let oneMin = 0;
let tenMin =0;
let oneSec =0;
let tenSec =0;
let ti=[];

function input_time()
{
	nowTime = new Date();
	nowHour = nowTime.getHours();
	nowMin = nowTime.getMinutes();
	nowSec = nowTime.getSeconds();
	tenHour = Math.floor(nowHour/10);
	oneHour = nowHour%10;
	tenMin = Math.floor(nowMin/10);
	oneMin = nowMin%10;
	tenSec = Math.floor(nowSec/10);
	oneSec = nowSec%10;
	ti = [
		tenHour,
		oneHour,
		tenMin,
		oneMin,
		tenSec,
		oneSec
	];
}


function mainLoop()
{
	input_time();
	for(let i=0; i<6; i++)
	{
		setNumber(ti[i],i);
	}
}


window.onload = function()
{
	collon[0].style.display = "none";
	collon[2].style.display = "none";
	collon[4].style.display = "none";
	collon[5].style.display = "none";
	segmentContainer[4].classList.add("sec");
	segmentContainer[5].classList.add("sec");

	setInterval(mainLoop, 1000/60);	
}
