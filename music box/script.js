window.addEventListener("load", () => {
    // kanselectioniw sound div
    const sounds = document.querySelectorAll(".sound");
    // kanselectioniw pads
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#f08080",
        "#20b2aa",
        "#778899",
        "#32cd32",
        "#deb887",
        "#ffff00"
    ]
    // test wach sounds kaynin
    console.log(sounds);

    // loop 3la pads 
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            // kanred index l 0 bach fach ndghet ikhedmo flblassa
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubbles(index);
        })
    })


    // create dok bubbles zwinin
    function creatBubbles(index){
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function(){
            // kan7yed class diyal bubble bach n optimizi 
            visual.removeChild(this);
        })
    }

})