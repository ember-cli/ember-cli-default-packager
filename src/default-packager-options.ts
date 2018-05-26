// tslint:disable-next-line:no-implicit-dependencies
import { BroccoliTree } from "broccoli";
// tslint:disable-next-line:no-implicit-dependencies
import { EmberApp, EmberProject, Registry } from "ember-cli";

/**
 * Options for packager.
 *
 * The need to mark every field as optional feels like a hack but specifying
 * all the options every time is a major pain in tests.
 */
export interface DefaultPackagerOptions {
  /**
   * An instance of Ember CLI Application
   */
  app?: EmberApp;
  /**
   * Application's environment
   *
   * Possible values: `test`, `development`, `production`
   */
  env?: string;
  /**
   * The name of the application.
   */
  name?: string;
  /**
   * An instance of Ember CLI Project
   */
  project?: EmberProject;
  /**
   * A registry of preprocessors that are used by Ember CLI
   *
   * More info: https://git.io/vhqSg
   */
  registry?: Registry;
  sourcemaps?: {
    enabled: boolean;
    extensions: string[];
  };
  minifyCSS?: {
    enabled: boolean;
    options: {
      processImport: boolean;
      relativeTo: string;
    };
  };
  areTestsEnabled?: boolean;
  styleOutputFiles?: Map<string, string[]>;
  scriptOutputFiles?: Map<string, string[]>;
  autoRun?: boolean;
  fingreprint?: {
    extensions: string[];
    prepend: string;
    enabled: boolean;
    exclude: string[];
    replaceExtensions: string[];
  };
  customTransformsMap?: Map<
    string,
    {
      files: string[];
      options: {};
      callback: (
        tree: BroccoliTree,
        options: Map<string, { as: string }>
      ) => void;
      processOptions: (
        assetPath: string,
        entry: { as: string; transformation: string },
        options: any
      ) => void;
    }
  >;
  storeConfigInMeta?: boolean;
  isModuleUnificationEnabled?: boolean;
  additionalAssetPaths?: Array<{ src: string; file: string; dest: string }>;
  vendorTestStaticStyles?: string[];
  legacyTestFilesToAppend?: string[];
  distPaths?: {
    appJsFile: string;
    appCssFile: {
      app: string;
    };
    testJsFile: string;
    appHtmlFile: string;
    vendorJsFile: string;
    vendorCssFile: string;
    testSupportJsFile: {
      testSupport: string;
      testLoader: string;
    };
    testSupportCssFile: string;
  };
}
