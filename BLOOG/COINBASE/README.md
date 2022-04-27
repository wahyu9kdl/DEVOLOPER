# Coinbase Wallet PHP Library

[![Build Status](https://travis-ci.org/coinbase/coinbase-php.svg)](https://travis-ci.org/coinbase/coinbase-php)
[![Latest Stable Version](https://poser.pugx.org/coinbase/coinbase/v/stable)](https://packagist.org/packages/coinbase/coinbase)
[![Total Downloads](https://poser.pugx.org/coinbase/coinbase/downloads)](https://packagist.org/packages/coinbase/coinbase)
[![Latest Unstable Version](https://poser.pugx.org/coinbase/coinbase/v/unstable)](https://packagist.org/packages/coinbase/coinbase)
[![License](https://poser.pugx.org/coinbase/coinbase/license)](https://packagist.org/packages/coinbase/coinbase)

This is the official client library for the [Coinbase Wallet API v2][1]. We
provide an intuitive, stable interface to integrate Coinbase Wallet into your
PHP project.

_Important:_ As this library is targeted for newer API v2, it requires v2
permissions (i.e. `wallet:accounts:read`). If you're still using v1, please use
the [older version][2] of this library.

Untuk membuat panggilan API pertama Anda, coba jalankan di konsol:
 ```
 curl https://api.coinbase.com/v2/user -H "Authorization: Bearer 2f75e1ea0ee1e807ba1286464ad9b20b455c39a994f7de870cc00b5001719c89"
 ```

Tokan akses hanya berlaku selama 30 menit
 ID Klien:
```
016759b46f7866bedd8c9aa632807444a316a7c5557c339ae25d89136db9bb13
```

Rahasia Klien:
```
****************************************************************
```
URI Penerusan:
```
https://www.awdev.eu.org/p/login.html
```
URL Pengesahan Sampel:
```
https://www.coinbase.com/oauth/authorize?client_id=016759b46f7866bedd8c9aa632807444a316a7c5557c339ae25d89136db9bb13&redirect_uri=https%3A%2F%2Fwww.awdev.eu.org%2Fp%2Flogin.html&response_type=code&scope=wallet%3Auser%3Aread
```
URL Pemberitahuan:
```
https://www.awdev.eu.org/p/notification.html
```
Batasan lingkup:
```
wallet:transactions:send is limited $1,00/day per user
wallet:transactions:send:bypass-2fa is disabled
```

Send
```
3CLzzdVtYxAeKLTwovPiejxGjitHktUtit
```
## Installation

Install the library using Composer. Please read the [Composer Documentation](https://getcomposer.org/doc/01-basic-usage.md) if you are unfamiliar with Composer or dependency managers in general.

```json
"require": {
    "coinbase/coinbase": "~2.0"
}
```

## Authentication

### API Key

Use an API key and secret to access your own Coinbase account.

```php
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;

$configuration = Configuration::apiKey($apiKey, $apiSecret);
$client = Client::create($configuration);
```

### OAuth2

Use OAuth2 authentication to access a user's account other than your own. This
library does not handle the handshake process, and assumes you have an access
token when it's initialized. You can handle the handshake process using an
[OAuth2 client][5] such as [league/oauth2-client][6].

```php
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;

// with a refresh token
$configuration = Configuration::oauth($accessToken, $refreshToken);

// without a refresh token
$configuration = Configuration::oauth($accessToken);

$client = Client::create($configuration);
```

### Two factor authentication

The send money endpoint requires a 2FA token in certain situations (read more
[here][3]). A specific exception is thrown when this is required.

```php
use Coinbase\Wallet\Enum\Param;
use Coinbase\Wallet\Exception\TwoFactorRequiredException;
use Coinbase\Wallet\Resource\Transaction;

$transaction = Transaction::send([
    'toEmail' => 'test@test.com',
    'bitcoinAmount' => 1
]);

$account = $client->getPrimaryAccount();
try {
    $client->createAccountTransaction($account, $transaction);
} catch (TwoFactorRequiredException $e) {
    // show 2FA dialog to user and collect 2FA token

    // retry call with token
    $client->createAccountTransaction($account, $transaction, [
        Param::TWO_FACTOR_TOKEN => '123456',
    ]);
}
```

### Pagination

Several endpoints are [paginated][4]. By default, the library will only fetch
the first page of data for a given request. You can easily load more than just
the first page of results.

```php
$transactions = $client->getAccountTransactions($account);
while ($transactions->hasNextPage()) {
    $client->loadNextTransactions($transactions);
}
```

You can also use the `fetch_all` parameter to have the library issue all the
necessary requests to load the complete collection.

```php
use Coinbase\Wallet\Enum\Param;

$transactions = $client->getAccountTransactions($account, [
    Param::FETCH_ALL => true,
]);
```

### Warnings

It's prudent to be conscious of warnings. The library will log all warnings to a
standard PSR-3 logger if one is configured.

```php
use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;

$configuration = Configuration::apiKey($apiKey, $apiSecret);
$configuration->setLogger($logger);
$client = Client::create($configuration);
```

### Resource references

In some cases the API will return resource references in place of expanded
resource objects. These references can be expanded by refreshing them.

```php
$deposit = $this->client->getAccountDeposit($account, $depositId);
$transaction = $deposit->getTransaction();
if (!$transaction->isExpanded()) {
    $this->client->refreshTransaction($transaction);
}
```

You can also request that the API return an expanded resource in the initial
request by using the `expand` parameter.

```php
use Coinbase\Wallet\Enum\Param;

$deposit = $this->client->getAccountDeposit($account, $depositId, [
    Param::EXPAND = ['transaction'],
]);
```

Resource references can be used when creating new resources, avoiding the
overhead of requesting a resource from the API.

```php
use Coinbase\Wallet\Resource\Deposit;
use Coinbase\Wallet\Resource\PaymentMethod;

$deposit = new Deposit([
    'paymentMethod' => PaymentMethod::reference($paymentMethodId)
]);

// or use the convenience method
$deposit = new Deposit([
    'paymentMethodId' => $paymentMethodId
]);
```

### Responses

There are multiple ways to access raw response data. First, each resource
object has a `getRawData()` method which you can use to access any field that
are not mapped to the object properties.

```php
$data = $deposit->getRawData();
```

Raw data from the last HTTP response is also available on the client object.

```php
$data = $client->decodeLastResponse();
```

### Active record methods

The library includes support for active record methods on resource objects. You
must enable this functionality when bootstrapping your application.

```php
$client->enableActiveRecord();
```

Once enabled, you can call active record methods on resource objects.

```php
use Coinbase\Wallet\Enum\Param;

$transactions = $account->getTransactions([
    Param::FETCH_ALL => true,
]);
```

## Usage

This is not intended to provide complete documentation of the API. For more
detail, please refer to the
[official documentation](https://developers.coinbase.com/api/v2).

### [Market Data](https://developers.coinbase.com/api/v2#data-api)

**List supported native currencies**

```php
$currencies = $client->getCurrencies();
```

**List exchange rates**

```php
$rates = $client->getExchangeRates();
```

**Buy price**

```php
$buyPrice = $client->getBuyPrice('BTC-USD');
```

**Sell price**

```php
$sellPrice = $client->getSellPrice('BTC-USD');
```

**Spot price**

```php
$spotPrice = $client->getSpotPrice('BTC-USD');
```

**Current server time**

```php
$time = $client->getTime();
```

### [Users](https://developers.coinbase.com/api/v2#users)

**Get authorization info**

```php
$auth = $client->getCurrentAuthorization();
```

**Lookup user info**

```php
$user = $client->getUser($userId);
```

**Get current user**

```php
$user = $client->getCurrentUser();
```

**Update current user**

```php
$user->setName('New Name');
$client->updateCurrentUser($user);
```

### [Accounts](https://developers.coinbase.com/api/v2#accounts)

**List all accounts**

```php
$accounts = $client->getAccounts();
```

**List account details**

```php
$account = $client->getAccount($accountId);
```

**List primary account details**

```php
$account = $client->getPrimaryAccount();
```

**Set account as primary**

```php
$client->setPrimaryAccount($account);
```

**Create a new bitcoin account**

```php
use Coinbase\Wallet\Resource\Account;

$account = new Account([
    'name' => 'New Account'
]);
$client->createAccount($account);
```

**Update an account**

```php
$account->setName('New Account Name');
$client->updateAccount($account):
```

**Delete an account**

```php
$client->deleteAccount($account);
```

### [Addresses](https://developers.coinbase.com/api/v2#addresses)

**List receive addresses for account**

```php
$addresses = $client->getAccountAddresses($account);
```

**Get receive address info**

```php
$address = $client->getAccountAddress($account, $addressId);
```

**List transactions for address**

```php
$transactions = $client->getAddressTransactions($address);
```

**Create a new receive address**

```php
use Coinbase\Wallet\Resource\Address;

$address = new Address([
    'name' => 'New Address'
]);
$client->createAccountAddress($account, $address);
```

### [Transactions](https://developers.coinbase.com/api/v2#transactions)

**List transactions**

```php
$transactions = $client->getAccountTransactions($account);
```

**Get transaction info**

```php
$transaction = $client->getAccountTransaction($account, $transactionId);
```

**Send funds**

```php
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Transaction;
use Coinbase\Wallet\Value\Money;

$transaction = Transaction::send([
    'toBitcoinAddress' => 'ADDRESS',
    'amount'           => new Money(5, CurrencyCode::USD),
    'description'      => 'Your first bitcoin!',
    'fee'              => '0.0001' // only required for transactions under BTC0.0001
]);

try { $client->createAccountTransaction($account, $transaction); }
catch(Exception $e) {
     echo $e->getMessage(); 
}
```

**Transfer funds to a new account**

```php
use Coinbase\Wallet\Resource\Transaction;
use Coinbase\Wallet\Resource\Account;

$fromAccount = Account::reference($accountId);

$toAccount = new Account([
    'name' => 'New Account'
]);
$client->createAccount($toAccount);

$transaction = Transaction::transfer([
    'to'            => $toAccount,
    'bitcoinAmount' => 1,
    'description'   => 'Your first bitcoin!'
]);

$client->createAccountTransaction($fromAccount, $transaction);
```

**Request funds**

```php
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Transaction;
use Coinbase\Wallet\Value\Money;

$transaction = Transaction::request([
    'amount'      => new Money(8, CurrencyCode::USD),
    'description' => 'Burrito'
]);

$client->createAccountTransaction($transaction);
```

**Resend request**

```php
$account->resendTransaction($transaction);
```

**Cancel request**

```php
$account->cancelTransaction($transaction);
```

**Fulfill request**

```php
$account->completeTransaction($transaction);
```

### [Buys](https://developers.coinbase.com/api/v2#buys)

**List buys**

```php
$buys = $client->getAccountBuys($account);
```

**Get buy info**

```php
$buy = $client->getAccountBuy($account, $buyId);
```

**Buy bitcoins**

```php
use Coinbase\Wallet\Resource\Buy;

$buy = new Buy([
    'bitcoinAmount' => 1
]);

$client->createAccountBuy($account, $buy);
```

**Commit a buy**

You only need to do this if you pass `commit=false` when you create the buy.

```php
use Coinbase\Wallet\Enum\Param;

$client->createAccountBuy($account, $buy, [Param::COMMIT => false]);
$client->commitBuy($buy);
```

### [Sells](https://developers.coinbase.com/api/v2#sells)

**List sells**

```php
$sells = $client->getSells($account);
```

**Get sell info**

```php
$sell = $client->getAccountSell($account, $sellId);
```

**Sell bitcoins**

```php
use Coinbase\Wallet\Resource\Sell;

$sell = new Sell([
    'bitcoinAmount' => 1
]);

$client->createAccountSell($account, $sell);
```

**Commit a sell**

You only need to do this if you pass `commit=false` when you create the sell.

```php
use Coinbase\Wallet\Enum\Param;

$client->createAccountSell($account, $sell, [Param::COMMIT => false]);
$client->commitSell($sell);
```

### [Deposit](https://developers.coinbase.com/api/v2#deposits)

**List deposits**

```php
$deposits = $client->getAccountDeposits($account);
```

**Get deposit info**

```php
$deposit = $client->getAccountDeposit($account, $depositId);
```

**Deposit funds**

```php
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Deposit;
use Coinbase\Wallet\Value\Money;

$deposit = new Deposit([
    'amount' => new Money(10, CurrencyCode::USD)
]);

$client->createAccountDeposit($account, $deposit);
```

**Commit a deposit**

You only need to do this if you pass `commit=false` when you create the deposit.

```php
use Coinbase\Wallet\Enum\Param;

$client->createAccountDeposit($account, $deposit, [Param::COMMIT => false]);
$client->commitDeposit($deposit);
```

### [Withdrawals](https://developers.coinbase.com/api/v2#withdrawals)

**List withdrawals**

```php
$withdrawals = $client->getAccountWithdrawals($account);
```

**Get withdrawal**

```php
$withdrawal = $client->getAccountWithdrawal($account, $withdrawalId);
```

**Withdraw funds**

```php
use Coinbase\Wallet\Enum\CurrencyCode;
use Coinbase\Wallet\Resource\Withdrawal;
use Coinbase\Wallet\Value\Money;

$withdrawal = new Withdrawal([
    'amount' => new Money(10, CurrencyCode::USD)
]);

$client->createAccountWithdrawal($account, $withdrawal);
```

**Commit a withdrawal**

You only need to do this if you pass `commit=true` when you call the withdrawal method.

```php
use Coinbase\Wallet\Enum\Param;

$client->createAccountWithdrawal($account, $withdrawal, [Param::COMMIT => false]);
$client->commitWithdrawal($withdrawal);
```

### [Payment Methods](https://developers.coinbase.com/api/v2#payment-methods)

**List payment methods**

```php
$paymentMethods = $client->getPaymentMethods();
```

**Get payment method**

```php
$paymentMethod = $client->getPaymentMethod($paymentMethodId);
```

### [Merchants](https://developers.coinbase.com/api/v2#merchants)

#### Get merchant

```php
$merchant = $client->getMerchant($merchantId);
```

### [Orders](https://developers.coinbase.com/api/v2#orders)

#### List orders

```php
$orders = $client->getOrders();
```

#### Get order

```php
$order = $client->getOrder($orderId);
```

#### Create order

```php
use Coinbase\Wallet\Resource\Order;
use Coinbase\Wallet\Value\Money;

$order = new Order([
    'name' => 'Order #1234',
    'amount' => Money::btc(1)
]);

$client->createOrder($order);
```

#### Refund order

```php
use Coinbase\Wallet\Enum\CurrencyCode;

$client->refundOrder($order, CurrencyCode::BTC);
```

### Checkouts

#### List checkouts

```php
$checkouts = $client->getCheckouts();
```

#### Create checkout

```php
use Coinbase\Wallet\Resource\Checkout;

$params = array(
    'name'               => 'My Order',
    'amount'             => new Money(100, 'USD'),
    'metadata'           => array( 'order_id' => $custom_order_id )
);

$checkout = new Checkout($params);
$client->createCheckout($checkout);
$code = $checkout->getEmbedCode();
$redirect_url = "https://www.coinbase.com/checkouts/$code";
```

#### Get checkout

```php
$checkout = $client->getCheckout($checkoutId);
```

#### Get checkout's orders

```php
$orders = $client->getCheckoutOrders($checkout);
```

#### Create order for checkout

```php
$order = $client->createNewCheckoutOrder($checkout);
```

### [Notifications webhook and verification](https://developers.coinbase.com/docs/wallet/notifications)

```php
$raw_body = file_get_contents('php://input');
$signature = $_SERVER['HTTP_CB_SIGNATURE'];
$authenticity = $client->verifyCallback($raw_body, $signature); // boolean
```

## Contributing and testing

The test suite is built using PHPUnit. Run the suite of unit tests by running
the `phpunit` command.

```
phpunit
```

There is also a collection of integration tests that issues real requests to the
API and inspects the resulting objects. To run these tests, you must copy
`phpunit.xml.dist` to `phpunit.xml`, provide values for the `CB_API_KEY` and
`CB_API_SECRET` variables, and specify the `integration` group when running the
test suite.

```
phpunit --group integration
```

[1]: https://developers.coinbase.com/api/v2
[2]: https://packagist.org/packages/coinbase/coinbase
[3]: https://developers.coinbase.com/docs/wallet/coinbase-connect#two-factor-authentication
[4]: https://developers.coinbase.com/api/v2#pagination
[5]: https://packagist.org/search/?q=oauth2%20client
[6]: https://packagist.org/packages/league/oauth2-client


 Semua aset
 Aset	alamat	Label	Dibuat	
 Balancer	
```
 0xBd2ea5f07588F3F254bFF3b3bD862cd093a56Ce1
 ```
Awdev send	25 menit yang lalu	
 Detail
 Bitcoin	
```
 31vW66vcCa2YFYDuJECs7jXGfF1Hpbf6Wi
```
 Awdev F	5 hari yang lalu	
 Detail
 Bitcoin	
```
 38rGSQPds2yA51BhgrsPE2P65b8VSf9rWN
 ```
 + Tambah
 5 hari yang lalu	
 Detail
 Bitcoin	
```
 3LSGhagimv7g8KKBAqpQYarWndkQnwb7EW
 ```
 + Tambah
 95 hari yang lalu	
 Detail
 Bitcoin	
```
 3MvB44eJ8GvMS2UdfVBNskpaqzper3V7h4
 ```
 + Tambah
 95 hari yang lalu	
 Detail
 Bitcoin	
```
 3BT2F3szskGEjd3rGpJdbDrLd74jCoAbR4
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 39GkWLaDTJeKqK7EbMdagN1LsfkfKbsf8u
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 327RrFkTgbCnEakhjdjaQkNjbm4QrF19f9
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 3H4s9fDTZTivw3biyBUAXHzmNaYEQq7j55
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 39N3qhwLpsVwQ6FZvHfkUddasgbsVCYNw8
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 3GjQF7hFBQr2BvRCCuiF5zTnxp1BiZja26
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Bitcoin	
```
 3JtU3KH6CdaUcx7UqYPuBpuwaTE2nPAjof
 ```
 + Tambah
 236 hari yang lalu	
 Detail
 Bitcoin	
```
 3McHYLXhJcNs2xbFmK2hY7rZSkBkM9LyjJ
 ```
 + Tambah
 432 hari yang lalu	
 Detail
 Bitcoin	
```
 3N9Qq1QybpFXGwfZFMue6h9jvQXrn3MzHy
 ```
 + Tambah
 435 hari yang lalu	
 Detail
 Bitcoin	
```
 3CwtL6xGNG73NEZyZMPcdDj3rxr9DsCqrk
 ```
 + Tambah
 452 hari yang lalu	
 Detail
 Bitcoin Cash	
```
 1PnsiLHgEnaVtH7zZ9fgpYUajfM72UGNp8
 ```
 + Tambah
 370 hari yang lalu	
 Detail
 Ethereum	
```
 0xf632a8f82A642E8b30dcD956AC1602a80F7d1FA6
 ```
Awdev Ethereum	95 hari yang lalu	
 Detail
 Ethereum Classic	
```
 0xc03819702a97F53f2d8d6F2a1D3859eC7F1665B4
 ```
 + Tambah
 370 hari yang lalu	
 Detail
 IoTeX (ERC-20)	
```
 0x96d51Fb943f75c0F8252De3c2Ecd2CD3522181A2
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 Liquity	
```
 0xf81B6f3E3b8461FeA6c5E96eb7582bf0bab14b8c
 ```
 + Tambah
 101 hari yang lalu	
 Detail
 USD Coin	
```
 0xC5198B9D6ee97979201766b074115037129eCa5f
 ```
Awdev USD Coin

 
 # Cloning a repository
```
 ~/Projects/my-project$ gh repo clone coinbase/coinbase-php

 Cloning into 'cli'...
 remote: Enumerating objects: 99, done.
 remote: Counting objects: 100% (99/99), done.
 remote: Compressing objects: 100% (76/76), done.
 remote: Total 21160 (delta 49), reused 35 (delta 18), pack-reused 21061
 Receiving objects: 100% (21160/21160), 57.93 MiB | 10.82 MiB/s, done.
 Resolving deltas: 100% (16051/16051), done.
 
 ~/Projects/my-project$
```
### Invite

Invite a friend to Coinbase and you'll both get $10
 Know someone curious about<a href="https://www.coinbase.com/join/3glzh" > crypto?</a> You’ll both receive $10 in Bitcoin when they buy or sell $100 or more on<a href="https://www.coinbase.com/join/3glzh" > Coinbase!</a>➡️🛡<a href="https://www.coinbase.com/join/3glzh" >Learn more.</a>
 

### And that's it!

If you're having trouble with your GitHub account, contact [Support](https://wahyu9kdl.github.io/FAQ.html).

That's how you can easily become a member of the GitHub Documentation community. :sparkles:


## Thanks :purple_heart:

Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you being part of our :sparkles: community :sparkles:!


<h3>Connect with me:</h3>
    
<p>    
    <a href=" https://www.alhikmah.my.id/p/mp3-al-quran.html " target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEg9eIay8tna_DF67-KXOjTi7tWE94ff-qrIPe799Nlqo06swM8UeWSzCg6T0RBZxofdUruY3W5sErCq4PcDMdyMhmULH1KN9iLT15ey7cjBrK6mfN1TP_RpbpIwTb-hmu32psrWmb_7wY1f8FWKqESLqCpnhAF9qLVhM3FQc6NBf-43kV69T5I-meVddw=s128" alt="img" height="30" width="40"/></a>    
    <a href="https://codepen.io/san3" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="san3" height="30" width="40"/></a>
    <a href="https://dev.to/wahyu9kdl" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://twitter.com/Awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/ahmad-wahyudi-41b6841b6" height="30" width="40"/></a>
    <a href="https://fb.com/awgroupchannel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="awgroupchannel" height="30" width="40"/></a>
    <a href="https://instagram.com/awfanspage" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="awfanspage" height="30" width="40"/></a>
    <a href="https://dribbble.com/wahyu9kdl/shots" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.medium.com" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="wahyu9kdl" height="30" width="40"/></a>
    <a href="https://m.youtube.com/channel/UC7CRa3nkxakAZx_aRsMwRyA/playlists" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="aw youtube channel" height="30" width="40"/></a>
    <a href="https://feeds.feedburner.com/Alhikmah9" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg" alt="http://feedproxy.google.com/~r/blogspot/ghpgr/~3/vyr1fhc7dbi/informasi-cara-mendapatkan-ribuan.html" height="30" width="40"/></a>
    <a href="https://wahyu9kdl.github.io"><img align="center" src=" https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl.github.io/main/Aw-icon.png " alt="Logo awdev" height="30" /></a>
    <a href="https://m.facebook.com/Awgroupchannel" target="blank"><img  align="center" src=" https://camo.githubusercontent.com/97491cef561826228b265ef69be409bc19ac9b3894ba67f8ccd90e5f8283375a/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d4e6f32743975306f5f38592f594d43782d5662415767492f41414141414141414453492f7030786866775a4a37354d6e504c41664c79536471647a7464466e426132757367434c63424741735948512f733332302f636972636c652d63726f707065642e706e67" alt="Logo" height="30" width="40"/></a>
    <a href="https://devoloper.awdev.eu.org/devoloper.html" target="blank"><img align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcYb02UwFVHmvvZ5iA03AL1JF8zK-qCHfsru43rIHHA3Wrgv7Ab_Mtn08VvzVjaBVCiLO5KToZzWeFcZ66jplWsqFgDUH2azI2s0H6DhXd9F9iRPMnDLi2cU2McOl6YbXbYcSvZIpnUQx_v_iDtEBk4lJCaYFD3bJR6l765trHINJOfFBAatJH13C/s281/awdev.png " alt="Logo" height="30" width="40"/></a>
    <a href="https://www.awdev.eu.org" target="blank"><img  align="center" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4B2fk-VBn6xiGshk-q3MGnxL9BSOZkgbi0dWLVEu8yVRNCSLEAczznEB0lrQWdLLdFKb3KGFDjDDmEJGdGIVVla9oHv3buJVSPMoBFyJdKrh3GjnJfok5WevezH9y86pTq2qSfFvir-UsbmmKstKGx1FFsTD0kxLWTFmV4pYqKSHcVvzJ08_fKU8N/s1770/logo-www.awdev.eu.org.png " alt="Logo" height="30" width="40"/></a>    
    <a href="https://www.alhikmah.my.id" target="blank"><img align="center" src="https://raw.githubusercontent.com/wahyu9kdl/wahyu9kdl/main/logo.png " alt="Logo ALHIKMAH.MY.ID" height="30" /></a>
    <a href="https://www.blogger.com/follow-blog.g?blogID=392213471435482065" target="blank"><img align="center" src=" https://blogger.googleusercontent.com/img/a/AVvXsEhZo9w7yUEUyMZfWlEMwdLc5U6GgokdTUjEE2yH-MC7KtEPQtYWMaDdwenBNV-xPWOC9UZnOAob3hW7SiE0p46VzuArpYDjqFyAOEttFvL8r_OYnZHk8A-wzn6EoR3RucYBEjPngQboVFW3JLSAEaxt8j63jmjQqQyHvo4LRWxR907H75wEpCLAPoUSvg=s109" alt="" height="20" width="70"/></a>
 </p>

 <h3 align="left">Support:</h3>
 <p align="center">
 <i>Loved the tool? Please consider <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D">donating</a>  💸 to help it improve!</i>
 </p>
 <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer%2Fhomepage%2Fexternal%2Fprofile%3FflowContextData%3DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%26amount%3D25%26currencyCode%3DAUD&onboardData=%7B%22country.x%22%3A%22ID%22%2C%22locale.x%22%3A%22id_ID%22%2C%22intent%22%3A%22paypalme%22%2C%22redirect_url%22%3A%22https%253A%252F%252Fwww.paypal.com%252Fmyaccount%252Ftransfer%252Fhomepage%252Fexternal%252Fprofile%253FflowContextData%253DdnQz6co9bTO3dXsoaSQoXrylmBBr7Z4w4NgW64GB_WDfmLR52ffZouE7E54etjPgewijP0OxmZksVyVuBbZSxh7v9r8PWndQTi1eJUMZCCj7rrJftUv11NTxekLdOnVJT8vh6pE128RXl6Lq4yOTwu0f2kutdDCQ_qZkx2CTsh1Z3f_OGWFAvKJiKVMHbhq3dn4SWoaIs2dY-I1dSekSdPbZuEHLmCfV3kIA3MpjsPC9xVmmiRxgIY0fsKhMIEnZZQdCZUSJTpNWAnvYDIc-pUIdstyJJzGtqMk0TeqjSG7LnM5jOZufDLI4W8Jbk14B1O-3rAfdL66TgrgjcVRK35l6WhQzVDZEWvimVxtUMuqCgf8gboCEKwLD3ywxApHbM23LBMJY9KBXh6ILB3oZCmB0wYYJxSwmpLiIEW%2526amount%253D25%2526currencyCode%253DAUD%22%2C%22sendMoneyText%22%3A%22Anda%2520mengirimkan%2520Ahmad%2520wahyudi%22%7D"/><img align="center"  src="https://img.shields.io/badge/support-PayPal-blue?logo=PayPal&style=flat-square&label=Donate" alt="sponsor github profile readme generator"/>
 </a>  
 <a href="https://trakteer.id/awfanspage/tip "><img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100" alt="Support" /></a>
 <a href="https://ko-fi.com/Awfanspage"><img align="center" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="30" width="100" alt="Awfanspage" /></a>
 </p>

 <h3> LICENSE </h3>
 
 <a href="http://www.dmca.com/signup/createtakedown.aspx?mpi=takedown&affid=aff9cf0f75&showdiy=truee" target="blank"><img style="border-width:0" src=" https://blogger.googleusercontent.com/img/a/AVvXsEj33KfiYQAySqbIxVEc9pqMSAS2Pee5ow3EIA8poDOTk12d0APP-CR99QgHwWBJPVqLxlzKnVWMUVKGsrunZYwBIOkABA3qcfpy9b_SZDzakDN2QCNOAHdmxSG4RXrfAReyB1PkHXzc37aYGfS3Dc29693FJQtvrbQyXfNukGsMXWUZq0nWSqZAerwcjg" alt="" height="50" width="80"/></a>
 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Lisensi Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Ciptaan disebarluaskan di bawah <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Lisensi Creative Commons Atribusi 4.0 Internasional</a>.
 Copyright (c) 2022, Awde Score Code - AL HIKMAH [ Desain by : Alhikmah.my.id - awdev.eu.org] All rights reserved.
 For licensing, <a rel="license" href="https://www.alhikmah.my.id/p/license.html">see LICENSE.html</a>
 Copyright (c) 2022, Awdev - Desain by : Awdev Corporation All rights reserved.
 For licensing, <a rel="license" href="https://www.awdev.eu.org/p/license.html">see LICENSE.html</a>
 <!---
 wahyu9kdl/wahyu9kdl is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
 You can click the Preview link to take a look at your changes.
 --->
 <!--
 Copyright (c) 2021, Aw Score Code - AL HIKMAH [ Desain by : Aw Group Channel ] All rights reserved.
 For licensing, see LICENSE.html or https://kata-h.blogspot.com/p/license.html-->
 <!--
 Copyright (c) 2021, Aw Score Code - Desain by : Awdev Corporation All rights reserved.
 For licensing, see LICENSE.html or https://www.awdev.eu.org/p/license.html
 --><!--
 Copyright (c) 2021, Awde Score Code - AL HIKMAH [ Desain by : Awdev Devoloper ] All rights reserved.
 For licensing, see LICENSE.html or https://www.alhikmah.my.id/p/license.html-->

