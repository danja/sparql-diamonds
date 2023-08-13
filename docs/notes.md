# Random Notes - ignore

1 https://www-sop.inria.fr/acacia/cours/essi2006/Scientific%20American_%20Feature%20Article_%20The%20Semantic%20Web_%20May%202001.pdf


The Semantic Web, Berners-Lee, Hendler, Lassila.



2 https://httpwg.org/specs/ HTTP Documentation : IETF RFCs and IANA registries

3 Design Issues : Linked Data. Berners-Lee, 2006.

https://www.w3.org/DesignIssues/LinkedData.html

4 SPARQL 1.1 specifications [https://www.w3.org/TR/sparql11-query/]

5 https://github.com/danja/sparql-diamonds

6 https://www.w3.org/TR/sparql11-protocol/

7 https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

8 jQuery Javascript library. https://jquery.com/

9 Mustache templating specification, https://mustache.github.io/ 

10 Hogan Javascript library. https://twitter.github.io/hogan.js/

11 Wikidata Query Service https://query.wikidata.org/

12 json-to-json-transformer https://github.com/theleapofcode/json-to-json-transformer

13 Transforming the JSON Output of SPARQL Queries
for Linked Data Clients Lissena & Troncy. 2018.


14 https://www.w3.org/TR/turtle/
RDF 1.1 Turtle
Terse RDF Triple Language

15 Dublin Core Metadata Initiative, DCMI Metadata Terms, https://www.dublincore.org/specifications/dublin-core/dcmi-terms/

16 http://xmlns.com/foaf/spec/
FOAF ('Friend of a Friend') FOAF Vocabulary Specification, Miller & Brickley 2014.

17 Dates and times manipulation JavaScript library. https://momentjs.com/ 

18 'Bookmarklet'. Wikipedia. https://en.wikipedia.org/wiki/Bookmarklet

19 W3C Wiki, Comparison of RDFJS libraries. https://www.w3.org/community/rdfjs/wiki/Comparison_of_RDFJS_libraries

20 Reacthttps://reactjs.org/
A JavaScript library for building user interfaces

21 Seki, SPARQL server midleware. https://github.com/danja/seki

22 FooWiki, A minimal SPARQL Wiki https://github.com/danja/foowiki























 {"url":"https://www.w3.org/TR/sparql11-update/","title":"b3","description":"this is b3"
        


Something like :

Typical APIs are application-specific, resource-agnostic

Diamond APIs are application-agnostic, resource-specific

----

Apache Jena Fuseki is a SPARQL server.
https://jena.apache.org/documentation/fuseki2/


https://github.com/danja/sparql-diamonds

https://www.w3.org/TR/sparql11-protocol/

Cross-Origin Resource Sharing
----

        headers: {"Origin": "http://localhost", "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"},
        

http://tryhandlebarsjs.com/

https://mustache.github.io/mustache.5.html


Approximately MVC

Model : RDF globally, Javascript locally
View : SPARQL results templated to HTML
Control : request-response, templating


// really slow
select distinct * where {

?s <http://schema.org/name> ?text .

  #  "Knot"@en
  FILTER regex(?text, "Knot", "i")
}
