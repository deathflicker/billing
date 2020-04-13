function print(){
	document.getElementById('mainDiv').style.display='none';
	document.getElementById('billingArea').style.display='block';
	document.getElementById('namePrint').innerHTML="Name: "+document.getElementById('name').value;
	document.getElementById('mobilePrint').innerHTML="Mobile Number: "+document.getElementById('mobile').value;
	document.getElementById('typePrint').innerHTML="Payment Type: "+document.getElementById('type').value;
	document.getElementById('planPrint').innerHTML="Plan: "+document.getElementById('plan').value;
	document.getElementById('datePrint').innerHTML="Date: "+document.getElementById('date').value;
	document.getElementById('onePrint').innerHTML=document.getElementById('one').value;
	document.getElementById('twoPrint').innerHTML=document.getElementById('two').value;
	document.getElementById('threePrint').innerHTML=document.getElementById('three').value;
	document.getElementById('fourPrint').innerHTML=document.getElementById('four').value;
	document.getElementById('fivePrint').innerHTML=document.getElementById('five').value;
	document.getElementById('sixPrint').innerHTML=document.getElementById('six').value;
	document.getElementById('sevenPrint').innerHTML=document.getElementById('seven').value;
	document.getElementById('eightPrint').innerHTML=document.getElementById('eight').value;
	document.getElementById('ninePrint').innerHTML=document.getElementById('nine').value;
	document.getElementById('tenPrint').innerHTML=document.getElementById('ten').value;
}