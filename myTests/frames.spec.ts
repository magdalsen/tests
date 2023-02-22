import test, { expect } from "@playwright/test";

test("Interact with frames", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); //give all frames on page
    console.log("No.of frames: " + allframes.length);
    
    const myFrame = page.frame("firstFr");
    await fillForm('magda', 'sen');
    async function fillForm(fname: string, lname: string) {
        if(myFrame) {
            await myFrame.fill("input[name='fname']", fname);
            await myFrame.fill("input[name='lname']", lname);
            expect(await myFrame.locator("p.has-text-info").textContent()).toContain(`You have entered ${fname} ${lname}`)
        }
    }

    const frame = page.frameLocator("#firstFr");
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("mmm@mmm.com");
    
})