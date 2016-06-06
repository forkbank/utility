describe('测试工具集', function() {
  it('each',function(){
    expect(each).toBeTruthy();
  })

  it('map', function(){
    expect(map).toBeTruthy();
  })

  it('type', function(){
    expect(type).toBeTruthy();
    expect(type(new Object)).toBe('object');
    expect(type({})).toBe('object');
    expect(type(new Array)).toBe('array')
    expect(type([])).toBe('array')
    expect(type(new Boolean)).toBe('boolean')
    expect(type(true)).toBe('boolean')
    expect(type(new Date)).toBe('date')
    expect(type(new Error)).toBe('error')
    expect(type(new Function)).toBe('function')
    expect(type(function(){})).toBe('function')
    expect(type(new Number)).toBe('number')
    expect(type(123)).toBe('number')
    expect(type(new String)).toBe('string')
    expect(type('hello world')).toBe('string')
    expect(type("hello world")).toBe('string')
    expect(type("")).toBe('string')
    expect(type(undefined)).toBe('undefined')
    expect(type(null)).toBe('null')
    // expect(type(new Symbol)).toBe('symbol')
  })
});