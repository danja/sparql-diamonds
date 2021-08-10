var commonPrefixes =
  'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \n\
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>  \n\
PREFIX dc: <http://purl.org/dc/terms/>  \n\
PREFIX foaf: <http://xmlns.com/foaf/0.1/>  \n\
PREFIX x:     <http://purl.org/stuff/>  \n\
'

var listBookmarksSparqlTemplate =
  commonPrefixes +
  ' \n\
SELECT DISTINCT ?bookmark ?url ?title ?created ?description ?nick ?tag\n\
WHERE { \n\
    ?bookmark a x:Bookmark ; \n\
    x:url ?url . \n\
  OPTIONAL { \n\
    ?bookmark dc:title ?title \n\
  } \n\
  OPTIONAL { \n\
    ?bookmark dc:created ?created \n\
  } \n\
  OPTIONAL { \n\
    ?bookmark dc:description ?description \n\
  } \n\
  OPTIONAL { \n\
    ?bookmark foaf:maker [ \n\
           foaf:nick ?nick \n\
       ] . \n\
  } \n\
  OPTIONAL { \n\
    ?bookmark x:tag ?tag \n\
  } \n\
} \n\
ORDER BY DESC(?created)  \n\
'
