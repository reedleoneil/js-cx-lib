class CX {
    constructor(url) {
        this.ws = null;
        this.connectToAPI(url);
        this.onGetProducts = null;
        this.onGetInstruments = null;
        this.onWebAuthenticateUser = null;
        this.onGetUserAccounts = null;
        this.onGetAccountTransactions = null;
        this.onGetAccountPositions = null;
        this.onGetAccountTrades = null;
        this.onSendOrder = null;
        this.onCancelOrder = null;
        this.onGetOrderStatus = null;
        this.onGetOrderFee = null;
        this.onGetOrderHistory = null;
        this.onGetOpenOrders = null;
        this.onCreateWithdrawTicket = null;
        this.onSubscribeLevel1 = null;
        this.onUnsubscribeLevel1 = null;
        this.onSubscribeLevel2 = null;
        this.onUnsubscribeLevel2 = null;
        this.onSubscribeTrades = null;
        this.onUnsubscribeTrades = null;
        this.onSubscribeAccountEvents = null;
        this.onLevel1UpdateEvent = null;
        this.onLevel2UpdateEvent = null;
        this.onTradeDataUdpateEvent = null;
        this.onPendingDepositUpdate = null;
        this.onAccountPositionEvent = null;
        this.onOrderStateEvent = null;
        this.onOrderTradeEvent = null;
        this.onNewOrderRejectEvent = null;
        this.onCancelOrderRejectEvent = null;
        this.onMarketStateUpdate = null;
    }

    static get production() { return "wss://api-cx.coins.asia/ws-api/"; }
    static get staging() { return "wss://api-cx.staging.coins.technology/ws-api/"; }

    getProducts(sequenceNumber = 0) {
        var payload = { "OMSId": 1 };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetProducts", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getInstruments(sequenceNumber = 0) {
        var payload = { "OMSId": 1 };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetInstruments", payload);
        this.ws.send(Frame.serialize(frame));
    }

    webAuthenticateUser(username, password, sequenceNumber = 0) {
        var payload = { "UserName": username, "Password": password };
        var frame = new Frame(MessageType.request, sequenceNumber, "WebAuthenticateUser", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getUserAccounts(sequenceNumber = 0) {
        var frame = new Frame(MessageType.request, sequenceNumber, "GetUserAccounts", {});
        this.ws.send(Frame.serialize(frame));
    }

    getAccountTransactions(accountId, depth, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId, "Depth": depth };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetAccountTransactions", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getAccountPositions(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetAccountPositions", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getAccountTrades(accountId, count, startIndex, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId, "Count": count, "StartIndex": startIndex };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetAccountTrades", payload);
        this.ws.send(Frame.serialize(frame));
    }

    sendOrder(accountId, clientOrderId, quantity, displayQuantity, useDisplayQuantity, limitPrice, orderIdOco, orderType, pegPriceType, instrumentId, trailingAmount, limitOffest, side, stopPrice, timeInForce, sequenceNumber = 0) {
        var payload = {
            "OMSId": 1,
            "AccountId": accountId,
            "ClientOrderId": clientOrderId,
            "Quantity": quantity,
            "DisplayQuantity": displayQuantity,
            "UseDisplayQuantity": userDisplayQuantity,
            "LimitPrice": limit_price,
            "OrderIdOCO": order_id_oco,
            "OrderType": order_type,
            "PegPriceType": peg_price_type,
            "InstrumentId": instrument_id,
            "LimitOffset": limit_offset,
            "Side": side,
            "StopPrice": stop_price,
            "TimeInForce": time_in_force
        };
        var frame = new Frame(MessageType.request, sequenceNumber, "SendOrder", payload);
        this.ws.send(Frame.serialize(frame));
    }

    cancelOrder(accountId, orderId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId, "OrderId": orderId };
        var frame = new Frame(MessageType.request, sequenceNumber, "CancelOrder", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOrderStatus(accountId, orderId, sequence_number = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId, "OrderId": orderId };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetOrderStatus", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOrderFee(accountId, instrumentId, productId, amount, orderType, makerTaker, sequenceNumber = 0) {
        var payload = {
            "OMSId": 1,
            "AccountId": accountId,
            "InstrumentId": instrumentId,
            "ProductId": productId,
            "Amount": amount,
            "OrderType": orderType,
            "MakerTaker": makerTaker
        };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetOrderFee", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOrderHistory(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetOrderHistory", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOpenOrders(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId };
        var frame = new Frame(MessageType.request, sequenceNumber, "GetOpenOrders", payload)
        this.ws.send(Frame.serialize(frame));
    }

    createWithdrawTicket(productId, accountId, amount, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "ProductId": productId, "AccountId": accountId, "Amount": amount };
        var frame = new Frame(MessageType.request, sequenceNumber, "CreateWithdrawTicket", payload)
        this.ws.send(Frame.serialize(frame));
    }

    subscribeLevel1(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = new Frame(MessageType.request, sequenceNumber, "SubscribeLevel1", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsubscribeLevel1(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = new Frame(MessageType.request, sequenceNumber, "UnsubscribeLevel1", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscribeLevel2(instrumentId, depth, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId, "Depth": depth };
        var frame = new Frame(MessageType.request, sequenceNumber, "SubscribeLevel2", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsubscribeLevel2(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = new Frame(MessageType.request, sequenceNumber, "UnsubscribeLevel2", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscribeTrades(instrumentId, includeLastCount, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId, "IncludeLastCount": includeLastCount };
        var frame = new Frame(MessageType.request, sequenceNumber, "SubscribeTrades", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsbuscribeTrades(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId }
        var frame = new Frame(MessageType.request, sequenceNumber, "UnsubscribeTrades", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscribeAccountEvents(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId }
        var frame = new Frame(MessageType.request, sequenceNumber, "SubscribeAccountEvents", payload)
        this.ws.send(Frame.serialize(frame));
    }

    connectToAPI(url) {
        this.ws = new WebSocket(url);
        var ws = this.ws;
        var cx = this;

        ws.onopen = function () {
            console.log(url);
        };

        ws.onmessage = function (event) {
            //console.log(event.data);
            var frame = Frame.deserialize(event.data);
            switch (frame.messageType) {
                case MessageType.reply:
                    switch (frame.functionName) {
                        case "GetProducts":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, products: frame.payload };
                            cx.onGetProducts(eventArgs);
                            break;
                        case "GetInstruments":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, instruments: frame.payload };
                            cx.onGetInstruments(eventArgs);
                            break;
                        case "WebAuthenticateUser":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onWebAuthenticateUser(eventArgs);
                            break;
                        case "GetUserAccounts":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, accountIds: frame.payload };
                            cx.onGetUserAccounts(eventArgs);
                            break;
                        case "GetAccountTransactions":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, transactions: frame.payload };
                            cx.onGetAccountTransactions(eventArgs);
                            break;
                        case "GetAccountPositions":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, positions: frame.payload };
                            cx.onGetAccountPositions(eventArgs);
                            break;
                        case "GetAccountTrades":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, trades: frame.payload };
                            cx.onGetAccountTrades(eventArgs);
                            break;
                        case "SendOrder":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onSendOrder(eventArgs);
                        case "CancelOrder":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onCancelOrder(eventArgs);
                            break;
                        case "GetOrderStatus":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, orderStatus: frame.payload };
                            cx.onGetOrderStatus(eventArgs);
                            break;
                        case "GetOrderFee":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onGetOrderFee(eventArgs);
                            break;
                        case "GetOrderHistory":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, orders: frame.payload };
                            cx.onGetOrderHistory(eventArgs);
                            break;
                        case "GetOpenOrders":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, orders: frame.payload };
                            cx.onGetOpenOrders(eventArgs);
                            break;
                        case "CreateWithdrawTicket":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onCreateWithdrawTicket(eventArgs);
                            break;
                        case "SubscribeLevel1":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketData: frame.payload };
                            cx.onSubscribeLevel1(eventArgs);
                            break;
                        case "UnsubscribeLevel1":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onUnsubscribeLevel1(eventArgs);
                            break;
                        case "SubscribeLevel2":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketData: frame.payload };
                            cx.onSubscribeLevel2(eventArgs);
                            break;
                        case "UnsbuscribeLevel2":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onUnsbuscribeLevel2(eventArgs);
                            break;
                        case "SubscribeTrades":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketTrades: frame.payload };
                            cx.onSubscribeTrades(eventArgs);
                            break;
                        case "UnsubscribeTrades":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onUnsubscribeTrades(eventArgs);
                            break;
                        case "SubscribeAccountEvents":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onSubscribeAccountEvents(eventArgs);
                            break;
                        default:
                            break;
                    }
                    break;
                case MessageType.event:
                    switch (frame.functionName) {
                        case "Level1UpdateEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketData: frame.payload };
                            cx.onLevel1UpdateEvent(eventArgs);
                            break;
                        case "Level2UpdateEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketData: frame.payload };
                            cx.onLevel2UpdateEvent(eventArgs);
                            break;
                        case "TradeDataUpdateEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, marketTrades: frame.payload };
                            cx.onTradeDataUpdateEvent(eventArgs);
                            break;
                        case "PendingDepositUpdate":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onPendingDepositUpdate(eventArgs);
                            break;
                        case "AccountPositionEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, positions: frame.payload };
                            cx.onAccountPositionEvent(eventArgs);
                            break;
                        case "OrderStateEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, orderStatus: frame.payload };
                            cx.onOrderStateEvent(eventArgs);
                            break;
                        case "OrderTradeEvent":
                            var eventArgs = { sequenceNumber: frame.sequenceNumber, trade: frame.payload };
                            cx.onOrderTradeEvent(eventArgs);
                            break;
                        case "NewOrderRejectEvent":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onNewOrderRejectEvent(eventArgs);
                            break;
                        case "CancelOrderRejectEvent":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onCancelOrderRejectEvent(eventArgs);
                            break;
                        case "MarketStateUpdate":
                            var eventArgs = { sequnceNumber: frame.sequenceNumber };
                            eventArgs = extend(eventArgs, frame.payload)
                            cx.onMarketStateUpdate(eventArgs);
                            break;
                        default:
                            break;
                    }
                    break;
                case MEssageType.error:
                    break;
                default:
                    break;
            }
        };

        ws.onclose = function () {
            cx.connectToAPI(url);
        };

        ws.onerror = function () {

        };
    }
}

class Frame {
    constructor(m, i, n, o) {
        this.messageType = m;
        this.sequenceNumber = i;
        this.functionName = n;
        this.payload = o;
    }

    static serialize(frame) {
        return JSON.stringify({ 'm': frame.messageType, 'i': frame.sequnceNumber, 'n': frame.functionName, 'o': JSON.stringify(frame.payload) });
    }

    static deserialize(json) {
        var obj = JSON.parse(json);
        var frame = new Frame(obj.m, obj.i, obj.n, obj.o);
        frame.payload = JSON.parse(frame.payload);
        return frame;
    }
}

class MessageType {
    static get request() { return 0; }
    static get reply() { return 1; }
    static get subscribe() { return 2; }
    static get event() { return 3; }
    static get unsubscribe() { return 4; }
    static get error() { return 5; }
}

function extend(obj, src) {
    Object.keys(src).forEach(function (key) { obj[key] = src[key]; });
    return obj;
}
