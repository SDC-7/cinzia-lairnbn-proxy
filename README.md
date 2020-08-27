# LAirbnb
> This webpage is inspired by a vacation rental booking website listing page.

## Individual Projects
  - https://github.com/SDC-7/carousel-service
  - https://github.com/SDC-7/booking-service
  - https://github.com/SDC-7/reviews-service
  - https://github.com/SDC-7/moreplacestostay-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)
1. [Development](#Development)

## Usage
A proxy server for LAirbnb, a vacation rental booking website. Once the server is running, directing the browser to http://localhost:3000/:id will render location data for the associated id.

## Requirements
- Node v12.18.1
- Express

Please clone all repos listed under Individual Projects and follow each ReadMe carefully before running the proxy server.

## Development

### Installing Dependencies
From within the root directory:
```sh
npm install
```
## Running the Proxy
Once all services are ready and databases and servers are up an running, from within the root directory:

```sh
npm start
```

Direct the browser to http://localhost:3000/:id, passing in 1, 2, or 3 to see data associated with the particular listing id.