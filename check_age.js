var rez = prompt ('Укажите свой возраст', '');
if (rez.replace (/\d/g, '').length) alert ('вы ввели не только цифры');
else if (rez>18){
alert ('Доступ готов');}
else if (rez>16){
alert ('Доступ закрыт')}
else alert ('смотри мультики');