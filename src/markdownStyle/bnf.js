"use strict";

const bnf = `

    document                ::=  ( declarations | ruleSet | error )+ ;

    
    declarations            ::=  declaration+ ;


    ruleSet                 ::=  selectors declarationBlock ;


    selectors               ::=  selector ( "," selector )* ;


    declarationBlock        ::=  "{" declarations "}" ;


    declaration             ::=  [name] ":" values ";" ;

    
    selector                ::=  [name] ( <NO_WHITESPACE>pseudoClass )? ;

    
    values                  ::=  value+ ;

    
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
