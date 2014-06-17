// patch for: /SISEWeb/module/sise/teaching_material/index.jsp
!(function (siseme) {

  siseme.func('show', function(source) {
    return source.replace(/document\.forms\((.+?)\)/ig, 'document.forms[$1]')
  })

})(window.siseme)
