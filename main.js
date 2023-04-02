function creditCalculate() {
  // Göndərəcəyimiz Məlumatlar
  var alacağımızMiqdar, zamanAralığı;

  // Alacağımız Məlumatlar
  var aylıqÖdəniş, ödəniləcəkÜmumiBorc;

  alacağımızMiqdar = document.getElementById("required_amount").value;
  var zaman = document.getElementById("time_interval");
  zamanAralığı = zaman.options[zaman.selectedIndex].value;

  if (zamanAralığı == 12) {
    ödəniləcəkÜmumiBorc = alacağımızMiqdar * 1.1;
  } else if (zamanAralığı == 24) {
    ödəniləcəkÜmumiBorc = alacağımızMiqdar * 1.2;
  } else if (zamanAralığı == 36) {
    ödəniləcəkÜmumiBorc = alacağımızMiqdar * 1.3;
  } else if (zamanAralığı == 48) {
    ödəniləcəkÜmumiBorc = alacağımızMiqdar * 1.4;
  }

  aylıqÖdəniş = ödəniləcəkÜmumiBorc / zamanAralığı;

  document.querySelector("#section").innerHTML="Ödəniləcək Ümumi Borc"+" "+ödəniləcəkÜmumiBorc +" "+ "Aylıq Ödəniş" +" "+aylıqÖdəniş
}
