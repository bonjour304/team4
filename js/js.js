 /*-----For Search Bar-----------------------------*/
 $(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
});

 /*---For Login and Sign-up----------------------------*/
 $(document).on('click','.user,.already-account',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click','.sign-up-btn',function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

  /*--For-make-Menu-responsive------------*/
  $(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});

/*------------ product details ---------------*/
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);





/*----------- ---------*/
$(document).ready(function () {
 
    textResizer = $(function (){
    // Set Cookie
    var docCookies = {
    getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
    switch (vEnd.constructor) {
    case Number:
    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
    break;
    case String:
    sExpires = "; expires=" + vEnd;
    break;
    case Date:
    sExpires = "; expires=" + vEnd.toUTCString();
    break;
    }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
    },
    hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
    }
    };
    
    function changeSize(element, size) {
    var current = parseInt(docCookies.getItem("FontSize"));
    var newSize;
    if (current !== "") {
    current = parseInt(element.css('font-size'));
    }
    if (size === 'decrease') {
    if (current > 12) {
    newSize = current - 1;
    }
    } else if (size === 'increase') {
    if (current < 18) {
    newSize = current + 1;
    }
    } else if (size === 'resetf') {
    newSize = 16;
    }
    
    element.css('font-size', newSize + 'px');
    docCookies.setItem("FontSize", newSize, Infinity);
    }
    
    $('#decreaseFont').click(function (e) {
    
    changeSize(text, 'decrease');
    e.preventDefault();
    });
    
    $('#increaseFont').click(function (e) {
    changeSize(text, 'increase');
    e.preventDefault();
    });
    $('#resetFont').click(function (e) {
    changeSize(text, 'resetf');
    e.preventDefault();
    });
    
    
