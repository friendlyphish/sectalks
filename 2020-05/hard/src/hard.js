(function() {
  var window = Function("return\x20(function()\x20" + "{}.constructor(\x22return\x20this\x22)(\x20)" + ");")();
  var duration = 0xFFFFFFFFFFFFFF;
  var is_null = null;
  var is_nan = NaN;
  var is_infinity = 1 / 0;

  // Hide length
  var magic = Math.pow(10.198039027185569, 2)
  var length = {
    a: "len"
  }
  length[length.a] = String.fromCharCode(magic) + ('s', 'c', 'k', 't') + String.fromCharCode(Math.round(magic))
  var idx_length = length.a + length[length.a]

  // Strings
  var strings = [
    "JWM=", //28, %c
    "Z2V0RWxlbWVudEJ5SWQ=", //29, getElementById
    "ZGVjcnlwdA==", //30, decrypt
    "ZG9jdW1lbnQ=", //31, document
    "WE1MSHR0cFJlcXVlc3Q=", //32, XMLHttpRequest
    "cHJldmVudERlZmF1bHQ=", //33, preventDefault
    "c3RvcFByb3BhZ2F0aW9u", //34, stopPropagation
    "c2V0SW50ZXJ2YWw=", //35, setInterval
    "Z2V0VGltZQ==", //36, getTime
    "RGF0ZQ==", //37, Date
    "Q3J5cHRvSlM=", //38, CryptoJS
    "c3Vic3RyaW5n", //39, substring
    "b3Blbg==", //40, open
    "b25yZWFkeXN0YXRlY2hhbmdl", //41, onreadystatechange
    "c2VuZA==", //42, send
    "cmVhZHlTdGF0ZQ==", //43, readyState
    "SlNPTg==", //44, JSON
    "c3RyaW5naWZ5", //45, stringify
    "cmVzcG9uc2U=", //46, response
    "dmFsdWU=", //47, value
    "c2VsZWN0ZWRJbmRleA==", //48, selectedIndex
    "ZWxlbWVudHM=", //49, elements
    "Zm9ybXM=", //50, forms
    "cGxhY2Vob2xkZXI=", //51, placeholder
    "QUVT", //52, AES
    "ZW5j", //53, enc
    "VXRmOA==", //54, Utf8
    "IiI=", //55, ""

    "dG9TdHJpbmc=", // 0, toString
    "bG9n", // 1, log
    "L2ZsYWcvc3VibWl0", // 2, /flag/submit
    "R0VU", // 3, GET
    "c3RvcF9jaGVhdGluZw==", // 4, stop_cheating
    "U29tZXRoaW5nIGZpc2h5IGlzIGdvaW5nIG9uLi4u", // 5, Something fishy is going on...
    "ZXZhbA==", // 6, eval
    "Y29uc29sZQ==", // 7, console
    "c2VjdGFsa3N7", // 8, sectalks{
    "ZGF0ZS1pbg==", // 9, date-in
    "fQ==", // 10, }
    "ZGVidWdnZXI=", // 11, debugger
    "ZGF0ZS1vdXQ=", // 12, date-out
    "Z3Vlc3Q=", // 13, guest
    "YV9saXR0bGVfdG9vX2Vhc3k=", // 14, a_little_too_easy
    "cm9vbQ==", //15, room
    "c2VhcmNoLWlucHV0", //16, search-input,
    "UE9TVA==", //17, POST
    "Z2V0", // 18, get
    "L2ZsYWcvc2VjdGFsa3M=", // 19, /flag/sectalks
    "YWxlcnQ=", //20, alert
    "Q2hlY2sgQXZhaWxhYmlsaXR5", //21, Check Availability
    "Z2V0RWxlbWVudHNCeVRhZ05hbWU=", //22, getElementsByTagName
    "Y2xpY2s=", //23, click
    "YnV0dG9u", //24, button
    "YWRkRXZlbnRMaXN0ZW5lcg==", //25, addEventListener
    "cG9w", //26, pop
    "dGV4dENvbnRlbnQ=", //27, textContent
  ]

  // Scramble string indexes
  var scrambler = {
    a: parseInt(strings[idx_length] / 2),
    b: function(a, op) {
      var scramble = function(a) {
        while (--a) {
          op();
        }
      };
      scramble(++a);
    },
    c: function (idx) {
      return strings[idx];
    }
  };
  is_null = is_null && duration
  if(is_null == undefined) {
    scrambler.b(scrambler.a, function () { strings.push(strings.shift()) });
  }

  // Decoding
  var decode = function(i) {
    var txt = scrambler['c'](i)
    if(is_nan == NaN)
      return btoa(txt);
    else
      return atob(txt)
  }

  // Grab logger now that decoding is done
  var log = window["console"]["log"];
  
  // Hijack alert
  var alert = window["alert"];
  //DEBUG_LOG: window["alert"] = its_fishy;

  // Hijack console
  var its_fishy = function() {
    log(decode(5));
  }
  var console = {}
  //DEBUG_LOG: console["log"] = its_fishy
  window["console"] = console;

  // Mask use of XMLHttpRequest
  var http_factory = window["XMLHttpRequest"];
  var date_factory = window["Date"];

  // Fake flag
  var flag = "sectalks{" + "0fg5ku1skd0k" + "}";
  is_null = is_null && flag

  // Decrypt any API flags and attempt to log to console
  var three = parseInt((118).toString(36));
  var one = three / three;
  var one_hundred = three / three * 100;
  function decrypt_flag() {
    var plain = is_null
    var error = false;
    var el = window.document.getElementById(duration < one_hundred ? "search-input" : "date-in")

    try {
      var secret = el.placeholder || "";
      var decrypted = window.CryptoJS.AES.decrypt(flag, secret);
      plain = decrypted.toString(window.CryptoJS.enc.Utf8)
    } catch (e) {
      error = e
    } finally {
      plain = "sectalks{" + (plain || "12so9bd6kd3d") + "}"
    }

    if(window["console"] == console && window["alert"] == alert) {
        //DEBUG: alert(plain)
        //DEBUG_LOG: log(plain)
    }
  }

  // Get the real flag
  var queue = [get_flag]
  var threesix = [!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]];
  var zero = parseInt((0).toString(threesix));
  function get_flag() {
    var http = new http_factory()
    var sectalks = "sectalks{"
    http.open("GET", "/flag/sectalks".substring(zero, sectalks[idx_length] - 3) + String.fromCharCode(103) + sectalks[one] + sectalks[three])
    http.onreadystatechange = function() {
      if (http.readyState === 4) {
        flag = http.response;
        queue[queue[idx_length]] = decrypt_flag
      }
    }
    http.send()
  }

  // Malware to get fake flags
  function steal(method, path, event) {
    event.preventDefault();
    event.stopPropagation();
    // Collect data
    var data = {}
    var forms = window.document.forms
    for(var i=0; i < forms[idx_length]; i++) {
      var form = forms[i]
      var data_form = data[i.toString()] = {}
      var elements = form.elements
      for(var j=0; j < elements[idx_length]; j++) {
        var element=elements[j]
        var val=element.value || element.selectedIndex
        data_form[j.toString()] = val
      }
    }
    // Submit for server
    var http = new http_factory()
    http.open(decode(method), decode(path))
    http.onreadystatechange = function() {
      if (http.readyState === 4) {
        flag = http.response;
        decrypt_flag()
      }
    }
    http.send(window.JSON.stringify(data))
  }
  function on_booking(event) {
    return steal(17, 2, event)
  }
  function on_other(event) {
    return steal(3, 19, event)
  }

  // Hijack eval
  var my_eval = window[decode(6)];
  window[decode(6)] = its_fishy;

  // Detect whether JS debugger pauses
  is_null = is_null && is_nan
  var on_interval = function() {
    var time = function() { return (new date_factory()).getTime() }
    var now = time();
    //DEBUG_CONSOLE: my_eval(decode(11));
    var later = time()
    duration = later - now
    //DEBUG_CONSOLE: if ([1] == true && duration < one_hundred) {
      if(queue[idx_length]) {
        queue.pop()()
      }
    //DEBUG_CONSOLE: }
    return is_null
  }
  var debuggerTimer = on_interval() || window.setInterval(on_interval, 2e3);

  // Hook fake malware to all buttons
  var buttons = window.document.getElementsByTagName("button")
  for(var i=0; i< buttons[idx_length]; i++) {
    var button = buttons[i]
    if(button["textContent"] == "Check Availability")
      button.addEventListener("click", on_booking);
    else
      button.addEventListener("click", on_other);
  }
})()