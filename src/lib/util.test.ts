import { carthesianProduct, bound, removeFrom, removeListFromList, unique } from "./util"

describe("removeFrom()", () => {
  describe("when there are no duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          remove: "Vestibulum commodo felis quis tortor.",
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 3, 4],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]

    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
  describe("when the list is empty", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [],
          remove: "Vestibulum commodo felis quis tortor.",
        },
      },
      {
        type: "number",
        input: {
          list: [],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
  describe("when there are duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          remove: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 2, 3, 4],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
            {
              otherKey: [1, 2],
            },
          ],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
})
describe("removeListFromList()", () => {
  describe("when there are no duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list2: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          list1: ["Vestibulum commodo felis quis tortor.", "Aliquam tincidunt mauris eu risus."],
        },
      },
      {
        type: "number",
        input: {
          list2: [1, 2, 3, 4],
          list1: [3, 2],
        },
      },
      {
        type: "object",
        input: {
          list2: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
          list1: [
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list2
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list2, tc.input.list1)
          tc.input.list2.forEach((element: any) => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list2)
        })
      })
    })
  })
  describe("when the list is empty", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list2: [],
          list1: ["Vestibulum commodo felis quis tortor."],
        },
      },
      {
        type: "number",
        input: {
          list2: [],
          list1: [2, 3],
        },
      },
      {
        type: "object",
        input: {
          list2: [],
          list1: [
            {
              otherKey: [1, 2],
            },
          ],
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list2
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list2, tc.input.list1)
          tc.input.list2.forEach((element) => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list2)
        })
      })
    })
  })
  describe("when there are duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list2: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          list1: ["Aliquam tincidunt mauris eu risus.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."],
        },
      },
      {
        type: "number",
        input: {
          list2: [1, 2, 2, 3, 4],
          list1: [3, 4],
        },
      },
      {
        type: "object",
        input: {
          list2: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
            {
              otherKey: [1, 2],
            },
          ],
          list1: [
            {
              otherKey: [1, 2],
            },
          ],
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list2
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list2, tc.input.list1)
          tc.input.list2.forEach((element: any) => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list2)
        })
      })
    })
  })
})

describe("bound()", () => {
  describe("value is below lower limit", () => {
    it("should return lower limit", () => {
      expect(bound(20, 1, 40)).toEqual(20)
    })
  })
  describe("value is inside limit", () => {
    it("should return lower limit", () => {
      expect(bound(1, 2, 3)).toEqual(2)
    })
  })
  describe("value is above upper limit", () => {
    it("should return lower limit", () => {
      expect(bound(424, 1414, 500)).toEqual(500)
    })
  })
})
describe("unique()", () => {
  describe("when there are no duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 3, 4],
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = unique(tc.input.list)
          expect(result).toEqual(tc.input.list)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
  describe("whith duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          want: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 3, 4, 4, 5],
          want: [1, 2, 3, 4, 5],
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
          want: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
        },
      },
    ]
    testCases.forEach((tc) => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = unique(tc.input.list)
          expect(result).toEqual(tc.input.want)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
})
describe("carthesianProduct()", () => {
  const testCases = [
    {
      type: "numbers",
      array: [[1, 2], [1, 2]],
      want: [[1, 1], [1, 2], [2, 1], [2, 2]]
    },
    {
      type: "numbers/strings",
      array: [["1", 2], [1, "2"]],
      want: [["1", 1], ["1", "2"], [2, 1], [2, "2"]]
    },
    {
      type: "numbers/strings/objects",
      array: [["1", 2, {h:1}], [1, "2"]],
      want: [["1", 1], ["1", "2"], [2, 1], [2, "2"], [{h:1}, 1], [{h:1}, "2"]]
    },
    {
      type: "numbers",
      array: [[1, 2], [1, 2],[1, 2]],
      want: [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 1], [2, 1, 2], [2, 2, 1],[2,2,2]]
    },
  ]
  testCases.forEach(tc => {
    describe(`with ${tc.array.length} vectors`, () => {

      it(`should calculate the product correctly with ${tc.type}`, () => {
        const result = carthesianProduct(tc.array)
        expect(result).toEqual(tc.want)

      })

    });
  })
})