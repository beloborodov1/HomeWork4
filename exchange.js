var value = prompt ('Укажите пожалуйста тип вашей валюты (USD, EUR, UAH)');
var rez = prompt ('Введите плз кол-во ' + value, '');
var valueNew = prompt ('Укажите пожалуйста тип валюты которую хотите получить (USD, EUR, UAH)');

if (value == 'USD' && valueNew == 'USD')
alert('это будет ' + rez);
else if(value == 'USD' && valueNew == 'UAH')
alert('это будет ' + parseInt(rez)*27.62 + ' UAH');
else if (value == 'USD' && valueNew == 'EUR')
alert('это будет ' + parseInt(rez)*0.88 + ' EUR');

else if (value == 'EUR' && valueNew == 'EUR')
alert('это будет ' + rez);
else if (value == 'EUR' && valueNew == 'USD')
alert('это будет ' + parseInt(rez)*1.14 + ' USD');
else if (value == 'EUR' && valueNew == 'UAH')
alert('это будет ' + parseInt(rez)*31.78 + ' UAH');

else if (value == 'UAH' && valueNew == 'UAH')
alert('это будет ' + rez);
else if(valueNew == 'USD' && value == 'UAH')
alert('это будет ' + parseInt(rez)/27.62 + ' USD')
else if (valueNew == 'EUR' && value == 'UAH')
alert('это будет ' + parseInt(rez)/31.78 + ' EUR');


else alert ('Где-то вы ошиблись')
// Обещаю сделать его лучше