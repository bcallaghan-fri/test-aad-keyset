# test-aad-keyset

This project is used to test [a bug in Electron Node](https://github.com/electron/node/issues/111).

## Running the test

Two versions of this test are provided, one in Electron and one in NodeJS. In a successful test, both will produce the same results. A successful test run will produce output similar to the following:
```
KeyStore {
  keys: [
    {
      'x5t#S256': 'Rl7FvDiFCppaHIfiE-eLuRCnskIsx0_Fali_0xf5EUQ',
      e: 'AQAB',
      kid: 'CtfQC8Le-8NsC7oC2zQkZpcrfOc',
      kty: 'RSA',
      n: 'jmRWLbot3VWk7VHgzdUS0Oac_FY4ffz-fXyqlFFByYxYcI2X1Bm51kBfw7YDvDxTEew5yGECElKCUaNoe4eWc0OCrLNTisjLJ3oS0XhR0DDKm8iB15ciyCpJxHoqhN9_fBjpaOBucKKNzKWU0dBu8biX_vS3h0hr2Bc6M5G9YVPIWBrOGPfwzUrk3d3gikyNF8lTvxWFzUj9yuUhuwlD2UuAEtwwKT0LC7aZz-GjuRwUxnuNNSlPie3imrlGeII1tnILNJ7bC3dJvoTr9M9lptAThDkFFahpssSsCir4dBkViDTMsDw5CC9jtPWKTwH33P6fSrcwxl0gZJKpFNlGyw',
      use: 'sig',
      x5c: [
        'MIIDBTCCAe2gAwIBAgIQIKS1IbCfX7xH/fHDCq11ljANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE5MDQyNDAwMDAwMFoXDTIxMDQyNDAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAI5kVi26Ld1VpO1R4M3VEtDmnPxWOH38/n18qpRRQcmMWHCNl9QZudZAX8O2A7w8UxHsOchhAhJSglGjaHuHlnNDgqyzU4rIyyd6EtF4UdAwypvIgdeXIsgqScR6KoTff3wY6WjgbnCijcyllNHQbvG4l/70t4dIa9gXOjORvWFTyFgazhj38M1K5N3d4IpMjRfJU78Vhc1I/crlIbsJQ9lLgBLcMCk9Cwu2mc/ho7kcFMZ7jTUpT4nt4pq5RniCNbZyCzSe2wt3Sb6E6/TPZabQE4Q5BRWoabLErAoq+HQZFYg0zLA8OQgvY7T1ik8B99z+n0q3MMZdIGSSqRTZRssCAwEAAaMhMB8wHQYDVR0OBBYEFFjkfvrQ97CY5HSyrhd98vkwj0SuMA0GCSqGSIb3DQEBCwUAA4IBAQAHVEnT+HZIxZc2jIdPqKcwCyCR4t44dsDTLYpvLB87iAJHckWgSblqgi/2hgW773PURIFSVWZbyT+/EgDPy0Bd+SHn0P9f4dOSrEWK6Ug3/GsOnUzooJ4SNcP91Shv5y5n5kCcZuglpnTBil85q+ZgB44CXQ5dPzDlZgO2IcCi2ZCYPGZUvKWSFnkQa0pjXu6wAArj1wWGbX7LuaPsSkOD1MK0A1/ve9V9kTeYr0fmmP+hD2TtOY+5fcv9oMbMQuL99Pwr+erjN3dDz7bQ0SDK+E8cerYgorHqjSIxbgH55yR9M1ca8sRriTl8Ah0rLAp/JIpFzn35oyrzCf6zzzWh'
      ],
      x5t: 'CtfQC8Le-8NsC7oC2zQkZpcrfOc'
    },
    {
      'x5t#S256': 'hgc3knSqfOo1juSRS62B-Jqa81QPwouL1czZuWnh6Eg',
      e: 'AQAB',
      kid: 'u4OfNFPHwEBosHjtrauObV84LnY',
      kty: 'RSA',
      n: 'oRRQG-ib30x09eWtDpL0wWahA-hgjc0lWoQU4lwBFjXV2PfPImiAvwxOxNG34Mgnw3K9huBYLsrvOQAbMdBmE8lwz8DFKMWqHqoH3xSqDGhIYFobQDiVRkkecpberH5hqJauSD7PiwDBSQ_RCDIjb0SOmSTpZR97Ws4k1z9158VRf4BUbGjzVt4tUAz_y2cI5JsXQfcgAPB3voP8eunxGwZ_iM8evw3hUOw7-nuiPyts7HSkvV6GMwrXfOymY_w07mYxw_2LnKInfsWBtcRIDG-Nrsj237LgtBhK7TkzuVrguq__-bkDwwF3qTRXGAX9KrwY4huRxDRslMIg30Hqgw',
      use: 'sig',
      x5c: [
        'MIIDBTCCAe2gAwIBAgIQdEMOjSqDVbdN3mzb2IumCzANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE5MDYwNDAwMDAwMFoXDTIxMDYwNDAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKEUUBvom99MdPXlrQ6S9MFmoQPoYI3NJVqEFOJcARY11dj3zyJogL8MTsTRt+DIJ8NyvYbgWC7K7zkAGzHQZhPJcM/AxSjFqh6qB98UqgxoSGBaG0A4lUZJHnKW3qx+YaiWrkg+z4sAwUkP0QgyI29Ejpkk6WUfe1rOJNc/defFUX+AVGxo81beLVAM/8tnCOSbF0H3IADwd76D/Hrp8RsGf4jPHr8N4VDsO/p7oj8rbOx0pL1ehjMK13zspmP8NO5mMcP9i5yiJ37FgbXESAxvja7I9t+y4LQYSu05M7la4Lqv//m5A8MBd6k0VxgF/Sq8GOIbkcQ0bJTCIN9B6oMCAwEAAaMhMB8wHQYDVR0OBBYEFNRP0Lf6MDeL11RDH0uL7H+/JqtLMA0GCSqGSIb3DQEBCwUAA4IBAQCJKR1nxp9Ij/yisCmDG7bdN1yHj/2HdVvyLfCCyReRfkB3cnTZVaIOBy5occGkdmsYJ+q8uqczkoCMAz3gvvq1c0msKEiNpqWNeU2aRXqyL3QZJ/GBmUK1I0tINPVv8j7znm0DcvHHXFvhzS8E4s8ai8vQkcpyac/7Z4PN43HtjDnkZo9Zxm7JahHshrhA8sSPvsuC4dQAcHbOrLbHG+HIo3Tq2pNl7mfQ9fVJ2FxbqlzPYr/rK8H2GTA6N55SuP3KTNvyL3RnMa3hXmGTdG1dpMFzD/IE623h/BqY6j29PyQC/+MUD4UCZ6KW9oIzpi27pKQagH1i1jpBU/ceH6AW'
      ],
      x5t: 'u4OfNFPHwEBosHjtrauObV84LnY'
    },
    {
      'x5t#S256': 'V3Ol6yMfSgRoQ_UhpdO-Qn8bQSDOADcvyg8tXBgwp7k',
      e: 'AQAB',
      kid: 'M6pX7RHoraLsprfJeRCjSxuURhc',
      kty: 'RSA',
      n: 'xHScZMPo8FifoDcrgncWQ7mGJtiKhrsho0-uFPXg-OdnRKYudTD7-Bq1MDjcqWRf3IfDVjFJixQS61M7wm9wALDj--lLuJJ9jDUAWTA3xWvQLbiBM-gqU0sj4mc2lWm6nPfqlyYeWtQcSC0sYkLlayNgX4noKDaXivhVOp7bwGXq77MRzeL4-9qrRYKjuzHfZL7kNBCsqO185P0NI2Jtmw-EsqYsrCaHsfNRGRrTvUHUq3hWa859kK_5uNd7TeY2ZEwKVD8ezCmSfR59ZzyxTtuPpkCSHS9OtUvS3mqTYit73qcvprjl3R8hpjXLb8oftfpWr3hFRdpxrwuoQEO4QQ',
      use: 'sig',
      x5c: [
        'MIIC8TCCAdmgAwIBAgIQfEWlTVc1uINEc9RBi6qHMjANBgkqhkiG9w0BAQsFADAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwHhcNMTgxMDE0MDAwMDAwWhcNMjAxMDE0MDAwMDAwWjAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDEdJxkw+jwWJ+gNyuCdxZDuYYm2IqGuyGjT64U9eD452dEpi51MPv4GrUwONypZF/ch8NWMUmLFBLrUzvCb3AAsOP76Uu4kn2MNQBZMDfFa9AtuIEz6CpTSyPiZzaVabqc9+qXJh5a1BxILSxiQuVrI2BfiegoNpeK+FU6ntvAZervsxHN4vj72qtFgqO7Md9kvuQ0EKyo7Xzk/Q0jYm2bD4SypiysJoex81EZGtO9QdSreFZrzn2Qr/m413tN5jZkTApUPx7MKZJ9Hn1nPLFO24+mQJIdL061S9LeapNiK3vepy+muOXdHyGmNctvyh+1+laveEVF2nGvC6hAQ7hBAgMBAAGjITAfMB0GA1UdDgQWBBQ5TKadw06O0cvXrQbXW0Nb3M3h/DANBgkqhkiG9w0BAQsFAAOCAQEAI48JaFtwOFcYS/3pfS5+7cINrafXAKTL+/+he4q+RMx4TCu/L1dl9zS5W1BeJNO2GUznfI+b5KndrxdlB6qJIDf6TRHh6EqfA18oJP5NOiKhU4pgkF2UMUw4kjxaZ5fQrSoD9omjfHAFNjradnHA7GOAoF4iotvXDWDBWx9K4XNZHWvD11Td66zTg5IaEQDIZ+f8WS6nn/98nAVMDtR9zW7Te5h9kGJGfe6WiHVaGRPpBvqC4iypGHjbRwANwofZvmp5wP08hY1CsnKY5tfP+E2k/iAQgKKa6QoxXToYvP7rsSkglak8N5g/+FJGnq4wP6cOzgZpjdPMwaVt5432GA=='
      ],
      x5t: 'M6pX7RHoraLsprfJeRCjSxuURhc'
    }
  ]
}
```

### Test with NodeJS
This test should be run with Node 12.0.0
```
npm run node
```

### Test with Electron
This test should be run with Electron 6 or later (currently 6.0.0-beta.15)
```
npm run electron
```
