let sec = 0;
        let min = 0;
        let hr = 0;

        let timer = null;
        function updatedisplay(){
            let s = sec<10? "0" + sec:sec;
            let m = min<10? "0" + min:min;
            let h = hr<10? "0" + hr:hr;

            document.getElementById("display").innerText=`${h}:${m}:${s}`;
        }
        
            document.getElementById("start").addEventListener("click",()=>{
                if (timer !== null)return;

                timer = setInterval(()=>{
                    sec++;
                    if(sec===60){
                        sec = 0;
                        min++;
                    }
                    if(min===60){
                        min=0;
                        hr++;
                    }
                    updatedisplay();
                },1000);
            });
                document.getElementById("stop").addEventListener("click",()=>{
                    clearInterval(timer);
                    timer=null;
                });
                document.getElementById("reset").addEventListener("click",()=>{
                    clearInterval(timer);
                    timer=null;
                    sec=0;
                    min=0;
                    hr=0;
                    updatedisplay();
                });
