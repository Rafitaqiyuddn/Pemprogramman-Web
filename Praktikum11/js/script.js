document.querySelectorAll("a").forEach((a)=>{
    //Jika di klik akan menjalankan fungsi computerChoise()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    }) 
})
function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // Mmembuat pilihan komputer dengan array
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilih komputer == pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }
    // jika pilihan komputer WIN
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Computer WIN");
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Computer WINN");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Computer WINN");
    }
    // jika pilihan User WIN
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WINN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WINN");
    }
}