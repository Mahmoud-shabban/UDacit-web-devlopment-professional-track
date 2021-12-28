/* Global Variables */
// base url to the web api
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
// my api key and units in  degree celsius 
const apiKey = ",&appid=665b58ddd08f059ba604354298cc064e&units=metric";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();;

// function to get the api response data data
const getWeather =  async function (zip){

    try{
        const response = await fetch(baseUrl + zip + apiKey);
        const data = await response.json();

        if (data.cod != 200) {
            return alert(data.message);
        };
        //console.log(data);

        return data;
    }catch (error){
        console.log(error);
    }
};


// function to post data to my local server
const postData =  async function(url = '', info = {}){
    const response = await fetch(url,{
        method : "POST",
        headers: {
           'Content-Type' : 'application/json',
        },
        body: JSON.stringify(info),
    });
    try{
        const newData = await response.json();
        return newData;
    } catch(error){
        console.log(error);
    }
};

// function to show the data in front end UI

const updateUI = async function(){
    const response = await fetch('http://localhost:3000' + '/all');
    try{
        const finalData = await response.json();
        document.getElementById('temp').innerHTML = 'Today weather temperature Is: '+finalData.temp;
        document.getElementById('content').innerHTML = 'You feel like: ' + finalData.feeling;
        document.getElementById('date').innerHTML = 'Today Is: ' + finalData.date;
    } catch(error){
        console.log(error);
    }
};


// function to generate data
function generate(){
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    getWeather(zip).then(function(data){
        if (data){
            temp = data.list[0].main.temp + ' deg C' ; 
            

            const info = {
                temp: temp,
                feeling : feeling ,
                date : newDate,
            };

            postData('http://localhost:3000' + '/add',info);
            updateUI();
            document.getElementById('entryHolder');
        };
    }) 
    

};

// event listener
document.getElementById('generate').addEventListener('click',generate);