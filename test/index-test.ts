import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import DefaultPackager from "../src/index";

@suite("Default Packager")
export class DefaultPackagerTests {
  @test
  works() {
    let defaultPackager = new DefaultPackager();

    assert.isDefined(defaultPackager);
  }
}
