// object with explicit data properties
const jackData = { firstName: 'Jack', surname: 'Black' } // 2 data properties - firstName, surname
// same object with accessor (getter/setter) properties. uses internal values with underscores.
const jackAccessor = {
    get firstName() { // getter for firstName (no parameters) - defaults to Jack unless overridden
        return this._firstName || 'Jack'
    },
    get surname() { // getter for surname (no parameters) - defaults to Black unless overridden
        return this._surname || 'Black'
    },
    set firstName(newFirstName) { // setter for firstName (one parameter) - updates to new value
        this._firstName = newFirstName
    },
    set surname(newSurname) { // setter for surname (one parameter) - updates to new value
        this._surname = newSurname
    }
}
// can update (and access) data properties and accessor properties in the same way
jackData.firstName = 'Thomas' // updates firstName data property directly
jackAccessor.firstName = 'Jacob' // uses firstName setter to set new value - use console.log to check
console.log(jackAccessor.firstName);