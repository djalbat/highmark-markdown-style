"use strict";

const bnf = `

    document                ::=  ( declaration | ruleSet | error )+ ;

    
    ruleSet                 ::=  selectors "{" ( declaration | ruleSet )+ "}" ;


    selectors               ::=  selector ( "," selector )* ;


    declaration             ::=  [name] ":" values ";" ;

    
    selector                ::=  [name] class* pseudoClass* 
    
                              |  class+ pseudoClass*

                              |  pseudoClass+

                              ;

    
    values                  ::=  value+ ;

    
    class                   ::=  <NO_WHITESPACE>"."<NO_WHITESPACE>[name] ;

    
    pseudoClass             ::=  <NO_WHITESPACE>":"<NO_WHITESPACE>[name] ;

    
    value                   ::=  [name]<NO_WHITESPACE>"(" value ")"
    
                              |  [number]<NO_WHITESPACE>[unit]
    
                              |  [string-literal] 
                              
                              |  [number]
                              
                              |  [colour]
                              
                              |  [name] 
                              
                              ;


    error!                  ::=  . ;

`;

export default bnf;
