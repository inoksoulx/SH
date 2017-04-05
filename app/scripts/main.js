
var ip = document.querySelectorAll('div')[2].textContent.toString().split(' '),
    btns = document.querySelectorAll('button');

(function(){
  for (var i = 0; i < 800; i++) {
    ip.remove('');
  }
  ip.splice(0, 1)
})();

var times = {
  len: ip.length,
  time0: function(){
    return Math.floor(this.len * 1.35 / 4);
  },
  time1: function(){
    return Math.floor((this.len - this.time0()) / 2);
  },
  time2: function(){
    return this.len - (this.time0() + this.time1());
  },
}

function lost(time, cb){
  for (var i = 0; i < time; i++) {
    var resurl = 'https://www.spamhaus.org/query/ip/' + ip[i];
    window.open(resurl);
  }
  cb(time);
}

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
  if (e.target.id === 'first') {
    lost(times.time0(), function(time){
      ip.splice(0, time);
    })
    }
  else if (e.target.id === 'second') {
    lost(times.time1(), function(time){
      ip.splice(0, time);
    })
  }
  else {
    lost(times.time2(), function(time){
      ip.splice(0, time);
    })
  }
  })
}
