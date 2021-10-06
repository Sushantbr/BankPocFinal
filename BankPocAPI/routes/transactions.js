var net = require('net');
const express = require("express")
var cors = require('cors')
const transactRoutes = express.Router();
const fs = require('fs');

const dataPath = './Details/db.json'
var accountarray = [];
var transactionarray = [];
var rejectedcount = 0;
var approvecount = 0;
var pendingcount = 0;

var rejectedamount = 0;
var approveamount = 0;
var pendingamount = 0;

var corsOptions =
{
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",

}

// util functions 

const saveDBData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getDBData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
}

function compareDates(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (date1.getDate() === date2.getDate()) {
      //  console.log("Both dates are equal")
    }
    else {
        //console.log("Both dates are different")

    }
}

// reading the data
transactRoutes.get('/transact', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});




// Read - get all accounts from the json file
transactRoutes.get('/transact/list', (req, res) => {
    const accounts = getDBData()
    res.send(accounts)
})

// Update - using Put method
transactRoutes.put('/transact/:id', (req, res) => {
    var existAccounts = getDBData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
        const accountId = req.params['id'];
        existAccounts[accountId] = req.body;

        saveAccountData(existAccounts);
        res.send(`accounts with id ${accountId} has been updated`)
    }, true);
});

//delete - using delete method
transactRoutes.delete('/transact/delete/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        var existAccounts = getAccountData()

        const userId = req.params['id'];

        delete existAccounts[userId];
        saveAccountData(existAccounts);
        res.send(`accounts with id ${userId} has been deleted`)
    }, true);
})

transactRoutes.get('/transact/user', cors(corsOptions), (req, res, next) => {
    var existAccounts = getDBData()
    var respData;
    var i;
    fs.readFile(dataPath, 'utf8', (err, data) => {

        const userN = req.query.username;
        const passW = req.query.password;
        const userdata = existAccounts['user'];
        var count = userdata.length;
        var colors = ["red", "blue", "green"];
        for (let i = 0; i < userdata.length; i++) {
            // console.log(colors[i]);
        }
        for (i = 0; i < userdata.length; ++i) {

            if (userdata[i]['username'] == userN && userdata[i]['password'] == passW) {
                return res.send(userdata[i]['usertype'])
            }
            else {
                console.log('User Name does not exist');
            }

        }
        return res.send('User Name does not exist');

    }, true);
})



transactRoutes.get('/transact/gettoAccName', cors(corsOptions), (req, res, next) => {
    var existAccounts = getDBData()
    var respData;
    var i;
    fs.readFile(dataPath, 'utf8', (err, data) => {

        const accNumber = req.query.accNumber;
        const userdata = existAccounts['toaccounts'];

        for (i = 0; i < userdata.length; ++i) {

            if (userdata[i]['accountnumber'] == accNumber) {

                return res.send(userdata[i]['beneficiaryname'])
            }
            else {
               // console.log('Account Number does not exist');
            }
        }
        return res.send('Account Number does not exist');

    }, true);

})

transactRoutes.get('/transact/getfromAccName', cors(corsOptions), (req, res, next) => {
    var existAccounts = getDBData()
    var respData;
    var i;
    // console.log(existAccounts)
    fs.readFile(dataPath, 'utf8', (err, data) => {

        const accNumber = req.query.accNumber;
        //const passW = req.query.password;
        const userdata = existAccounts['fromaccounts'];

        for (i = 0; i < userdata.length; ++i) {

            if (userdata[i]['accountnumber'] == accNumber) {

                return res.send(userdata[i]['beneficiaryname'])
            }
            else {
              //  console.log('Account Number does not exist');
            }
        }
        return res.send('Account Number does not exist');

    }, true);

})

transactRoutes.get('/transact/getcurrency', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['currency'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var currencyCode = data[i]['currencycode'];
        // console.log(currencyCode);
        array.push(currencyCode);

    }

    // console.log(array)  
    res.send(array);
})

