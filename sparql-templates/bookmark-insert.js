var addBookmarkSparqlTemplate = commonPrefixes + "\n\
\n\
INSERT DATA { \n\
<~{bookmark}~> \n\
      a x:Bookmark ; \n\
      x:url <~{url}~> ; \n\
      dc:title '~{title}~' ; \n\
      dc:description '~{description}~' ; \n\
      dc:created '~{created}~' ; \n\
      foaf:maker \n\
            [ foaf:nick '~{nick}~'] ; \n\
      x:tag '~{tag}~' . \n\
} \n\
";
