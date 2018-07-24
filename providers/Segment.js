const { ServiceProvider, ioc } = require('@adonisjs/fold');
const Analytics = require('analytics-node');

class SegmentProvider extends ServiceProvider {
  register () {
    const Config = this.app.use('Adonis/Src/Config');
    this.app.singleton('Avonian/Segment', () => {
      return new Analytics(Config.get('segment.writeKey'));
    });
  }

  boot () {
    ioc.alias('Segment', 'Avonian/Segment');
  }
}

module.exports = SegmentProvider