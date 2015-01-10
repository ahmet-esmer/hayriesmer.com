function tz_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li><span>'+status+'</span> <br/><b><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></b></li>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'bir dakikadan daha az';
  } else if(delta < 120) {
    return 'yaklaşık bir dakika önce';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' dakika önce';
  } else if(delta < (120*60)) {
    return 'yaklaşık bir saat önce';
  } else if(delta < (24*60*60)) {
    return 'yaklaşık ' + (parseInt(delta / 3600)).toString() + ' saat önce';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' gün önce';
  }
}

function tz_format_instagram(instagram) {
    var statusHTML = [];
    for (var i=0; i<instagram.length; i++){
        statusHTML.push('<div class="flickr_badge_image" >');
        statusHTML.push('<a href="' + instagram[i].link + '" target="_blank" >');
        statusHTML.push('<img alt="test" height="75" src="'+ instagram[i].images.thumbnail.url +'" width="75">')
        statusHTML.push('</a>')
        statusHTML.push('</div>')
    }
    return statusHTML.join('');
}
;
