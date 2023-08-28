if(document.getElementById('typing_eff') != null){
    var i = 0;
    var i2 = 0;
    var speed = 2;

    var txt = document.getElementById('typing_eff').innerHTML;
    document.getElementById('typing_eff').innerHTML = ''

    /*
        2개있을 때 구분 지어주는 분기인데, typing_eff로 동일한 아이디로 지정하였을 때
        document.querySelectorAll("[id='typing_eff']")
        와 같이 여러개의 노드를 한번에 가져와서 핸들링하는 등의 개선이 필요한 부분이다.
    */
    if(document.getElementById('typing_eff2') != null){
        var txt2 = document.getElementById('typing_eff2').innerHTML;
        document.getElementById('typing_eff2').innerHTML = ''
    }

    window.onload=function(){
        typeWriter();
    }

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing_eff").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }else{
            if(document.getElementById('typing_eff2') != null){
                if (i2 < txt2.length) {
                    document.getElementById("typing_eff2").innerHTML += txt2.charAt(i2);
                    i2++;
                    setTimeout(typeWriter, speed);
                }
            }
        }
    }
}
