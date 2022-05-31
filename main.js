function send(){
    input1=getElementById("input1").value;
    input2=getElementById("input2").value;
    localStorage.setItem("input1",input1);
    localStorage.setItem("input2",input2);
    window.location.replace("Game.html")
}
