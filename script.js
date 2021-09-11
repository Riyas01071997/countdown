let domCountdown = document.getElementById('countdown')
    let countdown = new Date("2021-09-08").getTime();
    let stop = false;
    function update(){
        let now = new Date().getTime();
        let difference = now - countdown;
        if (difference <= 0){
            stop=true
        }
        let seconds = difference/1000;
        let days = Math.floor(seconds / (60 * 60 * 24));
        seconds =seconds % (60 * 60 * 24)
        let hours = Math.floor(seconds / (60 * 60));
        seconds =seconds % (60 * 60)
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        domCountdown.innerHTML = [days+":"+hours+":"+minutes+":"+seconds].join();
        
}
    setInterval(function(){
        if(!stop){
            update();
        }
        
    },1000);
    