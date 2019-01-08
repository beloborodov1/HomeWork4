var age = confirm('Вам есть полных 30 лет?');
var experience = confirm('Ваш опыт на данной должности больше 3х лет?');
var travels = confirm('Готовы ли вы к командировкам?');
var bribe = confirm('Готовы ли вы презентовать HR 10% от своего оклада на протяжение 3 месяцев?');

if (age && experience && travels && bribe == true)
alert ('Вы подходите');
else alert ('Вы не подходите')