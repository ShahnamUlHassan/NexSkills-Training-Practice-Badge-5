function calculateZakat() {
    var wealth = document.getElementById("wealth").value;
    // var nisab = document.getElementById("nisab").value;
    var zakatRate = 0.025; // 2.5%
    var zakatAmount = 0;

     if (wealth > nisab) {
       zakatAmount = (wealth - nisab) * zakatRate;
     }

    document.getElementById("result").innerHTML = "Zakat Amount: " + zakatAmount.toFixed(2);
  }