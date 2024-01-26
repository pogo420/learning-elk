/*
Query with range and nested aggregation.
*/
GET /mylogs-apache-v2*/_search
{
    "size": 0,
    "query": {
        "range": {
            "@timestamp": {
                "gte": "2022.08.10",
                "lte": "2022.08.12",
                "format": "yyyy.MM.dd"
            }
        }
    },
    "aggs": {
        "verbs_bucket": {
            "terms": {
                "field": "verb"
            },
            "aggs": {
                "average_bytes": {
                    "avg": {
                        "field": "bytes"
                    }
                }
            }
        }
    }
}


GET /mylogs-apache-v2*/_search
{   "_source" : ["clientip", "verb"],
    "size": 30,
    "query": {
        "bool": {
            "should": [
                {
                    "match": {
                        "verb": "GET"
                    }
                },
                {
                    "match": {
                        "verb": "POST"
                    }
                }
            ]
        }
    }
}