transactRoutes.get('/transact/getcountry', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['country'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var countryname = data[i];
        // console.log(countryname);
        array.push(countryname);
    }
    // console.log(array)  
    res.send(array);
})

transactRoutes.post('/transact/addaccount', (req, res) => {

    var existAccounts = getDBData()

    var acData = existAccounts["toaccounts"];
    if (acData == undefined) {

        existAccounts["toaccounts"] = accountarray;
        accountarray.push(req.body);
    }
    else {
        acData.push(req.body);
        existAccounts["toaccounts"] = acData
    }

    saveDBData(existAccounts);
    res.send({ status: 'sucess', msg: 'account data added successfully' })
})
transactRoutes.get('/transact/gettoaccount', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['toaccounts'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var accnumber = data[i]['accountnumber'];
        array.push(accnumber);
    }
    res.send(array);
})

transactRoutes.get('/transact/getfromaccount', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['fromaccounts'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var accnumber = data[i]['accountnumber'];
        // console.log(accnumber);
        array.push(accnumber);
    }
    // console.log(array)  
    res.send(array);
})

transactRoutes.get('/transact/getccy', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['CCY'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var currencyCode = data[i]['curr'] + "-" + data[i]['cntry'];
        array.push(currencyCode);

    }
    res.send(array);
})
transactRoutes.get('/transact/getbankid', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['bankID'];
    res.send(data);
})
transactRoutes.get('/transact/getaccounttype', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['accountType'];
    res.send(data);
})
transactRoutes.get('/transact/getproxytype', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['proxytype'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var proxytype = data[i];
        // console.log(proxytype);
        array.push(proxytype);
    }
    res.send(array);
})
transactRoutes.post('/transact/submitsingletrxn', (req, res) => {
   
    var existAccounts = getDBData()
    var trxnData= existAccounts["transactionlist"];
    const trxnstatus = req.body['status'];
   //console.log(trxnstatus);
     var day=new Date().toISOString().
     replace(/T/, ' ').      // replace T with a space
     replace(/\..+/, ''); 
    // console.log(day);
    const newData=Math.floor(100000 + Math.random() * 900000)

    var refno = "TH000"+newData; 
      req.body['reference']=refno;
      if( trxnstatus == undefined )
      {
        req.body['status']="Pending";
      }
      
     
      req.body['receivedOn']=day;
     // console.log(refno);
   
    if(trxnData == undefined)
    {

        existAccounts["transactionlist"]=transactionarray;
        transactionarray.push(req.body);
    }
    else
    {
        trxnData.push(req.body);
        // console.log(trxnData);
        existAccounts["transactionlist"]=trxnData
    }
    saveDBData(existAccounts);
     res.send({status: 'success', msg: 'Transaction data added successfully'})
})

transactRoutes.get('/transact/gettrxnCount', (req, res) => {
    var respData;
    var array = [];
    var arraycountamt = [];
    var existAccounts = getDBData()
    item = {}
    var data = existAccounts['transactionlist'];
    approveamount = 0;
    pendingamount = 0;
    rejectedamount = 0;
    approvecount = 0;
    pendingcount = 0;
    rejectedcount = 0;
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['status'] == "Approved") {
            var xyz = data[i]["amount"]

            const myArr = xyz.split(" ");
            approveamount = parseFloat(Number(parseFloat(approveamount).toFixed(2)) + Number(parseFloat(myArr[0]).toFixed(2))).toFixed(2);
            approvecount++;

        }
        else if (data[i]['status'] == "Pending") {
            var xyz = data[i]["amount"]

            const myArr = xyz.split(" ");
            pendingamount = parseFloat(Number(parseFloat(pendingamount).toFixed(2)) + Number(parseFloat(myArr[0]).toFixed(2))).toFixed(2);

            pendingcount++;
        }
        else if (data[i]['status'] == "Rejected") {
            var xyz = data[i]["amount"]

            const myArr = xyz.split(" ");
            rejectedamount = parseFloat(Number(parseFloat(rejectedamount).toFixed(2)) + Number(parseFloat(myArr[0]).toFixed(2))).toFixed(2);

            rejectedcount++;
        }
    }
    itempending = {};
    itemapprove = {};
    itemrejected = {};
    itempending["count"] = pendingcount;
    itempending["amount"] = pendingamount;
    itemapprove["count"] = approvecount;
    itemapprove["amount"] = approveamount;
    itemrejected["count"] = rejectedcount;
    itemrejected["amount"] = rejectedamount;

    item["pending"] = itempending;
    item["rejected"] = itemrejected;
    item["approved"] = itemapprove;
    array.push(item)
    res.send(array);
})

