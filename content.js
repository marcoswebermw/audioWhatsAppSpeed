
const interval = setInterval(() => {
    const header = document.querySelector("._3All_._3NrAe");
    if (header) {
        console.log(header);
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");

        button.addEventListener("click", ()=>{
            button.classList.toggle("twoTimesButtonClicada");
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio)=>{
                console.log(audio);
                if (audio.playbackRate == 2)
                    audio.playbackRate = 1;
                else
                    audio.playbackRate = 2
            })         
        })

        header.appendChild(button);
    }
}, 1000);



