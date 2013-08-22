
describe("x-tag events", function () {

  it('tap should tap', function(){

    var tap = document.getElementById('tap');
        tapped = false;

    xtag.addEvent(tap, 'tap', function(){
      tapped = true;
    });

    waitsFor(function (){
      return tapped;
    }, "waiting for tap event to fire", 1000);

    xtag.fireEvent(tap,'tap');

    runs(function (){
      expect(tapped).toEqual(true);
    });

  });

});
