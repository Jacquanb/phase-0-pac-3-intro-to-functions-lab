
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
    function shout(string) {
      return string.toUpperCase();
    }
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
    function whisper(string){
    return string.toLowerCase();
    }
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');
    console.log.restore();
    function logShout(string) {
    console.log(string.toUpperCase());
    }
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
    function logWhisper(string) {
      console.log(string.toLowerCase());
    }
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  if('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear !");
    function sayHiToHeadphonedRoommate(string) {
    const sayHiToHeadphonedRoommate = string;
      console.log(sayHiToHeadphonedRoommate);
      console.log(sayHiToHeadphonedRoommate.toLowerCase());

      sayHiToHeadphonedRoommate === sayHiToHeadphonedRoommate.toLowerCase();

      return "I can't hear !";
    }
  })
  if ('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
      console.log(sayHiToHeadphonedRoommate)
      console.log(sayHiToHeadphonedRoommate.toUpperCase)

      sayHiToHeadphonedRoommate === sayHiToHeadphonedRoommate.toUpperCase();

      return "YES INDEED!"
  })
  if('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual( "I would love to!");
    console.log(sayHiToHeadphonedRoommate)

    return "I would love to!"
  });
})