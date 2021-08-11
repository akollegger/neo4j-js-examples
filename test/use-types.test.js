
// This is only available from the non-public api...
const {isNode, Node} = require('neo4j-driver-core');

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