transactRoutes.get('/transact/gettrxnlist',(req,res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    const trxnstatus = req.query.status;
    const trxndate = req.query.date;
  

    var myDatearr=trxndate.split("_")
    var apiDate=myDatearr[1]+"/"+myDatearr[0]+"/"+myDatearr[2]
    var today = new Date();

    var data = existAccounts['transactionlist'];
    for( var i=0;i < Object.keys(data).length; i++)
     {

        var recevDate = data[i]['receivedOn'];
        const date1 = new Date(apiDate);
                     const date2 = new Date(recevDate)
       compareDates(date1,date2)

        if(data[i]['status'] == trxnstatus)
        {
            var proxytype= data[i];
             if(trxndate !== "" )
             { 
                 var recevDate = data[i]['receivedOn'];
                 const date1 = new Date(apiDate);
                 const date2 = new Date(recevDate);
                 
                 if(date1.getDate() === date2.getDate()){
                    array.push(proxytype); 
                     
                 }
           }

           else
           {
            array.push(proxytype);
           }
          
        }
        else if(trxnstatus === "")
           {
            if(trxndate !== "" )
            { 
                var proxytype= data[i];
                var recevDate = data[i]['receivedOn'];
                const date1 = new Date(apiDate);
                const date2 = new Date(recevDate);
                
                if(date1.getDate() === date2.getDate()){
                   array.push(proxytype);      
                }
           }   
            else
              {
                array.push(proxytype); 
              }
        }
     }
    res.send(array);
})

transactRoutes.get('/transact/getselectedtrxndata', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    const trxnref = req.query.reference;

    // console.log(trxnref);
    var data = existAccounts['transactionlist'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['reference'] == trxnref) {
            var proxytype = data[i];
            // console.log(proxytype);
            array.push(proxytype);
        }
    }
    res.send(array);
})

transactRoutes.get('/transact/getpaymentreason', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['paymentreason'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var paymentreasondata = data[i];
        // console.log(paymentreasondata);
        array.push(paymentreasondata);
    }
    res.send(array);
})

transactRoutes.get('/transact/getpaymentmethod', (req, res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    var data = existAccounts['paymentmethods'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        var paymentmethoddata = data[i];
       // console.log(paymentmethoddata);
        array.push(paymentmethoddata);
    }
    res.send(array);
})

transactRoutes.post('/transact/approveorRejecttrxn', (req, res) => {

    var array = [];
    var existAccounts = getDBData()
    const trxnstatus = req.body['status'];
    const trxnreference = req.body['reference'];
	const userId = req.body['userId'];
    // console.log(trxnstatus);
    var data = existAccounts['transactionlist'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['reference'] == trxnreference) {
            data[i]['status'] = trxnstatus;
			data[i]['userId'] = userId;
			console.log(data[i]);
           if(trxnstatus=="Approved"){
			   console.log(data[i]);
                sendISOMessage(data[i]);
            }
            saveDBData(existAccounts);
        }
    }
    //   console.log(array);
    res.send("Transaction sucessfully " + trxnstatus);
})

