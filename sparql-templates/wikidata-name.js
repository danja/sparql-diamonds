/* A minimal SPARQL template, expressed in Javascript
   escaped newlines added to make it more legible!
   The ~{name}~ part will be replaced by the templating engine
*/

var wikidataNameTemplate = '\n\
\n\
PREFIX schema: <http://schema.org/>  \n\
\n\
SELECT DISTINCT ?target WHERE { \n\
\n\
    ?target schema:name "~{name}~"@en . \n\
    ?target schema:about ?concept . \n\
}'; 
