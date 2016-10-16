//Get ip
var localIp=returnCitySN["cip"];
//weather icon
var arr=[{'«Á':'wi-day-sunny'},{'“ı':'wi-cloud'},{'∂‡‘∆':'wi-cloudy'},{'«Á◊™∂‡‘∆':'wi-day-cloudy'},{'–°”Í':'wi-rain'},{'÷–”Í':'wi-rain'},{'¥Û”Í':'wi-rain'},{'’Û”Í':'wi-showers'},{'¿◊’Û”Í':'wi-showers'},{'–°—©':'wi-snow'},{'÷–—©':'wi-snow'},{'¥Û—©':'wi-snow'}];
//get local weather
function getWeather(ip){
    var api='http://v.juhe.cn/weather/ip?callback=?';
    $.getJSON(api,{
        "format":2,
        "ip":ip,
        "dtype":"jsonp",
        "key":"80bb3275a113165130584ceeb04792a1"
    },weather);

    function weather(data){
        var today=data.result.today;
        var sk=data.result.sk;
        var future=data.result.future;
        future.splice(0,1);

        var tWea=$('.today-weather');
        var fWea=$('.future-weather');

        tWea.find('.city').html(today.city);
        tWea.find('.temp span').html(sk.temp);
        tWea.find('.week').html(today.week);
        tWea.find('.weather-con').html(today.weather);

        var html='';
        var fRow=fWea.find('.row');
        future.forEach(function(val){
            html+='<div class="col-md-2 col-sm-4 col-xs-6 text-center"><p class="weather-con">'+val.weather+'</p><p class="text-center weather-icon"><i class="wi"></i></p> <p class="temp">'+val.temperature+'</p> <p class="week">'+val.week+'</p></div>';
        });
        fRow.html(html);

        var con=$('.weather-con');
        con.each(function(){
            var that=$(this);
            var flag=0;
            for(var i=0;i<arr.length;i++) {
                if (arr[i].hasOwnProperty(that.text())) {
                    that.next().find('.wi').addClass(arr[i][that.text()]);
                    flag=1;
                }
            }
            if(flag===0){ that.next().find('.wi').addClass(arr[4]["–°”Í"]);}
        });
    }
}
$(function(){
    getWeather(localIp);
});