transactRoutes.post('/transact/rejecttrxn', (req, res) => {

    var array = [];
    var existAccounts = getDBData()
    const trxnstatus = req.body['status'];
    const trxnreference = req.body['reference'];
    const rejectReason = req.body['rejectReason'];
    const addNotes = req.body['addNotes'];
	const userId = req.body['userId'];
    // console.log(trxnstatus);
    var data = existAccounts['transactionlist'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['reference'] == trxnreference) {
            data[i]['status'] = trxnstatus;
            data[i]['rejectReason'] = rejectReason;
            data[i]['addNotes'] = addNotes;
			data[i]['userId'] = userId;
            saveDBData(existAccounts);
        }
    }
    //   console.log(array);
    res.send("Transaction sucessfully " + trxnstatus);
})

transactRoutes.get('/transact/getdrafttrxnlist',(req,res) => {
    var respData;
    var array = [];
    var existAccounts = getDBData()
    const trxnusername = req.query.username;
    const trxndate = req.query.date;
   
var dataname= trxnusername.replace("_", ' ')
//console.log("dataname: "+dataname);

    var data = existAccounts['transactionlist'];
    for( var i=0;i < Object.keys(data).length; i++)
     {


          var recevDate = data[i]['paymentInitBy'];
         // console.log(recevDate);

          if(data[i]['status'] === "SaveDraft")
        {

            if( data[i]['paymentInitBy'] === dataname )
            {
                var trxnlistData= data[i];
                array.push(trxnlistData);
            }
            else
            {
                // return res.send("No Data Found");
            }
         
        }
        
     }

    res.send(array);
})

function getApprovedData() {

    var array = [];
    var existAccounts = getDBData()
    const trxnstatus = "Pending";
    const trxnreference = "TH000655223";
    // console.log(trxnstatus);
    var data = existAccounts['transactionlist'];
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['reference'] == trxnreference) {
            data[i]['status'] = trxnstatus;
            sendISOMessage(data[0]);
        }
    }

}

//getApprovedData();


