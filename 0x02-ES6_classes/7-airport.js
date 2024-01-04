// 7-airport.js

class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}

export default Airport;
