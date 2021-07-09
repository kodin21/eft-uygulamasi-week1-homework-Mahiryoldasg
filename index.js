import { account } from './user_information.js';

var balance = 0;
const balance1 = account.balance1;
const balance2 = account.balance2;
const balance3 = account.balance3;
var value = '';
const user = account.name;
var attempt = 0;

document.querySelector(
  'h4'
).textContent = `Hoşgeldin ${user}. Lütfen gerekli alanları doldur..`;
// document.querySelector('#balance').textContent = `Bakiye: ${balance1} TL`;

//Button Control
let submit = document.querySelector('button');
let isDisabled = () => {
  if (amount.value && value) {
    if (value == 'Seçiniz...') {
      submit.disabled = true;
    } else if (balance >= amount.value) {
      submit.disabled = false;
      document.getElementById('error').textContent = '';
    } else {
      submit.disabled = true;
      document.getElementById('error').textContent = 'Yetersiz Bakiye...';
    }
  }
};

//IBAN
let receiver = document.querySelectorAll('select')[1];
receiver.addEventListener('change', () => {
  value = receiver.value;
  isDisabled();
});

//Money Amount
let amount = document.querySelector('input[type=number]');
amount.addEventListener('change', () => {
  isDisabled();
});

//Sender Account
let sender = document.querySelectorAll('select')[0];
sender.addEventListener('change', (e) => {
  if (e.target.value === 'Hesap 1') {
    balance = balance1;
    isDisabled();
    document.querySelector('#balance').textContent = `Bakiye: ${balance1} TL`;
  }
  if (e.target.value === 'Hesap 2') {
    balance = balance2;
    isDisabled();
    document.querySelector('#balance').textContent = `Bakiye: ${balance2} TL`;
  }
  if (e.target.value === 'Hesap 3') {
    balance = balance3;
    isDisabled();
    document.querySelector('#balance').textContent = `Bakiye: ${balance3} TL`;
  }
  if (e.target.value === 'Seçiniz...') {
    balance = 0;
    isDisabled();
    document.querySelector('#balance').textContent = 'Hesap Seçiniz..';
  }
});

//Submit Handler
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(amount.value);
  if (amount.value < 500) {
    alert('İşlem başarılı. Anasayfaya yönlendiriliyorsunuz');
    location.reload();
  } else {
    let cevap = prompt('Telefonunuza gönderilen 4 haneli şifreyi giriniz...');
    console.log(cevap);
    if (cevap == 1234) {
      alert('İşlem başarılı. Anasayfaya yönlendiriliyorsunuz');
      location.reload();
    } else {
      attempt++;
      alert(`Şifre yanlış.Tekrar deneyiniz. ${attempt} kere yanlış girdiniz`);
      console.log(attempt);
      if (attempt == 3) {
        alert('Hesabınız bloke oldu!');
        location.reload();
      }
    }
  }
};

let form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

//Timer Setup
var timeleft = 120;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    location.reload();
    alert('Oturumunuz sonlandırılmıştır');
  }
  document.getElementById('counter').textContent = `${timeleft}seconds`;
  timeleft -= 1;
}, 1000);
