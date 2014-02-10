if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};

RedactorPlugins.a2x = {
    init: function()
    {
        this.addQuoteBtn();
    },
    addQuoteBtn: function() {
      var callback = $.proxy(function() {
        $('#redactor_modal #a2x_insert_quote').click($.proxy(function()
          {
            var quote = $('#a2xquote').val();
            var author = $('#a2xauthor').val();
            var link = $('#a2xlink').val();
            var html = '';
            if (quote.length > 0) {
              if(author.length > 0) {
                html = this.quote_src;
                html = html.replace('%quote%', quote);
                html = html.replace('%author%', author);

                if (link.length > 0) {
                  html = html.replace('%link%', link);
                } else {
                  html = html.replace('%link%', '#');
                }
              } else {
                html = this.quote_src_without_footer;
                html = html.replace('%quote%', quote);
              }
              this.$editor.focus();
              this.restoreSelection();
              this.syncCode();
              this.execCommand('inserthtml', html);
              this.modalClose();
            };
            return false;
          }, this));
        }, this);

        this.addBtn('a2xquote', 'Insert Quote', $.proxy(function()
        {
          this.saveSelection();
          this.modalInit('Inserting quote', this.modal_quote, 500, callback);
        }, this));
    },
    modal_quote: String() +
      '<div id="redactor_modal_content">' +
      '' +
        '<label>Author</label>' +
        '<input type="text" id="a2xauthor" class="redactor_input" />' +
        '<label>Url (optional)</label>' +
        '<input type="text" id="a2xlink" class="redactor_input" />' +
        '<label>Quote</label>' +
        '<textarea id="a2xquote" cols="60" style="min-height: 80px;"></textarea>' +
      '<br>' +
      '</div>' +
      '<div id="redactor_modal_footer">' +
        '<a href="javascript:void(null);" class="redactor_modal_btn redactor_btn_modal_close">' + 'Close' + '</a>' +
        '<input type="button" class="redactor_modal_btn" id="a2x_insert_quote" value="' + 'Insert' + '" />' +
      '</div>',
    quote_src: String() +
    '<blockquote>' +
    '%quote%' +
    '<footer>' +
      '<a href="%link%" target="_blank">%author%</a>' +
    '</footer>' +
    '</blockquote>',
    quote_src_without_footer: String() +
    '<blockquote>' +
    '%quote%' +
    '</blockquote>'
}