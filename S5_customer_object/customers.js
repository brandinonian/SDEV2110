let contactMethod = "letter";

const customer = {
    custID: "486257",
    name: "John Doe",
    address: "2552 Example Ln, Atlanta, GA 30033",
    phone: "222-386-8264",
    email: "johndoe@example.com",

    info: function() {
        return `Customer info for customer ID ${this.custID}, ${this.name}`;
    },
    phoneCall: function() {
        return `Call the customer at ${this.phone}`;
    },
    sendText: function() {
        return `Text the customer at ${this.phone}`;
    },
    sendEmail: function() {
        return `Send email to the customer at ${this.email}`;
    },
    sendLetter: function() {
        return `Send a letter to the customer at ${this.address}`;
    },
    
};

function contactCustomer() {
    console.log(customer.info());

    if(contactMethod === "call"){
        console.log(customer.phoneCall());
    } else if(contactMethod === "text"){
        console.log(customer.sendText());
    } else if(contactMethod === "email"){
        console.log(customer.sendEmail());
    } else if(contactMethod === "letter"){
        console.log(customer.sendLetter());
    } else {
        console.log("Error");
    }
}

contactCustomer(customer);
