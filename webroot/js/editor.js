$(function() {

    function markdownTitle(markItUp, char) {
        heading = '';
        n = $.trim(markItUp.selection||markItUp.placeHolder).length;
        for(i = 0; i < n; i++) {
            heading += char;
        }
        return '\n'+heading+'\n';
    }
    

    var editorSettings = {
        nameSpace: 'markdown',
        onShiftEnter: {keepDefault:false, openWith:'\n\n'},
        markupSet:  [   
            {
                name:'First Level Heading',
                className : 'h1',
                placeHolder:'Your title here...',
                closeWith:function(markItUp) { return markdownTitle(markItUp, '=') }
            },
            {
                name:'Second Level Heading',
                className : 'h2',
                placeHolder:'Your title here...',
                closeWith:function(markItUp) { return markdownTitle(markItUp, '-') }
            },
            {name:'Heading 3', className:"h3", openWith:'### ', placeHolder:'Your title here...' },
            {name:'Heading 4', className:"h4", openWith:'#### ', placeHolder:'Your title here...' },
            {name:'Heading 5', className:"h5", openWith:'##### ', placeHolder:'Your title here...' },
            {name:'Heading 6', className:"h6", openWith:'###### ', placeHolder:'Your title here...' },
            {separator:'---------------' },
            {name:'Bold',   className:"bold", openWith:'**', closeWith:'**'},
            {name:'Italic', className:"emph", openWith:'_',  closeWith:'_'},
            {separator:'---------------' },
		    {name:'Bulleted List', className : 'ul', openWith:'- ' },
    		{
                name:'Numeric List', 
                className : 'ol',
                openWith:function(markItUp) { console.debug(markItUp); return markItUp.line+'. '; }
            },
    		{separator:'---------------' },
	    	{
                name:'Picture', className : 'image',
                replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'
            },
		    {
                name:'Link', className:'link',
                openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")',
                placeHolder:'Your text to link here...'
            },
    		{separator:'---------------'},	
	    	{name:'Quotes', className : 'quote', openWith:'> '},
		    {
                name:'Code Block / Code',
                className:'code',
                openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)'
            },
//    		{separator:'---------------'},
//    		{name:'Preview', call:'preview', className:"preview"}
        ]
    }

    $('.htmleditor textarea').markItUp(editorSettings);
});
