import { useMemo } from "react";

const useFutureEventSparql = () => {
  return useMemo(() => {
    const now = new Date();
    return [
      {
        type: "bgp",
        triples: [
          {
            "subject": { termType: "Variable", value:"s1" },
            "predicate": { termType:"NameNode", value: "http://virtual-assembly.org/ontologies/pair#endDate" },
            "object": { termType:"Variable", value: "endDate" }
          }
        ]
      },{
        type: "filter",
        expression:{
          type: "operation",
          operator: ">",
          args:[
            {
              termType: "Variable",
              value: "endDate"
            },
            {
              termType: "Literal",
              datatype: {
                termType:"NamedNode",
                value:"http://www.w3.org/2001/XMLSchema#dateTime"
              },
              language: "",
              value: now.toISOString()
            }
          ]
        }
      }
    ]
  }, []);
};

export default useFutureEventSparql;
