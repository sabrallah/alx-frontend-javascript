class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Cast the object to a number by returning the size
  valueOf() {
    return this._size;
  }

  // Cast the object to a string by returning the location
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
