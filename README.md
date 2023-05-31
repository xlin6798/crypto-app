# Crypto Tracker Web App

This is a web application built using React that allows users to add and view cryptocurrencies. The app fetches cryptocurrency information using the CoinGecko API. Currently, the app does not support user login or a database.

## Features

- Fetches cryptocurrency information from the CoinGecko API.
- Allows users to add and view cryptocurrencies.
- Displays essential information about each cryptocurrency, such as price, market cap, and 24-hour trading volume.
- Provides a user-friendly interface for managing cryptocurrency data.

## Prerequisites

Before running the web app, ensure that you have the following installed:

- Node.js
- NPM (Node Package Manager)

## Installation

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project's directory.
3. Run the following command to install the required dependencies:

```
npm install
```

## Configuration

The web app uses the CoinGecko API to fetch cryptocurrency data. To configure the API integration, follow these steps:

1. Obtain an API key from the CoinGecko API (https://www.coingecko.com/api/documentation).
2. Open the `src/api/coingecko.js` file.
3. Replace the placeholder value for `YOUR_API_KEY` with your actual API key.

## Usage

To start the web app, run the following command:

```
npm start
```

This will launch the web app in your default browser. You can now begin exploring and interacting with the application.

## Technology Stack

The Crypto Tracker Web App is built using the following technologies:

- React: JavaScript framework for building user interfaces.
- CoinGecko API: External API for fetching cryptocurrency data.

## Limitations

- User login functionality is not currently supported. The app does not require user authentication to access its features.
- The app does not utilize a database. All data is fetched from the CoinGecko API in real-time.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this code for personal and commercial purposes.

## Contact

If you have any questions or inquiries about this project, you can reach out to the project maintainer at [kevinlin11426@gmail.com](mailto:kevinlin11426@gmail.com).
