//event display
txt='';
$('.button').click(function() {
	
	txt +=$(this).val();
	$('#display').val(txt);
});
//event clear
$('#AC').click(function () {
	txt='';
	$('#display').val('');
	$('#result').val('');
});
//event tinh binh phuong
$('#bp').click(function() {
	var x = $('#display').val();
	var y = $('#result').val();
	if (y!='') {
		$('#result').val(y*y);
		$('#display').val('');
		$('#display').val(y + '^2');
	}
	else{
		$('#result').val(x*x);
	}
});
//event tinh %
$('#phantram').click(function() {
	var x = $('#display').val();
	var y = $('#result').val();
	if (y!='') {
		$('#result').val(y/100);
		$('#display').val('');
		$('#display').val(y + '%');
	}
	else{
		$('#result').val(x/100);
		$('#display').val(x + '%');
	}
});
//event can bac 2
$('#canb2').click(function() {
	var x = $('#display').val();
	var y = $('#result').val();
	if (y!='') {
		$('#result').val(Math.sqrt(y));
		$('#display').val("√"+y);
	}
	else{
		$('#result').val(Math.sqrt(x));
		$('#display').val("√"+x);
	}
});
//event delete
$('#DEL').click(function() {
	txt = $('#display').val();
	if(txt.length > 0){
		$('#display').val(txt.substring(0,txt.length -1));
		txt = $('#display').val();
	}
});
//event  math
$('#math').click(function() {
	var result =$('#display').val();
	$('#result').val(eval(result));
	$('#display').val('');
});
//event !
$('#gt').click(function() {
	var x = $('#display').val();
	var result=1;
	if (x>=1) {
		for (var i =1; i <=x; i++) {
			result*=i;
		}
	}
	$('#result').val(result);
	$('#display').val(x + '!');
	
});
//change theme
$('#change_theme').click(function() {
	var x =$(this).css('background-color');
	if(x=='rgb(177, 169, 158)'){
		$('body').css('background-color', '#924e4e');
		$('.wraper').css({
			'border-color': '#222224',
			'background-color': 'rgba(53, 210, 34, 0.45)'
		});;
		$('h1').css('color', '#740a5c');

		$('.button').css({
			'background-color': '#f1f0f0',
			'color': '#0c0b0b'
		});
		$('#AC').css({
			'background-color': '#9130d0',
			'color': '#000000'
		});
		$('#DEL').css({
			'background-color': '#FF9800',
			'color': 'rgb(12, 11, 11)'
		});
		$(this).css({
			'background-color': '#459a9d',
			'color': '#171212'
		});
	}
	else{
		$('body').css('background-color', 'grey');
		$('.wraper').css({
			'border-color': '#3e3e61',
			'background-color': 'rgba(55, 54, 93, 0.45)'
		});;
		$('h1').css('color', '#d8ab75');

		$('.button').css({
			'background-color': '#403e3e',
			'color': '#f1e5d8'
		});
		$('#AC').css({
			'background-color': '#d03030',
			'color': '#d8cfcf'
		});
		$('#DEL').css({
			'background-color': '#40729e',
			'color': '#f17344'
		});
		$(this).css({
			'background-color': '#b1a99e',
			'color': 'brown'
		});
	}
});