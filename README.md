# js-cx-lib
Javascript Coins Pro API Library

## Getting Started
You may download the Coins Pro API documentation [here](https://s3-ap-northeast-1.amazonaws.com/coins-staging-static-uploads/uploads/files/Coins+Pro+API.pdf). Access to the API is available only for customers who have a Coins Pro account.  

For the authentication credentials, please email coinspro.support@coins.ph using the email you're using for Coins Pro together with your **PGP Public Key**. This way, they can provide the API credentials in a secure manner.

## Installation
For browsers:

```html
<script src="cx.js"></script>
```

## Usage
Create an instance of CX.

```javascript
CX cx = new CX(CX.production);
```

|Environment   |URL                                          |
|--------------|---------------------------------------------|
|CX.production |wss://api-cx.coins.asia/ws-api/              |
|CX.staging    |wss://api-cx.staging.coins.technology/ws-api/|


Subscribe to response or events.

```javascript
cx.onGetProducts += function (event) {
  //Do something with event.products
}
```

Send request.

```javascript
cx.getProducts();
```

|Response/Event          |Description                                                                                                                                                                  | 
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|onGetProducts           |Returns a list of available **products** from the API.                                                                                                                       |
|onGetInstruments        |Returns a list of available **instruments** from the API.                                                                                                                    |
|onWebAuthenticateUer    |Returns if session is **authenticated**, **sessionToken**, **userId**, and **errorMessage**.                                                                                 |
|onGetUserAccounts       |Returns a list of **accountIds** for the current user.                                                                                                                       |
|onGetAccountTransactions|Retruns a list of recent **transactions** from your account.                                                                                                                 |
|onGetAccountPositions   |Returns a list of account **positions**(Balances) on a specific account.                                                                                                     |
|onGetAccountTrades      |Retruns a list of account **trades** history for a specific account.                                                                                                         |
|onSendOrder             |Retruns **status**, **errorMessage**, and **orderId**.                                                                                                                       |
|onCancelOrder           |Returns **status**, **errorMessage**, **errorCode**, and **detail**.                                                                                                         |
|onGetOrderStatus        |Reutrns the **orderStatus**(current operating status of an order) submitted to Order Management System.                                                                      |
|onGetOrderFee           |Returns the estimate of the **orderFee** and **productId** for a specific order and order type.                                                                              |
|onGetOrderHistory       |Returns the list of of the last 100 **orders** placed on your account.                                                                                                       |
|onGetOpenOrders         |Returns the list of Open **orders** for specified account of current user.                                                                                                   |
|onCreateWithdrawTicket  |Returns **result**, **errorMessage**, and **errorCode**.                                                                                                                     |
|onSubscribeLevel1       |Returns **marketData**.                                                                                                                                                      |
|onLevel1UpdateEvent     |Returns **marketData**.                                                                                                                                                      |
|onUnsubscribeLevel1     |Returns **result**, **errorMessage**, **errorCode**, and **detail**.                                                                                                         |
|onSubscribeLevel2       |Returns list of **marketData**.                                                                                                                                              |  
|onLevel2UpdateEvent     |Returns list of **marketData**.                                                                                                                                              |
|onUnsubscribeLevel2     |Returns **result**, **errorMessage**, **errorCode**, and **detail**.                                                                                                         |
|onSubscribeTrades       |Returns list of the latest public **marketTrades** for the specific instrument.                                                                                              |
|onTradeDataUpdateEvent  |Returns list of the latest public **marketTrades** for the specific instrument.                                                                                              |
|onUnsubscribeTrades     |Returns **result**, **errorMessage**, **errorCode**, and **detail**.                                                                                                         |
|onSubscribeAccountEvents|Returns **result**.                                                                                                                                                          |
|pendingDepositUpdate    |Returns **accountId**, **assetId**, **totalPendingDepositValue**.                                                                                                            |
|accountPositionEvent    |Returns account **position** any time the balance of your account changes.                                                                                                   |
|orderStateEvent         |Returns **orderStatus** events any time the status of an order on your account changes.                                                                                      |
|orderTradeEvent         |Returns account **trade** any time one of your orders results in a trade.                                                                                                    |
|newOrderRejectEvent     |Returns **accountId**, **clientOrderId**, **status**, and **rejectReason** if your order is rejected.                                                                        |
|cancelOrderRejectEvent  |Returns **accountId**, **orderId**,  **orderRevision**, **orderType**, **instrumentId**, **status**, and **rejectReason** if your attempt to cancel an order is unsuccessful.|
|marketStateUpdate       |Returns **exchangeId**, **venueAdapterId**, **venueInstrumentId**, **action**, **previousStatus**, **newStatus**, and **exchangeDateTime**.                                  |


|Request(*Italic* parameters are optional.)                                                       |Details                                                                                                 | 
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
|getProdcuts(*sequenceNumber*)                                                                    |Sends a request to get available products from the API.                                                 |
|getInstruments(*sequenceNumber*)                                                                 |Sends a request to get available instruments from the API.                                              |
|webAuthenticateUser(username, password, *sequenceNumber*)                                        |Sends a request to authenticate.                                                                        |
|getUserAccounts(*sequenceNumber*)                                                                |Sends a request to get user accounts.                                                                   |
|getAccountTransactions(accountId, *sequenceNumber*)                                              |Sends a request to get transaction from your account.                                                   | 
|getAccountPositions(accountId, *sequenceNumber*)                                                 |Sends a request to get account positions(balance) on a specific account.                                |
|getAccountTrades(accountId, *sequenceNumber*)                                                    |Sends a request to get account trades for a specific account.                                           |
|sendOrder(*sequenceNumber*)                                                                      |Sends a new order into the API.                                                                         |
|cancelOrder(accountId, clientOrderId, orderId, *sequnceNumber*)                                  |Sends a request to cancel an open order.                                                                |  
|getOrderStatus(accountId, orderId, *sequenceNumber*)                                             |Sends a request get the current operating status of an order.                                           |
|getOrderFee(accountId, instrumentId, productId, amount, orderType, makerTaker, *sequenceNumber*) |Sends a request to get the estimate of the fee for a specific order and order type.                     |
|getOrderHistory(accountId, *sequenceNumber*)                                                     |Sends a request to get the list of orders placed on your account.                                       |
|getOpenOrders(accountId, *sequenceNumber*)                                                       |Sends a request to get the list of Open Orders for specified account of current user.                   |
|createWithdrawTicket(productId, accountId, amount *sequenceNumber*)                              |Sends a request to creates a withdrawal ticket to send funds from Coins Pro to the user’s Coins wallet. |                            
|subscribeLevel1(instrumentId, *sequenceNumber*)                                                  |Sends a request to subscribe to level 1 market data.                                                    |
|unsubscribeLevel1(instrumentId, *sequenceNumber*)                                                |Sends a request to unsubscribe to level 1 market data.                                                  |
|subscribeLevel2(instrumentId, depth, *sequenceNumber*)                                           |Sends a request to subscribe to level 2 market data.                                                    |
|unsubscribeLevel2(instrumentId, *sequenceNumber*)                                                |Sends a request to unsubscribe to level 2 market data.                                                  |
|subscribeTrades(instrumentId, includeLastCount, *sequenceNumber*)                                |Sends a request to subscribe to market trades.                                                          |
|unsubscribeTrades(instrumentId, *sequenceNumber*)                                                |Sends a request to unsubscribe to market trades.                                                        |
|subscribeAccountEvents(accountId, *sequenceNumber*)                                              |Sends request to account-level events, such as orders, trades, deposits and withdraws.                  |


## Examples

```html
<script src="cx.js"></script> 
```

```javascript
CX cx = new CX(CX.production); //Create and instance of CX
			
//Subscribe to response
cx.OnGetProducts += function (event) {
  //Handle event.products
  console.log(event.products);
}

//Send request
cx.getProducts();
```
