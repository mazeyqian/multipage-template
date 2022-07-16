import './font.css';
// import { createApp, defineComponent } from 'vue';
import { createApp } from 'vue';
// import the root component App from a single-file component.
// import App from './App.vue';
// const App1 = defineComponent({
//   // type inference enabled
//   // template: `
//   //   <div id="test-app">
//   //     <span>{{ FirstName }}</span>
//   //   </div>
//   // `,
//   // props: {
//   //   name: String,
//   //   msg: { type: String, required: true }
//   // },
//   data () {
//     return {
//       count: 1,
//       FirstName: 'm',
//     };
//   },
//   mounted () {
//     // this.name; // type: string | undefined
//     // this.msg; // type: string
//     // this.count; // type: number
//     this.FirstName = 'Mazey';
//     console.log('_ mounted', this.FirstName);
//   },
// });

// console.log('_ App1', App1);

// const App2 = ;

// console.log('_ App2', App2);

const app = createApp({
  // template: `<div id="test-app">
  //     <span>{{ FirstName }}</span>
  //   </div>`,
  data () {
    return {
      message: 'Hello World!',
      isRed: true,
      color: 'green',
      FirstName: 'm'
    };
  },
  methods: {
    toggleRed () {
      this.isRed = !this.isRed;
    },
    toggleColor () {
      this.color = this.color === 'green' ? 'blue' : 'green';
    }
  },
  mounted () {
    // this.name; // type: string | undefined
    // this.msg; // type: string
    // this.count; // type: number
    this.FirstName = 'Mazey';
    console.log('_ mounted', this.FirstName);
  },
  destroyed () {
    console.log('_ destroyed');
  }
});

app.mount('#app');
