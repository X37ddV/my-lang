import * as chevrotain from "chevrotain";

const createToken = chevrotain.createToken;
const CstParser = chevrotain.CstParser;
const Lexer = chevrotain.Lexer;

// Tokens
const If = createToken({ name: "If", pattern: /IF/ });
const Then = createToken({ name: "Then", pattern: /THEN/ });
const Else = createToken({ name: "Else", pattern: /ELSE/ });
const Begin = createToken({ name: "Begin", pattern: /BEGIN/ });
const Een = createToken({ name: "End", pattern: /END/ });
const Identifier = createToken({ name: "Identifier", pattern: /[A-Z]\w*/ });
const Assign = createToken({ name: "Assign", pattern: /:=/ });
const Semicolon = createToken({ name: "Semicolon", pattern: /;/ });
const LSquare = createToken({ name: "LSquare", pattern: /\[/ });
const RSquare = createToken({ name: "RSquare", pattern: /]/ });
const Comma = createToken({ name: "Comma", pattern: /,/ });
const Colon = createToken({ name: "Colon", pattern: /:/ });

const StringLiteral = createToken({
    name: "StringLiteral",
    pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
});

const NumberLiteral = createToken({
    name: "NumberLiteral",
    pattern: /-?(0|[1-9]\d*)(\.\d+)?/,
});

const allTokens = [
    If,
    Then,
    Else,
    Begin,
    Een,
    Identifier,
    Assign,
    NumberLiteral,
    StringLiteral,
    Semicolon,
    LSquare,
    RSquare,
    Comma,
    Colon,
];
const myLexer = new Lexer(allTokens);

class MyParser extends CstParser {
    constructor() {
        super(allTokens);

        this.RULE("expression", () => {
            // 定义你的表达式规则
        });
    }
}
const myParser = new MyParser();
