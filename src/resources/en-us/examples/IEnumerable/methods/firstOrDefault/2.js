let names = [ "Hartono, Tommy", "Adams, Terry",
    "Andersen, Henriette Thaulow",
    "Hedlund, Magnus", "Ito, Shu" ];

let firstLongName = names.asEnumerable().firstOrDefault("", name => name.length > 20);

console.log(`The first long name is ${ firstLongName }.`);

let firstVeryLongName = names.asEnumerable().firstOrDefault("", name => name.length > 30);

console.log(`There is ${ firstVeryLongName === "" ? "not a" : "a" } name longer than 30 characters.`);

/*
 This code produces the following output:

 The first long name is 'Andersen, Henriette Thaulow'.
 There is not a name longer than 30 characters.
 */