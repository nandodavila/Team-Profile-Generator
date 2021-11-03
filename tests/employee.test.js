const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a email, phone number, employee ID and role", () => {
      const obj = new Employee('Jared', '3', 'test@email.com', 'Manager');

      expect(obj.name).toEqual('Jared');
      expect(obj.id).toEqual('3');
      expect(obj.email).toEqual('test@email.com');
      expect(obj.role).toEqual('Manager');
    });
  })
});