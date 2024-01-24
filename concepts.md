# Critical concepts on elastic:

## Basic concepts:
* Elastic search is a indexer not database.
* Use it for active query not meant for long term storage.
* We can create index anytime from long term storage.
* Index are meant for optimal search capability. More data will worse the performance.
* Keep only relevant fields in the index.
* Mapping of index is very important.
* Keep shard size smaller than node heap size.
* Don't use large indices with large shards.
* This table will summarize:

| item | what it does |
|---|---|
| Cluster | Home of nodes|
| Nodes | Home of shards |
| Shards | Stores documents |
| Indices | They are logical grouping of documents|

* We can change number of replica shards not primary.
* Replication is done prevent data loss during node failure.
* Image place holder:


## Data related concepts:
* There are two important data structure in elastic search:
   * Inverted index: Keeps track of documents, Returns document id based on the query.
      * Hash table of terms lower case: document id  
   *  Source: stores the json documents.
* Joins are super costly in ES, data redundency is OK.
* Avoid wildcard query - use term queries.
* Use pagination in query.

## Index Mapping concepts:
* If a field is not used in query -> Make index: false in index mapping.
* If field is numeric / datetime or even ip user appropiate field.
* If field is string:
   * Field to be used in full text search -> text datatype 
   * Field to be used for keyword search like hashtag or to be used with aggregation/sortings -> keyword datatype. 
* We can make a field both keyword and text but NOT recommended(twice index).

## Search Queries:
* There are two types:
   * term queries:
      * Place holder
   * match queries
      * Place holder

## ELastic dsl flow:
* Place holder

## Size/From:
* Place holder

## Filter context vs Query context:
* Place holder

## Bool query:
* Place holder

## Range Query:
* Place holder

## Datetime math:
* Place holder

## Aggregations:
* Place holder
