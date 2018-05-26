import { BroccoliTree } from "broccoli";

/*
 * this needs to be revisited, but is fine for now.
*/
declare module "ember-cli" {
  export interface EmberApp {
    name: string;
    env: string;
    registry: Registry;
  }

  export interface EmberProject {}

  export interface Plugin {
    constructor(name: string, ext: string, options: {
      registry: Registry;
      applicationName: string;
      toTree: (tree: BroccoliTree) => BroccoliTree;
    }): Plugin;
    name: string;
    ext: string;
    registry: Registry;
    applicationName: string;
    toTree?: (tree: BroccoliTree) => BroccoliTree;
    getExt: (inputTreeRoot: string, inputPath: string, filename: string) => string;
    options: {
      registry: Registry;
      applicationName: string;
      toTree?: (tree: BroccoliTree) => BroccoliTree;
    }
  }

  export interface Registry {
    registry: {
      js: Plugin[];
      css: Plugin[];
      'minify-css': Plugin[];
      template: Plugin[];
    };
    instantiatedPlugins: Plugin[];
    availablePlugins: Plugin[];
    app: EmberApp;
    extensionsForType: (type: string) => string[];
    load: (type: string) => Plugin[];
    registeredForType: (type: string) => Plugin[];
    add: (type: string, name: string, extension: string, options: { app: EmberApp, applicationName: string }) => void;
    remove: (type: string, name?: string) => void;
  }
}
