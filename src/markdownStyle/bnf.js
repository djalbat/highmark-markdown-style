"use strict";

const bnf = `

    style          ::=  ( ruleSet | declaration | nonsense | error )+ ;

    
    ruleSet..      ::=  selectorsList "{" ( ruleSet | declaration | nonsense )* "}" ;
    
    
    declaration    ::=  name ":" values ";" ;

    
    nonsense.      ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] ;


    error.         ::=  . ;


    selectorsList  ::=  selectors ( "," selectors )* ;


    selectors      ::=  selector+ ;


    selector       ::=  [rule-name] class* pseudoClass* 
    
                     |  class+ pseudoClass*

                     |  pseudoClass+

                     ;

    
    values         ::=  value+ ;

    
    class          ::=  <NO_WHITESPACE>"."<NO_WHITESPACE>identifier ;

    
    pseudoClass    ::=  <NO_WHITESPACE>":"<NO_WHITESPACE>identifier ;
    
    
    name.          ::=  identifier ;

    
    value.         ::=  identifier ( <NO_WHITESPACE>"(" arguments ")" )?
    
                     |  [number]<NO_WHITESPACE>[unit]
    
                     |  [string-literal] 
                              
                     |  [number]
                              
                     |  [colour]
                              
                     ;
                     

    arguments      ::=  argument ( "," argument )* ;
    

    argument       ::=  identifier
    
                     |  [number]<NO_WHITESPACE>[unit]
    
                     |  [string-literal] 
                              
                     |  [number]
                              
                     |  [colour]
                     
                     ;


    identifier     ::=  ( [rule-name] | [name] ) ( <NO_WHITESPACE>"-"<NO_WHITESPACE>( [rule-name] | [name] ) )* ;

    
`;

export default bnf;
