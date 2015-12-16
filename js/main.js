$('#colorChange').change(function() {
 var value = $('#colorChange').val();
 if (value == 'pink') {
 	$('.heading, .github--link').css("color", "#E91E63");
 	$('#primaryButton').removeClass().addClass('pink-btn');
 	$('#liteButton').removeClass().addClass('pink-btn-lite');
 	$('#flatButton').removeClass().addClass('pink-flat');
 	$('#fab').removeClass().addClass('pink-fab');
 } else if (value == 'red') {
 	$('.heading, .github--link').css("color", "#f44336");
 	$('#primaryButton').removeClass().addClass('red-btn');
 	$('#liteButton').removeClass().addClass('red-btn-lite');
 	$('#flatButton').removeClass().addClass('red-flat');
 	$('#fab').removeClass().addClass('red-fab');
 } else if (value == 'deepOrange') {
 	$('.heading, .github--link').css("color", "#FF5722");
 	$('#primaryButton').removeClass().addClass('deepOrange-btn');
 	$('#liteButton').removeClass().addClass('deepOrange-btn-lite');
 	$('#flatButton').removeClass().addClass('deepOrange-flat');
 	$('#fab').removeClass().addClass('deepOrange-fab');
 } else if (value == 'orange') {
 	$('.heading, .github--link').css("color", "#FF9800");
 	$('#primaryButton').removeClass().addClass('orange-btn');
 	$('#liteButton').removeClass().addClass('orange-btn-lite');
 	$('#flatButton').removeClass().addClass('orange-flat');
 	$('#fab').removeClass().addClass('orange-fab');
 } else if (value == 'amber') {
 	$('.heading, .github--link').css("color", "#FFC107");
 	$('#primaryButton').removeClass().addClass('amber-btn');
 	$('#liteButton').removeClass().addClass('amber-btn-lite');
 	$('#flatButton').removeClass().addClass('amber-flat');
 	$('#fab').removeClass().addClass('amber-fab');
 } else if (value == 'yellow') {
 	$('.heading, .github--link').css("color", "#FFEB3B");
 	$('#primaryButton').removeClass().addClass('yellow-btn');
 	$('#liteButton').removeClass().addClass('yellow-btn-lite');
 	$('#flatButton').removeClass().addClass('yellow-flat');
 	$('#fab').removeClass().addClass('yellow-fab');
 } else if (value == 'lime') {
 	$('.heading, .github--link').css("color", "#CDDC39");
 	$('#primaryButton').removeClass().addClass('lime-btn');
 	$('#liteButton').removeClass().addClass('lime-btn-lite');
 	$('#flatButton').removeClass().addClass('lime-flat');
 	$('#fab').removeClass().addClass('lime-fab');
 } else if (value == 'lightGreen') {
 	$('.heading, .github--link').css("color", "#8BC34A");
 	$('#primaryButton').removeClass().addClass('lightGreen-btn');
 	$('#liteButton').removeClass().addClass('lightGreen-btn-lite');
 	$('#flatButton').removeClass().addClass('lightGreen-flat');
 	$('#fab').removeClass().addClass('lightGreen-fab');
 	} else if (value == 'green') {
 	$('.heading, .github--link').css("color", "#4CAF50");
 	$('#primaryButton').removeClass().addClass('green-btn');
 	$('#liteButton').removeClass().addClass('green-btn-lite');
 	$('#flatButton').removeClass().addClass('green-flat');
 	$('#fab').removeClass().addClass('green-fab');
 } else if (value == 'teal') {
 	$('.heading, .github--link').css("color", "#009688");
 	$('#primaryButton').removeClass().addClass('teal-btn');
 	$('#liteButton').removeClass().addClass('teal-btn-lite');
 	$('#flatButton').removeClass().addClass('teal-flat');
 	$('#fab').removeClass().addClass('teal-fab');
 } else if (value == 'cyan') {
 	$('.heading, .github--link').css("color", "#00BCD4");
 	$('#primaryButton').removeClass().addClass('cyan-btn');
 	$('#liteButton').removeClass().addClass('cyan-btn-lite');
 	$('#flatButton').removeClass().addClass('cyan-flat');
 	$('#fab').removeClass().addClass('cyan-fab');
 	} else if (value == 'lightBlue') {
 	$('.heading, .github--link').css("color", "#03A9F4");
 	$('#primaryButton').removeClass().addClass('lightBlue-btn');
 	$('#liteButton').removeClass().addClass('lightBlue-btn-lite');
 	$('#flatButton').removeClass().addClass('lightBlue-flat');
 	$('#fab').removeClass().addClass('lightBlue-fab');
 } else if (value == 'blue') {
 	$('.heading, .github--link').css("color", "#2196F3");
 	$('#primaryButton').removeClass().addClass('blue-btn');
 	$('#liteButton').removeClass().addClass('blue-btn-lite');
 	$('#flatButton').removeClass().addClass('blue-flat');
 	$('#fab').removeClass().addClass('blue-fab');
 } else if (value == 'indigo') {
 	$('.heading, .github--link').css("color", "#3F51B5");
 	$('#primaryButton').removeClass().addClass('indigo-btn');
 	$('#liteButton').removeClass().addClass('indigo-btn-lite');
 	$('#flatButton').removeClass().addClass('indigo-flat');
 	$('#fab').removeClass().addClass('indigo-fab');
 } else if (value == 'deepPurple') {
 	$('.heading, .github--link').css("color", "#673AB7");
 	$('#primaryButton').removeClass().addClass('deepPurple-btn');
 	$('#liteButton').removeClass().addClass('deepPurple-btn-lite');
 	$('#flatButton').removeClass().addClass('deepPurple-flat');
 	$('#fab').removeClass().addClass('deepPurple-fab');
 } else {
 	$('.heading, .github--link').css("color", "#9C27B0");
 	$('#primaryButton').removeClass().addClass('purple-btn');
 	$('#liteButton').removeClass().addClass('purple-btn-lite');
 	$('#flatButton').removeClass().addClass('purple-flat');
 	$('#fab').removeClass().addClass('purple-fab');
 };
});