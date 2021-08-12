# Sparql Diamonds

These are small demos of an architectural pattern that can be useful for rapid development of data-driven applications.

The demos are designed to operate against a SPARQL server with query construction and result formatting carried out in browser Javascript.

![SPARQL Diamond](https://github.com/danja/sparql-diamonds/raw/main/docs/images/diamond.png)

Three demos are currently available :

**wikidata-knot** - shows how to pull data from Wikidata using a fixed query, and display the results in a Web page

![Wikidata things named Knot](https://github.com/danja/sparql-diamonds/raw/main/docs/images/things-named-knot-shaded.png)

**wikidata-name** - as above, but with a query variable supplied by the user

![Wikidata named things](https://github.com/danja/sparql-diamonds/raw/main/docs/images/wikidata-named-things-shaded.png)

**bookmarks** - a simple Web link bookmarking system

![bookmarks](https://github.com/danja/sparql-diamonds/raw/main/docs/images/bookmarks-screenshot-shaded.png)

## Status

**2021-08-12** : three demos functional

_detailed status can be found in [devlog.md](devlog.md)_

## Installation

**Wikidata Demos**

- Clone or download this repository
- Point a Web server at the html directory
- Open the corresponding URL in a Web browser

_Note to self - might these work on a github.io page?_

**Bookmarks**

As above, plus this mini-application requires a SPARQL Server with write permissions (SPARQL INSERT via HTTP POST).

To run it on a [Fuseki](https://jena.apache.org/documentation/fuseki2/) server, follow the install instructions there.

You will need to create a dataset in Fuseki called 'bookmarks' (a TBD store is recommended for persistence).

The file js/config.js should be edited to match your Fuseki configuration.

eg. with Fuseki launched via :

`apache-jena-fuseki-4.1.0/fuseki-server --port 3333`

an appropriate config.js would contain :

```
var SparqlServer = {
  host: 'http://localhost:3333',
  queryPath: '/bookmarks/sparql',
  updatePath: '/bookmarks/update'
}
```

There is some sample data (as a SPARQL INSERT) in sparql-templates/bookmarks-samples-inset.rq

Then point a browser at the URL corresponding to html/bookmarks.html

Additionally, at html/bookmarklet.html there is a bookmarklet link that may be dragged to your browser's toolbar to pre-fill the form with the current page address.
