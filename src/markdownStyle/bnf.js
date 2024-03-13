"use strict";

const bnf = `

    document                ::=  ( declaration | ruleSet | error )+ ;

    
    ruleSet                 ::=  selectors "{" ( declaration | ruleSet )+ "}" ;


    selectors               ::=  selector ( "," selector )* ;


    declaration             ::=  [name] ":" values ";" ;

    
    selector                ::=  [name] class* pseudoClass* pseudoElement? 
    
                              |  class+ pseudoClass* pseudoElement?

                              |  pseudoClass+ pseudoElement?

                              |  pseudoElement

                              ;

    
    values                  ::=  value+ ;

    
    class                   ::=  <NO_WHITESPACE>"."<NO_WHITESPACE>[name] ;

    
    pseudoClass             ::=  <NO_WHITESPACE>":"<NO_WHITESPACE>[name] ;

    
    pseudoElement           ::=  <NO_WHITESPACE>"::"<NO_WHITESPACE>[name] ;


    value                   ::=  [number]<NO_WHITESPACE>[unit]
    
                              |  [string-literal] 
                              
                              |  [number]
                              
                              |  [colour]
                              
                              |  [name] 
                              
                              ;


    error!                  ::=  . ;

`;

export default bnf;
