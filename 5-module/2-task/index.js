function toggleText() {

    const $text = document.querySelector('#text')
    const $btn = document.querySelector('.toggle-text-button')
  
    $btn.addEventListener('click', hideTxt)
    function hideTxt() {
      console.log('hide');
      if ($text.hasAttribute('hidden')) {
        return $text.removeAttribute('hidden')
      } else {
        return $text.hidden = 'true'
    
        }

    }

}
