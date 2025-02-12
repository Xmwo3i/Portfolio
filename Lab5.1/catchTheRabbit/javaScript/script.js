document.addEventListener("DOMContentLoaded",function(event){
    let counter = 0;
    let rabbit1 = document.getElementById("rabbit1");
    let rabbit2 = document.getElementById("rabbit2");
    let rabbit3 = document.getElementById("rabbit3");
    let rabbit4 = document.getElementById("rabbit4");

    rabbit1.addEventListener("mouseover",function(event){
        counter ++ ; 
        rabbit1.style.visibility = "hidden"
        rabbit2.style.visibility = "visible"
        
        if(counter===4){
            document.getElementById("noeggs").style.visibility = "visible"
        }
        if (counter===20){
            document.getElementById("slow").style.visibility = "visible"
        }
    });
    rabbit2.addEventListener("mouseover", function(event){
        counter ++ 
        rabbit2.style.visibility = "hidden"
        rabbit3.style.visibility = "visible"
        if(counter===4){
            document.getElementById("noeggs").style.visibility = "visible"
        }
        if (counter===20){
            document.getElementById("slow").style.visibility = "visible"
        }
    });
    rabbit3.addEventListener("mouseover", function(event){
        counter ++
        rabbit3.style.visibility = "hidden"
        rabbit4.style.visibility = "visible"
        if(counter===4){
            document.getElementById("noeggs").style.visibility = "visible"
        }
        if (counter===20){
            document.getElementById("slow").style.visibility = "visible"
        }
    });
    rabbit4.addEventListener("mouseover", function(event){
        counter ++
        rabbit4.style.visibility = "hidden"
        rabbit1.style.visibility = "visible"
        if(counter===4){
            document.getElementById("noeggs").style.visibility = "visible"
        }
        if (counter===20){
            document.getElementById("slow").style.visibility = "visible"
        }
    });
});
