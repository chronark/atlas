import { Job, RawSearch } from "../types/customTypes"

import { Jobs } from "./jobs"

describe("jobs", () => {
  describe("get()", () => {
    interface TestCase {
      name: string
      rawSearch: RawSearch
      want: Job[]
    }

    const tt: TestCase[] = [
      {
        name: "should return an empty array",
        rawSearch: {
          jobs: [],
          orte: [],
        },
        want: [],
      },
      {
        name: "should return a single job",
        rawSearch: {
          jobs: [
            {
              ID: "631520",
              datum: "03/05/2020",
              titel: "Werkstudent / Praktikant (w/m/d) im technischen Vertrieb",
              lat: "48.135125299999999",
              lng: "11.5819805",
              typ: "Internship while studying",
              extern: "null",
              logo: "",
              firma: "Innoscripta GmbH",
              url:
                "https://jobboerse.th-nuernberg.de/index.php/en/job/631520-Werkstudent-Praktikant-wmd-im-technischen-Vertrieb-Innoscripta-GmbH",
            },
          ],
          orte: [],
        },
        want: [
          {
            score: 1,
            id: 631520,
            date: "03/05/2020",
            title: "Werkstudent / Praktikant (w/m/d) im technischen Vertrieb",
            locations: [
              {
                lat: 48.135125299999999,
                lon: 11.5819805,
              },
            ],
            type: "Internship while studying",
            logo: "",
            corp: "Innoscripta GmbH",
            url:
              "https://jobboerse.th-nuernberg.de/index.php/en/job/631520-Werkstudent-Praktikant-wmd-im-technischen-Vertrieb-Innoscripta-GmbH",
          },
        ],
      },
    ]

    tt.forEach((tc) => {
      jest.resetAllMocks()
      jest.spyOn(Math, "random").mockImplementation(() => 1)
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => tc.rawSearch,
        })
      })

      const jobs = new Jobs()

      test(tc.name, () => {
        expect(jobs.get()).toEqual(Promise.resolve(tc.want))
      })
    })
  })
})
