# Random Notes - ignore

Something like :

Typical APIs are application-specific, resource-agnostic

Diamond APIs are application-agnostic, resource-specific


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
