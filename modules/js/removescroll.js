function removingScrollBrowser(){
    var SPACE_KEYCODE = 32;
    document.onkeydown = function (e) {
        var keycode = e.keyCode || e.charCode,
            body = document.body;
    
        if (keycode != SPACE_KEYCODE)
            return;
    
        e.preventDefault();
        body.style.overflow = body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    };  
}

export default removingScrollBrowser;