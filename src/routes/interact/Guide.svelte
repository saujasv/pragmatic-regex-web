<div>
    Let <tt>A</tt> and <tt>B</tt> be regular expressions. For examples, we will let <tt>A</tt> be <tt>(abc)</tt> and <tt>B</tt> be <tt>(xyz)</tt>. We can construct more complex regular expressions from <tt>A</tt> and <tt>B</tt> by composing the expressions together with operations. The atomic units of regular expressions are characters and character classes. We consider a string to be consistent with a regular expression only if the <em>entire</em> string matches or does not match the regular expression. Partial matches are not considered.
    
    <h3>Operations</h3>
    <ul>
        <li><tt>AB</tt>: An occurrence of <tt>A</tt> followed by an occurrence of <tt>B</tt></li>
        <ul>
            <li><tt>abcxyz</tt> is consistent with <tt>AB</tt>, but <tt>abc</tt>, <tt>xyz</tt>, and <tt>pabcxyzq</tt> are not consistent</li>
            <li>In the example, <tt>AB</tt> is written as <tt>(abc)(xyz)</tt> but where there is no ambiguity, the parentheses may be eliminated and the expression written simply as <tt>abcxyz</tt></li>
        </ul>
        <li><tt>A*</tt>: 0 or more occurrences of <tt>A</tt></li>
        <ul>
            <li><tt>abc</tt> and <tt>abcabc</tt> and the empty string are consistent with <tt>A*</tt>, but <tt>abcab</tt> and <tt>babca</tt> are not consistent</li>
        </ul>
        <li><tt>A+</tt>: 1 or more occurrences of <tt>A</tt></li>
        <ul>
            <li><tt>abc</tt> and <tt>abcabcabc</tt> are consistent with <tt>A+</tt>, but <tt>abcab</tt> and <tt>ababc</tt> are not consistent</li>
        </ul>
        <li><tt>A?</tt>: 0 or 1 occurrences of <tt>A</tt></li>
        <ul>
            <li><tt>abc</tt> and the empty string are consistent with <tt>A?</tt>, but <tt>cbabc</tt> and <tt>abcabcabc</tt> are not consistent</li>
        </ul>
        <li><tt>A&lbrace;n,&rbrace</tt>: n or more occurrences of <tt>A</tt></li>
        <ul>
            <li>If <tt>n</tt> is <tt>2</tt>, <tt>abcabc</tt> and <tt>abcabcabc</tt> are consistent with <tt>A&lbrace;2,&rbrace</tt>, but <tt>abc</tt> and <tt>abcabcab</tt> are not</li>
        </ul>
        <li><tt>A&lbrace;n,m&rbrace</tt>: between <tt>n</tt> and <tt>m</tt> occurrences of <tt>A</tt></li>
        <ul>
            <li>If <tt>n</tt> is <tt>1</tt> and <tt>m</tt> is <tt>3</tt>, <tt>abcabc</tt> and <tt>abcabcabc</tt> are consistent with <tt>A&lbrace;1,3&rbrace</tt>, but <tt>ab</tt> and <tt>abcabcabcabc</tt> are not</li>
        </ul>
    </ul>
    
    <h3>Character classes</h3>
    Character classes are sets of characters that are grouped with the union operator <tt>[]</tt>, written with no separators. Each character may be thought of a singleton set, and the square brackets may not be written for readability. While any characters may be grouped in a union, some groups have special notation for convenience.
    <ul>
        <li><tt>[A-Z]</tt>: The set of all uppercase letters</li>
        <li><tt>[a-z]</tt>: The set of all lowercase letters</li>
        <li><tt>[0-9]</tt>: The set of digits</li>
        <li>These groups may also be combined by writing them one after the other, for example <tt>[a-z0-9]</tt> (which denotes the union of all lowercase letters and digits) or <tt>[A-Za-z]</tt> (which denotes the union of all upper- and lowercase letters)</li>
    </ul>

    <h3>Escape characters</h3>
    Sometimes, we want to our regular expressions to include characters used to represent operators or other symbols that have significance in the syntax for regexes. In this case, we use the <tt>\</tt> symbol to "escape" the following character – treat it as a character and not as an operator. For example, the string <tt>[A-Z]</tt> is consistent with the regular expression <tt>\[A\-Z\]</tt> but not consistent with <tt>[A-Z]</tt>.
</div>