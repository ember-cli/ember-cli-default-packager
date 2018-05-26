import { DefaultPackagerOptions } from "./default-packager-options";

export default class DefaultPackager {
  private _options: DefaultPackagerOptions;

  get options() {
    return this._options;
  }

  constructor(options: DefaultPackagerOptions) {
    this._options = options;
  }
}
