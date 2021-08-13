# Random Notes - ignore

1 semweb nature

2 https://httpwg.org/specs/ HTTP Documentation : IETF RFCs and IANA registries

3 linked data

4 SPARQL 1.1 specifications [https://www.w3.org/TR/sparql11-query/]

5 https://github.com/danja/sparql-diamonds

6 https://www.w3.org/TR/sparql11-protocol/

7 https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

8 CORS

9 jQuery

10 Mustache

11 Hogan

12 Wikidata Query Service

13 JSON trans

14 sparql json trans

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
