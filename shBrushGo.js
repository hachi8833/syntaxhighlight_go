SyntaxHighlighter.brushes.Go = function()
{
	
	var datatypes =	'uint8  uint16 uint32 uint64 ' +
					'int8 int16 int32 int64 ' +
					'float32 float64  byte ' +
					'uint int float uintptr string';

	var keywords =	'break default func interface select ' +
					'case defer go map struct ' +
					'chan else goto package switch ' +
					'const fallthrough if range type ' +
					'continue for import return var iferr err';
					
	var functions =	'close closed len  cap  new make copy '+
					'print println panic panicln';

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
		{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
		{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' }
		];
};

SyntaxHighlighter.brushes.Go.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Go.aliases	= ['go'];
