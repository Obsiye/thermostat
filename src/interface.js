$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#increase').click( function() {
    thermostat.up();
    updateTemperature();
  });

  $('#decrease').click( function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click( function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click( function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#psm-off').click( function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };


  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    dataType: "JSON",
    data: {
      id: "2643743",
      units: "metric",
      APPID: "81e2f5088f4d06b3466d354016c026a9"
    },
    success: function (data) {
      alert(data.main.temp);
    },
    error: function (data, textStatus, errorThrown) {
      //Do Something to handle error
      alert(textStatus);
    }
  });

  // london id 2643743

  // api.openweathermap.org server name

  // Api key 81e2f5088f4d06b3466d354016c026a9

  
});
