"use strict";

const bnf = `

    document                ::=  ( ruleSet | declaration | error )+ ;

    
    ruleSet!                ::=  selectors "{" ( ruleSet | declaration | nonsense )* "}" ;
    
    
    declaration             ::=  [name] ":" values ";" ;

    
    nonsense                ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] ;


    error!                  ::=  . ;


    selectors               ::=  selector ( "," selector )* ;


    selector                ::=  [rule-name] class* pseudoClass* 
    
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

`;

export default bnf;
