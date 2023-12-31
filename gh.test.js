let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
    jest.setTimeout(60000);
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
    jest.setTimeout(60000);
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
    jest.setTimeout(60000);
  });
});

describe("Github about page tests", () => {
  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title3 = await page.title();
    expect(title3).toEqual("About · GitHub");
    jest.setTimeout(60000);
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
    jest.setTimeout(60000);
  });

  test("The page contains Subscribe button", async () => {
    const subscribeBtnSelector = ".btn-muted-mktg.mb-4.btn-mktg";
    await page.waitForSelector(subscribeBtnSelector, {
      visible: true,
    });
    const actual = await page.$eval(
      subscribeBtnSelector,
      (link) => link.textContent
    );
    expect(actual).toContain("Subscribe");
    jest.setTimeout(60000);
  });
});
