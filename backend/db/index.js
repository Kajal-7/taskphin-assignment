import pg from 'pg';

function connectDb() {

    const config = {
        user: "avnadmin",
        password: "AVNS_fbzyApo6ClDKIarML58",
        host: "my-db-taskphin-assignment.a.aivencloud.com",
        port: 21695,
        database: "defaultdb",
        ssl: {
            rejectUnauthorized: true,
            ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUE074++TpK19Bjl7rv+skRoKZOzIwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYWRhNjUzN2ItN2ZlMy00NmE3LTkyODQtNThlMjgyM2I2
YmYyIFByb2plY3QgQ0EwHhcNMjQwMTI2MTcxMzEyWhcNMzQwMTIzMTcxMzEyWjA6
MTgwNgYDVQQDDC9hZGE2NTM3Yi03ZmUzLTQ2YTctOTI4NC01OGUyODIzYjZiZjIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALTeE5yD
dxPpIckBvKkpoDVzrw8W3uxbG7PnejxmmZEXNe3MRTh0pqvYhrTLubPSpSYyLNn6
D9DaB/dzQqOj/S8TrSDIoEMCR/p7AtB9jLnPtKbHofzKntAcujT+puyZchA3cbfT
quV8XWR3JROeGHv3T3hcVjJoZEBsPBRUghevB4rRK2GJP3jZIXkY+u+29FboD2gb
YL5/Ah+8qE5GHh8wFu7df6PGgd70t2ChhmWGGOWKuiuAEYMpe2e0SMh5R3Rfn2Wo
mmncJ0vge2lgUBYr+sTFhAGbu9EYHYv4JxfAXwGhXA5OHpmxk8MoFtjR9KnH3tp9
9yygrH0BCfQJFfIGPQn9OP4+iMNcRlU2wvrkfzwVJxShdTdezXPpk0rsCUclnmm2
wFLnAOYZVa6RUsGmA5boXAQM/327yYEnleMtAfz0kPii0Ska9LWzMnhyB0a1z8lh
PtOyVWy7CCCTgXeIUzPgcmWx9vngPjqfRyh0pmB5hghNe6vzM6CUeztp7wIDAQAB
oz8wPTAdBgNVHQ4EFgQU1Yu/efhqg6C5vsHudD1yh0t8I2swDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJat5BfWi/Ea7yhQ
wDgTOfIj2RvMiwYcMqcGbYAv0uGR6Pr/Zbl0XFQwhk5x8J3VZfeD4vBqEdeppZgF
lCSjkr3BzPWIMKesSyCiEhMWSgm+khU48PaaYk4CY/AyLK7nmiffmQzjK2ICAwLx
eh56tfExBX499NHwhZIK5BbkDxKJqCqIOkr69nTVMSnnfgiS61lX29iSB9gSNZT3
g52tMsnnonGHefgKZfIa+SH0RUM3zB7txQvHg/UbeDC1mySRKGjiqxpQ230ifyTD
iYhrhA6M1U+1O9Nqd492TNKxnHPWuHFXewB5hpYlKc3EtdBAXnKdhBZHuD0GCpkT
Y0LuaYJwn6wGTSSZU375Gqmtro6TJ401gv3HNEeIxWUY7IDxyibcdA6++oVuY9zl
dcIDrL/9lCutFSpmImGDl4Lppf0vVKL78teSmWvZG2KYtO4af2YNheth7sbLjAPQ
985uVMR8I9TdKJLTbwCKVZnE+KRQzdAKMp5qOa8qVvOjuyUhJw==
-----END CERTIFICATE-----`,
        },
    };

    const client = new pg.Client(config);
    // client.connect(function (err) {
    //     if (err)
    //         throw err;
    //     console.log("Db connected")
    // });
    client.connect()
    return client
}

export default connectDb