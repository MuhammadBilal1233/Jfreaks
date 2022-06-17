
function IPGEO1() {
    try{
    document.getElementById("tabledata").id = "tabledata1"
}
catch{
    let q=2
}
    ip1 = document.getElementById("ipgeo").value
    api = "7c0ba997e81442a1af198040b9ae3253"
    url = "https://api.ipgeolocation.io/ipgeo?apiKey=" + api + "&ip=" + ip1
    fetch(url).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        document.getElementById("1").innerHTML = data.ip
        document.getElementById("2").innerHTML = data.continent_code
        document.getElementById("3").innerHTML = data.continent_name
        document.getElementById("4").innerHTML = data.country_code3
        document.getElementById("5").innerHTML = data.country_name
        document.getElementById("6").innerHTML = data.district
        document.getElementById("7").innerHTML = data.latitude
        document.getElementById("8").innerHTML = data.longitude
        document.getElementById("9").innerHTML = data.is_eu
        document.getElementById("10").innerHTML = data.calling_code
        document.getElementById("11").innerHTML = data.country_tld
        document.getElementById("12").innerHTML = data.languages
        document.getElementById("13").innerHTML = data.geoname_id
        document.getElementById("14").innerHTML = data.isp
        document.getElementById("15").innerHTML = data.organization
        document.getElementById("16").innerHTML = data.currency.code
        document.getElementById("17").innerHTML = data.currency.name
        document.getElementById("18").innerHTML = data.currency.symbol
        document.getElementById("19").innerHTML = data.time_zone.name
        document.getElementById("20").innerHTML = data.time_zone.offset
        document.getElementById("21").innerHTML = data.time_zone.current_time
        document.getElementById("22").innerHTML = data.country_capital
    })
}

function CurrencyFreaks(){
    unit = "";
    try{
        document.getElementById("tabledata2").id = "tabledata3"
    }
    catch{
        let r=2
    }
    ip1 = document.getElementById("currencyfreaks").value
    api = "7c0ba997e81442a1af198040b9ae3253"
    url = "https://api.ipgeolocation.io/ipgeo?apiKey=" + api + "&ip=" + ip1
    fetch(url).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        document.getElementById("100").innerHTML = data.country_name
        document.getElementById("101").innerHTML = data.district
        document.getElementById("102").innerHTML = data.currency.code
        document.getElementById("103").innerHTML = data.currency.name
        document.getElementById("104").innerHTML = data.currency.symbol
    })
}

//ipgeodata
//