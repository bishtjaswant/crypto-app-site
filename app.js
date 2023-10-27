function countdown() {
    let dt = new Date('Nov 30 2023 00:00:00');

    let main_date = new Date();

    let left_day = parseInt((dt - main_date) / 1000 / 60 / 60 / 24);
    let left_hours = parseInt((dt - main_date) / 1000 / 60 / 60 % 24);
    let left_min = parseInt((dt - main_date) / 1000 / 60 % 60);;
    let left_sec = parseInt((dt - main_date) / 1000 % 60);;
 
    document.querySelector(".countdown").innerHTML = `
        
    <span> <strong>${left_day} </strong>DAYS </span>
    <span> <strong>${left_hours} </strong>HOURS </span>
    <span> <strong>${left_min} </strong> MINUTES </span>
    <span> <strong>${left_sec} </strong>SECONDS </span>

    `
}

// countdown();
setInterval(countdown, 1000);


let d_coin_letter = document.getElementById("coin_letter");
let d_crypto_input = document.getElementById("d_crypto_input");
let d_coin_select = document.querySelector("#coin")
let d_btc = document.getElementById("btc");
let g_coin_letter = document.getElementById("gcoin_letter");
let g_crypto_input = document.getElementById("g_crypto_input");
let g_coin_select = document.querySelector("#gcoin")
let g_btc = document.getElementById("gbtc");


function digital_crypto_converter() {

    d_coin_select.addEventListener("change", function (e) {

        d_coin_letter.innerText = d_coin_select.value.slice(0, 1);

        switch (d_coin_select.value) {
            case "Bitcoin":
                d_btc.innerText = 'BTC';
                break;

            case "Ethereum":
                d_btc.innerText = 'ETH';
                break;

            case "Tether":
                d_btc.innerText = 'TET';
                break;


            case "BNB":
                d_btc.innerText = 'BNB';
                break;



            default:
                d_btc.innerText = 'btc'
                break;
        }
    });
}

digital_crypto_converter();



function government_crypto_converter() {


    g_coin_select.addEventListener("change", function (e) {

        g_coin_letter.innerText = g_coin_select.value.slice(0, 1);

        switch (g_coin_select.value) {
            case "Dollar":
                g_btc.innerText = 'USD';
                break;

            case "Rupee":
                g_btc.innerText = 'INR';
                break;

            case "Riyal":
                g_btc.innerText = 'SAR';
                break;


            case "Dirham":
                g_btc.innerText = 'AED';
                break;



            default:
                g_btc.innerText = 'btc'
                break;
        }
    });
}

government_crypto_converter();


// convert bitcoin to other government currency
let bitcoin_dollar = 19974.45;
let ethereum_dollar = 1349.44;
let tether_dollar = 1.00;
let bnb_dollar = 291.55;



// bitcoin  conversion
d_crypto_input.addEventListener("input", function (e) {

    let crypto_value = e.target.value;
    console.log(d_coin_select.value)
    console.log(crypto_value);

    switch (d_coin_select.value) {
        case 'Bitcoin':
            switch (g_coin_select.value) {
                case 'Dollar':
                    g_crypto_input.value = (crypto_value * bitcoin_dollar)
                    break;

                case 'Rupee':
                    g_crypto_input.value = (crypto_value * (bitcoin_dollar * 81));
                    break;

                case 'Riyal':
                    g_crypto_input.value = (crypto_value * (bitcoin_dollar * 3.76));
                    break;
                case 'Dirham':
                    g_crypto_input.value = (crypto_value * (bitcoin_dollar * 3.67));
                    break;


            }
            break;


    }


});

// bnb_dollar  conversion
d_crypto_input.addEventListener("input", function (e) {

    let crypto_value = e.target.value;
    console.log(d_coin_select.value)
    console.log(crypto_value);

    switch (d_coin_select.value) {
        case 'BNB':
            switch (g_coin_select.value) {
                case 'Dollar':
                    g_crypto_input.value = (crypto_value * bnb_dollar)
                    break;

                case 'Rupee':
                    g_crypto_input.value = (crypto_value * (bnb_dollar * 81));
                    break;

                case 'Riyal':
                    g_crypto_input.value = (crypto_value * (bnb_dollar * 3.76));
                    break;
                case 'Dirham':
                    g_crypto_input.value = (crypto_value * (bnb_dollar * 3.67));
                    break;


            }
            break;


    }


});

// tether_dollar  conversion
d_crypto_input.addEventListener("input", function (e) {

    let crypto_value = e.target.value;
    console.log(d_coin_select.value)
    console.log(crypto_value);

    switch (d_coin_select.value) {
        case 'Tether':
            switch (g_coin_select.value) {
                case 'Dollar':
                    g_crypto_input.value = (crypto_value * tether_dollar)
                    break;

                case 'Rupee':
                    g_crypto_input.value = (crypto_value * (tether_dollar * 81));
                    break;

                case 'Riyal':
                    g_crypto_input.value = (crypto_value * (tether_dollar * 3.76));
                    break;
                case 'Dirham':
                    g_crypto_input.value = (crypto_value * (tether_dollar * 3.67));
                    break;


            }
            break;


    }


});

// ethereum_dollar  conversion
d_crypto_input.addEventListener("input", function (e) {

    let crypto_value = e.target.value;
    console.log(d_coin_select.value)
    console.log(crypto_value);

    switch (d_coin_select.value) {
        case 'Ethereum':
            switch (g_coin_select.value) {
                case 'Dollar':
                    g_crypto_input.value = (crypto_value * ethereum_dollar)
                    break;

                case 'Rupee':
                    g_crypto_input.value = (crypto_value * (ethereum_dollar * 81));
                    break;

                case 'Riyal':
                    g_crypto_input.value = (crypto_value * (ethereum_dollar * 3.76));
                    break;
                case 'Dirham':
                    g_crypto_input.value = (crypto_value * (ethereum_dollar * 3.67));
                    break;


            }
            break;


    }


});