

/**
 * no no no
 */
function getJsonForSparqlURL(pageURL, callback) {
     $.ajax({
         url: pageURL,
         accept: {
             xml: 'application/xml;charset=UTF-8',
             sparql: 'sparql-results+xml;charset=UTF-8'
         },
         headers: { // belt and braces
             'Accept': 'sparql-results+xml;charset=UTF-8'
             //   'Accept-Charset': 'UTF-8' unsafe
         }
     }).done(function (xml) {
         var json = sparqlXMLtoJSON(xml);

         if(!json) {
           json = "{}";
         }
         callback(json);
     })  .fail(function() {
    alert( "error in getJsonForSparqlURL" );
  });
 }

 function doQuery(pageURL, callback) {
    $.ajax({
        url: pageURL,
        // accept: {
           // xml: 'application/xml;charset=UTF-8',
           // sparql: 'sparql-results+xml;charset=UTF-8'
        // },
        headers: { // belt and braces
            'Accept': 'application/sparql-results+json, application/json;charset=UTF-8'
            //   'Accept-Charset': 'UTF-8' unsafe
        }
    }).done(function (json) {
       // var json = sparqlXMLtoJSON(xml);

        if(!json) {
          json = "{}";
        }
        callback(json);
    })  .fail(function() {
   alert( "error in getResults" );
 });
}

 function getJsonForSparqlURL(pageURL, callback) {
    $.ajax({
        url: pageURL,
        accept: {
            xml: 'application/xml;charset=UTF-8',
            sparql: 'sparql-results+xml;charset=UTF-8'
        },
        headers: { // belt and braces
            'Accept': 'sparql-results+xml;charset=UTF-8'
            //   'Accept-Charset': 'UTF-8' unsafe
        }
    }).done(function (xml) {
        var json = sparqlXMLtoJSON(xml);

        if(!json) {
          json = "{}";
        }
        callback(json);
    })  .fail(function() {
   alert( "error in getJsonForSparqlURL" );
 });
}

//  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

function doInsert (endpoint, sparql) {
    $.ajax({
        type: "POST",
        url: endpoint,
        data: ({
            update: sparql
        })
    }).done(function () {
       
           //  window.location.href = window.location.href.replace("edit.html", "page.html");


    }).fail(function (e) {
        alert("error doInsert"+JSON.stringify(e)); 
    });
}



/**
 incomplete!!!

 returns eg. [{"target":"https://commons.wikimedia.org/wiki/Knot"},{"target":"https://en.wikipedia.org/wiki/Knot"}]

 instead of

[{"target":{"type":"uri","value":"https://commons.wikimedia.org/wiki/Knot"}},{"target":{"type":"uri","value":"https://en.wikipedia.org/wiki/Knot"}}]



 */
 function sparqlXMLtoJSON(xml) {

     var xmlString = (new XMLSerializer()).serializeToString(xml);

     // workaround for wrong interpretation of charset
     xmlString = xmlString.replace(/[^\u0000-\u007F]/g, '');
     // maybe force to ISO-8859-1, also known as Latin-1 instead?

     var $xml = $(xmlString);

     var variables = $xml.find("variable");

          if (variables.length == 0) {
         return false;
     }
     var jsonVariables = [];

     variables.each(function () {
         jsonVariables.push($(this).attr("name"));
     });

     var results = $xml.find("result");

     if (results.length == 0) {
         return false;
     }
     var jsonResults = [];

     results.each(function () {
         var map = {};
         for (var i = 0; i < jsonVariables.length; i++) {
             var name = jsonVariables[i];
             //     console.log("NAME=" + name);
             $(this).find("binding[name='" + name + "']").each(function () {
                 //  entry[name] = $(this).text().trim();
                 // console.log("entry[name]=" + entry[name]);
                 map[name] = $(this).text().trim();
             });
         }
         jsonResults.push(map);
     });

    // console.log("RESULTS = "+JSON.stringify(jsonResults));
     return jsonResults;
 }
