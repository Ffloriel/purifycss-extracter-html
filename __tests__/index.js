import purifyhtml from "./../index.js"
import { TEST_1_CONTENT, TEST_1_TAG, TEST_1_CLASS, TEST_1_ID } from "./data"

describe("purifyhtml", () => {
    it("finds tag selectors", () => {
        const received = purifyhtml.extract(TEST_1_CONTENT)
        console.log(received)
    })

    it("finds classes selectors", () => {})

    it("finds id selectors", () => {})
})
