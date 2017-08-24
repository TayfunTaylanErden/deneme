# easyApi
create an api wrapper fast

## installation
```bash
$ node install easy-api-wrapper --save
```

## example
```javascript
const EasyApi = require("easy-api-wrapper");

// creates an Tmdb class
class Tmdb extends EasyApi {
  constructor(apiKey) {
    super({apiKey: apiKey, baseUrl: "api.themoviedb.org", basePath: "/3", endPoints: require("./example-endPoints.json")});
  }
}

const tmdb = new Tmdb("api key here");
tmdb.jobs().then(jobs => {
  console.log(jobs);
});

```
