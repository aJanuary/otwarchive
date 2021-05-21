tinymce.PluginManager.add('preservehtml', function (editor, url) {
  editor.on('PreInit', function() {
    editor.parser.addAttributeFilter('data-preserve-html', (nodes) => {
      var i = nodes.length, node;
      
      while (i--) {
        node = nodes[i];
        if (node.attr('data-preserve-html') == 'true') {
          node.attr('contenteditable', 'false');
        }
      }
    });
  });

  return {
    getMetadata: function () {
      return {
        name: 'Preserve HTML',
      };
    }
  }
});