function sendISOMessage(approvedData) {

    var existAccounts = getDBData()
    var data = existAccounts['fromaccounts'];
    var toAccountData = existAccounts['toaccounts'];

    var bankIdTemp = "";
    var fromAccountAddressTemp = "";
    var toAccountAddressTemp = "";
    var bankBicTemp = "";

    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i]['accountnumber'] == approvedData.from) {
            bankIdTemp = data[i]['bankid'];
            fromAccountAddressTemp = data[i]['bankcountry'];
            //  console.log(data[i]['accountnumber']+"|"+data[i]['beneficiaryname']+"|"+data[i]['beneficiarycode']);
        }
    }

    for (var i = 0; i < Object.keys(toAccountData).length; i++) {
        if (toAccountData[i]['accountnumber'] == approvedData.paymentTo) {
            toAccountAddressTemp = toAccountData[i]['bankcountry'];
            bankBicTemp = toAccountData[i]['bankidtype'];
            //  console.log(data[i]['accountnumber']+"|"+data[i]['beneficiaryname']+"|"+data[i]['beneficiarycode']);
        }
    }

    var fixedValue = "01";//1

    var actualAmount = approvedData.amount.toString().trim();
    var tempAmntWithDecimal = actualAmount.substr(0, actualAmount.indexOf(' '));
    var tempAmnt = tempAmntWithDecimal.replace(".", "");

    var amount = FormatNumberLength(tempAmnt, 14);//2

    var blankValueFirst = "000000000000";//3

    var sendOnActual = approvedData.sendOn.toString().trim().split("/");
    var tempSendOnDD = sendOnActual[0].toString();
    var tempSendOnMM = sendOnActual[1].toString();
    var tempSendOnYYYYWithTime = sendOnActual[2].toString();
    var tempSendOnYYYY = tempSendOnYYYYWithTime.substring(0,4);
    var sendOnDate = tempSendOnYYYY + tempSendOnMM + tempSendOnDD;//4

    var toAccountNumberFixedLength = FormatStringLength(approvedData.paymentTo.toString().trim(), 34);
    var toAccountNumbertemp = FormatNumberLength(approvedData.paymentTo.toString().trim().length, 2);
    var toAccountNumber = toAccountNumbertemp.toString() + toAccountNumberFixedLength;//5

    var bankBic = FormatStringLength(bankBicTemp.toString().trim(), 11);//6

    var fromAccountNumberFixedLength = FormatStringLength(approvedData.from.toString().trim(), 34);
    var fromAccountNumbertemp = FormatNumberLength(approvedData.from.toString().trim().length, 2);
    var fromAccountNumber = fromAccountNumbertemp.toString() + fromAccountNumberFixedLength;//7

    var defaultValue = "OUR";//8

    var blankValueSecond = "000000000000000000";//9
    var blankValueThird = "000000000000000000";//10
    var blankValueFourth = "000000000000000000";//11
    var blankValueFifth = "000000000000000000";//12

    var currency = "840";//13

    var paymentMethodFixedLength = FormatStringLength(approvedData.paymentType.toString().trim(), 10);
    var paymentMethod = paymentMethodFixedLength;//14

    var paymentReasonFixedLength = FormatStringLength(approvedData.paymentReason.toString().trim(), 35);
    var paymentReason = paymentReasonFixedLength;//15

    var blankSpace = " ";//16

    var referenceNumberFixedLength = FormatStringLength(approvedData.reference.toString().trim(), 31);
    var referenceNumbertemp = FormatNumberLength(approvedData.reference.toString().trim().length, 3);
    var referenceNumber = referenceNumbertemp.toString() + referenceNumberFixedLength;//17

    var bankIdFixedLength = FormatStringLength(bankIdTemp.toString().trim(), 11);
    var bankIdLength = FormatNumberLength(bankIdTemp.toString().trim().length, 2);
    var bankId = bankIdLength.toString() + bankIdFixedLength;//18

    var fromAccountNameFixedLength = FormatStringLength(approvedData.paymentFromAccName.toString().trim(), 40);
    var fromAccountNametemp = FormatNumberLength(approvedData.paymentFromAccName.toString().trim().length, 2);
    var fromAccountName = fromAccountNametemp.toString() + fromAccountNameFixedLength;//19

    var fromAccountAddressFixedLength = FormatStringLength(fromAccountAddressTemp.toString().trim(), 40);
    var fromAccountAddressLength = FormatNumberLength(fromAccountAddressTemp.toString().trim().length, 2);
    var fromAccountAddress = fromAccountAddressLength.toString() + fromAccountAddressFixedLength;//20

    var toAccountNameFixedLength = FormatStringLength(approvedData.paymentToAccName.toString().trim(), 40);
    var toAccountNametemp = FormatNumberLength(approvedData.paymentToAccName.toString().trim().length, 2);//21
    var toAccountName = toAccountNametemp.toString() + toAccountNameFixedLength;

    var toAccountAddress = FormatStringLength(toAccountAddressTemp.toString().trim(), 40);
    var toAccountAddressLength = FormatNumberLength(toAccountAddressTemp.toString().trim().length, 2);
    var toAccountAddress = toAccountAddressLength.toString() + toAccountAddress;//22

    var blankValueSixth = "000000000000000000";//23
    var remittanceInformation = "CINV";//24

    var isoString = [];
    isoString.push(fixedValue);
    isoString.push(amount);
    isoString.push(blankValueFirst);
    isoString.push(sendOnDate);
    isoString.push(toAccountNumber);
    isoString.push(bankBic);
    isoString.push(fromAccountNumber);
    isoString.push(defaultValue);
    isoString.push(blankValueSecond);
    isoString.push(blankValueThird);
    isoString.push(blankValueFourth);
    isoString.push(blankValueFifth);
    isoString.push(currency);
    isoString.push(paymentMethod);
    isoString.push(paymentReason);
    isoString.push(blankSpace);
    isoString.push(referenceNumber);
    isoString.push(bankId);
    isoString.push(fromAccountName);
    isoString.push(fromAccountAddress);
    isoString.push(toAccountName);
    isoString.push(toAccountAddress);
    isoString.push(blankValueSixth);
    isoString.push(remittanceInformation);


    for (var i in approvedData.invoice) {
        var invoiceNumberFixedLength = FormatStringLength(approvedData.invoice[i].invoiceNumber.toString().trim(), 31);
        var invoiceNumberTemp = approvedData.invoice[i].invoiceNumber;
        var invoiceNumberLength = FormatNumberLength(invoiceNumberTemp.toString().trim().length, 3);
        var invoiceNumber = invoiceNumberLength.toString() + invoiceNumberFixedLength;//25

        var invoiceAmountTemp = approvedData.invoice[i].invoiceAmount.toString();
        var invoiceAmountWithoutDecimal = invoiceAmountTemp.replace(".", "");
        var invoiceAmount = FormatNumberLength(invoiceAmountWithoutDecimal, 18); 26

        var invoiceCurrency = "840";//27

        var invoiceDateTemp = approvedData.invoice[i].invoiceDate.toString();
        var invoiceDateActual = invoiceDateTemp.trim().split("/");
        var invoiceDateDD = invoiceDateActual[0].toString();
        var invoiceDateMM = invoiceDateActual[1].toString();
        var invoiceDateYYYY = invoiceDateActual[2].toString();
        var invoiceDate = invoiceDateYYYY + invoiceDateMM + invoiceDateDD;//28

        var tempDiscountRate = approvedData.invoice[i].discountRate.toString().trim();
        var discountRate = FormatNumberLength(tempDiscountRate, 2);//29

        var TempDiscountAmountDecimal = approvedData.invoice[i].discountAmount.toString();

        var TempDiscountAmount = TempDiscountAmountDecimal.replace(".", "");
        var discountAmount = FormatNumberLength(TempDiscountAmountDecimal, 18);//30

        var tempTaxAmountDecimal = approvedData.invoice[i].taxAmount.toString().trim();

        var tempTaxAmount = tempTaxAmountDecimal.replace(".", "");
        var taxAmount = FormatNumberLength(tempTaxAmount, 18);//31

        var tempNetPayableDecimal = approvedData.invoice[i].netPayable.toString().trim();

        var tempNetPayable = tempNetPayableDecimal.replace(".", "");
        var netPayble = FormatNumberLength(tempNetPayable, 18);//32

        isoString.push(invoiceNumber);
        isoString.push(invoiceAmount);
        isoString.push(invoiceCurrency);
        isoString.push(invoiceDate);
        isoString.push(discountRate);
        isoString.push(discountAmount);
        isoString.push(taxAmount);
        isoString.push(netPayble);

      //  console.log(invoiceNumber + "|" + invoiceAmount + "|" + currency + "|" + invoiceDate + "|" + discountRate + "|" + discountAmount + "|" + taxAmount + "|" + netPayble);
    }

    var actualIso = isoString.toString().replace(/,/g,"");
	var IsoStr = removeDots(actualIso);
    console.log("Value of ISO : "+IsoStr);
    sendToServer(IsoStr);
}

function removeDots(_string){
    let dummyString = String(_string);
    let finalString =''
    for( let i = 0; i < dummyString.length; i++){
        if(!(dummyString.charAt(i) === ".") ){
            finalString = finalString + dummyString.charAt(i);
        }
    }
    return finalString;
  }

function sendToServer(isoData){
    var client = new net.Socket();
    client.connect(3001, '10.10.10.198', function() {
        console.log('Connected');
        client.write(isoData);
        console.log('Sending : '+isoData);
    });
    
    client.on('data', function(data) {
        console.log("Received: " + data);
        client.destroy();
    });
    
    client.on('close', function() {
        console.log('Connection closed');
    });
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    // console.log(r);
    return r;
}

function FormatStringLength(stringValue, length) {

    var actualVal = stringValue;
    if (stringValue.length > length) {
        var res = str.substring(0, length);
    }
    return actualVal;
}

function FormatStringLength(stringValue, length) {

    var actualVal = stringValue;
    if (stringValue.length > length) {
        actualVal = stringValue.substring(0, length);
    }
    return actualVal;
}

module.exports = transactRoutes