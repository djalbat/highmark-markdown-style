"use strict";

const bnf = `

    document                ::=  ( declaration | ruleSet | error )+ ;

    
    ruleSet                 ::=  selectors "{" ( declaration | ruleSet )+ "}" ;


    selectors               ::=  selector ( "," selector )* ;


    declaration             ::=  [name] ":" values ";" ;

    
    selector                ::=  [name] ( <NO_WHITESPACE>class )* ( <NO_WHITESPACE>pseudoClass )? 
    
                              |  pseudoClass
                              
                              ;

    
    values                  ::=  value+ ;

    
    class                   ::=  "."<NO_WHITESPACE>[name] ;

    
    pseudoClass             ::=  ":"<NO_WHITESPACE>[name] ;

    
    value                   ::=  [number]<NO_WHITESPACE>[unit]
    
                              |  [string-literal] 
                              
                              |  [number]
                              
                              |  [colour]
                              
                              |  [name] 
                              
                              ;


    error!                  ::=  . ;

`;

export default bnf;
