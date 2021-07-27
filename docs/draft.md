# SPARQL Diamonds : an architectural pattern for rapid development of data-drived applications

# Abstract

This document describes a specific software-architectural pattern, in the general sense of the book 'Design Patterns' [0] as a means of providing solutions to recurring application development demands in the context of the 'Web of Data' []. As such a pattern it can be described in the abstract, but it is felt that it has most utility in concrete scenarios involving the widely deployed Web technologies around the browser in conjunction with SPARQL servers.

The infrastructure components of a 'SPARQL Diamond' are a Web browser (a HTTP client with processing/rendering capabilities) and a SPARQL server (database, query engine and HTTP server). Between these a templating engine intermediates custom queries (requests) and another templating engine delivers application-specific rendering of the results from those queries (responses).

The intention here is to demonstrate that by exploiting widely-deployed systems together with a small number of utility libraries, a very broad range of data-driven applications can be created with minimal effort.  

## Keywords

# Introduction

In May 2001, Scientific American had a feature article entitled "The Semantic Web" [1] written by the inventor of the World Wide Web, a prominent artificial intelligence researcher and an expert in the field of the title. At the time it seemed the publication would have major impact on the direction of subsequent development of the Web. This description of a natural evolution of Web technology had it's roots in Berners-Lees original vision of the Web as a knowledge-sharing environment and by 2001, many of the technical requirements had already been fulfilled (largely coordinated by the W3C [2]). 


## Associated Technologies






