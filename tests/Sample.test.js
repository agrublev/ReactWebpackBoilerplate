describe("Test suite 1", () => {
    test("Check 1 === 1", async () => {
        expect(1).toBe(1);
    });
    test("Check 3 second wait", async () => {
        await new Promise(resolve => setTimeout(resolve, 2200));
        expect(1).toBe(1);
    });
});
