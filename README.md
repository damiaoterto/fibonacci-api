# fibonacci-api

This a simple API for return a fibonacci value.

## How to Use

**Start by docker**
`````
# Build image
docker build -t fibonacciapi:latest .

# Run container
docker run -d -p 3000:3000 fibonacciapi:latest
`````
**Start by local Node.js**
```
npm install
```

```
npm start
```

## How to access
Open your browser and access ```http://localhost:3000/fibonacci```, define the total iterations using ``` http://localhost:3000/fibonacci?iterations=4000 ```.
