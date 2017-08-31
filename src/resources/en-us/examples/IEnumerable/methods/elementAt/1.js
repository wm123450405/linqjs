let names = [ "Hartono, Tommy", "Adams, Terry", "Andersen, Henriette Thaulow", "Hedlund, Magnus", "Ito, Shu" ];

let name = names.asEnumerable().elementAt(4);

console.log(`The name is '${ name }'.`);

/*
 This code produces the following output:

 The name is 'Ito, Shu'.
 */