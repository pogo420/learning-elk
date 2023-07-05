# learning-elk
Repo to contain elk learning notes


## Basics
### What is ELK?
* ELK aka Elastic Search - Logstash - Kibana
* Elastic search is a json data base, no sql.
   * We communicate with es via rest calls.
   * Elastic search's equivalent to RDBMS

        | ES| RDBMS |
        |---|---| 
        |Index | Data Base|
        | Document | Table|
        |Fields | Columns|
    * Query DSL is the language for query in ES DB.


* Logstash is a ingestion pipeline for ES db.
* Kibana is the visualization engine for data in ES db.

### What is Xpack?
* Additional tools for elk
* Elastic sql is a popular tool which can convert sql into Query DSL.
