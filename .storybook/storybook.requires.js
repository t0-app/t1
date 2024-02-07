/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./src/screens",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/screens(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return {
    "./src/components/Base/index.stories.tsx": require("../src/components/Base/index.stories.tsx"),
    "./src/components/Button/index.stories.tsx": require("../src/components/Button/index.stories.tsx"),
    "./src/components/ButtonIcon/index.stories.tsx": require("../src/components/ButtonIcon/index.stories.tsx"),
    "./src/components/Card/index.stories.tsx": require("../src/components/Card/index.stories.tsx"),
    "./src/components/Icon/index.stories.tsx": require("../src/components/Icon/index.stories.tsx"),
    "./src/components/LocationCell/index.stories.tsx": require("../src/components/LocationCell/index.stories.tsx"),
    "./src/components/style/index.stories.tsx": require("../src/components/style/index.stories.tsx"),
    "./src/screens/base/index.stories.tsx": require("../src/screens/base/index.stories.tsx"),
    "./src/screens/character/index.stories.tsx": require("../src/screens/character/index.stories.tsx"),
    "./src/screens/characters/index.stories.tsx": require("../src/screens/characters/index.stories.tsx"),
    "./src/screens/launch/index.stories.tsx": require("../src/screens/launch/index.stories.tsx"),
    "./src/screens/locations/index.stories.tsx": require("../src/screens/locations/index.stories.tsx"),
    "./src/screens/profile/index.stories.tsx": require("../src/screens/profile/index.stories.tsx"),
  };
};

configure(getStories, module, false);
