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

  function refreshTemperature() {
    $("#temperature").text(thermostat.getCurrentTemperature() + " °C");
    $("#temperature").attr('class', thermostat.energyUsage());
  }

  function refreshPowerSavingMode() {
    $("#psm-status").text(thermostat.isPowerSavingOn() ? "ON" : "OFF");
  }
})