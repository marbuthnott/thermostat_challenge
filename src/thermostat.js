var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_POWER_SAVING_TEMPERATURE = 25
  this.power_saving = true
  this.MAXIMUM_TEMPERATURE = 32
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.togglePowerSavingMode = function() {
    this.power_saving = !this.power_saving;
  };

  Thermostat.prototype.isPowerSavingOn = function(){
    return this.power_saving;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    else if (this.temperature < this.MAXIMUM_POWER_SAVING_TEMPERATURE) {
      return 'medium-usage';
    }
    return 'high-usage';
  };

  Thermostat.prototype.reset = function(){
    return this.temperature = 20;
  };

  Thermostat.prototype.isMiniumTemperature = function(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumPowerSavingTemp = function(){
    return this.temperature === this.MAXIMUM_POWER_SAVING_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumTemperature = function(){
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  };

  Thermostat.prototype.up = function(){
    if (this.isMaximumPowerSavingTemp() && this.isPowerSavingOn() === true){
      return;
    }
    else if (this.isMaximumTemperature()){
      return;
    }
    return this.temperature++;

  };

  Thermostat.prototype.down = function(){
    if (this.isMiniumTemperature()){
      return;
    }
    return this.temperature--;
  };


