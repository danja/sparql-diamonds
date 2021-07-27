# Random Notes - ignore

Something like :

Typical APIs are application-specific, resource-agnostic

Diamond APIs are application-agnostic, resource-specific


----

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
