
// This is only available from the non-public api...
const {isNode, Node} = require('neo4j-driver-core');
const {isRelationship, Relationship} = require('neo4j-driver-core');

describe("neo4j-driver types", () => {
  describe("Node", () => {
    it("can be constructed", () => {
      const identity = 0;
      const labels = ["A"];
      const properties = {
        k: "value"
      }
      const n = new Node(identity, labels, properties)
      expect(n.identity).toBe(identity);
      expect(n.labels).toEqual(expect.arrayContaining(labels));
      expect(n.properties).toMatchObject(properties);
    })
    it("isNode", () => {
      const identity = 0;
      const labels = ["A"];
      const properties = {
        k: "value"
      }
      const n = new Node(identity, labels, properties)
      expect(isNode(n)).toBeTruthy();
    })
  })

  describe("Relationship", () => {
    it("can be constructed", () => {
      const from = 0;
      const to = 1;
      const identity = 3;
      const type = "R";
      const properties = {
        k: "value"
      }
      const r = new Relationship(
        identity, from, to,
        type, properties)
      expect(r.identity).toBe(identity);
      expect(r.start).toBe(from);
      expect(r.end).toBe(to);
      expect(r.type).toEqual(type);
      expect(r.properties).toMatchObject(properties);
    })
    it("isRelationship", () => {
      const from = 0;
      const to = 1;
      const identity = 3;
      const type = "R";
      const properties = {
        k: "value"
      }
      const r = new Relationship(
        identity, from, to,
        type, properties)
      expect(isRelationship(r)).toBeTruthy();
    })
  })
  
})