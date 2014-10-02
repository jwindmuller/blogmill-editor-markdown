<?php
use Markdownify as MD;
class MarkdownEditorHelper extends AppHelper {
	
	public $helpers = array('Html', 'Javascript');

    public function enable() {
        $this->Javascript->link('/markdown/js/markitup/jquery.markitup', false);
        $this->Html->css('/markdown/js/markitup/sets/default/style', null, array('inline' => false)); 
        $this->Html->css('/markdown/js/markitup/skins/simple/style', null, array('inline' => false));
        $this->Javascript->link('/markdown/js/editor', false);
        
    }

    public function transformContent($html) {
        App::import('Vendor', 'Markdown.Markdownify', array('file' => 'ConverterExtra.inc.php'));
        $md = new MD\ConverterExtra();
        $html = $md->parseString($html);
        return $html;
    }
}
