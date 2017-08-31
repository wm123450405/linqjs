let names = [ "Hartono, Tommy", "Adams, Terry", "Andersen, Henriette Thaulow", "Hedlund, Magnus", "Ito, Shu" ];

let index = 20;

let name = names.asEnumerable().elementAtOrDefault("[no name at this index]", index);

console.log(`The name chosen at index ${ index } is '${ name }'.`);

/*
 This code produces the following output:

 The name chosen at index 20 is '[no name at this index]'.
 */