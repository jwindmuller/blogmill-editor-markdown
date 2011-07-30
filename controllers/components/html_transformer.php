<?php
class HtmlTransformerComponent extends Object {
    
    public function transform($text) {
        App::import('Vendor', 'Markdown.Markdown');
        return Markdown($text);
    }
}	
