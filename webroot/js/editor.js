$(function() {

    var editorSettings = {
        nameSpace: 'markdown',
        onShiftEnter: {keepDefault:false, openWith:'\n\n'},
        markupSet:  [   
            {name:'Bold', key:"B", openWith:'**', closeWith:'**'},
            {name:'Italic', key:"I", openWith:'_', closeWith:'_'},
            {separator:'---------------' },
//            {name:'Preview', className:'preview',  call:previewIt}
        ]
    }

    $('.htmleditor textarea').markItUp(editorSettings);
});
