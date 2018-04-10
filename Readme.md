# LeeusNet Block Chain

> The Developers Blockchain (Status: ~Alpha)

###### To/Do
- Further increase Documentation
- Add/Fix Ability to Host/Create Nodes via Web Server
- Add More Features
- Further Encrypt/Secure Chain

Vue Material Doc: https://vuematerial.io/getting-started

VueJS: https://vuejs.org/v2/guide/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

- EX. of Transaction:
```
Leeus.createTransaction(new Transaction(Date.now(), "wallet-a", "wallet-b", 10));
```

- EX. of Mining:
```
Leeus.mineCurrentBlock('wallet-k');
```
