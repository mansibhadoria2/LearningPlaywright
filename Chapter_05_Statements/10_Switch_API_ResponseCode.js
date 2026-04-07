let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("200 OK");
        break;
    case 201:
        console.log("201 Created");
        break;
    case 400:
        console.log("400 Bad Request");
        break;
    case 401:
        console.log("401 Unauthorized");
        break;
    case 404:
        console.log("404 Not Found");
        break;
    case 500:
        console.log("500 Internal Server Error");
        break;
    case 502:
        console.log("502 Bad Geteway");
        break;
    default:
             console.log("Invalid code..!");
        break;
}