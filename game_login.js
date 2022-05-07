function adduser() {
    player1_n = document.getElementById("player1_name").value;
    player2_n = document.getElementById("player2_name").value;

    localStorage.setItem("Player 1 Name", player1_n);
    localStorage.setItem("Player 2 Name", player2_n);

    window.location = "game_page.html" ;
}