class CX {L
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
        this.level1UpdateEvent = null;
        this.level2UpdateEvent = null;
        this.tradeDataUdpateEvent = null;
        this.pendingDepositUpdate = null;
        this.accountPositionEvent = null;
        this.orderStateEvent = null;
        this.orderTradeEvent = null;
        this.newOrderRejectEvent = null;
        this.cancelOrderRejectEvent = null;
        this.marketStateUpdate = null;
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
        var frame = Frame.new(MessageType.request, sequenceNumber, "GetOrderStatus", payload);
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
        var frame = Frame.new(MessageType.request, sequenceNumber, "GetOrderFee", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOrderHistory(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId };
        var frame = Frame.new(MessageType.request, sequenceNumber, "GetOrderHistory", payload);
        this.ws.send(Frame.serialize(frame));
    }

    getOpenOrders(accountId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "AccountId": accountId };
        var frame = Frame.new(MessageType.request, sequenceNumber, "GetOpenOrders", payload)
        this.ws.send(Frame.serialize(frame));
    }

    createWithdrawTicket(productId, accountId, amount, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "ProductId": productId, "AccountId": accountId, "Amount": amount };
        var frame = Frame.new(MessageType.request, sequenceNumber, "CreateWithdrawTicket", payload)
        this.ws.send(Frame.serialize(frame));
    }

    subscribeLeve1(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = Frame.new(MessageType.request, sequenceNumber, "SubscribeLevel1", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsubscribeLevel1(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = Frame.new(MessageType.request, sequenceNumber, "UnsubscribeLevel1", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscribeLevel2(instrumentId, depth, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId, "Depth": depth };
        var frame = Frame.new(MessageType.request, sequenceNumber, "SubscribeLevel2", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsubscribeLevel2(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId };
        var frame = Frame.new(MessageType.request, sequenceNumber, "UnsubscribeLevel2", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscibeTrades(instrumentId, includeLastCount, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId, "IncludeLastCount": includeLastCount };
        var frame = Frame.new(MessageType.request, sequenceNumber, "SubscribeTrades", payload);
        this.ws.send(Frame.serialize(frame));
    }

    unsbuscribeTrades(instrumentId, sequenceNumber = 0) {
        var payload = { "OMSId": 1, "InstrumentId": instrumentId }
        var frame = Frame.new(MessageType.request, sequenceNumber, "UnsubscribeTrades", payload);
        this.ws.send(Frame.serialize(frame));
    }

    subscribeAccountEvents(accountId, sequenceNumber = 0) {
        payload = { "OMSId": 1, "AccountId": accountId }
        var frame = Frame.new(MessageType.request, sequenceNumber, "SubscribeAccountEvents", payload)
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
            console.log(event.data);
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
                        default:
                            break;
                    }
                    break;
                case MessageType.event:
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