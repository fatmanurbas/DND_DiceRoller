//ÇALIŞMIYO ŞU AN
     
      document.addEventListener("DOMContentLoaded", function () {
        openModal();
      });

      function openModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "flex";
      }

      function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
      }

      function selectPerson(selected) {
        selectedP = selected;
        closeModal();
      }
      var selectedP = 0;
      function randomGenerate(selectedPerson) {
        //Kullanılan randomize fonksiyon : Math.floor(Math.random() * (max - min + 1) + min)

        switch (selectedPerson) {
          case 1:
            if (selectedP == 1)
              score1.textContent = Math.floor(Math.random() * 12 + 1);
            break;
          case 2:
            if (selectedP == 2)
              score2.textContent = Math.floor(Math.random() * 12 + 1);
            break;
          case 3:
            if (selectedP == 3)
              score3.textContent = Math.floor(Math.random() * 12 + 1);
            break;
          case 4:
            if (selectedP == 4)
              score4.textContent = Math.floor(Math.random() * 12 + 1);
            break;
          case 5:
            if (selectedP == 5)
              score5.textContent = Math.floor(Math.random() * 12 + 1);
            break;
        }
      }