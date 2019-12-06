import _ from 'lodash';
import '../sass/styles.scss';
import homeImage from '../images/lhfs-home.png';

function component() {
    let homeImg = document.getElementById('lhfs-home');
    homeImg.style.backgroundImage = 'url('+homeImage+')';

//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   return element;
}

document.body.appendChild(component());