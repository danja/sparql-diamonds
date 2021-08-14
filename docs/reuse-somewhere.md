Services on the Web have a fairly convoluted history. The early RPC and SOAP approaches which largely wrapped object-oriented programming constructs in HTTP messages seem incongruous today. The REST architectural style is generally accepted as the most appropriate way of using HTTP. In this view, linked HTML document delivery, the most common use of the Web, is just a specific kind of service.
Most modern data-oriented Web services generally adhere to REST, with payloads from client to server delivered either as HTML form-encoded strings or data structures represented in JSON (Javascript Object Notation) [ref] and the material returned typically again JSON. 
As a practical approach this has much to recommend it. Where it is lacking is in the more general notion of the Web. The data represented in JSON will typically be defined in terms of the application, specific to each and every service endpoint. The Web does facilitate a means of expressing data in a global context, through the use of URLs as identifiers. RDF can provide a global model through which relationships between resources can be expressed.

Conceptually, the Semantic Web is the same as the Web, broadened in scope. In practice, the emphasis is less on presentation of information than the information itself. Presentation is clearly critical to an information system, without good user interaction such a system fails. Lifting the Web to take advantage of all disciplines is a worthy goal.
Developing a useful or profitable Web site is challenging. 
Again, in practice, where a site or API developer may produce a very streamlined communication between the client and server, this is often a narrow shared model between a particular service and dedicated clients. Traditionally they have been aligned towards HTML documents, occasional out-of-band features (such as money transfer) as an extra. It may be argued that this is missing the whole point of the Web as a shared information space.

The approach could potentially be used to create content-delivery sites with the same general functionality as typical database-backed systems. But it is felt that it particularly lends itself to rapid prototyping and the enhancement of existing Web pages with 3rd party information.     

The fundamental motivation for the Web was the sharing of information, but a prerequisite of this is the intelligent management of information. The notion of a personal knowledgebase has often been discussed, but implementations tend to lack the opportunity to (selectively) share such information. Again, the combination of global identifiers for resources on the Web with a means to express relationships between them in the same language has huge potential.
The demonstration to be described is a minimal system that could form the basis of such lofty goals. 


But two particular phenomena may confuse the developer:
Firstly, while the HTTP protocol is clear when it comes to the media types requested and those of the content actually delivered (generally through Accept: and Content-Type: headers), certain systems such as proxies may not respect these fully. As a workaround it is common to see a query URL having an extra parameter, for example:

http://example.org/sparql?output=json&query=’…’

While inelegant and redundant, the output=json parameter is an extra hint to the server of what format results are required.
The second point of note is an issue that can crop up with any Web services , CORS (Cross-Origin Resource Sharing) [8], a security mechanism through which a browser and server negotiate the allowed origins of resources to load. Even if the Web server and SPARQL server engaged in SPARQL Diamond-style operations are on the same host, the difference in port for each may cause immediate failure at the browser. The solution is a straightforward addition of headers (this is covered by default in the Fuseki SPARQL server used for the bookmarks demo here, but foreknowledge can save a lot of developer time).    




