describe("Test suite 1", () => {
    test("Check 1 === 1", async () => {
        expect(1).toBe(2);
    });
    test("Check 3 second wait", async () => {
        await new Promise(resolve => setTimeout(resolve,3000));
        expect(1).toBe(1);
    });
});
