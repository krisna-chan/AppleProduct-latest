const buttons = document.querySelectorAll('#iphone, #iwatch, #mac, #ipad, #android, #recycle');
const contents = document.querySelectorAll('#iphone-content, #iwatch-content, #mac-content, #ipad-content, #android-content, #refund-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(button.id + '-content').classList.remove('hidden');
  });
});




