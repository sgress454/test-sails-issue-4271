# test-4271

Repro case for https://github.com/balderdashy/sails/issues/4271 (`sendNativeQuery` / `transaction` hangs using sails-mysql@1.0.0-16).

## Steps

1. Clone repo
2. `npm install`
3. Create a new mysql database to test with
4. Update `config/datastores.js` with connection info for new database
5. `sails lift`
6. Visit `http://localhost:1337`

**Expected result**

A raw MySQL database result should be displayed, similar to:
```
{
  "rows": [
    {
      "name": "spot"
    },
    {
      "name": "rex"
    },
    {
      "name": "alice"
    },
    {
      "name": "rory"
    }
  ],
  "fields": [
    {
      "catalog": "def",
      "db": "test4271",
      "table": "pet",
      "orgTable": "pet",
      "name": "name",
      "orgName": "name",
      "charsetNr": 33,
      "length": 765,
      "type": 253,
      "flags": 0,
      "decimals": 0,
      "zeroFill": false,
      "protocol41": true
    }
  ]
}
```

**Actual result**

The page hangs.

## Relevant code

* Model in `api/models/Pet.js`
* Endpoint in `config/routes.js` (code adapted from https://next.sailsjs.com/documentation/reference/waterline-orm/datastores/send-native-query#?example)
