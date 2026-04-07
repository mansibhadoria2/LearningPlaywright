//Group Case

let browser = "Brave";

switch (browser) {
    case "Edge":
    case "Chrome":
    case "Brave":
    case "Opera":
        console.log("It is a Chromium Project");
        break;

    case "Firefox":
        console.log("Mozilla Project");
        break;

    case "Safari":
        console.log("Apple Browser- uses JavaScriptCore Engine");
        break;
    default:
        console.log("Unknown Bwoswer- manual testing needed");
        break;
}