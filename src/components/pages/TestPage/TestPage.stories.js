import TestPage from './TestPage.vue'
import * as HeaderStories from '@/components/molcules/TestHeader/TestHeader.stories'

export default {
  title: 'pages/TestPage',
  component: TestPage,
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TestPage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user }
  },
  // Then, those values can be accessed directly in the template
  template: '<TestPage :user="user" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
