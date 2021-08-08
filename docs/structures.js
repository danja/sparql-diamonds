var x = {
  bookmark: { type: 'uri', value: 'http://hyperdata.it/bookmarks/b1' },
  url: { type: 'uri', value: 'https://en.wikipedia.org/wiki/Exquisite_corpse' },
  title: { type: 'literal', value: 'Exquisite Corpse' },
  created: { type: 'literal', value: '2012-04-17T16:06:30Z' },
  description: {
    type: 'literal',
    value: 'Wikipedia page on a surrealist game'
  },
  nick: { type: 'literal', value: 'danja' },
  tag: { type: 'literal', value: 'art' }
}

var y = {
  'http://hyperdata.it/bookmarks/b1': {
    url: 'https://en.wikipedia.org/wiki/Exquisite_corpse',
    title: 'Exquisite Corpse',
    created: '2012-04-17T16:06:30Z',
    description: 'Wikipedia page on a surrealist game',
    nick: 'danja',
    tags: ['art', 'game', 'surrealism']
  }
}

var z = {
  'http://hyperdata.it/bookmarks/b1': {
    url: ['https://en.wikipedia.org/wiki/Exquisite_corpse'],
    title: ['Exquisite Corpse'],
    created: ['2021-04-17T16:06:30Z'],
    description: ['Wikipedia page on a surrealist game'],
    nick: ['danja'],
    tag: ['art', 'game', 'surrealism']
  },

  
  'http://hyperdata.it/bookmarks/b2': {
    url: [
      'https://www.petzl.com/GB/en/Sport/Belay-Devices-And-Descenders/GRIGRI'
    ],
    title: ['GriGri'],
    created: ['2021-045-18T17:07:31Z'],
    description: ['Belay device with cam-assisted blocking'],
    nick: ['danja'],
    tag: ['climbing', 'device']
  }
}
