import React from 'react';
import App2 from './App';
// import * as serviceWorker from './serviceWorker';

// import '../static/assets/themify-icon/themify-icons.css';
// import '../static/assets/simple-line-icon/simple-line-icons.css';
// import '../static/assets/elagent/style.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../static/assets/animate.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../static/assets/main.css';
// import '../static/assets/responsive.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import '../static/assets/coreui-icons-master/css/free.min.css'
// import '../static/assets/coreui-icons-master/css/brand.min.css'

// if (typeof window !== "undefined") {
//   require("bootstrap/dist/css/bootstrap.min.css");
//   require("bootstrap/dist/js/bootstrap.min.js");
// }


// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import reducer from '../components/redux/reducers';

// const loader = document.querySelector('#preloader');

// // if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove('loader--hide');

// const hideLoader = () => loader.classList.add('loader--hide');


// setTimeout(() => 
//   // the show/hide functions are passed as props
//   ReactDOM.render(
//     <App
//       hideLoader={hideLoader}
//       showLoader={showLoader} 
//       />,
//     document.getElementById('root')
//   )
// , 0);


// const store = createStore(
//   reducer
// );

// store.subscribe(() => console.log(store.getState()))


// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



class App extends React.Component {
  render() {
    return (
      <div>
        <App2/>
      </div>
    );
  }
}

export default App;