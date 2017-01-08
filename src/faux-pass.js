import $ from 'jquery';
import faker from 'faker';
import keycode from 'keycode';

/*
 * On page load: Begin filling out forms
 */
$(() => {
  let targetForm = $('form').first();
  if (targetForm) {
    console.log('begin the filling');
    fillForm(targetForm);
  } else {
    console.log('nothing to fill!');
  }
});


function fillForm ($form) {
  if (!$form) {
    return;
  }

  let targetElement = $('input').first();
  let index = targetElement.index();
  while (targetElement && index > -1) {
    switch ($(targetElement).attr('type')) {
      case 'text':
      case 'email':
      case 'search':
      case 'password':
        fillText(faker.lorem.words(), $(targetElement));
      case 'hidden':
      default:
        break;
    }
    index += 1;
    targetElement = $('input').get(index);
  }
  console.log('done!!');
}

function fillText (text, el) {
  emulateKeys(text, el, 0);
}

async function emulateKeys(text, el, index) {
  console.log(index, text.length);
  if (-1 < index && index < text.length) {
    let wait = Math.floor(Math.random() * 100);
    let e = $.Event('keypress', { keyCode: keycode(text.charAt(index++)) });
    await sleep(wait);
    el.trigger('click', function () { // This doesn't work...
      emulateKeys(text, el, index);
    });
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
