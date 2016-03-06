import './styles.scss';
import Button from './components/button/button';
import Header from './components/header/header';

const button = new Button('mypage.com');
button.render('a');

new Header().render('h1');

// import $ from 'jquery';

// If we have an anchor, render the Button component on it
// if (document.querySelectorAll('a').length) {
//     require.ensure([], () => {
//         const Button = require('./Components/Button');
//         const button = new Button('google.com');

//         button.render('a');
//     });
// }

// // If we have a title, render the Header component on it
// if (document.querySelectorAll('h1').length) {
//     require.ensure([], () => {
//         const Header = require('./Components/Header');

//         new Header().render('h1');
//     });
// }
