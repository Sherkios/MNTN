export default class ActiveClass {
  _active = false
  constructor ({element, active = true, className = 'active'}) {
    this._className = className;
    if (element.nodeType == 1) {
      this._element = element;      
    } else {
      this._element = document.querySelector(element);
    }
    this._setActive(active);
    this._setClass();
  }

  _setActive(value) {
    this._active = value
  }

  _setClass() {
    if (this._active) {
      this._element.classList.add(this._className)
    } else {
      this._element.classList.remove(this._className)
    }
  }

  get active() {
    return this._active;
  }
  get element() {
    return this._element;
  }

  set active (value) {
    if (typeof value != "boolean") {
      this._active = false;
      return
    }
    this._active = value;
    this._setClass();
  }
}