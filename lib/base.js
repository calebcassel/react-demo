$(function() {
    // Show source code
    var codeEl = $('#code');
    if(codeEl.length > 0) {
        $.SyntaxHighlighter.init({
            prettifyBaseUrl: 'lib/syntax/prettify',
            baseUrl: 'lib/syntax'
        });

        var code = codeEl.text().replace(/\t/g, '    ');

        var pre = $('<pre></pre>');
        pre.addClass('language-javascript').text(code).hide();

        var container = $('<div><br/></div>');
        container.append(pre);

        var showButton =  $('<button class="btn">Show Source</button>');
        var showContainer = $('<div class="show-source text-center"></div>');
        $('.container-fluid').append(showContainer.append(showButton));
        showButton.on('click', function() {
            pre.show();
            showButton.hide();
        });

        $('.container-fluid').append(container);
        pre.syntaxHighlight();
    }

    // Show nav
    var pages = 8;
    var nav = $('<ul class="nav nav-pills"></ul>');

    if(currentPage > 1) {
        nav.append($('<li><a href="part' + (currentPage-1) + '.html">&laquo; Prev</a></li>'));
    }

    for(var i = 1; i <= pages; i++) {
        var active = (i == currentPage) ? ' class="active"' : '';
        nav.append('<li' + active + '><a href="part' + i + '.html">' + i + '</a></li>');
    }

    if(currentPage < pages) {
        nav.append($('<li><a href="part' + (currentPage+1) + '.html">Next &raquo;</a></li>'));
    }

    $('.container-fluid').prepend(nav);
});