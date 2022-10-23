player1_name= localStorage.getItem("player1_key");
player2_name=localStorage.getItem("player2_key");
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_turn").innerHTML="question turn:"+player1_name;
document.getElementById("answer_turn").innerHTML="answer turn:"+player2_name;
function send_word(){
    word=document.getElementById("word").value;
    word= word.toLowerCase();
    letter2=word.charAt(1);
    length= word.length;
    letter_last=word.charAt(length-1);
    letter_middle=word.charAt(Math.round(length/2));
    replace_word=word.replace(letter2,"_");
    console.log(replace_word);
    replace_word=replace_word.replace(letter_middle,"_")
    console.log(replace_word);
    replace_word=replace_word.replace(letter_last,"_")
    console.log(replace_word);
    word_tag='<h4 id="word_display">Q:'+replace_word+'</h4>'
    input_tag='<br> Ans:<input id="user_answer"type="text">'
    button_tag='<br> <br> <button class="btn btn-info" onclick="check()">check</button>'
    row= word_tag+input_tag+button_tag;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

