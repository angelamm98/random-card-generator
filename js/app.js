window.onload = function() {
    const suits = ["♠", "♥", "♣", "♦"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    const suitTop = document.getElementById("card-suit-top");
    const suitBottom = document.getElementById("card-suit-bottom");
    const cardValue = document.getElementById("card-value");
  
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
  
    suitTop.textContent = randomSuit;
    suitBottom.textContent = randomSuit;
    cardValue.textContent = randomValue;
  
    if (randomSuit === "♥" || randomSuit === "♦") {
      suitTop.style.color = "red";
      suitBottom.style.color = "red";
      cardValue.style.color = "red";
    }
  };
  