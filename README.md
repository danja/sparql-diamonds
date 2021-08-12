# Sparql Diamonds

These are small demos of an architectural pattern for rapid development of data-driven applications as described in the [SPARQL Diamonds paper](https://github.com/danja/sparql-diamonds/blob/main/docs/paper.pdf) (pdf).

The demos are designed to operate against a SPARQL server with query construction and result formatting carried out in browser Javascript.

![SPARQL Diamond](https://github.com/danja/sparql-diamonds/raw/main/docs/images/diamond.png)

Three demos are currently available :

**wikidata-knot** - shows how to pull data from Wikidata using a fixed query, and display the results in a Web page

![Wikidata things named Knot](https://github.com/danja/sparql-diamonds/raw/main/docs/images/things-named-knot.png)

**wikidata-name** - as above, but with a query variable supplied by the user

![Wikidata things named Knot](https://github.com/danja/sparql-diamonds/raw/main/docs/images/things-named-knot.png)

**bookmarks** - a simple Web link bookmarking system

## Status

**2021-08-12** : three demos functional

_detailed status can be found in [devlog.md](devlog.md)_
