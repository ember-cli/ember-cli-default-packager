import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import DefaultPackager from "../src/index";
import { DefaultPackagerOptions } from "./default-packager-options";

@suite("Default Packager")
export class DefaultPackagerTests {
  @test
  works() {
    let options: DefaultPackagerOptions = {};
    let defaultPackager = new DefaultPackager(options);

    assert.isDefined(defaultPackager);
  }
}
