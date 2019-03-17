$(document).ready(function(){
    var audioElement = document.createElement('audio');
    $(this).keypress(function(e){
        var x;
        var code = String.fromCharCode(e.keyCode || e.which);
        x = Math.floor((Math.random() * 180) + 1);
        audioElement.setAttribute('src', code + '.mp3');
        audioElement.play();
        $("img").css("z-index", "1");
        $('#' + code).css({
            "z-index" : "2",
            '-webkit-transform' : 'rotate(' + x + 'deg)',
            '-moz-transform'    : 'rotate(' + x + 'deg)',
            '-ms-transform'     : 'rotate(' + x + 'deg)',
            '-o-transform'      : 'rotate(' + x + 'deg)',
            'transform'         : 'rotate(' + x + 'deg)'
        });
        $("#" + code).show()
    })
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
  })