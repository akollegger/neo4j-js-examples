import neo4j from 'neo4j-driver'

describe("neo4j-driver types", () => {
  it("are a sub-object", () => {
    const neo4jTypes = neo4j.types;
    expect(neo4jTypes).toBeDefined();
  })
})