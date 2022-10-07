import TestHeader from './TestHeader.vue'

export default {
  title: 'molecules/TestHeader',
  component: TestHeader,
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TestHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { user: args.user }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<TestHeader :user="user" />',
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: null,
}
