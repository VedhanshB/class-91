player1_name = localStorage.getItem("Player 1 Name");
player2_name = localStorage.getItem("Player 2 Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_q").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_a").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase: " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1)

    length_divi_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divi_2);
    console.log(charAt2)

    length_min_1 = word.length - 1;
    charAt3 = word.charAt(length_min_1);
    console.log(charAt3)
    
    remove_c1 = word.replace(charAt1, "_");
    remove_c2 = remove_c1.replace(charAt2, "_");
    remove_c3 = remove_c2.replace(charAt3, "_");
    console.log(remove_c3);

    ques_word = "<h4 id='word_display'> Q. " + remove_c3 + "</h4>";
    input_box = "<br>Answer : <input type='text' class='form-control' id='input_check_box'";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = ques_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}