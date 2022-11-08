// (function(_0x98fac2,_0x4d2c81){var _0x4939ce=_0x57e2,_0x4303a9=_0x98fac2();while(!![]){try{var _0x355bd9=parseInt(_0x4939ce(0x136))/0x1*(parseInt(_0x4939ce(0x137))/0x2)+parseInt(_0x4939ce(0x140))/0x3+-parseInt(_0x4939ce(0x13c))/0x4+-parseInt(_0x4939ce(0x13f))/0x5+parseInt(_0x4939ce(0x139))/0x6+-parseInt(_0x4939ce(0x138))/0x7*(parseInt(_0x4939ce(0x13e))/0x8)+parseInt(_0x4939ce(0x134))/0x9;if(_0x355bd9===_0x4d2c81)break;else _0x4303a9['push'](_0x4303a9['shift']());}catch(_0x23af1e){_0x4303a9['push'](_0x4303a9['shift']());}}}(_0xeebd,0xb83a8));function _0xeebd(){var _0x5daffc=['Invalid\x20username\x20or\x20password','3660812RPzpht','value','824nNiEsN','6998895aivNKK','2729442WDJoId','admin','username','21597696WuWPgd','password','3KdCRVr','835966PLrCMK','102326xQBGDa','70374LgdnsI','getElementById'];_0xeebd=function(){return _0x5daffc;};return _0xeebd();}function _0x57e2(_0x2ea865,_0x5371ac){var _0xeebd05=_0xeebd();return _0x57e2=function(_0x57e27a,_0x343b64){_0x57e27a=_0x57e27a-0x133;var _0x12be67=_0xeebd05[_0x57e27a];return _0x12be67;},_0x57e2(_0x2ea865,_0x5371ac);}function validate(){var _0x490e7f=_0x57e2,_0x5652c2=document['getElementById'](_0x490e7f(0x133))[_0x490e7f(0x13d)],_0x541b4c=document[_0x490e7f(0x13a)](_0x490e7f(0x135))['value'];if(_0x5652c2=='admin'&&_0x541b4c==_0x490e7f(0x141))return alert('Login\x20successfully'),![];else alert(_0x490e7f(0x13b));}

function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if (username == "admin" && password == "admin") {
      window.location.href ="settings.html" // Redirecting to other page.
   }
   else {
       alert("Invalid username or password");
      return false;
   }
}
