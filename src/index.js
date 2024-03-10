 let btnOnPage = document.getElementById("clickme")
 let colorHistoryDiv = document.getElementById("colorHistory");

 const colors = ["#FF0000 ",
     " #00FF00",
     "#0000FF",
     " #FFFF00",
     "#00FFFF",
     "#FF00FF",
     "#808080 ",
     "#800080 ",
     " #FFA500 ",
     "#008080"
 ]

 function myBgc() {
     let randomIndex = Math.floor(Math.random() * colors.length);
     return colors[randomIndex];
 }


 btnOnPage.addEventListener("click", () => {
     let bgColor = myBgc();
     document.body.style.backgroundColor = bgColor;


     let colorHistoryItem = document.createElement("div");
     colorHistoryItem.style.backgroundColor = bgColor;
     colorHistoryItem.classList.add("colorHistoryItem");
     colorHistoryItem.textContent = bgColor;
     colorHistoryDiv.prepend(colorHistoryItem);
 });