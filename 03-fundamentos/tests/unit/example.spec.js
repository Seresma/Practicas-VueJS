


describe("Example Component", () => {

  test("Debe de ser mayor a 10", () => {

    // Arrange (Estado inicial)
    let value = 10

    // Act (Estimulos)
    value += 2

    // Assert (Comprobacion)
    expect(value).toBeGreaterThan(10)

  })


})