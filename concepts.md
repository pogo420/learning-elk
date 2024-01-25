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
      * They are used for keyword search.
      * These queries search in inverted index of index to retieve documents.
      * These queries signifies whether keyword is present or not. 
   * match queries
      * They are exact match query , searching a complete sentence with cases etc.
      * These queies generetes scores.
      * Scores signifies how good the query is matching.

## Elastic dsl flow:
* Query execution flow:
    * Query reaches a node. It as acts as a coordinating node.
    * Query is distribited to different nodes.
    * Draft data is returned to the coordinating nodes via worker nodes.
    * Coordinating nodes creates final data and returns to the client.

* Source selection and query are executed in individual nodes.
* Aggregation, sorting and pagination are done in coordinating node.

## Size/From:
* Size and From are used for pagination.
* When we go to larger value of `From` we find query are slower.
* Lets undertand the situtation:
```
Suppose we have 5 worker node and 1 coordinating node.
When we say in query `size: x and from: y`.
Each worker send x+y documents to coordinating node not y; reason worker does not know the actual order of documents.
So coordinating node have to process (x+y)*(5+1) documents to send y documents, that will be send to the querying client.
```

## Filter context vs Query context:
* An elastic search query can be executed in filter or query context.

| Filter context | Query context |
|---|---|
|Yes No queries | How good is the match|
| Scores are *not* calculated | Scores are calculated |
| Cached | *Not* Cached |
| bool - `filer` and `must not` |  `query` parameter |

## Bool query:
* Place holder

## Range Query:
* Place holder

## Datetime math:
* Place holder

## Aggregations:
* Place holder
