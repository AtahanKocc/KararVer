    // Seçenekleri tutmak için bir dizi oluştur
    var options = [];

    // DOM öğelerini seç
    var optionsContainer = document.getElementById('options-container');
    var addButton = document.querySelector('.add-button');
    var spinButton = document.getElementById('spin-button');
    var clearButton = document.getElementById('clear-button');
    var resultDiv = document.getElementById('result');

    // Seçenek ekle butonuna tıklanınca
    addButton.addEventListener('click', function() {
      var optionInput = document.createElement('div');
      optionInput.classList.add('option-input');
      optionInput.innerHTML = '<input type="text" placeholder="Seçenek">';
      optionsContainer.appendChild(optionInput);
    });

    // Karar ver butonuna tıklanınca
    spinButton.addEventListener('click', function() {
      // Seçenekleri al
      var optionInputs = document.querySelectorAll('.option-input input');
      options = [];

      // Geçerli seçenekleri diziye ekle
      for (var i = 0; i < optionInputs.length; i++) {
        var optionText = optionInputs[i].value.trim();
        if (optionText !== '') {
          options.push(optionText);
        }
      }

      // En az 2 seçenek kontrolü yap
      if (options.length < 2) {
        alert('En az 2 seçenek giriniz.');
        return;
      }

      // Çarkı döndür ve sonucu göster
      var randomIndex = Math.floor(Math.random() * options.length);
      var result = options[randomIndex];
      resultDiv.textContent = result;

      resultDiv.style.display = 'block'; // Sonucu göster
    });
    
    // Temizle butonuna tıklanınca sayfayı yenile
    clearButton.addEventListener('click', function() {
      location.reload();
    });
