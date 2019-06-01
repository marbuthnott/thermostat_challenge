$(document).ready(function() {
  var thermostat = new Thermostat();

  refreshPowerSavingMode();
  refreshTemperature();

  $('#temp-up').on('click', function() {
    thermostat.up();
    refreshTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    refreshTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermostat.reset();
    refreshTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermostat.reset();
    refreshTemperature();
  });

  $("#psm-toggle").on('click', function() {
    thermostat.togglePowerSavingMode();
    refreshPowerSavingMode();
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function(event) {
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function refreshTemperature() {
    $("#temperature").text(thermostat.getCurrentTemperature() + " °C");
    $("#temperature").attr('class', thermostat.energyUsage());
  }

  function refreshPowerSavingMode() {
    $("#psm-status").text(thermostat.isPowerSavingOn() ? "ON" : "OFF");
  }
})