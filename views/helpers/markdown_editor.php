<?php
App::import('Vendor', 'Markdown.Markdownify');
class MarkdownEditorHelper extends AppHelper {
	
	public $helpers = array('Html', 'Javascript');

    public function enable() {
        $this->Javascript->link('/markdown/js/markitup/jquery.markitup', false);
        $this->Html->css('/markdown/js/markitup/sets/default/style', null, array('inline' => false)); 
        $this->Html->css('/markdown/js/markitup/skins/simple/style', null, array('inline' => false));
        $this->Javascript->link('/markdown/js/editor', false);
        
    }

    public function transformContent($html) {
        $md = new Markdownify(false, false, false);
        $html =  $md->parseString($html);
        return $html;
    }
}
