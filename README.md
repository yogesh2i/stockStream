# Stock Price Streaming with gRPC

This project demonstrates a real-time stock price streaming service using gRPC.  It provides a client and server implementation for subscribing to and receiving live stock price updates.


## Introduction

This project showcases how to build a high-performance, real-time data streaming application using gRPC.  It's designed to provide a foundation for building financial data services or any application requiring live updates.  The example focuses on streaming stock prices, but the principles can be applied to other data streams.

## Features

* **Real-time Stock Price Streaming:**  Subscribes to a stream of stock price updates.
* **gRPC-based Communication:** Leverages gRPC for efficient and robust communication between client and server.
* **Protocol Buffer Definitions:** Uses Protocol Buffers for defining the service interface and data structures.
* **Example Client and Server:** Provides ready-to-run client and server implementations.
* **Clear and Concise Code:**  Easy to understand and modify.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yogesh2i/stockStream.git
   ```

2. **Run the project:**

   ```bash
   cd stockStream
   npm install
   ```

 ## Usage

1. **Running the server**

   ```bash
   node ./index.js
   ```

2. **Running the client**

   ```bash
   node ./client.js
   ```
   
   **utils.js**

   1. To see output for other stocks rather than default (AAPL) please change it in utils.js.
      
      const ticker = "Your stock ticker goes here"

      *Note:*

      1. Example India stock tickers  - "RELIANCE.NS", "TCS.NS" (can be used between  9:00AM IST - 3:00pm IST)
      2. Example US stock tickers -  "AAPL", "GOOG" (can be used between 8:00PM IST - 02:00AM IST)


## Contributing
Contributions are welcome!  Please open an issue or submit a pull request.      
          

        

   
   
   

   




    

   
