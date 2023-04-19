# Coding Guidelines

- No Hungarian naming conventions except UI Elements
    1. Do not add prefix like `bstr`, `s_etc`
- Pascal casing for all identifiers except parameters
    1. Method name,properties, event, class name, public member variables
- Camel Casing for following items
    1. Private Member variables
    2. Local variables
    3. Parameters
- Suffix/prefix are used for following cases
    1. Interface with prefix I (such as `IMyInterface`)
    2. Enum with suffix Enum (such as `WeekdaysEnum`)
    3. Attribute with suffix Attribute (such as `ObsoleteAttribute`)
- Class name should be noun
- Parameter names should describe their meaning, not type. For example
    1. `Format(string format, object args)`
    2. `Format(string str1)` is a bad parameter name
- Method name should start with a verb
-  `{`  should start a new line
- Always use  `{ }`  in `if`, `while` and `do` statement, even for one statement
- If a method has more than 25 lines, consider refactoring your code.
- Style Guide is guideline, please follow that as much as possible, and we do have exceptions in certain cases, so use the style guide smartly.