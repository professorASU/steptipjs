window.onload = function () {
    document.body.innerHTML += "<link rel='stylesheet' href='https://tomocode.github.io/steptipjs/steptip.css'>";
}
var steptip = {
    tooltip : function ( ele, msg, ord, mode ) {
        var elementW = ele.offsetWidth;
        var elementH = ele.offsetHeight;
        //add elements for tooltip
        var div = document.createElement("div");
        var parent = ele.parentNode;
        parent.insertBefore(div, ele);
        div.appendChild(ele);

        var attId = document.createAttribute("id");
        attId.value = "steptipWrap" + ord;
        steptip.queLength += 1;
        div.setAttributeNode(attId);

        var attClass = document.createAttribute("class");
        attClass.value = "steptipWrapper";
        div.setAttributeNode(attClass);

        if( mode == "light" ) {
            div.innerHTML = div.innerHTML += "<div class='steptipBoxLight' id='steptipBox" + ord + "'><span class='stepmsgLight'>"+msg+"</span><button class='stepbtn' id='steptipNextLabel"+ord+"' onclick='steptip.moveTo("+(parseInt(ord)+1)+")'>Next</button><div class='steptiparrowLight'></div></div>";
        } else if( mode == "dark" ) {
            div.innerHTML = div.innerHTML += "<div class='steptipBoxDark' id='steptipBox" + ord + "'><span class='stepmsgDark'>"+msg+"</span><button class='stepbtn' id='steptipNextLabel"+ord+"' onclick='steptip.moveTo("+(parseInt(ord)+1)+")'>Next</button><div class='steptiparrowDark'></div></div>";
        } else {
            div.innerHTML = div.innerHTML += "<div class='steptipBoxDark' id='steptipBox" + ord + "'><span class='stepmsgDark'>"+msg+"</span><button class='stepbtn' id='steptipNextLabel"+ord+"' onclick='steptip.moveTo("+(parseInt(ord)+1)+")'>Next</button><div class='steptiparrowDark'></div></div>";
        }
    },
    startTutorial : function () {
        document.getElementById("steptipBox1").style.display = "inline-block";
        if( steptip.queLength == 1 ) {
            document.getElementById("steptipNextLabel").innerHTML = "finish";
        }
        setTimeout( function () {
            document.getElementById("steptipBox1").style.opacity = "1";
        }, 300)
    },
    moveTo : function (idx) {
        var miOne = idx-1;
        if( idx == steptip.queLength ) {
            console.log("really bro");
            document.getElementById("steptipNextLabel"+idx).innerHTML = "Finish";

            document.getElementById("steptipBox"+(idx-1)).style.opacity = "0";
            document.getElementById("steptipBox"+idx).style.display = "inline-block";
            setTimeout( function () {
                document.getElementById("steptipBox"+(idx-1)).style.display = "none";
                document.getElementById("steptipBox"+idx).style.opacity = "1";
            }, 300)
        } else if ( miOne == steptip.queLength ) {
            console.log("triggered");
            document.getElementById("steptipBox"+(idx-1)).style.opacity = "0";
            setTimeout( function () {
                document.getElementById("steptipBox"+(idx-1)).style.display = "none";
            }, 300)
        } else {
            console.log("triggered wrong");
            document.getElementById("steptipBox"+(idx-1)).style.opacity = "0";
            document.getElementById("steptipBox"+idx).style.display = "inline-block";
            setTimeout( function () {
                document.getElementById("steptipBox"+(idx-1)).style.display = "none";
                document.getElementById("steptipBox"+idx).style.opacity = "1";
            }, 300)
        }
    },
    queLength : 0
}
window.onresize = function () {

}
