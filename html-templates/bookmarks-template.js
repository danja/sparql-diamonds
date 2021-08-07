var t = {
  url: ['https://en.wikipedia.org/wiki/Exquisite_corpse'],
  title: ['Exquisite Corpse'],
  created: ['2012-04-17T16:06:30Z', '2021-04-17T16:06:30Z'],
  description: ['Wikipedia page on a surrealist game'],
  nick: ['danja'],
  tag: ['art', 'game', 'surrealism']
}


var listBookmarksTemplate = "\
<li> <div class='bookmark-item'>\
<strong><a href='~{url}~'>~{title}~</a></strong> \
<p>~{description}~</p> \
<p><strong>Tags :</strong> ~{tag}~</p>\
<em><strong>Created :</strong> ~{created}~ by ~{nick}~</em> \
</div></li> \
";

