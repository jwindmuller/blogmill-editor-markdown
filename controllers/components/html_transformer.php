<?php
use \Michelf\MarkdownExtra;

class HtmlTransformerComponent extends Object {
    
    public function transform($text) {
        App::import('Vendor', 'Markdown.MarkdownExtra', array('file' => 'MarkdownExtra.inc.php'));
        $html = MarkdownExtra::defaultTransform($text);
        return $html;
    }
}